import './SafetyNote.css';

export function SafetyNote({ note }: { note: string }) {
  return (
    <aside className="safety-note" role="note" aria-label="Safety note">
      <strong>⚠️ Safety Note</strong>
      <p>{note}</p>
    </aside>
  );
}
