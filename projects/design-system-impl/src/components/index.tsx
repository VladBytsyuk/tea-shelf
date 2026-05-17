import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type Tone = "default" | "success" | "warning" | "error" | "archived" | "unavailable";
type TimerState = "setup" | "running" | "paused" | "steep-complete" | "completed" | "canceled" | "save-failed";

function cx(...parts: Array<false | null | undefined | string>) {
  return parts.filter(Boolean).join(" ");
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "compact" | "default" | "large";
  loading?: boolean;
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
}

export function Button({
  children,
  className,
  disabled,
  fullWidth,
  leadingIcon,
  loading,
  size = "default",
  type = "button",
  variant = "secondary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx("ts-button", `ts-button--${variant}`, `ts-button--${size}`, fullWidth && "ts-button--full", className)}
      disabled={disabled || loading}
      type={type}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="ts-spinner" aria-hidden="true" /> : leadingIcon}
      <span>{children}</span>
    </button>
  );
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "compact" | "default" | "timer";
  destructive?: boolean;
  selected?: boolean;
  icon: ReactNode;
}

export function IconButton({ className, destructive, icon, label, selected, size = "default", type = "button", ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      aria-pressed={selected}
      className={cx("ts-icon-button", `ts-icon-button--${size}`, destructive && "ts-icon-button--destructive", className)}
      type={type}
      {...props}
    >
      {icon}
    </button>
  );
}

export interface FieldGroupProps {
  children: ReactNode;
  error?: string;
  helperText?: string;
  id: string;
  label: string;
  required?: boolean;
}

export function FieldGroup({ children, error, helperText, id, label, required }: FieldGroupProps) {
  return (
    <div className="ts-field">
      <label className="ts-label" htmlFor={id}>
        {label}
        {required ? " (required)" : ""}
      </label>
      {children}
      {helperText ? <span className="ts-helper" id={`${id}-helper`}>{helperText}</span> : null}
      {error ? <span className="ts-error" id={`${id}-error`}>{error}</span> : null}
    </div>
  );
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & { error?: string; helperText?: string; label: string };

export function TextInput({ error, helperText, id, label, required, ...props }: TextInputProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <FieldGroup error={error} helperText={helperText} id={inputId} label={label} required={required}>
      <input
        {...props}
        aria-describedby={cx(helperText && `${inputId}-helper`, error && `${inputId}-error`) || undefined}
        aria-invalid={Boolean(error) || undefined}
        className={cx("ts-input", props.className)}
        id={inputId}
        required={required}
      />
    </FieldGroup>
  );
}

export interface NumberInputWithUnitProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
  label: string;
  unit: string;
}

export function NumberInputWithUnit({ error, helperText, id, label, required, unit, ...props }: NumberInputWithUnitProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <FieldGroup error={error} helperText={helperText} id={inputId} label={label} required={required}>
      <div className="ts-unit-field">
        <input
          {...props}
          aria-describedby={cx(`${inputId}-unit`, helperText && `${inputId}-helper`, error && `${inputId}-error`)}
          aria-invalid={Boolean(error) || undefined}
          className={cx("ts-input", props.className)}
          id={inputId}
          inputMode="decimal"
          required={required}
          type="number"
        />
        <span className="ts-unit" id={`${inputId}-unit`}>{unit}</span>
      </div>
    </FieldGroup>
  );
}

export function Textarea({ error, helperText, id, label, required, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string; helperText?: string; label: string }) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <FieldGroup error={error} helperText={helperText} id={inputId} label={label} required={required}>
      <textarea
        {...props}
        aria-describedby={cx(helperText && `${inputId}-helper`, error && `${inputId}-error`) || undefined}
        aria-invalid={Boolean(error) || undefined}
        className={cx("ts-textarea", props.className)}
        id={inputId}
        required={required}
      />
    </FieldGroup>
  );
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  helperText?: string;
  label: string;
  options: Array<{ label: string; value: string }>;
}

export function Select({ error, helperText, id, label, options, required, ...props }: SelectProps) {
  const inputId = id ?? props.name ?? label.toLowerCase().replace(/\s+/g, "-");
  return (
    <FieldGroup error={error} helperText={helperText} id={inputId} label={label} required={required}>
      <select
        {...props}
        aria-describedby={cx(helperText && `${inputId}-helper`, error && `${inputId}-error`) || undefined}
        aria-invalid={Boolean(error) || undefined}
        className={cx("ts-select", props.className)}
        id={inputId}
        required={required}
      >
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </FieldGroup>
  );
}

export function CheckboxToggle({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="ts-chip">
      <input {...props} type="checkbox" />
      <span>{label}</span>
    </label>
  );
}

export interface MethodSelectorProps {
  label: string;
  methods: Array<{ label: string; value: string }>;
  onToggle: (value: string) => void;
  selected: string[];
}

export function MethodSelector({ label, methods, onToggle, selected }: MethodSelectorProps) {
  return (
    <fieldset className="ts-field">
      <legend className="ts-label">{label}</legend>
      <div className="ts-chip-list">
        {methods.map((method) => (
          <button
            aria-pressed={selected.includes(method.value)}
            className="ts-chip"
            key={method.value}
            onClick={() => onToggle(method.value)}
            type="button"
          >
            {method.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function ValidationMessage({ children, tone = "error" }: { children: ReactNode; tone?: "error" | "warning" | "success" }) {
  return <p className={cx("ts-validation", `ts-validation--${tone}`)}>{children}</p>;
}

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: Tone }) {
  return <span className={cx("ts-badge", `ts-badge--${tone}`)}>{children}</span>;
}

export function Divider() {
  return <hr className="ts-divider" />;
}

export function MetadataGroup({ items }: { items: Array<{ label: string; value?: ReactNode }> }) {
  return (
    <dl className="ts-metadata">
      {items.filter((item) => item.value !== undefined && item.value !== "").map((item) => (
        <div key={item.label}>
          <dt className="ts-helper">{item.label}</dt>
          <dd className="ts-meta">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function InlineAlert({ action, children, title, tone = "default" }: { action?: ReactNode; children: ReactNode; title: string; tone?: Exclude<Tone, "archived" | "unavailable"> }) {
  return (
    <div className={cx("ts-alert", `ts-alert--${tone}`)} role={tone === "error" ? "alert" : "status"}>
      <h3 className="ts-title">{title}</h3>
      <p className="ts-body">{children}</p>
      {action}
    </div>
  );
}

export function EmptyState({ action, body, title }: { action?: ReactNode; body: string; title: string }) {
  return (
    <section className="ts-empty">
      <h3 className="ts-title">{title}</h3>
      <p className="ts-body">{body}</p>
      {action}
    </section>
  );
}

export function FilteredEmptyState({ onClear }: { onClear: () => void }) {
  return <EmptyState action={<Button onClick={onClear}>Clear filters</Button>} body="No records match the current filters." title="No matches" />;
}

export function StockIndicator({ quantity, unit }: { quantity: number; unit: string }) {
  const unavailable = quantity <= 0;
  return <Badge tone={unavailable ? "unavailable" : "success"}>{unavailable ? "Unavailable" : `${quantity} ${unit} available`}</Badge>;
}

export function FavoriteControl({ favorite, onToggle }: { favorite: boolean; onToggle: () => void }) {
  return <IconButton icon={favorite ? "★" : "☆"} label={favorite ? "Remove favorite" : "Favorite tea"} onClick={onToggle} selected={favorite} />;
}

export function BrewingMethodChip({ children, selected }: { children: ReactNode; selected?: boolean }) {
  return <span aria-current={selected ? "true" : undefined} className="ts-chip">{children}</span>;
}

export interface TeaListRowCardProps {
  actions?: ReactNode;
  archived?: boolean;
  favorite?: boolean;
  metadata: Array<{ label: string; value?: ReactNode }>;
  name: string;
  stock?: ReactNode;
  unavailable?: boolean;
}

export function TeaListRowCard({ actions, archived, favorite, metadata, name, stock, unavailable }: TeaListRowCardProps) {
  return (
    <article className={cx("ts-card", archived && "ts-card--archived")} aria-label={name}>
      <div className="ts-row-head">
        <h3 className="ts-title">{favorite ? "★ " : ""}{name}</h3>
        <div className="ts-row-actions">{actions}</div>
      </div>
      <MetadataGroup items={metadata} />
      <div className="ts-metadata">
        {stock}
        {unavailable ? <Badge tone="unavailable">Unavailable</Badge> : null}
        {archived ? <Badge tone="archived">Archived</Badge> : null}
      </div>
    </article>
  );
}

export const TeawareListRowCard = TeaListRowCard;

export function TimerDisplay({ currentSteep, remainingTime, state }: { currentSteep?: string; remainingTime: string; state: TimerState }) {
  const stateLabel = state.replace(/-/g, " ");
  return (
    <section className="ts-timer" aria-label="Timer display">
      <Badge tone={state === "running" ? "success" : state === "paused" ? "warning" : state === "save-failed" ? "error" : "default"}>{stateLabel}</Badge>
      <div className="ts-time">{remainingTime}</div>
      {currentSteep ? <p className="ts-body">{currentSteep}</p> : null}
      <span aria-live="polite" className="ts-live-region">Timer state changed to {stateLabel}</span>
    </section>
  );
}

export function TimerControls({ onCancel, onNext, onPause, onStart, state }: { onCancel?: () => void; onNext?: () => void; onPause?: () => void; onStart?: () => void; state: TimerState }) {
  return (
    <div className="ts-timer-controls">
      {state === "setup" ? <Button onClick={onStart} size="large" variant="primary">Start timer</Button> : null}
      {state === "running" ? <Button onClick={onPause} size="large">Pause</Button> : null}
      {state === "paused" ? <Button onClick={onStart} size="large" variant="primary">Resume</Button> : null}
      <Button onClick={onNext}>Next steep</Button>
      <Button onClick={onCancel} variant="destructive">Cancel</Button>
    </div>
  );
}

export function ProgressIndicator({ label, value }: { label: string; value: number }) {
  return <progress aria-label={label} className="ts-progress" max={100} value={value} />;
}

export function SteepList({ currentIndex, steeps }: { currentIndex: number; steeps: Array<{ duration: string; label: string; status?: string }> }) {
  return (
    <ol className="ts-list">
      {steeps.map((steep, index) => (
        <li className={cx("ts-list-item", index === currentIndex && "ts-list-item--current")} key={steep.label} aria-current={index === currentIndex ? "step" : undefined}>
          <strong>{steep.label}</strong> <span className="ts-meta">{steep.duration} {steep.status}</span>
        </li>
      ))}
    </ol>
  );
}

export function SequenceEditor({ children }: { children: ReactNode }) {
  return <section className="ts-panel ts-card" aria-label="Sequence editor">{children}</section>;
}

export function SessionHistoryRow({ date, label, metadata, repeatAction }: { date: string; label: string; metadata: Array<{ label: string; value?: ReactNode }>; repeatAction?: ReactNode }) {
  return (
    <article className="ts-card">
      <div className="ts-row-head">
        <div>
          <h3 className="ts-title">{label}</h3>
          <p className="ts-meta">{date}</p>
        </div>
        {repeatAction}
      </div>
      <MetadataGroup items={metadata} />
    </article>
  );
}

export function SessionDetailSnapshot({ children, title }: { children: ReactNode; title: string }) {
  return <section className="ts-panel ts-card"><h3 className="ts-title">{title}</h3>{children}</section>;
}

export function RepeatSessionPanel({ onRepeat, summary }: { onRepeat: () => void; summary: string }) {
  return <section className="ts-panel ts-card"><p className="ts-body">{summary}</p><Button onClick={onRepeat} variant="primary">Repeat session</Button></section>;
}

export function PrimaryNavigation({ items }: { items: Array<{ current?: boolean; href: string; label: string }> }) {
  return (
    <nav aria-label="Primary navigation" className="ts-nav">
      {items.map((item) => <a aria-current={item.current ? "page" : undefined} className="ts-nav-item" href={item.href} key={item.href}>{item.label}</a>)}
    </nav>
  );
}

export function ConfirmationDialog({
  body,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  destructive,
  onCancel,
  onConfirm,
  open,
  title
}: {
  body: string;
  cancelLabel?: string;
  confirmLabel?: string;
  destructive?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  open: boolean;
  title: string;
}) {
  if (!open) return null;
  return (
    <div className="ts-dialog-backdrop" role="presentation">
      <section aria-modal="true" className="ts-dialog" role="dialog" aria-labelledby="ts-dialog-title">
        <h2 className="ts-title" id="ts-dialog-title">{title}</h2>
        <p className="ts-body">{body}</p>
        <div className="ts-dialog-actions">
          <Button onClick={onCancel}>{cancelLabel}</Button>
          <Button onClick={onConfirm} variant={destructive ? "destructive" : "primary"}>{confirmLabel}</Button>
        </div>
      </section>
    </div>
  );
}

export function SaveFailedState({ onRetry }: { onRetry: () => void }) {
  return <InlineAlert action={<Button onClick={onRetry}>Retry</Button>} title="Save failed" tone="error">Your entered values are still available. Try saving again.</InlineAlert>;
}

export function ImportReplacementConfirmation(props: Omit<Parameters<typeof ConfirmationDialog>[0], "title" | "destructive">) {
  return <ConfirmationDialog {...props} destructive title="Replace imported data?" />;
}
