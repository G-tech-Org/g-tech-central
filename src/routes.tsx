import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@pages/About';
import Services from '@pages/Services';
import Contact from '@pages/Contact';
import Locations from '@pages/Locations';
import FAQ from '@pages/FAQ';
import Portfolio from '@pages/Portfolio';
import NotFound from '@pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
