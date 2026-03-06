function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">
          P<span className="text-blue-500">.</span>Portfolio
        </h1>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</a>
          <button className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-all">
            Resume
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar