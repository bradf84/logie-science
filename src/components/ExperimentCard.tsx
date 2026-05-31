import { Link } from 'react-router-dom';
import type { Experiment } from '../data/experiments';
import './ExperimentCard.css';

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <Link to={`/experiments/${experiment.id}`} className="card experiment-card">
      <h3>{experiment.title}</h3>
      <p>{experiment.description}</p>
      <div className="experiment-meta">
        <span className="chip chip-difficulty">{experiment.difficulty}</span>
        <span className="chip chip-time">⏱ {experiment.time}</span>
        {experiment.adultHelp && <span className="chip chip-adult">👨‍👩‍👧 Adult help</span>}
      </div>
    </Link>
  );
}
