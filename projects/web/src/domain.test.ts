import { describe, expect, it } from "vitest";
import {
  type AppData,
  createBackupService,
  createDefaultSequence,
  createTeaService,
  createTeawareService,
  createTimerService,
  validateSequence,
  validateTea
} from "./domain";

describe("MVP domain services", () => {
  it("validates stock boundaries and sequence duration", () => {
    expect(validateTea({ name: "Tea", type: "Oolong", originalWeight: 25, remainingQuantity: -1 }).remainingQuantity).toBe("Remaining quantity cannot be negative.");
    expect(validateSequence([{ ...createDefaultSequence()[0], durationSeconds: 0 }])).toBe("Each steep needs a positive duration.");
  });

  it("preserves immutable snapshots when source records change later", () => {
    const teaService = createTeaService();
    const teawareService = createTeawareService();
    const timerService = createTimerService();
    let data: AppData = { sessions: [], teas: [], teaware: [] };

    data = teaService.create(data, { name: "Tie Guan Yin", originalWeight: 50, remainingQuantity: 40, type: "Oolong" }).data;
    data = teawareService.create(data, { category: "Gaiwan", material: "Porcelain", name: "White gaiwan", volume: 100 }).data;

    const saved = timerService.saveSession(data, {
      notes: "Floral",
      sequence: createDefaultSequence(),
      startedAt: "2026-05-17T10:00:00.000Z",
      teaId: data.teas[0].id,
      teawareId: data.teaware[0].id
    });
    data = saved.data;

    data = teaService.update(data, data.teas[0].id, { name: "Renamed tea" }).data;

    expect(data.sessions[0].teaSnapshot?.name).toBe("Tie Guan Yin");
    expect(data.sessions[0].teawareSnapshot?.name).toBe("White gaiwan");
    expect(data.sessions[0].sequenceSnapshot).toHaveLength(3);
  });

  it("rejects malformed or incompatible imports before replacement", () => {
    const backup = createBackupService();

    expect(backup.validateImport("{not json").error).toBe("Import file is malformed JSON.");
    expect(backup.validateImport(JSON.stringify({ schemaVersion: 999, teas: [], teaware: [], sessions: [] })).error).toBe("Import schema version is not compatible.");
    expect(backup.validateImport(JSON.stringify({ schemaVersion: 1, teas: [], teaware: [], sessions: [] })).data).toEqual({ teas: [], teaware: [], sessions: [] });
  });
});
