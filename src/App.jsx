import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import ProjectDetails from "./components/ProjectDetails"
import UploadBox from "./components/UploadBox"
import ImagePreview from "./components/ImagePreview"
import ResultBox from "./components/ResultBox"

function App() {

  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)

  return (

    <div className="min-h-screen bg-[#0f172a] text-slate-100">

      <Navbar />

      <main>
        <Hero />
        <About />
        <ProjectDetails />

        {/* AI Project Section */}
        <section id="projects" className="py-20 px-6 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
              <p className="text-slate-400">
                Leveraging Google's TensorFlow.js and COCO-SSD model to perform
                real-time object detection directly in your browser.
              </p>
            </div>

            <div className="glass-card p-8 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-6 text-blue-400 uppercase tracking-wider text-sm">
                AI Object Detection Tool
              </h3>

              <UploadBox setImage={setImage} />
              <ImagePreview image={image} />
              <ResultBox result={result} />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center border-t border-white/5 text-slate-500 text-sm">
        <p>© 2026 Your Name • Developed with React & Tailwind</p>
      </footer>

    </div>

  )
}

export default App