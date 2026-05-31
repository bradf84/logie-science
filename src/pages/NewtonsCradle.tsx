import { PageLayout } from '../components/PageLayout';
import { SafetyNote } from '../components/SafetyNote';
import newtonsCradleGif from '../assets/newtons_cradle_clean_no_overlap.gif';

export function NewtonsCradle() {
  return (
    <PageLayout>
      <article className="section" style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1>Newton's Cradle</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--muted)' }}>
          A desk toy that shows how energy and momentum travel through objects.
        </p>

        <img
          src={newtonsCradleGif}
          alt="Animation of a Newton's Cradle showing balls transferring energy"
          style={{ width: '100%', borderRadius: 'var(--radius-xl)', margin: '2rem 0' }}
        />

        <section style={{ marginTop: '2rem' }}>
          <h2>What is it?</h2>
          <p>
            Newton's Cradle is a row of metal balls hanging from strings. When you lift one ball
            and let it swing, it hits the others — and the ball on the opposite end flies out.
            The balls in the middle barely move at all!
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>How does it work?</h2>
          <p>
            When the first ball hits, its <strong>energy</strong> and <strong>momentum</strong> travel
            through the row of balls like a wave. The last ball receives that energy and swings outward.
          </p>
          <p>This demonstrates two big ideas in physics:</p>
          <ul>
            <li><strong>Conservation of energy</strong> — energy isn't lost, it transfers from one ball to the next.</li>
            <li><strong>Conservation of momentum</strong> — the movement passes through without the middle balls needing to move much.</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Why does it eventually stop?</h2>
          <p>
            In a perfect world it would swing forever. But in real life, a tiny bit of energy
            turns into heat and sound each time the balls collide. That's why the swings get
            smaller and smaller until they stop.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Try this!</h2>
          <ul>
            <li>Lift <strong>one</strong> ball — one ball flies out the other side.</li>
            <li>Lift <strong>two</strong> balls — two fly out.</li>
            <li>Lift <strong>three</strong> balls — three fly out!</li>
          </ul>
          <p>The number of balls that swing out always matches the number you release. That's conservation of momentum in action.</p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Real-world examples</h2>
          <ul>
            <li>A cue ball hitting a line of billiard balls</li>
            <li>Shock waves travelling through the ground during an earthquake</li>
            <li>A row of dominoes (energy transfer, though they don't bounce back)</li>
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2>Key vocabulary</h2>
          <ul>
            <li><strong>Kinetic energy</strong> — the energy something has because it's moving.</li>
            <li><strong>Momentum</strong> — how hard it is to stop a moving object (mass × speed).</li>
            <li><strong>Elastic collision</strong> — a collision where almost no energy is lost.</li>
          </ul>
        </section>

        <SafetyNote note="Newton's Cradle balls are heavy metal. Don't swing them at fingers or let young children play unsupervised." />
      </article>
    </PageLayout>
  );
}
