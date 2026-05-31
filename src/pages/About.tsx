import { PageLayout } from '../components/PageLayout';
import logoSvg from '../assets/logo-full-refined.svg';

export function About() {
  return (
    <PageLayout>
      <section className="section" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
        <img src={logoSvg} alt="Logie Science logo" style={{ maxWidth: 400, margin: '0 auto 2rem' }} />
        <h1>About Logie Science</h1>
        <p style={{ fontSize: '1.15rem' }}>
          Logie Science is a place for curious kids to ask questions, try experiments,
          notice what happens and explain what they learned.
        </p>
        <p style={{ marginTop: '1.5rem', padding: '1.25rem', background: '#FFF3E0', borderRadius: 'var(--radius-card)' }}>
          ⚠️ Some experiments need adult help. Always read the safety note before starting.
        </p>
      </section>
    </PageLayout>
  );
}
