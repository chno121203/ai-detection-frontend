import testImg from "../assets/Test.png"
import ResultImg from "../assets/Result.png"

function ProjectDetails() {
    const sections = [
        {
            title: "Data Collection & Labeling",
            description: "We started by collecting field images of Green Chiretta (Fah Talai Jone) at various growth stages. Manual image labeling was performed frame-by-frame to create a high-quality dataset for training our model.",
            imagePlaceholder: testImg,
            alt: "Data Collection"
        },
        {
            title: "Model Training",
            description: "The labeled data was fed into the training process using a CNN architecture optimized for detecting subtle differences in flower features.",
            isIcons: true,
            alt: "AI Research"
        },
        {
            title: "Web Application Results",
            description: "The trained model predicts the blooming stage of Green Chiretta. This functionality is integrated into a web application designed to provide users with fast and convenient results.",
            imagePlaceholder: ResultImg,
            alt: "Prediction Results"
        }
    ];

    return (
        <div className="space-y-40 py-20 px-6">
            {sections.map((section, index) => (
                <section key={index} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Alternating logic: index % 2 === 0 -> Image left, text right | index % 2 !== 0 -> Text left, image right */}
                    <div className={`${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                        <h3 className="text-3xl font-bold mb-6 text-gradient">{section.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            {section.description}
                        </p>
                        <div className="mt-8">
                            <div className="w-90 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
                        </div>
                    </div>

                    <div className="relative group">
                        {section.isIcons ? (
                            <div className="flex justify-center items-center gap-12 py-10">
                                {/* YOLO Icon/Badge */}
                                <div className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-32 h-32 glass-card flex items-center justify-center border-emerald-500/30 group-hover:border-emerald-500 transition-all duration-500 transform group-hover:scale-110">
                                        <span className="text-2xl font-black text-emerald-400">YOLO</span>
                                    </div>
                                    <span className="mt-4 text-slate-400 font-bold tracking-widest text-xs">OBJECT DETECTION</span>
                                </div>

                                {/* Connector line or decorative element */}
                                <div className="hidden md:block w-16 h-px bg-gradient-to-r from-emerald-500/50 to-orange-500/50"></div>

                                {/* Colab Icon/Badge */}
                                <div className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-32 h-32 glass-card flex items-center justify-center border-orange-500/30 group-hover:border-orange-500 transition-all duration-500 transform group-hover:scale-110">
                                        <div className="flex flex-col items-center">
                                            <span className="text-2xl font-black text-orange-400">CO</span>
                                            <span className="text-xs font-bold text-orange-400/80 -mt-1">LAB</span>
                                        </div>
                                    </div>
                                    <span className="mt-4 text-slate-400 font-bold tracking-widest text-xs">MODEL TRAINING</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="aspect-video glass-card overflow-hidden relative z-10 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors z-20"></div>
                                    <img
                                        src={section.imagePlaceholder}
                                        alt={section.alt}
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                </div>
                                {/* Decortive blur behind image */}
                                <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </>
                        )}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default ProjectDetails;
