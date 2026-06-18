import React from 'react';

function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 max-w-6xl mx-auto gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
                <h2 className="text-sm uppercase tracking-widest text-blue-400 font-semibold">
                    Software Engineer & AI Enthusiast
                </h2>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                    Chakrit <span className="text-gradient">Normsatkul</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                    Recent graduate in Computer Engineering and Artificial Intelligence with experience in computer vision and web development. Developed a flower bloom detection system for analyzing harvest timing, with hands-on experience in object labeling and dataset preparation. Skilled in integrating trained machine learning models into web applications
                </p>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center">
                    {/* Using the generated avatar image */}
                    <img
                        src="/portfolio_avatar.png"
                        alt="Profile"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-[50%_15%] border-4 border-slate-800 shadow-2xl"
                        onError={(e) => {
                            e.target.src = "/Profile.png";
                        }}
                    />
                </div>
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
        </section>
    );
}

export default Hero;
