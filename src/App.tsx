import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary min-h-screen flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 flex-grow"> {/* Center the content */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
