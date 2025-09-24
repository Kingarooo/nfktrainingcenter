import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import logoNfk from '../../assets/Logo_NFK.jpg';
import { useNavigate, useLocation } from 'react-router-dom';


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation to the Schedules page
  const navigateToSchedules = () => {
    navigate('/schedules');
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Modalidades", href: "#modalidades", onClick: (e) => goTo(e, 'modalidades') },
    { name: "Horários", href: "#horarios", onClick: navigateToSchedules },
    { name: "Contactos", href: "#contactos", onClick: (e) => goTo(e, 'contactos') }
  ];

  return (
    <>
      <Navbar 
        shouldHideOnScroll
        className="bg-nfk-black/20 backdrop-blur"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex flex-col justify-center items-center w-8 h-8 z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`relative block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
            }`}></span>
            <span className={`relative block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`relative block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
            }`}></span>
          </button>
        </NavbarContent>

        {/* Center logo for both mobile and desktop */}
        <NavbarContent justify="center">
          <NavbarBrand onClick={() => navigate('/')} className="cursor-pointer">
            <img src={logoNfk} alt="Logo" className="h-[100px] w-[100px] object-cover rounded-full" />
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop menu */}
        <NavbarContent className="hidden sm:flex gap-20" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link
                color="foreground"
                href={item.href}
                onClick={item.onClick}
                className={`hover:text-nfk-red transition-colors duration-200 font-bebas text-2xl bg-white/10 hover:bg-white/25 rounded-lg px-6 py-3 max-w-40 ${
                  item.name === "Horários" && location.pathname === '/schedules' 
                    ? 'text-nfk-red bg-white/25' 
                    : ''
                }`}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent className="hidden sm:flex" justify="end">
          <NavbarBrand onClick={() => navigate('/')} className="cursor-pointer">
            <img src={logoNfk} alt="Logo" className="h-[100px] w-[100px] object-cover rounded-full" />
          </NavbarBrand>
        </NavbarContent>
      </Navbar>

      {/* Mobile menu overlay */}
      <div className={`fixed top-0 left-0 w-full h-1/3 z-40 sm:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="w-full h-full bg-nfk-black/70 backdrop-blur-sm">
          {/* Close button in top-left corner */}
          <div className={`absolute top-8 left-6 z-50 transition-all duration-300 delay-150 ${
            isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="relative flex flex-col justify-center items-center w-8 h-8"
              aria-label="Close menu"
            >
              <span className="absolute block w-6 h-0.5 bg-white rotate-45 translate-y-2 transition-all duration-300"></span>
              <span className="absolute block w-6 h-0.5 bg-white opacity-0 transition-all duration-300"></span>
              <span className="absolute block w-6 h-0.5 bg-white -rotate-45 translate-y- transition-all duration-300"></span>
            </button>
          </div>
          
          <div className="flex flex-col justify-center items-center h-full space-y-6">
            {menuItems.map((item, index) => (
              <a
                key={`mobile-${index}`}
                href={item.href}
                onClick={item.onClick}
                className={`font-bebas text-3xl text-white hover:text-nfk-red transition-all duration-300 ${
                  isMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : '0ms'
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
