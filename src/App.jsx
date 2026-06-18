import React, { useState } from 'react';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import PersonalProjects from "./components/PersonalProjects";
import ProjectDetails from "./components/ProjectDetails";
import ContactModal from "./components/ContactModal";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen text-slate-100 selection:bg-blue-500/30 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Main Page Content */}
      <main>
        <Hero onContactClick={() => setIsContactOpen(true)} />
        <About />
        <WorkExperience />
        <Skills />
        <PersonalProjects />
        <ProjectDetails />
      </main>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 text-slate-500 text-xs tracking-wider uppercase">
        <p>© 2026 Chakrit Normsatkul. All rights reserved.</p>
      </footer>

      {/* Floating Chat Bubble Button */}
      <button
        onClick={() => setIsContactOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Open Contact Form"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      </button>

      {/* Contact Modal Drawer */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;