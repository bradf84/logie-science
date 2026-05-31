import type { Experiment } from '../data/experiments';
import { SafetyNote } from './SafetyNote';
import './ExperimentDetail.css';

export function ExperimentDetailView({ experiment }: { experiment: Experiment }) {
  return (
    <article className="experiment-detail">
      <h1>{experiment.title}</h1>
      <p className="experiment-desc">{experiment.description}</p>

      <div className="experiment-meta">
        <span className="chip chip-difficulty">{experiment.difficulty}</span>
        <span className="chip chip-time">⏱ {experiment.time}</span>
        {experiment.adultHelp && <span className="chip chip-adult">👨‍👩‍👧 Adult help needed</span>}
      </div>

      <section>
        <h2>Materials</h2>
        <ul>{experiment.materials.map((m, i) => <li key={i}>{m}</li>)}</ul>
      </section>

      <section>
        <h2>Steps</h2>
        <ol>{experiment.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
      </section>

      <section>
        <h2>What to Notice</h2>
        <ul>{experiment.notice.map((n, i) => <li key={i}>{n}</li>)}</ul>
      </section>

      <section>
        <h2>How It Works</h2>
        <p>{experiment.howItWorks}</p>
      </section>

      <SafetyNote note={experiment.safetyNote} />
    </article>
  );
}
