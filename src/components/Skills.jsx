import React from 'react';

function Skills() {
    const categories = [
        {
            title: "Languages",
            items: ["JavaScript", "TypeScript (Basic)", "HTML", "CSS"]
        },
        {
            title: "Frameworks & Styling",
            items: ["React.js", "Next.js (Basic)", "Tailwind CSS", "Bootstrap"]
        },
        {
            title: "Tools & Platforms",
            items: ["GitHub", "Vercel", "Figma", "VS Code", "Android Studio"]
        },
        {
            title: "Concepts & Workflows",
            items: ["Agile Scrum Environment", "Team Collaboration", "Continuous Learning"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden max-w-5xl mx-auto">
            <div className="space-y-4 text-center mb-16">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block">
                    MY STACK
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Technical Skills
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-2"></div>
            </div>

            {/* Grid of Skill Categories */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, idx) => (
                    <div key={idx} className="glass rounded-2xl p-6 border border-white/5 shadow-xl space-y-4">
                        <h3 className="text-sm font-bold tracking-wider text-blue-400 uppercase border-b border-white/5 pb-2">
                            {cat.title}
                        </h3>
                        <div className="space-y-2.5">
                            {cat.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
