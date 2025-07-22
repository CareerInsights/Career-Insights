import React, { useState } from 'react';
import { NavLink } from './NavLink';
import { navItems } from '../features/data/navItems';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredItems = navItems.filter(item => !item.requiresAuth || isLoggedIn);
  const leftItems = filteredItems.slice(0, 2);   // Método, Conócenos
  const rightItems = filteredItems.slice(2);     // Servicio, Contacto

  return (
    <nav className="w-full border-b-2 border-border-navbar bg-white z-50">
      <div className="hidden md:flex items-center justify-center px-4 py-4">
        {/* Left Side */}
        <div className="flex space-x-6">
          {leftItems.map(item => (
            <NavLink key={item.name} to={item.href} type={item.type}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Center - Logo */}
        <Link to="/" className="flex items-center space-x-2 mx-12">
          <span className="text-2xl md:text-4xl font-bold text-career font-chloe">
            Career Insights
          </span>
          <div className="flex space-x-1">
            <span className="w-3 h-3 bg-logo-uno rounded-full"></span>
            <span className="w-3 h-3 bg-logo-dos rounded-full"></span>
            <span className="w-3 h-3 bg-logo-tres rounded-full"></span>
            <span className="w-3 h-3 bg-logo-cuatro rounded-full"></span>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex space-x-6">
          {rightItems.map(item => (
            <NavLink key={item.name} to={item.href} type={item.type}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-career font-chloe">
            Career Insights
          </span>
          <div className="flex space-x-1">
            <span className="w-3 h-3 bg-logo-uno rounded-full"></span>
            <span className="w-3 h-3 bg-logo-dos rounded-full"></span>
            <span className="w-3 h-3 bg-logo-tres rounded-full"></span>
            <span className="w-3 h-3 bg-logo-cuatro rounded-full"></span>
          </div>
        </Link>
        {/* Hamburger */}
        <button
          className="flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border-navbar px-4 pb-4">
          <div className="flex flex-col space-y-2 mt-2">
            {filteredItems.map(item => (
              <NavLink
                key={item.name}
                to={item.href}
                type={item.type}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
