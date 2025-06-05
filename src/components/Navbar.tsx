import React from 'react';
import { NavLink } from './NavLink';
import { navItems } from '../features/chaside/data/navItems';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isLoggedIn } = useAuth();

  const filteredItems = navItems.filter(item => !item.requiresAuth || isLoggedIn);

  const leftItems = filteredItems.slice(0, 2);
  const rightItems = filteredItems.slice(2);

  return (
    <nav className="flex items-center justify-center px-8 py-4 border-t-2 border-b-2 border-pink-400">
      {/* Left Side */}
      <div className="flex space-x-8">
        {leftItems.map(item => (
          <NavLink key={item.name} to={item.href} type={item.type}>
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Center - Logo */}
      {/* <div className="flex items-center space-x-2 mx-12">
        <div className="flex flex-col  space-y-2">
  <span className="text-4xl font-bold text-career font-chloe items-start text-center">
    Career <br /> Insights
  </span>

  <div className="flex justify-center items-center space-x-1">
    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
    <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
    <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
  </div>
</div>
      </div> */}
      <div className="flex items-center space-x-2 mx-12">
      <span className="text-4xl font-bold text-career font-chloe">
    Career Insights
  </span>

  <div className="flex space-x-1">
    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
    <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
    <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
  </div>
  </div>

      {/* Right Side */}
      <div className="flex space-x-8">
        {rightItems.map(item => (
          <NavLink key={item.name} to={item.href} type={item.type}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
