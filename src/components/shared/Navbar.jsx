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
  // Generalized goTo function
  const goTo = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Navbar shouldHideOnScroll scrollThreshold={8} classNames={{ base: 'bg-nfk-black/80 backdrop-blur' }}>
      <NavbarBrand onClick={() => navigate('/')} className="cursor-pointer flex justify-center items-center">
        <img src={logoNfk} alt="Logo" style={{ height: 100, width: 100, objectFit: 'cover', borderRadius: '50%' }} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-20" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#modalidades" onClick={e => goTo(e, 'modalidades')} className="hover:text-nfk-red transition-colors duration-200 font-bebas text-2xl bg-white/5 hover:bg-white/15 rounded-lg px-6 py-3 max-w-40">
            Modalidades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#horarios" onClick={navigateToSchedules} className={`font-bebas text-2xl rounded-lg px-6 py-3 transition-colors duration-200 bg-white/5 hover:bg-white/15 max-w-40 ${location.pathname === '/schedules' ? 'text-nfk-red bg-white/15' : 'hover:text-nfk-red'}` }>
            Horários
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contactos" onClick={e => goTo(e, 'contactos')} className="hover:text-nfk-red transition-colors duration-200 font-bebas text-2xl bg-white/5 hover:bg-white/15 rounded-lg px-6 py-3 max-w-40">
            Encontra-nos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent onClick={() => navigate('/')} className="cursor-pointer flex justify-center items-center" justify="end">
        <img src={logoNfk} alt="Logo" style={{ height: 100, width: 100, objectFit: 'cover', borderRadius: '50%' }} />
      </NavbarContent>
    </Navbar>
  );
}
