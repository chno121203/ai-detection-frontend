function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">
          P<span className="text-blue-500">.</span>Portfolio
        </h1>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar