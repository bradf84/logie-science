import { Link } from 'react-router-dom';
import iconAtom from '../assets/icon-atom-refined.svg';
import './Header.css';

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-logo">
        <img src={iconAtom} alt="" width={40} height={40} />
        <span>Logie Science</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link to="/experiments">Experiments</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/facts">Facts</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
