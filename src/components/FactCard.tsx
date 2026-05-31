import type { ScienceFact } from '../data/facts';
import './FactCard.css';

const categoryColors: Record<string, string> = {
  Space: 'var(--deep-blue)',
  Animals: 'var(--lab-teal)',
  Weather: 'var(--electric-blue)',
  Chemistry: 'var(--plasma-pink)',
  Forces: 'var(--reaction-orange)',
  'Human Body': 'var(--spark-yellow)',
};

export function FactCard({ fact }: { fact: ScienceFact }) {
  return (
    <div className="card fact-card">
      <span className="fact-category" style={{ background: categoryColors[fact.category] }}>
        {fact.category}
      </span>
      <h3>{fact.title}</h3>
      <p>{fact.fact}</p>
    </div>
  );
}
