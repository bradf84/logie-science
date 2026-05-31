import { useState } from 'react';
import { Link } from 'react-router-dom';
import iconAtom from '../assets/icon-atom-refined.svg';
import './Header.css';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        <img src={iconAtom} alt="" width={40} height={40} />
        <span>Logie Science</span>
      </Link>
      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="nav-toggle__bar" />
        <span className="nav-toggle__bar" />
        <span className="nav-toggle__bar" />
      </button>
      <nav aria-label="Main navigation" className={open ? 'nav-open' : ''}>
        <Link to="/experiments" onClick={() => setOpen(false)}>Experiments</Link>
        <Link to="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
        <Link to="/facts" onClick={() => setOpen(false)}>Facts</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
      </nav>
    </header>
  );
}
