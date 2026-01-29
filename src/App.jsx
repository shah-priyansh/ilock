import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import HeroSection from './components/HeroSection/HeroSection';
import NewHeroSection from './components/HeroSection/NewHeroSection';
import { trackPageView } from './utils/analytics';
import { useEffect } from 'react';

function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <PageTracker />
      <div className="App">
        <Routes>
          <Route path="/" element={<NewHeroSection />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/sell-luxury-watches" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
