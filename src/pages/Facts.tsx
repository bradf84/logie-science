import { PageLayout } from '../components/PageLayout';
import { FactCard } from '../components/FactCard';
import { facts } from '../data/facts';

const categories = ['Space', 'Animals', 'Weather', 'Chemistry', 'Forces', 'Human Body'] as const;

export function Facts() {
  return (
    <PageLayout>
      <section className="section">
        <h1>Science Facts</h1>
        <p style={{ textAlign: 'center', color: 'var(--muted)' }}>
          Fun facts to surprise your friends and family!
        </p>
        {categories.map(cat => (
          <div key={cat} style={{ marginBottom: '2rem' }}>
            <h2>{cat}</h2>
            <div className="grid">
              {facts.filter(f => f.category === cat).map(f => <FactCard key={f.id} fact={f} />)}
            </div>
          </div>
        ))}
      </section>
    </PageLayout>
  );
}
