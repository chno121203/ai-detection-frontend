import React from 'react';

function Navbar({ onContactClick }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-4 px-4 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-sm font-extrabold text-white tracking-tight">CN</span>
          </div>
          <span className="hidden sm:inline text-sm font-bold tracking-widest text-slate-200 group-hover:text-white uppercase transition-colors">
            Chakrit
          </span>
        </a>

        {/* Floating Capsule Menu */}
        <nav className="glass rounded-full px-1 py-0.5 md:px-1.5 md:py-1 flex items-center gap-0.5 md:gap-1">
          <a
            href="#"
            className="px-2.5 md:px-4 py-1 md:py-1.5 rounded-full text-[11px] md:text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-2.5 md:px-4 py-1 md:py-1.5 rounded-full text-[11px] md:text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="px-2.5 md:px-4 py-1 md:py-1.5 rounded-full text-[11px] md:text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="px-2.5 md:px-4 py-1 md:py-1.5 rounded-full text-[11px] md:text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all duration-300"
          >
            Experience
          </a>
          <a
            href="#timeline"
            className="px-2.5 md:px-4 py-1 md:py-1.5 rounded-full text-[11px] md:text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all duration-300"
          >
            Project
          </a>
        </nav>

        {/* Action Button */}
        <div>
          <button
            onClick={onContactClick}
            className="glass rounded-full px-4 py-1.5 md:px-5 md:py-2 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;