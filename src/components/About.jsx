import profileImg from "../assets/Test.png"

function About() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-8 text-gradient">My project</h2>
                    <div className="space-y-6 text-slate-300">
                        <p>
                            Hello! I worked on a graduation project involving
                            <span className="text-white font-semibold"> Artificial Intelligence</span> and
                            <span className="text-white font-semibold"> Web Development</span>
                        </p>
                        <p>
                            This project began with the intention of applying knowledge of image classification using CNNs to research the blooming process of Green Chiretta (Fah Talai Jone). By labeling images and training a model to predict blooming stages and optimal harvest times, this research was conducted under the supervision of professors from both the Faculty of Engineering and the Faculty of Agriculture.
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square glass-card rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-colors z-10"></div>
                        <img
                            src={profileImg}
                            alt="Test"
                            className="h-full w-full object-cover transition-all duration-500"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
                </div>
            </div>
        </section>
    )
}

export default About
