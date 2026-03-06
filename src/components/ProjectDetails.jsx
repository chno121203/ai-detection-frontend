import testImg from "../assets/Test.png"
import ResultImg from "../assets/Result.png"

function ProjectDetails() {
    const sections = [
        {
            title: "การเก็บข้อมูลและการ Label",
            description: "เริ่มต้นจากการลงพื้นที่เก็บภาพดอกฟ้าทะลายโจรในระยะต่างๆ และนำมาทำ Image Labeling ด้วยมือทีละภาพ เพื่อสร้าง Dataset ที่มีคุณภาพสูงสำหรับนำไปใช้ในการสอน Model ของเรา",
            imagePlaceholder: testImg,
            alt: "Data Collection"
        },
        {
            title: "การ Train Model",
            description: "นำข้อมูลที่ผ่านการ Label มาเข้าสู่กระบวนการ Train Model โดยใช้โครงสร้าง CNN ที่เหมาะสมกับการตรวจจับความแตกต่างเพียงเล็กน้อยของดอกไม้",
            isIcons: true,
            alt: "AI Research"
        },
        {
            title: "ผลลัพธ์ผ่าน Web application",
            description: "Model ที่ได้สามารถทำนายระยะการบานของดอกฟ้าทะลายโจรได้ จะนำไปประยุกต์ใช้โดยผ่าน Web application ที่พัฒนาขึ้นมาเพื่อให้ผู้ใช้สามารถเห็นผลลัพธ์ได้สะดวกรวดเร็ว",
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
