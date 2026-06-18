import React from 'react';
import testImg from "../assets/Test.png";
import ResultImg from "../assets/Result.png";

function ProjectDetails() {
    const phases = [
        {
            phase: "PHASE 1: DATA ACQUISITION",
            title: "Data Collection & Labeling",
            date: "OCTOBER 2024",
            description: "We started by collecting field images of Green Chiretta (Fah Talai Jone) at various growth stages. Manual image labeling was performed frame-by-frame to create a high-quality dataset for training our model.",
            image: testImg,
            imageAlt: "Data Collection",
            icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            )
        },
        {
            phase: "PHASE 2: DEEP LEARNING",
            title: "Model Training & Optimization",
            date: "NOVEMBER 2024",
            description: "The labeled data was fed into the training process using a Convolutional Neural Network (CNN) architecture optimized for detecting subtle differences in flower features.",
            isTrainingIcons: true,
            icon: (
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
            )
        },
        {
            phase: "PHASE 3: WEB INTEGRATION",
            title: "Web Application & Prediction",
            date: "DECEMBER 2024",
            description: "The trained model predicts the blooming stage of Green Chiretta. This functionality is integrated into a web application designed to provide users with fast and convenient results.",
            image: ResultImg,
            imageAlt: "Prediction Results",
            icon: (
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            )
        }
    ];

    return (
        <section id="timeline" className="py-24 px-6 relative max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="space-y-4 text-center mb-16">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block">
                    SELECTED WORK
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Project Timeline
                </h2>
                <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
                    Green Chiretta (Fah Talai Jone) Blooming Stage Detection System
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-2"></div>
            </div>

            {/* Vertical Timeline container */}
            <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12 pb-6">
                {phases.map((phase, index) => (
                    <div key={index} className="relative pl-10 group">
                        {/* Timeline Icon Badge */}
                        <div className="absolute left-0 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shadow-lg shadow-black/50 group-hover:border-slate-700 transition-colors duration-300">
                            {phase.icon}
                        </div>

                        {/* Timeline Card */}
                        <div className="glass glass-hover rounded-2xl p-6 md:p-8 space-y-5 shadow-xl">
                            {/* Card Header */}
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                                <div>
                                    <span className="text-[10px] md:text-xs font-bold text-blue-400 uppercase tracking-widest block">
                                        {phase.phase}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mt-0.5">
                                        {phase.title}
                                    </h3>
                                </div>
                                <span className="text-[10px] md:text-xs font-semibold text-slate-500 tracking-wider">
                                    {phase.date}
                                </span>
                            </div>

                            {/* Card Body Description */}
                            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                                {phase.description}
                            </p>

                            {/* Conditional Assets Render */}
                            {phase.isTrainingIcons ? (
                                <div className="flex flex-wrap items-center gap-6 pt-2">
                                    {/* YOLO Badge */}
                                    <div className="flex items-center gap-3 glass px-4 py-2.5 rounded-xl border border-emerald-500/10">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                            <span className="text-xs font-black text-emerald-400">YO</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider">YOLO</h4>
                                            <p className="text-[9px] text-slate-500 font-medium">Object Detection</p>
                                        </div>
                                    </div>

                                    {/* Google Colab Badge */}
                                    <div className="flex items-center gap-3 glass px-4 py-2.5 rounded-xl border border-orange-500/10">
                                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                            <span className="text-xs font-black text-orange-400">CO</span>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Google Colab</h4>
                                            <p className="text-[9px] text-slate-500 font-medium">Model Training</p>
                                        </div>
                                    </div>
                                </div>
                            ) : phase.image ? (
                                <div className="relative rounded-xl overflow-hidden aspect-video border border-white/5 shadow-inner group/img max-w-xl">
                                    <div className="absolute inset-0 bg-blue-500/5 group-hover/img:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={phase.image}
                                        alt={phase.imageAlt}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-[1.03]"
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectDetails;
