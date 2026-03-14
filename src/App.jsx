import Landing from './pages/Landing/LandingPage';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import ScrollToTop from './components/shared/ScrollToTop';
import Schedules from './pages/Schedules/SchedulesPage';
import CoachPage from './pages/Coaches/CoachPage';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SportPage from './pages/Sports/SportPage';
function App() {
  return (
    <Router>
      <div className="bg-nfk-black text-nfk-white font-inter">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/horarios" element={<Schedules />} />
          <Route path="/" element={<Landing />} />
          <Route path="/treinador/:id" element={<CoachPage />} />
          <Route path="/modalidade/:name" element={<SportPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;