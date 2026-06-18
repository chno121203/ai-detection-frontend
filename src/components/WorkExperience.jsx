import React from 'react';

function WorkExperience() {
    const experiences = [
        {
            company: "The Siam Cement (Thung Song) Company",
            role: "Front End Developer",
            duration: "2025 - 2026",
            description: [
                "Contributed to the development of a Human Resource Management (HRM) system as a Front End Developer",
                "Designed and implemented responsive user interfaces using modern web technologies",
                "Collaborated with back-end developers",
                "Participated in software development processes including requirement analysis, testing, and deployment"
            ],
            icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            )
        },
        {
            company: "Tourism Website - Front End Project",
            role: "Front End Developer",
            duration: "2024 - 2025",
            description: [
                "Designed and developed a responsive website introducing tourist attractions in Pattani Province",
                "Built reusable components using React.js",
                "Implemented responsive layouts for mobile, tablet, and desktop",
                "Deployed project using Vercel"
            ],
            icon: (
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            )
        },
        {
            company: "Mulberry AI",
            role: "Web Developer",
            duration: "2022 - 2023",
            description: [
                "Developed and customized responsive websites using WordPress, HTML, and CSS",
                "Collaborated with IoT team to support front-end interfaces for device monitoring",
                "Assisted in website layout design and UI improvements",
                "Worked in a team environment following Agile workflow"
            ],
            icon: (
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
            )
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 relative max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="space-y-4 text-center mb-16">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block">
                    JOURNEY
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Work Experience
                </h2>
                <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
                    My professional milestones and development history
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-2"></div>
            </div>

            {/* Vertical Timeline container */}
            <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12 pb-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-10 group">
                        {/* Timeline Icon Badge */}
                        <div className="absolute left-0 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shadow-lg shadow-black/50 group-hover:border-slate-700 transition-colors duration-300">
                            {exp.icon}
                        </div>

                        {/* Timeline Card */}
                        <div className="glass glass-hover rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
                            {/* Card Header */}
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                                <div>
                                    <span className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest block">
                                        {exp.role}
                                    </span>
                                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mt-0.5">
                                        {exp.company}
                                    </h3>
                                </div>
                                <span className="text-[10px] md:text-xs font-semibold text-slate-500 tracking-wider">
                                    {exp.duration}
                                </span>
                            </div>

                            {/* Bullet points */}
                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-400">
                                {exp.description.map((bullet, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default WorkExperience;
