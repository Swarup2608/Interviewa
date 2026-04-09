export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-slate-950/40 backdrop-blur-2xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto font-headline tracking-tight">
        <div className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <span className="material-symbols-outlined text-violet-400">neurology</span>
          AIVision
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-violet-300 font-bold border-b-2 border-cyan-400/50 pb-1" href="#product">Product</a>
          <a className="text-slate-300 hover:text-white transition-colors" href="#solutions">Solutions</a>
          <a className="text-slate-300 hover:text-white transition-colors" href="#intelligence">Intelligence</a>
          <a className="text-slate-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
        </div>
        <button className="bg-gradient-cta text-on-primary font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(186,158,255,0.3)] hover:shadow-[0_0_30px_rgba(186,158,255,0.5)] hover:scale-105 active:scale-95">
          Start Interview
        </button>
      </div>
    </nav>
  );
}
