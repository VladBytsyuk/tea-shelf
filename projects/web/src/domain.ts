import Dexie, { type Table } from "dexie";

export const SCHEMA_VERSION = 1;

export type LifecycleStatus = "active" | "archived";
export type TimerState = "setup" | "running" | "paused" | "steep-complete" | "completed" | "canceled" | "save-failed";

export interface Tea {
  id: string;
  name: string;
  type: string;
  brand: string;
  region: string;
  year: string;
  originalWeight: number;
  remainingQuantity: number;
  notes: string;
  favorite: boolean;
  lifecycleStatus: LifecycleStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Teaware {
  id: string;
  name: string;
  category: string;
  material: string;
  volume: number;
  purpose: string;
  supportedMethods: string[];
  notes: string;
  lifecycleStatus: LifecycleStatus;
  createdAt: string;
  updatedAt: string;
}

export interface BrewStep {
  id: string;
  stepNumber: number;
  durationSeconds: number;
  temperatureCelsius: number | null;
  instruction: string;
}

export interface BrewSession {
  id: string;
  label: string;
  custom: boolean;
  teaId: string | null;
  teawareId: string | null;
  startedAt: string;
  completedAt: string;
  steepsCompleted: number;
  notes: string;
  lifecycleStatus: LifecycleStatus;
  teaSnapshot: Tea | null;
  teawareSnapshot: Teaware | null;
  sequenceSnapshot: BrewStep[];
}

export interface TeaFilters {
  type: string;
  favoriteOnly: boolean;
  availability: "" | "available" | "unavailable";
  showArchived: boolean;
}

export interface TeawareFilters {
  category: string;
  material: string;
  method: string;
  showArchived: boolean;
}

export interface AppData {
  teas: Tea[];
  teaware: Teaware[];
  sessions: BrewSession[];
}

export interface BackupPayload extends AppData {
  schemaVersion: number;
  exportedAt: string;
}

export interface Repository {
  load(): Promise<AppData>;
  replace(data: AppData): Promise<void>;
}

export interface AppServices {
  backup: ReturnType<typeof createBackupService>;
  history: ReturnType<typeof createHistoryService>;
  repository: Repository;
  tea: ReturnType<typeof createTeaService>;
  teaware: ReturnType<typeof createTeawareService>;
  timer: ReturnType<typeof createTimerService>;
}

const emptyData = (): AppData => ({ teas: [], teaware: [], sessions: [] });

function now() {
  return new Date().toISOString();
}

function createId(prefix: string) {
  const randomId = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `${prefix}-${randomId}`;
}

function normalizeText(value: string) {
  return value.trim();
}

export function isTeaAvailable(tea: Tea) {
  return tea.remainingQuantity > 0;
}

export function validateTea(input: Partial<Tea>) {
  const errors: Record<string, string> = {};
  if (!normalizeText(input.name ?? "")) errors.name = "Tea name is required.";
  if (!normalizeText(input.type ?? "")) errors.type = "Tea type is required.";
  if (!Number.isFinite(input.originalWeight) || Number(input.originalWeight) < 0) errors.originalWeight = "Original weight cannot be negative.";
  if (!Number.isFinite(input.remainingQuantity) || Number(input.remainingQuantity) < 0) errors.remainingQuantity = "Remaining quantity cannot be negative.";
  return errors;
}

export function validateTeaware(input: Partial<Teaware>) {
  const errors: Record<string, string> = {};
  if (!normalizeText(input.name ?? "")) errors.name = "Teaware name is required.";
  if (!normalizeText(input.category ?? "")) errors.category = "Category is required.";
  if (!normalizeText(input.material ?? "")) errors.material = "Material is required.";
  if (!Number.isFinite(input.volume) || Number(input.volume) <= 0) errors.volume = "Volume must be greater than zero.";
  return errors;
}

export function validateSequence(steps: BrewStep[]) {
  if (steps.length === 0) return "Add at least one steep.";
  if (steps.some((step) => !Number.isFinite(step.durationSeconds) || step.durationSeconds <= 0)) return "Each steep needs a positive duration.";
  return "";
}

export function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainingSeconds = Math.max(0, seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

export function createDefaultSequence(): BrewStep[] {
  return [
    { id: createId("step"), stepNumber: 1, durationSeconds: 20, temperatureCelsius: 95, instruction: "Rinse and first steep." },
    { id: createId("step"), stepNumber: 2, durationSeconds: 25, temperatureCelsius: 95, instruction: "Second steep." },
    { id: createId("step"), stepNumber: 3, durationSeconds: 30, temperatureCelsius: 95, instruction: "Third steep." }
  ];
}

class TeaShelfDatabase extends Dexie {
  sessions!: Table<BrewSession, string>;
  teas!: Table<Tea, string>;
  teaware!: Table<Teaware, string>;

  constructor() {
    super("tea-shelf-mvp");
    this.version(SCHEMA_VERSION).stores({
      sessions: "id, lifecycleStatus, completedAt, teaId, teawareId",
      teas: "id, lifecycleStatus, type, favorite, remainingQuantity",
      teaware: "id, lifecycleStatus, category, material"
    });
  }
}

class DexieRepository implements Repository {
  private readonly db = new TeaShelfDatabase();

  async load(): Promise<AppData> {
    const [teas, teaware, sessions] = await Promise.all([
      this.db.teas.toArray(),
      this.db.teaware.toArray(),
      this.db.sessions.toArray()
    ]);
    return { sessions, teas, teaware };
  }

  async replace(data: AppData) {
    await this.db.transaction("rw", this.db.teas, this.db.teaware, this.db.sessions, async () => {
      await Promise.all([this.db.teas.clear(), this.db.teaware.clear(), this.db.sessions.clear()]);
      await Promise.all([
        this.db.teas.bulkPut(data.teas),
        this.db.teaware.bulkPut(data.teaware),
        this.db.sessions.bulkPut(data.sessions)
      ]);
    });
  }
}

class LocalStorageRepository implements Repository {
  constructor(private readonly key = "tea-shelf-mvp-data") {}

  async load(): Promise<AppData> {
    const stored = globalThis.localStorage?.getItem(this.key);
    if (!stored) return emptyData();
    const parsed = JSON.parse(stored) as AppData;
    return {
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
      teas: Array.isArray(parsed.teas) ? parsed.teas : [],
      teaware: Array.isArray(parsed.teaware) ? parsed.teaware : []
    };
  }

  async replace(data: AppData) {
    globalThis.localStorage?.setItem(this.key, JSON.stringify(data));
  }
}

export function createRepository(): Repository {
  if (!("indexedDB" in globalThis)) return new LocalStorageRepository();
  return new DexieRepository();
}

export function createTeaService() {
  return {
    archive(data: AppData, id: string) {
      return this.update(data, id, { lifecycleStatus: "archived" });
    },
    create(data: AppData, input: Partial<Tea>) {
      const errors = validateTea(input);
      if (Object.keys(errors).length > 0) return { data, errors };
      const timestamp = now();
      const tea: Tea = {
        brand: normalizeText(input.brand ?? ""),
        createdAt: timestamp,
        favorite: Boolean(input.favorite),
        id: createId("tea"),
        lifecycleStatus: "active",
        name: normalizeText(input.name ?? ""),
        notes: normalizeText(input.notes ?? ""),
        originalWeight: Number(input.originalWeight),
        region: normalizeText(input.region ?? ""),
        remainingQuantity: Number(input.remainingQuantity),
        type: normalizeText(input.type ?? ""),
        updatedAt: timestamp,
        year: normalizeText(input.year ?? "")
      };
      return { data: { ...data, teas: [tea, ...data.teas] }, errors: {} };
    },
    filter(teas: Tea[], filters: TeaFilters) {
      return teas.filter((tea) => {
        if (filters.showArchived !== (tea.lifecycleStatus === "archived")) return false;
        if (filters.type && tea.type !== filters.type) return false;
        if (filters.favoriteOnly && !tea.favorite) return false;
        if (filters.availability === "available" && !isTeaAvailable(tea)) return false;
        if (filters.availability === "unavailable" && isTeaAvailable(tea)) return false;
        return true;
      });
    },
    restore(data: AppData, id: string) {
      return this.update(data, id, { lifecycleStatus: "active" });
    },
    update(data: AppData, id: string, input: Partial<Tea>) {
      const existing = data.teas.find((tea) => tea.id === id);
      if (!existing) return { data, errors: { record: "Tea was not found." } };
      const next = { ...existing, ...input, updatedAt: now() };
      const errors = validateTea(next);
      if (Object.keys(errors).length > 0) return { data, errors };
      return { data: { ...data, teas: data.teas.map((tea) => (tea.id === id ? next : tea)) }, errors: {} };
    }
  };
}

export function createTeawareService() {
  return {
    archive(data: AppData, id: string) {
      return this.update(data, id, { lifecycleStatus: "archived" });
    },
    create(data: AppData, input: Partial<Teaware>) {
      const errors = validateTeaware(input);
      if (Object.keys(errors).length > 0) return { data, errors };
      const timestamp = now();
      const item: Teaware = {
        category: normalizeText(input.category ?? ""),
        createdAt: timestamp,
        id: createId("teaware"),
        lifecycleStatus: "active",
        material: normalizeText(input.material ?? ""),
        name: normalizeText(input.name ?? ""),
        notes: normalizeText(input.notes ?? ""),
        purpose: normalizeText(input.purpose ?? ""),
        supportedMethods: input.supportedMethods ?? [],
        updatedAt: timestamp,
        volume: Number(input.volume)
      };
      return { data: { ...data, teaware: [item, ...data.teaware] }, errors: {} };
    },
    filter(teaware: Teaware[], filters: TeawareFilters) {
      return teaware.filter((item) => {
        if (filters.showArchived !== (item.lifecycleStatus === "archived")) return false;
        if (filters.category && item.category !== filters.category) return false;
        if (filters.material && item.material !== filters.material) return false;
        if (filters.method && !item.supportedMethods.includes(filters.method)) return false;
        return true;
      });
    },
    restore(data: AppData, id: string) {
      return this.update(data, id, { lifecycleStatus: "active" });
    },
    update(data: AppData, id: string, input: Partial<Teaware>) {
      const existing = data.teaware.find((item) => item.id === id);
      if (!existing) return { data, errors: { record: "Teaware was not found." } };
      const next = { ...existing, ...input, updatedAt: now() };
      const errors = validateTeaware(next);
      if (Object.keys(errors).length > 0) return { data, errors };
      return { data: { ...data, teaware: data.teaware.map((item) => (item.id === id ? next : item)) }, errors: {} };
    }
  };
}

export function createHistoryService() {
  return {
    archive(data: AppData, id: string) {
      return this.update(data, id, "archived");
    },
    list(sessions: BrewSession[], showArchived = false) {
      return sessions
        .filter((session) => showArchived === (session.lifecycleStatus === "archived"))
        .sort((left, right) => right.completedAt.localeCompare(left.completedAt));
    },
    restore(data: AppData, id: string) {
      return this.update(data, id, "active");
    },
    update(data: AppData, id: string, lifecycleStatus: LifecycleStatus) {
      return {
        ...data,
        sessions: data.sessions.map((session) => (session.id === id ? { ...session, lifecycleStatus } : session))
      };
    }
  };
}

export function createTimerService() {
  return {
    saveSession(
      data: AppData,
      input: { notes: string; sequence: BrewStep[]; startedAt: string; teaId: string | null; teawareId: string | null }
    ) {
      const sequenceError = validateSequence(input.sequence);
      if (sequenceError) return { data, error: sequenceError };
      const tea = input.teaId ? data.teas.find((candidate) => candidate.id === input.teaId) ?? null : null;
      const teaware = input.teawareId ? data.teaware.find((candidate) => candidate.id === input.teawareId) ?? null : null;
      const completedAt = now();
      const session: BrewSession = {
        completedAt,
        custom: !tea,
        id: createId("session"),
        label: tea ? tea.name : "Custom session",
        lifecycleStatus: "active",
        notes: normalizeText(input.notes),
        sequenceSnapshot: input.sequence.map((step, index) => ({ ...step, stepNumber: index + 1 })),
        startedAt: input.startedAt,
        steepsCompleted: input.sequence.length,
        teaId: tea?.id ?? null,
        teaSnapshot: tea ? { ...tea } : null,
        teawareId: teaware?.id ?? null,
        teawareSnapshot: teaware ? { ...teaware } : null
      };
      return { data: { ...data, sessions: [session, ...data.sessions] }, error: "" };
    }
  };
}

export function createBackupService() {
  function validateBackupPayload(value: unknown): { data?: AppData; error?: string } {
    if (!value || typeof value !== "object") return { error: "Import file is not valid JSON data." };
    const payload = value as Partial<BackupPayload>;
    if (payload.schemaVersion !== SCHEMA_VERSION) return { error: "Import schema version is not compatible." };
    if (!Array.isArray(payload.teas) || !Array.isArray(payload.teaware) || !Array.isArray(payload.sessions)) {
      return { error: "Import must include teas, teaware, and sessions." };
    }
    for (const tea of payload.teas) {
      const errors = validateTea(tea);
      if (Object.keys(errors).length > 0) return { error: "Import includes an invalid tea record." };
    }
    for (const item of payload.teaware) {
      const errors = validateTeaware(item);
      if (Object.keys(errors).length > 0) return { error: "Import includes an invalid teaware record." };
    }
    for (const session of payload.sessions) {
      if (!session.id || !Array.isArray(session.sequenceSnapshot)) return { error: "Import includes an invalid session record." };
      const error = validateSequence(session.sequenceSnapshot);
      if (error) return { error: "Import includes an invalid session sequence." };
    }
    return { data: { sessions: payload.sessions, teas: payload.teas, teaware: payload.teaware } };
  }

  return {
    export(data: AppData): BackupPayload {
      return { ...data, exportedAt: now(), schemaVersion: SCHEMA_VERSION };
    },
    validateImport(json: string) {
      try {
        return validateBackupPayload(JSON.parse(json));
      } catch {
        return { error: "Import file is malformed JSON." };
      }
    }
  };
}

export function createServices(repository = createRepository()): AppServices {
  return {
    backup: createBackupService(),
    history: createHistoryService(),
    repository,
    tea: createTeaService(),
    teaware: createTeawareService(),
    timer: createTimerService()
  };
}
