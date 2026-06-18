import React from 'react';

function Skills() {
    const skills = [
        { name: "React", category: "frontend" },
        { name: "JavaScript", category: "languages" },
        { name: "Python", category: "languages" },
        { name: "YOLO (Object Detection)", category: "ai" },
        { name: "OpenCV", category: "ai" },
        { name: "TensorFlow / CNNs", category: "ai" },
        { name: "Google Colab", category: "ai" },
        { name: "Tailwind CSS", category: "frontend" },
        { name: "Node.js", category: "backend" },
        { name: "Vite", category: "tools" },
        { name: "Git & GitHub", category: "tools" },
        { name: "Postman", category: "tools" },
        { name: "C++", category: "languages" },
        { name: "Linux", category: "tools" }
    ];

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden max-w-4xl mx-auto text-center">
            <div className="space-y-4 mb-12">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block">
                    STACK
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Skills & expertise.
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-2"></div>
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap justify-center gap-3.5 max-w-3xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="glass glass-hover px-5 py-2.5 rounded-full text-sm font-medium text-slate-200 flex items-center gap-2 cursor-default select-none border border-white/5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500"></span>
                        {skill.name}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
