import React from 'react';

function About() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
                {/* Left Side: Avatar with gradient ring */}
                <div className="md:col-span-5 flex justify-center sticky top-24">
                    <div className="relative group">
                        {/* Glow Behind */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        {/* Avatar Image Wrapper */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden p-[3px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500">
                            <img
                                src="/Profile.png"
                                alt="Chakrit Normsatkul"
                                className="w-full h-full object-cover rounded-full bg-slate-900 border-4 border-slate-905"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text, Education & Languages */}
                <div className="md:col-span-7 space-y-6 text-left">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">
                            ABOUT ME
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            A software developer who builds with intelligence.
                        </h2>
                    </div>

                    <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
                        <p>
                            Software Developer and Artificial Intelligence student with knowledge of programming, web development, and machine learning fundamentals. Experienced in developing web applications and collaborating in software development projects.
                        </p>
                        <p>
                            Passionate about technology, continuous learning, and building solutions that create real-world value. Seeking opportunities to grow as a Software Engineer while expanding expertise in AI and software development.
                        </p>
                    </div>

                    {/* Cards Container */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {/* University / Education Card */}
                        <div className="glass rounded-2xl p-5 flex items-start gap-4 border border-white/5 shadow-xl">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Walailak University</h4>
                                <p className="text-[11px] text-blue-400 font-medium mt-0.5">Computer Engineering & AI</p>
                                <p className="text-[11px] text-slate-400 mt-2 font-semibold">
                                    GPAX: 3.23 <span className="text-slate-500 font-normal">(2021 - 2024)</span>
                                </p>
                            </div>
                        </div>

                        {/* Languages Card */}
                        <div className="glass rounded-2xl p-5 flex items-start gap-4 border border-white/5 shadow-xl">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 7.31 16.5 1 16.5m10.75-11.5A12.008 12.008 0 011 9.75M1 5h12m-6 0v2.25"></path>
                                </svg>
                            </div>
                            <div className="space-y-1.5 w-full">
                                <h4 className="font-bold text-white text-sm">Languages</h4>
                                <div className="text-[11px] space-y-1 text-slate-300 font-semibold">
                                    <div className="flex justify-between">
                                        <span>Thai</span>
                                        <span className="text-slate-500 font-normal">Native</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>English</span>
                                        <span className="text-slate-500 font-normal">Intermediate</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Arabic</span>
                                        <span className="text-slate-500 font-normal">Basic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hobbies / Soft Concepts */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        <span className="glass px-3 py-1 rounded-full text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            Agile Scrum Workflow
                        </span>
                        <span className="glass px-3 py-1 rounded-full text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            AI Student
                        </span>
                        <span className="glass px-3 py-1 rounded-full text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                            Full Stack Web Dev
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
