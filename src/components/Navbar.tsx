import React from 'react';
import { NavLink } from './NavLink';
import { navItems } from '../features/data/navItems';
import type { NavItem } from '../features/data/navItems';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [isLoginOpen, setLoginOpen] = useState(false);

  const filteredItems = navItems.filter(item => !item.requiresAuth || isLoggedIn);
  // Orden fijo para los enlaces
  const orderedItems = [
    filteredItems.find(item => item.name === 'MÉTODO'),
    filteredItems.find(item => item.name === 'CONÓCENOS'),
    filteredItems.find(item => item.name === 'SERVICIOS'),
    filteredItems.find(item => item.name === 'CONTACTO'),
  ].filter(Boolean);

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 border-b-2 border-border-navbar w-full">
        {/* Logo a la izquierda */}
        <Link to={"/"} className="flex flex-col items-start justify-center min-w-[160px]">
          <span className="text-3xl font-bold text-career font-chloe leading-tight w-full text-left">
            Career Insights
          </span>
          <div className="flex justify-center w-full mt-1">
            <span className="w-3 h-3 bg-logo-uno rounded-full mx-0.5"></span>
            <span className="w-3 h-3 bg-logo-dos rounded-full mx-0.5"></span>
            <span className="w-3 h-3 bg-logo-tres rounded-full mx-0.5"></span>
            <span className="w-3 h-3 bg-logo-cuatro rounded-full mx-0.5"></span>
          </div>
        </Link>
        {/* Enlaces a la derecha */}
        <div className="flex items-center space-x-8">
          {(orderedItems.filter((item): item is NavItem => !!item)).map(item => (
            <NavLink key={item.name} to={item.href} type={item.type}>
              {item.name}
            </NavLink>
          ))}
          <button
            className="ml-4 px-6 py-2 bg-gradient-to-r from-[#FBC6B4] to-[#e7b6e0] text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform text-base"
            style={{ boxShadow: '0 2px 8px 0 #fbc6b433' }}
            onClick={() => setLoginOpen(true)}
          >
            Iniciar sesión
          </button>
        </div>
      </nav>
      <LoginModal open={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
};

export default Navbar;
