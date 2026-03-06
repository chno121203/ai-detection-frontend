import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import ProjectDetails from "./components/ProjectDetails"

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
      </main>

      <footer className="py-10 text-center border-t border-white/5 text-slate-500 text-sm">
        <p>@2003chakrit@gmail.com</p>
      </footer>

    </div>

  )
}

export default App