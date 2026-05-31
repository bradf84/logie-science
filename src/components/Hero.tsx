import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-atom-illustration-refined.svg';

export function Hero() {
  return (
    <section className="site-hero">
      <div className="site-hero__copy">
        <h1 className="site-hero__title">Ask. Try. Notice. Explain.</h1>
        <p className="site-hero__subtitle">
          Kid-friendly science experiments with clear steps and simple explanations of how they work.
        </p>
        <div className="site-hero__actions">
          <Link to="/experiments" className="button button--primary">Start exploring</Link>
          <Link to="/experiments" className="button button--secondary">See experiments</Link>
        </div>
      </div>
      <div className="site-hero__art">
        <img src={heroImg} alt="Colourful atom illustration" />
      </div>
    </section>
  );
}
