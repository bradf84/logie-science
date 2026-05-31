import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { ExperimentDetailView } from '../components/ExperimentDetail';
import { experiments } from '../data/experiments';

export function ExperimentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const experiment = experiments.find(e => e.id === id);

  if (!experiment) {
    return (
      <PageLayout>
        <section className="section" style={{ textAlign: 'center' }}>
          <h1>Experiment not found</h1>
          <Link to="/experiments" className="button-primary">Back to experiments</Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <ExperimentDetailView experiment={experiment} />
      <p style={{ textAlign: 'center', padding: '2rem' }}>
        <Link to="/experiments" className="button-secondary">← Back to all experiments</Link>
      </p>
    </PageLayout>
  );
}
