import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroSection />} />
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
