export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden px-8 md:px-16" id="product">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div className="z-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-secondary font-label text-sm mb-6 bg-surface-container-high/60 backdrop-blur-md">
            Next-Gen AI Career Prep
          </span>
          <h1 className="font-headline text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.95] text-on-background mb-8">
            Ace Your <br/> <span className="text-gradient-primary">Interviews</span> <br/> <span className="text-white">with AI</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-lg mb-12 leading-relaxed opacity-90">
            Practice real-world interview scenarios with our intelligent simulator. Get instant feedback on your tone, body language, and response quality.
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="bg-gradient-cta px-10 py-5 rounded-2xl font-headline font-bold text-xl text-on-primary flex items-center gap-3 group shadow-[0_0_40px_rgba(186,158,255,0.3)] transition-all">
              Start Interview
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
            </button>
            <button className="px-10 py-5 rounded-2xl font-headline font-bold text-xl border border-outline-variant/40 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">
              See Demo
            </button>
          </div>
        </div>
        <div className="relative z-20 flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            <div className="relative z-20 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-primary/30 group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
              <img className="w-full h-full object-cover grayscale brightness-90 contrast-125 transition-transform duration-700 group-hover:scale-110" alt="Futuristic glowing AI interface portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFYPxmszddXI_-nV0_WG_5ucUliGn6GEcIgKNsSpn9EWUY6N1p4Nqt7NTDlluHZWmyO6Ykb72iTRp6QMDKrmtHpQN98QcDiTUSDqeZKOr5BVap2p8296YlyESEWv2JMCHUzwCWMX_rQOjwoF89HStXEfqOA2G90cn7-Ipm0mw96pmuHdOLBJtOpkvxcYrO-VbPNXlwISQquo-OQfzpAtfyvfTSwI2lAGZv_Z0LN5M3jNXzj-zjqTPj2jvg6they7BL6d2KnvxejXU"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/5"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm animate-[scan_4s_linear_infinite]"></div>
            </div>
            
            <div className="absolute -top-12 -right-8 glass-card p-5 rounded-3xl w-64 animate-float-slow z-30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_#53ddfc]"></div>
                  <span className="text-xs font-bold text-secondary tracking-widest uppercase">Confidence Score</span>
                </div>
                <span className="text-[10px] text-on-surface-variant">Live</span>
              </div>
              <div className="text-3xl font-headline font-bold text-on-surface">94.8%</div>
              <div className="mt-3 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[94.8%] shadow-[0_0_15px_#53ddfc]"></div>
              </div>
            </div>

            <div className="absolute bottom-12 -left-16 glass-card p-6 rounded-3xl w-72 backdrop-blur-3xl animate-float-medium z-40">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-primary/20 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-xl">mic</span>
                </div>
                <span className="text-xs font-bold text-primary-container uppercase tracking-wide">AI Tone Analysis</span>
              </div>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed italic border-l-2 border-primary/30 pl-3">
                "Tone: Highly Professional. Pacing: Optimal. Recommendation: Project more warmth in intros."
              </p>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-20 glass-card p-4 rounded-2xl flex items-center gap-4 animate-float-fast z-10 opacity-90 scale-90">
              <div className="p-2 bg-tertiary-container/30 rounded-xl">
                <span className="material-symbols-outlined text-tertiary">leaderboard</span>
              </div>
              <div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Market Readiness</div>
                <div className="font-bold text-lg text-on-surface">Top 3% Tier</div>
              </div>
            </div>

            <div className="absolute -bottom-6 right-8 glass-card py-3 px-6 rounded-2xl flex items-center gap-3 animate-float-medium z-30 border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
              <span className="text-xs font-bold tracking-wide">Interview Progress: 80% Complete</span>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
