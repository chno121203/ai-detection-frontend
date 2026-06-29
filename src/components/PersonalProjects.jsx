import React from 'react';

function PersonalProjects() {
    const projects = [
        {
            title: "Cafe Raweeya Website",
            subtitle: "ร้านคาเฟ่ขนมปัง",
            description: "A modern, responsive e-commerce web application developed for a local bakery and café. Features visual menus, product showcase, and premium design.",
            github: "https://github.com/chno121203/cafe-raweeya",
            tech: ["React.js", "Tailwind CSS", "Next.js", "TypeScript"],
            glowColor: "hover:shadow-[0_0_30px_rgba(245,158,11,0.12)] hover:border-amber-500/30",
            textColor: "text-amber-400",
            dotColor: "bg-amber-400 shadow-amber-400"
        },
        {
            title: "Arabic Learning App",
            subtitle: "แอพพลิเคชั่นภาษาอาหรับ",
            description: "An interactive educational mobile/web application designed to support Arabic language learning with vocabulary games and pronunciations.",
            github: "https://github.com/chno121203/arabic_app",
            tech: ["React Native", "Android Studio", "JavaScript"],
            glowColor: "hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] hover:border-emerald-500/30",
            textColor: "text-emerald-400",
            dotColor: "bg-emerald-400 shadow-emerald-400"
        },
        {
            title: "Thailand Tourism Guide",
            subtitle: "แนะนำสถานที่ท่องเที่ยวในไทย",
            description: "A frontend web application introducing historical locations and tourist attractions in Thailand, built as a project for Web Development.",
            github: "https://github.com/chno121203/final-front",
            tech: ["React.js", "Bootstrap", "Vercel", "CSS"],
            glowColor: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] hover:border-violet-500/30",
            textColor: "text-violet-400",
            dotColor: "bg-violet-400 shadow-violet-400"
        },
        {
            title: "Secure RAG Pipeline",
            subtitle: "ระบบค้นหาและประมวลผลข้อมูล",
            description: "A secure Retrieval-Augmented Generation (RAG) pipeline built with FastAPI, Streamlit, PostgreSQL, and Groq/LLM integration.",
            github: "https://github.com/chno121203/secure-rag-pipeline",
            tech: ["FastAPI", "Streamlit", "PostgreSQL", "Python"],
            glowColor: "hover:shadow-[0_0_30px_rgba(56,189,248,0.12)] hover:border-sky-500/30",
            textColor: "text-sky-400",
            dotColor: "bg-sky-400 shadow-sky-400"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="space-y-4 text-center mb-16">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block">
                    PORTFOLIO
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Personal Projects
                </h2>
                <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
                    A selection of my self-directed applications and open-source contributions
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-2"></div>
            </div>

            {/* Grid of Projects */}
            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((proj, idx) => (
                    <div 
                        key={idx} 
                        className={`glass rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 border border-white/5 bg-slate-950/35 hover:bg-slate-900/20 transition-all duration-300 group ${proj.glowColor}`}
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between gap-2">
                                <span className={`text-[10px] font-bold uppercase tracking-widest block ${proj.textColor}`}>
                                    {proj.subtitle}
                                </span>
                                {/* GitHub icon link */}
                                <a 
                                    href={proj.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors"
                                    title="View Repository"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                                {proj.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {proj.description}
                            </p>
                        </div>

                        {/* Badges and Call to Action */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5">
                            <div className="flex flex-wrap gap-1.5">
                                {proj.tech.map((t, idxIdx) => (
                                    <span key={idxIdx} className="glass px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-slate-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={proj.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-bold text-blue-400 group-hover:text-blue-300 flex items-center gap-1 transition-colors"
                            >
                                View Code
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PersonalProjects;
