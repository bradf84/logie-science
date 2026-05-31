import { Link } from 'react-router-dom';
import type { Topic } from '../data/topics';
import './HowItWorksCard.css';

export function HowItWorksCard({ topic }: { topic: Topic }) {
  return (
    <div className="card how-card">
      <h3>{topic.title}</h3>
      <p className="how-definition">{topic.definition}</p>
      <p className="how-example"><strong>Example:</strong> {topic.example}</p>
      <Link to={`/experiments/${topic.experimentId}`} className="button-primary how-link">
        Try the experiment →
      </Link>
    </div>
  );
}
