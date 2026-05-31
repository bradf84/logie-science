import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { HowItWorksCard } from '../components/HowItWorksCard';
import { topics } from '../data/topics';

export function HowItWorks() {
  return (
    <PageLayout>
      <section className="section">
        <h1>How It Works</h1>
        <p style={{ textAlign: 'center', color: 'var(--muted)' }}>
          Simple explanations of the science behind the experiments.
        </p>
        <div className="grid">
          {topics.map(t => <HowItWorksCard key={t.id} topic={t} />)}
        </div>
      </section>

      <section className="section">
        <h2>Deep Dives</h2>
        <div className="grid">
          <Link to="/newtons-cradle" className="card">
            <h3>Newton's Cradle</h3>
            <p style={{ color: 'var(--muted)' }}>How energy and momentum travel through a row of balls.</p>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
