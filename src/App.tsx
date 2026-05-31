import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Experiments } from './pages/Experiments';
import { ExperimentDetailPage } from './pages/ExperimentDetailPage';
import { HowItWorks } from './pages/HowItWorks';
import { Facts } from './pages/Facts';
import { About } from './pages/About';
import { NewtonsCradle } from './pages/NewtonsCradle';
import './pages/Home.css';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/experiments/:id" element={<ExperimentDetailPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/about" element={<About />} />
        <Route path="/newtons-cradle" element={<NewtonsCradle />} />
      </Routes>
    </BrowserRouter>
  );
}
