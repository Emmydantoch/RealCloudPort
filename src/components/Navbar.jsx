import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const { isLight, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 glass py-5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tighter">Daniel Emmanuel</div>
        <div className="flex items-center gap-8 text-sm font-medium nav-items">
          <a href="#home" className="hover:text-pink-400 transition">Home</a>
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
          <a href="#projects" className="hover:text-pink-400 transition">Work</a>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-white/10 transition"
          >
            <i className={`fa-solid ${isLight ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
