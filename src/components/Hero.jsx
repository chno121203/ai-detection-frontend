import React from 'react';

function Hero({ onContactClick }) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 max-w-5xl mx-auto gap-8 relative overflow-hidden">
            {/* Top Status Capsule */}
            <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-wider text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>SOFTWARE DEVELOPER</span>
            </div>

            {/* Giant Title */}
            <div className="space-y-4">
                <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white uppercase select-none leading-none">
                    CHAKRIT NORMSATKUL
                </h1>
                {/* Gradient separator line */}
                <div className="w-48 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 mx-auto rounded-full mt-2"></div>
            </div>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-bold text-slate-200 tracking-tight">
                Software Developer & AI Specialist
            </h2>

            {/* Bio Description */}
            <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Software Developer and Artificial Intelligence student with knowledge of programming, web development, and machine learning fundamentals. Experienced in developing web applications and collaborating in software development projects. Passionate about technology, continuous learning, and building solutions that create real-world value. Seeking opportunities to grow as a Software Engineer while expanding expertise in AI and software development.
            </p>

            {/* Small Badges */}
            <div className="flex flex-wrap justify-center gap-3">
                <span className="glass px-3.5 py-1 rounded-full text-xs font-semibold text-slate-400 tracking-wide">
                    WALAILAK UNIVERSITY
                </span>
                <span className="glass px-3.5 py-1 rounded-full text-xs font-semibold text-slate-400 tracking-wide">
                    CLASS OF 2024
                </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a
                    href="#timeline"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 cursor-pointer"
                >
                    View My Work
                </a>
                <a
                    href="#about"
                    className="px-6 py-3 rounded-full glass border border-white/10 hover:bg-white/5 text-sm font-semibold tracking-wide text-slate-200 hover:text-white transition-all duration-300 cursor-pointer"
                >
                    About Me
                </a>
                <button
                    onClick={onContactClick}
                    className="px-6 py-3 rounded-full glass border border-white/10 hover:bg-white/5 text-sm font-semibold tracking-wide text-slate-200 hover:text-white transition-all duration-300 cursor-pointer"
                >
                    Get In Touch
                </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-8 text-slate-400">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors p-2 glass rounded-full"
                    title="GitHub"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                </a>
                <a
                    href="mailto:2003chakrit@gmail.com"
                    className="hover:text-white transition-colors p-2 glass rounded-full"
                    title="Email"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </a>
                <a
                    href="tel:0928482232"
                    className="hover:text-white transition-colors p-2 glass rounded-full"
                    title="Phone"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                </a>
            </div>

            {/* Bottom Arrow Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
}

export default Hero;
