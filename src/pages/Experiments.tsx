import { PageLayout } from '../components/PageLayout';
import { ExperimentCard } from '../components/ExperimentCard';
import { experiments } from '../data/experiments';

export function Experiments() {
  return (
    <PageLayout>
      <section className="section">
        <h1>Experiments</h1>
        <p style={{ textAlign: 'center', color: 'var(--muted)' }}>
          Pick an experiment, gather your materials, and discover how it works!
        </p>
        <div className="grid">
          {experiments.map(e => <ExperimentCard key={e.id} experiment={e} />)}
        </div>
      </section>
    </PageLayout>
  );
}
