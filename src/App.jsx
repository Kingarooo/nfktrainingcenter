import Landing from './pages/Landing';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import ScrollToTop from './components/shared/ScrollToTop';
import Schedules from './pages/Schedules';
import CoachProfile from './pages/CoachProfile';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CoachProfile from './pages/CoachPage';
function App() {
  return (
    <Router>
      <div className="bg-nfk-black text-nfk-white font-inter">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/" element={<Landing />} />
          <Route path="/coach/:id" element={<CoachProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;