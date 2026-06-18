import React from 'react';

function Skills() {
    const categories = [
        {
            title: "Programming",
            items: [
                "JavaScript",
                "TypeScript (Basic)",
                "Dart / Flutter",
                "Python",
                "HTML / CSS",
                "React.js",
                "Next.js (Basic)",
                "Tailwind CSS",
                "Bootstrap",
                "Node.js"
            ],
            icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
            )
        },
        {
            title: "Development Tools",
            items: [
                "PyCharm",
                "Google Colab",
                "Roboflow",
                "GitHub & Git",
                "Vercel",
                "Figma",
                "VS Code",
                "Android Studio",
                "Postman"
            ],
            icon: (
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            )
        },
        {
            title: "AI / Machine Learning",
            items: [
                "TensorFlow & TensorFlow.js",
                "YOLO (Object Detection)",
                "OpenCV",
                "Computer Vision",
                "Image Classification",
                "CNNs (Deep Learning)"
            ],
            icon: (
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
            )
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

            {/* Grid of Skill Categories (3 columns) */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {categories.map((cat, idx) => (
                    <div key={idx} className="glass glass-hover rounded-2xl p-6 border border-white/5 shadow-xl space-y-5">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                {cat.icon}
                            </div>
                            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
                                {cat.title}
                            </h3>
                        </div>
                        <div className="space-y-3">
                            {cat.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-sm shadow-blue-500"></span>
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
