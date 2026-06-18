import React from 'react';

function Navbar({ onContactClick }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-4 px-4 md:px-12 transition-all duration-300">
      <div className="w-full flex justify-between items-center h-16">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <span className="text-sm font-extrabold text-white tracking-tight">CN</span>
          </div>
          <span className="hidden sm:inline text-sm font-bold tracking-widest text-slate-200 group-hover:text-white uppercase transition-colors">
            Chakrit Normsatkul
          </span>
        </a>

        {/* Floating Capsule Menu */}
        <nav className="glass rounded-full p-1 flex items-center gap-0.5 md:gap-1 bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20 overflow-x-auto max-w-[70%] sm:max-w-none no-scrollbar">
          <a
            href="#"
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#skills"
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
          >
            Projects
          </a>
          <a
            href="#timeline"
            className="px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
          >
            AI Project
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