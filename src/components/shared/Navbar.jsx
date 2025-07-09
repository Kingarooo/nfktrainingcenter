import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import logoNfk from '../../assets/Logo_NFK.jpg';
import { useNavigate, useLocation } from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation to the Schedules page
  const navigateToSchedules = () => {
    navigate('/schedules');
  };
  // Function to go to landing and scroll to modalidades
  const goToModalidades = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('modalidades');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById('modalidades')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Navbar shouldHideOnScroll={false} scrollThreshold={32}>
      <NavbarBrand onClick={() => navigate('/')} className="cursor-pointer flex justify-center items-center">
        <img src={logoNfk} alt="Logo" style={{ height: 80, width: 80, objectFit: 'cover', borderRadius: '50%' }} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#modalidades" onClick={goToModalidades} className="hover:text-nfk-red transition-colors duration-200 font-bebas text-2xl bg-white/5 hover:bg-white/15 rounded-lg px-6 py-3">
            Modalidades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#horarios" onClick={navigateToSchedules} className={`font-bebas text-2xl rounded-lg px-6 py-3 transition-colors duration-200 bg-white/5 hover:bg-white/15 ${location.pathname === '/schedules' ? 'text-nfk-red bg-white/15' : 'hover:text-nfk-red'}` }>
            Horários
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#localizacao" onClick={e => { e.preventDefault(); document.getElementById('contactos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-nfk-red transition-colors duration-200 font-bebas text-2xl bg-white/5 hover:bg-white/15 rounded-lg px-6 py-3">
            Localização
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contactos" onClick={e => { e.preventDefault(); document.getElementById('contactos')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-nfk-red transition-colors duration-200 font-bebas text-2xl bg-white/5 hover:bg-white/15 rounded-lg px-6 py-3">
            Contactos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent onClick={() => navigate('/')} className="cursor-pointer flex justify-center items-center" justify="end">
        <img src={logoNfk} alt="Logo" style={{ height: 80, width: 80, objectFit: 'cover', borderRadius: '50%' }} />
      </NavbarContent>
    </Navbar>
  );
}
