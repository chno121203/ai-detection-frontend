import profileImg from "../assets/Test.png"

function About() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-8 text-gradient">My project</h2>
                    <div className="space-y-6 text-slate-300">
                        <p>
                            สวัสดีครับ ผมเคยทำโปรเจกต์จบเกี่ยวกับ
                            <span className="text-white font-semibold"> Artificial Intelligence</span> และ
                            <span className="text-white font-semibold"> Web Development</span>
                        </p>
                        <p>
                            โปรเจกต์นี้เริ่มต้นจากความตั้งใจที่จะนำความรู้ที่ได้เรียนมาประยุกต์ใช้ เกี่ยวกับการคัดแยกจำแนกรูปภาพด้วย CNN มาช่วยวิจัยเรื่องการบานของดอกฟ้าทะลายโจร โดยการ label ภาพของดอกฟ้าทะลายโจร
                            และนำมา train model เพื่อทำนายการบานของดอกฟ้าทะลายโจร และ ระยะเวลาที่ควรจะเก็บเกี่ยว โดยมีที่ปรึกษาคือ เป็นอาจารย์ทั้งจากคณะวิศวกรรมศาสตร์ และคณะเกษตรศาสตร์
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
