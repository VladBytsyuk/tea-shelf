import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from "react";
import {
  Button,
  CheckboxToggle,
  ConfirmationDialog,
  EmptyState,
  FavoriteControl,
  FilteredEmptyState,
  ImportReplacementConfirmation,
  InlineAlert,
  MethodSelector,
  MetadataGroup,
  NumberInputWithUnit,
  PrimaryNavigation,
  SaveFailedState,
  Select,
  SequenceEditor,
  SessionDetailSnapshot,
  SessionHistoryRow,
  StockIndicator,
  TeaListRowCard,
  Textarea,
  TextInput,
  TimerControls,
  TimerDisplay
} from "design-system-impl";
import {
  type AppData,
  type AppServices,
  type BrewSession,
  type BrewStep,
  type Tea,
  type TeaFilters,
  type Teaware,
  type TeawareFilters,
  type TimerState,
  createDefaultSequence,
  createServices,
  formatDuration,
  isTeaAvailable,
  validateSequence
} from "./domain";
import "./App.css";

type View = "tea" | "teaware" | "timer" | "history" | "backup";
type Errors = Record<string, string>;
type TimerDraft = { sequence?: BrewStep[]; teaId?: string | null; teawareId?: string | null };

const teaTypes = ["White", "Green", "Yellow", "Oolong", "Black", "Pu-erh", "Herbal", "Other"];
const teawareCategories = ["Gaiwan", "Teapot", "Cup", "Yixing clay", "Pitcher", "Other"];
const materials = ["Porcelain", "Clay", "Yixing clay", "Glass", "Stoneware", "Metal", "Other"];
const methods = ["Gongfu", "Western", "Grandpa", "Bowl tea", "Cold brew"];

const emptyData: AppData = { sessions: [], teas: [], teaware: [] };
const emptyTeaForm = {
  brand: "",
  favorite: false,
  name: "",
  notes: "",
  originalWeight: 0,
  region: "",
  remainingQuantity: 0,
  type: "Oolong",
  year: ""
};
const emptyTeawareForm = {
  category: "Gaiwan",
  material: "Porcelain",
  name: "",
  notes: "",
  purpose: "",
  supportedMethods: ["Gongfu"],
  volume: 100
};
const defaultServices = createServices();

const selectOptions = (values: string[], includeAny = false) => [
  ...(includeAny ? [{ label: "Any", value: "" }] : []),
  ...values.map((value) => ({ label: value, value }))
];

function useAppServices(services: AppServices) {
  const [data, setData] = useState<AppData>(emptyData);
  const [loaded, setLoaded] = useState(false);
  const [storageError, setStorageError] = useState("");
  const skipNextSave = useRef(true);

  useEffect(() => {
    let alive = true;
    services.repository
      .load()
      .then((loadedData) => {
        if (!alive) return;
        setData(loadedData);
        setLoaded(true);
      })
      .catch(() => {
        if (!alive) return;
        setStorageError("Local storage could not be opened. You can still review the app, but changes may not persist.");
        setLoaded(true);
      });
    return () => {
      alive = false;
    };
  }, [services]);

  useEffect(() => {
    if (!loaded) return;
    if (skipNextSave.current) {
      skipNextSave.current = false;
      return;
    }
    services.repository.replace(data).catch(() => {
      setStorageError("Saving failed. Your current values remain on screen; try again before closing the browser.");
    });
  }, [data, loaded, services]);

  return { data, loaded, setData, storageError, setStorageError };
}

export function App({ services = defaultServices }: { services?: AppServices }) {
  const [view, setView] = useState<View>("tea");
  const { data, loaded, setData, storageError, setStorageError } = useAppServices(services);
  const [stockPromptTeaId, setStockPromptTeaId] = useState<string | null>(null);
  const [timerDraft, setTimerDraft] = useState<TimerDraft>({});

  useEffect(() => {
    const readHash = () => {
      const nextView = window.location.hash.replace("#", "") as View;
      if (["tea", "teaware", "timer", "history", "backup"].includes(nextView)) setView(nextView);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const replaceData = (nextData: AppData) => setData(nextData);
  const activeTeas = data.teas.filter((tea) => tea.lifecycleStatus === "active");
  const activeTeaware = data.teaware.filter((item) => item.lifecycleStatus === "active");

  return (
    <main className="ts-scope app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Tea Shelf / Чайная Полка</p>
          <h1>Tea ceremony assistant</h1>
          <p className="app-subtitle">Catalog tea, manage teaware, run multi-steep sessions, and keep local session history.</p>
        </div>
        <PrimaryNavigation
          items={[
            { current: view === "tea", href: "#tea", label: "Tea shelf" },
            { current: view === "teaware", href: "#teaware", label: "Teaware" },
            { current: view === "timer", href: "#timer", label: "Brew timer" },
            { current: view === "history", href: "#history", label: "History" },
            { current: view === "backup", href: "#backup", label: "Backup" }
          ]}
        />
      </header>

      <nav aria-label="MVP sections" className="view-switcher">
        {(["tea", "teaware", "timer", "history", "backup"] as View[]).map((item) => (
          <Button key={item} onClick={() => setView(item)} variant={view === item ? "primary" : "secondary"}>
            {item === "tea" ? "Tea shelf" : item === "teaware" ? "Teaware" : item === "timer" ? "Brew timer" : item === "history" ? "History" : "Backup"}
          </Button>
        ))}
      </nav>

      {storageError ? <InlineAlert title="Local storage warning" tone="warning">{storageError}</InlineAlert> : null}
      {!loaded ? <InlineAlert title="Loading local collection">Opening your local Tea Shelf data.</InlineAlert> : null}

      {view === "tea" ? <TeaShelf data={data} onChange={replaceData} services={services} onStartSession={(teaId) => { setTimerDraft({ teaId }); setView("timer"); window.location.hash = "timer"; }} /> : null}
      {view === "teaware" ? <TeawareShelf data={data} onChange={replaceData} services={services} /> : null}
      {view === "timer" ? (
        <BrewTimer
          activeTeas={activeTeas}
          activeTeaware={activeTeaware}
          data={data}
          draft={timerDraft}
          onChange={replaceData}
          onSaved={(teaId) => setStockPromptTeaId(teaId)}
          services={services}
        />
      ) : null}
      {view === "history" ? <SessionHistory data={data} onChange={replaceData} onRepeat={(session) => { setTimerDraft({ sequence: session.sequenceSnapshot, teaId: session.teaId, teawareId: session.teawareId }); setView("timer"); window.location.hash = "timer"; }} services={services} /> : null}
      {view === "backup" ? <BackupScreen data={data} onChange={replaceData} onStorageError={setStorageError} services={services} /> : null}

      <ConfirmationDialog
        body="The session has been saved. Stock is updated manually in this MVP. Open the tea form and enter the remaining quantity after this brew."
        confirmLabel="Open tea shelf"
        onCancel={() => setStockPromptTeaId(null)}
        onConfirm={() => {
          setStockPromptTeaId(null);
          setView("tea");
        }}
        open={Boolean(stockPromptTeaId)}
        title="Update remaining stock"
      />
    </main>
  );
}

function TeaShelf({ data, onChange, onStartSession, services }: { data: AppData; onChange: (data: AppData) => void; onStartSession: (teaId: string) => void; services: AppServices }) {
  const [form, setForm] = useState(emptyTeaForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [saveFailed, setSaveFailed] = useState(false);
  const [filters, setFilters] = useState<TeaFilters>({ availability: "", favoriteOnly: false, showArchived: false, type: "" });
  const [confirmArchive, setConfirmArchive] = useState<Tea | null>(null);

  const filtered = services.tea.filter(data.teas, filters);
  const currentTea = editingId ? data.teas.find((tea) => tea.id === editingId) ?? null : null;

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyTeaForm);
    setErrors({});
    setSaveFailed(false);
  };

  const save = (event: FormEvent) => {
    event.preventDefault();
    const result = editingId ? services.tea.update(data, editingId, form) : services.tea.create(data, form);
    setErrors(result.errors);
    if (Object.keys(result.errors).length > 0) {
      setSaveFailed(true);
      return;
    }
    onChange(result.data);
    resetForm();
  };

  const edit = (tea: Tea) => {
    setEditingId(tea.id);
    setForm({
      brand: tea.brand,
      favorite: tea.favorite,
      name: tea.name,
      notes: tea.notes,
      originalWeight: tea.originalWeight,
      region: tea.region,
      remainingQuantity: tea.remainingQuantity,
      type: tea.type,
      year: tea.year
    });
  };

  return (
    <section className="feature-grid" id="tea">
      <div className="feature-main">
        <SectionHeader eyebrow="FR-001, FR-002, FR-009, FR-010, FR-011" title="Tea shelf" />
        <div className="toolbar">
          <Select label="Type filter" options={selectOptions(teaTypes, true)} value={filters.type} onChange={(event) => setFilters({ ...filters, type: event.target.value })} />
          <Select
            label="Availability"
            options={[
              { label: "Any", value: "" },
              { label: "Available", value: "available" },
              { label: "Unavailable", value: "unavailable" }
            ]}
            value={filters.availability}
            onChange={(event) => setFilters({ ...filters, availability: event.target.value as TeaFilters["availability"] })}
          />
          <CheckboxToggle checked={filters.favoriteOnly} label="Favorites only" onChange={(event) => setFilters({ ...filters, favoriteOnly: event.target.checked })} />
          <CheckboxToggle checked={filters.showArchived} label="Archived" onChange={(event) => setFilters({ ...filters, showArchived: event.target.checked })} />
        </div>
        {data.teas.length === 0 ? <EmptyState action={<Button onClick={() => document.getElementById("tea-name")?.focus()} variant="primary">Add tea</Button>} body="Start with one tea and its remaining quantity." title="No teas yet" /> : null}
        {data.teas.length > 0 && filtered.length === 0 ? <FilteredEmptyState onClear={() => setFilters({ availability: "", favoriteOnly: false, showArchived: false, type: "" })} /> : null}
        <div className="card-list">
          {filtered.map((tea) => (
            <TeaListRowCard
              key={tea.id}
              actions={
                <>
                  <FavoriteControl favorite={tea.favorite} onToggle={() => onChange(services.tea.update(data, tea.id, { favorite: !tea.favorite }).data)} />
                  <Button onClick={() => edit(tea)}>Edit</Button>
                  <Button onClick={() => onStartSession(tea.id)} variant="primary">Brew</Button>
                  {tea.lifecycleStatus === "archived" ? (
                    <Button onClick={() => onChange(services.tea.restore(data, tea.id).data)}>Restore</Button>
                  ) : (
                    <Button onClick={() => setConfirmArchive(tea)} variant="destructive">Archive</Button>
                  )}
                </>
              }
              archived={tea.lifecycleStatus === "archived"}
              favorite={tea.favorite}
              metadata={[
                { label: "Type", value: tea.type },
                { label: "Brand", value: tea.brand },
                { label: "Region", value: tea.region },
                { label: "Year", value: tea.year }
              ]}
              name={tea.name}
              stock={<StockIndicator quantity={tea.remainingQuantity} unit="g" />}
              unavailable={!isTeaAvailable(tea)}
            />
          ))}
        </div>
      </div>
      <form className="side-panel" noValidate onSubmit={save}>
        <h2>{currentTea ? `Edit ${currentTea.name}` : "Add tea"}</h2>
        {saveFailed ? <SaveFailedState onRetry={() => setSaveFailed(false)} /> : null}
        <TextInput error={errors.name} id="tea-name" label="Tea name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        <Select error={errors.type} label="Tea type" options={selectOptions(teaTypes)} required value={form.type} onChange={(event) => setForm({ ...form, type: event.target.value })} />
        <NumberInputWithUnit error={errors.originalWeight} label="Original weight" min={0} required unit="g" value={form.originalWeight} onChange={(event) => setForm({ ...form, originalWeight: Number(event.target.value) })} />
        <NumberInputWithUnit error={errors.remainingQuantity} label="Remaining quantity" min={0} required unit="g" value={form.remainingQuantity} onChange={(event) => setForm({ ...form, remainingQuantity: Number(event.target.value) })} />
        <TextInput label="Brand" value={form.brand} onChange={(event) => setForm({ ...form, brand: event.target.value })} />
        <TextInput label="Region" value={form.region} onChange={(event) => setForm({ ...form, region: event.target.value })} />
        <TextInput label="Year" value={form.year} onChange={(event) => setForm({ ...form, year: event.target.value })} />
        <CheckboxToggle checked={form.favorite} label="Favorite tea" onChange={(event) => setForm({ ...form, favorite: event.target.checked })} />
        <Textarea label="Notes" value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} />
        <div className="form-actions">
          <Button type="submit" variant="primary">Save tea</Button>
          <Button onClick={resetForm}>Clear</Button>
        </div>
      </form>
      <ConfirmationDialog
        body="The tea will be hidden from the default list, but saved session snapshots stay readable."
        confirmLabel="Archive tea"
        destructive
        onCancel={() => setConfirmArchive(null)}
        onConfirm={() => {
          if (confirmArchive) onChange(services.tea.archive(data, confirmArchive.id).data);
          setConfirmArchive(null);
        }}
        open={Boolean(confirmArchive)}
        title="Archive tea?"
      />
    </section>
  );
}

function TeawareShelf({ data, onChange, services }: { data: AppData; onChange: (data: AppData) => void; services: AppServices }) {
  const [form, setForm] = useState(emptyTeawareForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [saveFailed, setSaveFailed] = useState(false);
  const [filters, setFilters] = useState<TeawareFilters>({ category: "", material: "", method: "", showArchived: false });
  const [confirmArchive, setConfirmArchive] = useState<Teaware | null>(null);
  const filtered = services.teaware.filter(data.teaware, filters);

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyTeawareForm);
    setErrors({});
    setSaveFailed(false);
  };

  const save = (event: FormEvent) => {
    event.preventDefault();
    const result = editingId ? services.teaware.update(data, editingId, form) : services.teaware.create(data, form);
    setErrors(result.errors);
    if (Object.keys(result.errors).length > 0) {
      setSaveFailed(true);
      return;
    }
    onChange(result.data);
    resetForm();
  };

  const toggleMethod = (method: string) => {
    setForm((current) => ({
      ...current,
      supportedMethods: current.supportedMethods.includes(method)
        ? current.supportedMethods.filter((value) => value !== method)
        : [...current.supportedMethods, method]
    }));
  };

  return (
    <section className="feature-grid" id="teaware">
      <div className="feature-main">
        <SectionHeader eyebrow="FR-003, FR-004, FR-011" title="Teaware shelf" />
        <div className="toolbar">
          <Select label="Category filter" options={selectOptions(teawareCategories, true)} value={filters.category} onChange={(event) => setFilters({ ...filters, category: event.target.value })} />
          <Select label="Material filter" options={selectOptions(materials, true)} value={filters.material} onChange={(event) => setFilters({ ...filters, material: event.target.value })} />
          <Select label="Method filter" options={selectOptions(methods, true)} value={filters.method} onChange={(event) => setFilters({ ...filters, method: event.target.value })} />
          <CheckboxToggle checked={filters.showArchived} label="Archived" onChange={(event) => setFilters({ ...filters, showArchived: event.target.checked })} />
        </div>
        {data.teaware.length === 0 ? <EmptyState action={<Button onClick={() => document.getElementById("teaware-name")?.focus()} variant="primary">Add teaware</Button>} body="Add a gaiwan, pot, cup, or other brewing tool." title="No teaware yet" /> : null}
        {data.teaware.length > 0 && filtered.length === 0 ? <FilteredEmptyState onClear={() => setFilters({ category: "", material: "", method: "", showArchived: false })} /> : null}
        <div className="card-list">
          {filtered.map((item) => (
            <TeaListRowCard
              key={item.id}
              actions={
                <>
                  <Button onClick={() => {
                    setEditingId(item.id);
                    setForm({
                      category: item.category,
                      material: item.material,
                      name: item.name,
                      notes: item.notes,
                      purpose: item.purpose,
                      supportedMethods: item.supportedMethods,
                      volume: item.volume
                    });
                  }}>Edit</Button>
                  {item.lifecycleStatus === "archived" ? (
                    <Button onClick={() => onChange(services.teaware.restore(data, item.id).data)}>Restore</Button>
                  ) : (
                    <Button onClick={() => setConfirmArchive(item)} variant="destructive">Archive</Button>
                  )}
                </>
              }
              archived={item.lifecycleStatus === "archived"}
              metadata={[
                { label: "Category", value: item.category },
                { label: "Material", value: item.material },
                { label: "Volume", value: `${item.volume} ml` },
                { label: "Purpose", value: item.purpose },
                { label: "Methods", value: item.supportedMethods.join(", ") }
              ]}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <form className="side-panel" noValidate onSubmit={save}>
        <h2>{editingId ? "Edit teaware" : "Add teaware"}</h2>
        {saveFailed ? <SaveFailedState onRetry={() => setSaveFailed(false)} /> : null}
        <TextInput error={errors.name} id="teaware-name" label="Teaware name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        <Select error={errors.category} label="Category" options={selectOptions(teawareCategories)} required value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} />
        <Select error={errors.material} label="Material" options={selectOptions(materials)} required value={form.material} onChange={(event) => setForm({ ...form, material: event.target.value })} />
        <NumberInputWithUnit error={errors.volume} label="Volume" min={1} required unit="ml" value={form.volume} onChange={(event) => setForm({ ...form, volume: Number(event.target.value) })} />
        <TextInput label="Purpose" value={form.purpose} onChange={(event) => setForm({ ...form, purpose: event.target.value })} />
        <MethodSelector label="Supported brewing methods" methods={methods.map((method) => ({ label: method, value: method }))} onToggle={toggleMethod} selected={form.supportedMethods} />
        <Textarea label="Notes" value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} />
        <div className="form-actions">
          <Button type="submit" variant="primary">Save teaware</Button>
          <Button onClick={resetForm}>Clear</Button>
        </div>
      </form>
      <ConfirmationDialog
        body="The item will be hidden from new sessions, but historical session snapshots stay readable."
        confirmLabel="Archive teaware"
        destructive
        onCancel={() => setConfirmArchive(null)}
        onConfirm={() => {
          if (confirmArchive) onChange(services.teaware.archive(data, confirmArchive.id).data);
          setConfirmArchive(null);
        }}
        open={Boolean(confirmArchive)}
        title="Archive teaware?"
      />
    </section>
  );
}

function BrewTimer({
  activeTeas,
  activeTeaware,
  data,
  draft,
  onChange,
  onSaved,
  services
}: {
  activeTeas: Tea[];
  activeTeaware: Teaware[];
  data: AppData;
  draft: TimerDraft;
  onChange: (data: AppData) => void;
  onSaved: (teaId: string | null) => void;
  services: AppServices;
}) {
  const [teaId, setTeaId] = useState("");
  const [teawareId, setTeawareId] = useState("");
  const [sequence, setSequence] = useState<BrewStep[]>(createDefaultSequence);
  const [state, setState] = useState<TimerState>("setup");
  const [activeIndex, setActiveIndex] = useState(0);
  const [remaining, setRemaining] = useState(sequence[0]?.durationSeconds ?? 0);
  const [notes, setNotes] = useState("");
  const [sequenceError, setSequenceError] = useState("");
  const [startedAt, setStartedAt] = useState(new Date().toISOString());
  const [saveError, setSaveError] = useState("");
  const [confirmCancel, setConfirmCancel] = useState(false);

  useEffect(() => {
    if (draft.teaId !== undefined) setTeaId(draft.teaId ?? "");
    if (draft.teawareId !== undefined) setTeawareId(draft.teawareId ?? "");
    if (draft.sequence) {
      setSequence(draft.sequence.map((step, index) => ({ ...step, id: `${step.id}-repeat-${index}`, stepNumber: index + 1 })));
      setRemaining(draft.sequence[0]?.durationSeconds ?? 0);
    }
    setState("setup");
    setActiveIndex(0);
  }, [draft]);

  useEffect(() => {
    if (state !== "running") return;
    const interval = window.setInterval(() => {
      setRemaining((current) => {
        if (current <= 1) {
          window.clearInterval(interval);
          setState("steep-complete");
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [state, activeIndex]);

  const start = () => {
    const error = validateSequence(sequence);
    setSequenceError(error);
    if (error) return;
    if (state === "setup") {
      setStartedAt(new Date().toISOString());
      setActiveIndex(0);
      setRemaining(sequence[0].durationSeconds);
    }
    setState("running");
  };

  const next = () => {
    if (activeIndex < sequence.length - 1) {
      const nextIndex = activeIndex + 1;
      setActiveIndex(nextIndex);
      setRemaining(sequence[nextIndex].durationSeconds);
      setState("running");
      return;
    }
    setState("completed");
  };

  const save = () => {
    const result = services.timer.saveSession(data, {
      notes,
      sequence,
      startedAt,
      teaId: teaId || null,
      teawareId: teawareId || null
    });
    if (result.error) {
      setSaveError(result.error);
      setState("save-failed");
      return;
    }
    onChange(result.data);
    onSaved(teaId || null);
    setNotes("");
    setState("setup");
    setActiveIndex(0);
    setRemaining(sequence[0]?.durationSeconds ?? 0);
  };

  const updateStep = (id: string, patch: Partial<BrewStep>) => {
    setSequence((current) => current.map((step) => (step.id === id ? { ...step, ...patch } : step)));
  };

  const addStep = () => {
    setSequence((current) => [
      ...current,
      { durationSeconds: 30, id: `step-${Date.now()}`, instruction: "", stepNumber: current.length + 1, temperatureCelsius: 95 }
    ]);
  };

  const removeStep = (id: string) => {
    setSequence((current) => current.filter((step) => step.id !== id).map((step, index) => ({ ...step, stepNumber: index + 1 })));
  };

  return (
    <section className="timer-layout" id="timer">
      <div className="feature-main">
        <SectionHeader eyebrow="FR-005, FR-006, FR-007, FR-008, FR-010, FR-012" title="Brew timer" />
        {sequenceError ? <InlineAlert title="Sequence error" tone="error">{sequenceError}</InlineAlert> : null}
        {saveError && state === "save-failed" ? <SaveFailedState onRetry={save} /> : null}
        <TimerDisplay currentSteep={sequence[activeIndex] ? `Steep ${activeIndex + 1} of ${sequence.length}` : "No steep selected"} remainingTime={formatDuration(remaining)} state={state} />
        <TimerControls
          onCancel={() => setConfirmCancel(true)}
          onNext={next}
          onPause={() => setState("paused")}
          onStart={start}
          state={state}
        />
        {state === "steep-complete" ? <InlineAlert action={<Button onClick={next} variant="primary">Advance</Button>} title="Steep complete" tone="success">This state uses text and action, not color alone.</InlineAlert> : null}
        {state === "completed" ? <InlineAlert action={<Button onClick={save} variant="primary">Save session</Button>} title="Session complete" tone="success">Save notes and preserve this sequence in history.</InlineAlert> : null}
      </div>
      <aside className="side-panel">
        <h2>Session setup</h2>
        <Select label="Tea" options={[{ label: "Custom session", value: "" }, ...activeTeas.map((tea) => ({ label: `${tea.name} (${tea.remainingQuantity} g)`, value: tea.id }))]} value={teaId} onChange={(event) => setTeaId(event.target.value)} />
        <Select label="Teaware" options={[{ label: "No teaware", value: "" }, ...activeTeaware.map((item) => ({ label: `${item.name} (${item.volume} ml)`, value: item.id }))]} value={teawareId} onChange={(event) => setTeawareId(event.target.value)} />
        <SequenceEditor>
          <div className="panel-heading">
            <h3>Steep sequence</h3>
            <Button onClick={addStep}>Add steep</Button>
          </div>
          {sequence.map((step, index) => (
            <div className="sequence-row" key={step.id}>
              <strong>Steep {index + 1}</strong>
              <NumberInputWithUnit label="Duration" min={1} unit="sec" value={step.durationSeconds} onChange={(event) => updateStep(step.id, { durationSeconds: Number(event.target.value) })} />
              <NumberInputWithUnit label="Temperature" min={0} unit="C" value={step.temperatureCelsius ?? ""} onChange={(event) => updateStep(step.id, { temperatureCelsius: event.target.value ? Number(event.target.value) : null })} />
              <TextInput label="Instruction" value={step.instruction} onChange={(event) => updateStep(step.id, { instruction: event.target.value })} />
              <Button onClick={() => removeStep(step.id)} variant="destructive">Remove</Button>
            </div>
          ))}
        </SequenceEditor>
        <Textarea label="Session notes" value={notes} onChange={(event) => setNotes(event.target.value)} />
        <InlineAlert title="Local timer limit" tone="warning">Browser refresh and background recovery are best-effort in this MVP. Keep the tab open during active timing.</InlineAlert>
      </aside>
      <ConfirmationDialog
        body="Unsaved timer progress and notes will be discarded."
        confirmLabel="Cancel session"
        destructive
        onCancel={() => setConfirmCancel(false)}
        onConfirm={() => {
          setConfirmCancel(false);
          setState("setup");
          setActiveIndex(0);
          setRemaining(sequence[0]?.durationSeconds ?? 0);
          setNotes("");
        }}
        open={confirmCancel}
        title="Cancel active session?"
      />
    </section>
  );
}

function SessionHistory({ data, onChange, onRepeat, services }: { data: AppData; onChange: (data: AppData) => void; onRepeat: (session: BrewSession) => void; services: AppServices }) {
  const [showArchived, setShowArchived] = useState(false);
  const [selected, setSelected] = useState<BrewSession | null>(null);
  const sessions = services.history.list(data.sessions, showArchived);

  return (
    <section className="feature-grid" id="history">
      <div className="feature-main">
        <SectionHeader eyebrow="FR-007, FR-008, FR-011" title="Session history" />
        <CheckboxToggle checked={showArchived} label="Archived sessions" onChange={(event) => setShowArchived(event.target.checked)} />
        {data.sessions.length === 0 ? <EmptyState body="Completed sessions will appear here with preserved tea, teaware, and steep snapshots." title="No saved sessions yet" /> : null}
        <div className="card-list">
          {sessions.map((session) => (
            <SessionHistoryRow
              key={session.id}
              date={new Date(session.completedAt).toLocaleString()}
              label={session.label}
              metadata={[
                { label: "Type", value: session.custom ? "Custom" : "Tea session" },
                { label: "Teaware", value: session.teawareSnapshot?.name ?? "None" },
                { label: "Steeps", value: session.steepsCompleted },
                { label: "Notes", value: session.notes ? "Yes" : "None" }
              ]}
              repeatAction={
                <>
                  <Button onClick={() => setSelected(session)}>Details</Button>
                  <Button onClick={() => onRepeat(session)} variant="primary">Repeat</Button>
                  {session.lifecycleStatus === "archived" ? (
                    <Button onClick={() => onChange(services.history.restore(data, session.id))}>Restore</Button>
                  ) : (
                    <Button onClick={() => onChange(services.history.archive(data, session.id))} variant="destructive">Archive</Button>
                  )}
                </>
              }
            />
          ))}
        </div>
      </div>
      <aside className="side-panel">
        <h2>Session detail</h2>
        {selected ? (
          <>
            <SessionDetailSnapshot title="Tea snapshot">
              {selected.teaSnapshot ? (
                <MetadataGroup items={[
                  { label: "Name", value: selected.teaSnapshot.name },
                  { label: "Type", value: selected.teaSnapshot.type },
                  { label: "Remaining then", value: `${selected.teaSnapshot.remainingQuantity} g` }
                ]} />
              ) : <p className="ts-body">Custom session without tea.</p>}
            </SessionDetailSnapshot>
            <SessionDetailSnapshot title="Teaware snapshot">
              {selected.teawareSnapshot ? (
                <MetadataGroup items={[
                  { label: "Name", value: selected.teawareSnapshot.name },
                  { label: "Material", value: selected.teawareSnapshot.material },
                  { label: "Volume", value: `${selected.teawareSnapshot.volume} ml` }
                ]} />
              ) : <p className="ts-body">No teaware selected.</p>}
            </SessionDetailSnapshot>
            <SessionDetailSnapshot title="Sequence snapshot">
              <ol className="compact-list">
                {selected.sequenceSnapshot.map((step) => (
                  <li key={step.id}>Steep {step.stepNumber}: {step.durationSeconds}s{step.temperatureCelsius ? ` at ${step.temperatureCelsius} C` : ""}</li>
                ))}
              </ol>
              <p className="ts-body">{selected.notes || "No notes saved."}</p>
            </SessionDetailSnapshot>
          </>
        ) : <EmptyState body="Select a saved session to inspect its immutable snapshots." title="No session selected" />}
      </aside>
    </section>
  );
}

function BackupScreen({ data, onChange, onStorageError, services }: { data: AppData; onChange: (data: AppData) => void; onStorageError: (message: string) => void; services: AppServices }) {
  const [importCandidate, setImportCandidate] = useState<AppData | null>(null);
  const [importError, setImportError] = useState("");

  const exportData = () => {
    const payload = services.backup.export(data);
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `tea-shelf-export-${payload.exportedAt.slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    file.text().then((text) => {
      const result = services.backup.validateImport(text);
      if (result.error || !result.data) {
        setImportError(result.error ?? "Import failed.");
        setImportCandidate(null);
        return;
      }
      setImportError("");
      setImportCandidate(result.data);
    }).catch(() => {
      setImportError("Import file could not be read.");
      setImportCandidate(null);
    });
  };

  return (
    <section className="single-column" id="backup">
      <SectionHeader eyebrow="FR-013, NFR-006, AC-X-005, AC-X-006" title="Local backup" />
      <InlineAlert title="Private local data" tone="warning">
        Exports include tea, teaware, session, and note data. Keep export files private. Browser storage can be cleared by the browser or device tools, so export before relying on this MVP long-term.
      </InlineAlert>
      {importError ? <InlineAlert title="Import rejected" tone="error">{importError}</InlineAlert> : null}
      <div className="backup-actions">
        <Button onClick={exportData} variant="primary">Export local data</Button>
        <label className="file-button">
          <span>Import replacement file</span>
          <input accept="application/json" onChange={importFile} type="file" />
        </label>
      </div>
      <MetadataGroup items={[
        { label: "Teas", value: data.teas.length },
        { label: "Teaware", value: data.teaware.length },
        { label: "Sessions", value: data.sessions.length },
        { label: "Storage", value: "IndexedDB through local services with a test fallback" }
      ]} />
      <ImportReplacementConfirmation
        body="The entire local dataset will be replaced only after this confirmation. If validation had failed, your existing data would remain untouched."
        confirmLabel="Replace data"
        onCancel={() => setImportCandidate(null)}
        onConfirm={() => {
          if (!importCandidate) return;
          onChange(importCandidate);
          services.repository.replace(importCandidate).catch(() => onStorageError("Imported data is on screen, but saving it to local storage failed."));
          setImportCandidate(null);
        }}
        open={Boolean(importCandidate)}
      />
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
