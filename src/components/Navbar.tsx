import React from 'react';
import { NavLink } from './NavLink';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-center px-8 py-4 border-t-2 border-b-2 border-pink-400">
      {/* Left Side - Menu Items */}
      <div className="flex space-x-8">
        <NavLink to="metodo">MÉTODO</NavLink>
        <NavLink to="conocenos">CONÓCENOS</NavLink>
      </div>

      {/* Center - Logo with Dots */}
      <div className="flex items-center space-x-2 mx-12">
        <span className="text-2xl font-bold text-pink-400">Career Insights</span>
        <div className="flex space-x-1">
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
          <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
        </div>
      </div>

      {/* Right Side - Menu Items */}
      <div className="flex space-x-8">
        <NavLink to="servicios">SERVICIOS</NavLink>
        <NavLink to="contacto">CONTACTO</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;