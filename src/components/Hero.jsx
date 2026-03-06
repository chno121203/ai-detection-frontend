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
                    I'm a passionate developer focused on building intelligent web applications and
                    interactive experiences. Currently exploring the intersection of AI and frontend
                    technologies to create tools that make an impact.
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
            </div>
        </section>
    );
}

export default Hero;
