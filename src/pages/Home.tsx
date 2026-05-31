import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { Hero } from '../components/Hero';
import { ExperimentCard } from '../components/ExperimentCard';
import { experiments } from '../data/experiments';
import { facts } from '../data/facts';

export function Home() {
  const featured = experiments.slice(0, 3);
  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  return (
    <PageLayout>
      <Hero />

      <section className="section">
        <h2>Featured Experiments</h2>
        <div className="grid">
          {featured.map(e => <ExperimentCard key={e.id} experiment={e} />)}
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/experiments" className="button-primary">See all experiments</Link>
        </p>
      </section>

      <section className="section">
        <h2>How Logie Science Works</h2>
        <div className="steps-row">
          {['Ask a question', 'Run the experiment', 'Notice what happens', 'Explain how it works'].map((step, i) => (
            <div key={i} className="step-item">
              <span className="step-number">{i + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>🧪 Science Fact of the Day</h2>
        <div className="card" style={{ maxWidth: 600, margin: '0 auto' }}>
          <h3>{randomFact.title}</h3>
          <p>{randomFact.fact}</p>
        </div>
      </section>

      <section className="section safety-reminder">
        <h2>⚠️ Safety Reminder</h2>
        <p>Some experiments need adult help. Always read the safety note before starting.</p>
      </section>
    </PageLayout>
  );
}
