import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Badge,
  Button,
  CheckboxToggle,
  ConfirmationDialog,
  EmptyState,
  FavoriteControl,
  FilteredEmptyState,
  ImportReplacementConfirmation,
  InlineAlert,
  MethodSelector,
  NumberInputWithUnit,
  PrimaryNavigation,
  ProgressIndicator,
  RepeatSessionPanel,
  SaveFailedState,
  Select,
  SequenceEditor,
  SessionDetailSnapshot,
  SessionHistoryRow,
  SteepList,
  StockIndicator,
  TeaListRowCard,
  TextInput,
  Textarea,
  TimerControls,
  TimerDisplay,
  ValidationMessage
} from "../index";

const meta = {
  title: "Tea Shelf/Design System",
  parameters: {
    layout: "padded"
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Actions: Story = {
  render: () => (
    <div className="ts-chip-list">
      <Button variant="primary">Save tea</Button>
      <Button>Cancel</Button>
      <Button variant="ghost">Clear filters</Button>
      <Button variant="destructive">Archive record</Button>
      <Button loading variant="primary">Saving</Button>
      <FavoriteControl favorite onToggle={() => undefined} />
    </div>
  )
};

export const Forms: Story = {
  render: () => (
    <form style={{ maxWidth: 520 }}>
      <TextInput label="Tea name" required helperText="Long names wrap in surrounding layouts." defaultValue="Улун с длинным названием для проверки переноса" />
      <NumberInputWithUnit label="Water temperature" unit="C" defaultValue={92} />
      <Select label="Tea type" options={[{ label: "Sheng puer", value: "sheng" }, { label: "Oolong", value: "oolong" }]} defaultValue="sheng" />
      <Textarea label="Session notes" helperText="Use synthetic review data only." defaultValue="Calm aroma, medium body." />
      <CheckboxToggle label="Available for brewing" defaultChecked />
      <MethodSelector label="Brewing methods" selected={["gongfu"]} methods={[{ label: "Gongfu", value: "gongfu" }, { label: "Grandpa", value: "grandpa" }]} onToggle={() => undefined} />
      <TextInput label="Required field" error="Tea name is required." />
      <ValidationMessage>Fix the highlighted fields before saving.</ValidationMessage>
    </form>
  )
};

export const FeedbackAndData: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, maxWidth: 620 }}>
      <InlineAlert title="Save failed" tone="error" action={<Button>Retry</Button>}>Values are preserved. Try saving again.</InlineAlert>
      <EmptyState title="No tea yet" body="Add a tea record to start tracking your shelf." action={<Button variant="primary">Add tea</Button>} />
      <FilteredEmptyState onClear={() => undefined} />
      <div className="ts-chip-list">
        <Badge tone="success">Available</Badge>
        <Badge tone="warning">Paused</Badge>
        <Badge tone="archived">Archived</Badge>
        <StockIndicator quantity={0} unit="g" />
      </div>
    </div>
  )
};

export const ProductRows: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      <TeaListRowCard
        favorite
        name="2021 Menghai sheng puer with a very long inspectable name"
        metadata={[{ label: "Type", value: "Sheng puer" }, { label: "Origin", value: "Yunnan" }, { label: "Brand", value: "Synthetic demo" }]}
        stock={<StockIndicator quantity={42} unit="g" />}
        actions={<Button>Edit</Button>}
      />
      <TeaListRowCard
        archived
        unavailable
        name="Archived teaware-compatible tea"
        metadata={[{ label: "Type", value: "Oolong" }, { label: "Method", value: "Gongfu" }]}
        stock={<StockIndicator quantity={0} unit="g" />}
      />
    </div>
  )
};

export const Timer: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16, maxWidth: 720 }}>
      <TimerDisplay state="running" remainingTime="01:25" currentSteep="Steep 2 of 6" />
      <TimerControls state="running" onPause={() => undefined} onNext={() => undefined} onCancel={() => undefined} />
      <ProgressIndicator label="Session progress" value={45} />
      <SteepList currentIndex={1} steeps={[{ label: "Steep 1", duration: "20s", status: "complete" }, { label: "Steep 2", duration: "25s", status: "current" }, { label: "Steep 3", duration: "30s" }]} />
      <SequenceEditor>
        <NumberInputWithUnit label="Next steep duration" unit="seconds" defaultValue={30} />
      </SequenceEditor>
    </div>
  )
};

export const SessionAndNavigation: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      <PrimaryNavigation items={[{ href: "#tea", label: "Tea shelf", current: true }, { href: "#teaware", label: "Teaware" }, { href: "#timer", label: "Brew timer" }, { href: "#history", label: "History" }]} />
      <SessionHistoryRow date="May 17, 2026" label="Morning puer session" metadata={[{ label: "Steeps", value: 6 }, { label: "Teaware", value: "Porcelain gaiwan" }]} repeatAction={<Button variant="primary">Repeat</Button>} />
      <SessionDetailSnapshot title="Saved snapshot"><p className="ts-body">Tea and teaware values are stored as session snapshot text.</p></SessionDetailSnapshot>
      <RepeatSessionPanel summary="Repeat from saved steep sequence without changing the original session." onRepeat={() => undefined} />
    </div>
  )
};

export const Overlays: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 16 }}>
      <SaveFailedState onRetry={() => undefined} />
      <ConfirmationDialog open title="Archive tea?" body="Archived tea is hidden from new brewing setup until restored." destructive confirmLabel="Archive" onCancel={() => undefined} onConfirm={() => undefined} />
      <ImportReplacementConfirmation open body="This replaces existing local records with imported records." confirmLabel="Replace data" onCancel={() => undefined} onConfirm={() => undefined} />
    </div>
  )
};
