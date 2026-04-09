import { ArrowRight, PlayCircle, BrainCircuit, TrendingUp, AlertTriangle, Mic, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Hero Content */}
        <div className="lg:col-span-6 z-10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-panel border border-primary/30 text-primary text-[10px] font-label font-black tracking-[0.2em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Neural Engine v4.0 Active
          </div>
          <h1 className="text-6xl lg:text-[100px] font-headline font-black leading-[0.9] tracking-tighter mb-8 bg-gradient-to-br from-white via-white/80 to-slate-500 bg-clip-text text-transparent">
            ACE YOUR <br />
            <span className="text-primary italic text-glow">INTERVIEWS</span> <br />
            WITH NEURAL AI
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 font-body leading-relaxed border-l-2 border-primary/20 pl-6">
            Transcend traditional preparation with high-fidelity simulations. Our AI doesn't just ask questions—it analyzes your neural responses in real-time.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-10 py-5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-label font-black uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] transition-all active:scale-95 group flex items-center gap-2">
              Start Session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <button className="px-10 py-5 rounded-full glass-panel-heavy border border-secondary/40 text-secondary font-label font-black uppercase tracking-[0.2em] hover:bg-secondary/10 transition-all flex items-center gap-2">
              <PlayCircle className="w-6 h-6" />
              Demo
            </button> */}
          </div>
          {/* Neural Stats Mini Feed */}
          <div className="mt-16 flex gap-12 border-t border-white/5 pt-8">
            <div>
              <div className="text-3xl font-headline font-bold text-white">99.8%</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-white">40ms</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Latency</div>
            </div>
            <div>
              <div className="text-3xl font-headline font-bold text-white">50k+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Successes</div>
            </div>
          </div>
        </div>

        {/* Complex Floating Hero Interface */}
        <div className="lg:col-span-6 relative h-[700px] flex items-center justify-center">
          {/* Orbits & Depth Layers */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[400px] h-[400px] border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
          {/* The Main AI Avatar */}
          <div className="relative z-20 w-full h-full float-anim">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
            <img alt="Advanced AI" className="w-full h-full object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_50px_rgba(168,85,247,0.3)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlctK4NVHPCqEpDCuV5YNNKWy0UHyqQxsGu6sD8iuwdSJ-eikHI8YtwqEHi_JwfMkTKSxfk2FiYWte1glZfDetvBb1Z5q_EUCLWSLwB70Mpsjzh3Wa3szd925InODuHIgBUBM4hW63LJERX6I6ZWfBsqwWT_k-4ZfL1HdYsvRyF7ts_OEPLBOmDibWRcc-UsyXGSQMXg_7gNm-fF3dwqDK8qTkm2lXQzn-pwirMK6hMund_ABpyWwOsHRZynmDs-7kOPgbKpgEQKKh" />
            {/* Scanning Animation Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm animate-[scan_4s_linear_infinite]"></div>
          </div>
          {/* Advanced Floating Glass Cards */}
          {/* Confidence Score */}
          <div className="absolute -top-12 -right-8 glass-panel-heavy p-5 rounded-3xl w-64 float-anim z-40 border border-secondary/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_#53ddfc]"></div>
                <span className="text-xs font-bold text-secondary tracking-widest uppercase">Confidence Score</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">Live</span>
            </div>
            <div className="text-3xl font-headline font-bold text-white">94.8%</div>
            <div className="mt-3 h-2 bg-surface-container-high rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[94.8%] shadow-[0_0_15px_#53ddfc]"></div>
            </div>
          </div>

          {/* Top Left: Neural Pulse */}
          <div className="absolute top-10 left-0 glass-panel-heavy p-6 rounded-2xl border border-secondary/30 w-72 shadow-2xl z-30 transform -rotate-3 hover:rotate-0 transition-transform duration-500 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-[10px] font-label font-bold uppercase tracking-widest text-secondary">Neural Link</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">0x4F92</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-end gap-1 h-8">
                <div className="bg-secondary/40 w-full h-1/2 rounded-t-sm group-hover:h-3/4 transition-all"></div>
                <div className="bg-secondary/40 w-full h-3/4 rounded-t-sm group-hover:h-full transition-all delay-75"></div>
                <div className="bg-secondary/60 w-full h-full rounded-t-sm group-hover:h-1/2 transition-all delay-100"></div>
                <div className="bg-secondary/40 w-full h-2/3 rounded-t-sm group-hover:h-full transition-all delay-150"></div>
                <div className="bg-secondary/40 w-full h-1/2 rounded-t-sm group-hover:h-2/3 transition-all delay-200"></div>
              </div>
              <p className="text-[11px] text-slate-300 font-medium">Calibrating biometric response...</p>
            </div>
          </div>
          {/* Bottom Right: Live Feedback */}
          <div className="absolute bottom-20 right-0 glass-panel-heavy p-6 rounded-2xl border border-primary/30 w-80 shadow-2xl z-30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <BrainCircuit className="text-primary w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-label font-bold uppercase tracking-widest text-primary">Insight Stream</span>
                <span className="block text-[10px] text-slate-500">Processing verbal metrics...</span>
              </div>
            </div>
            <p className="text-xs text-on-surface italic leading-relaxed border-l-2 border-primary/40 pl-4 py-1">
              "Neural pattern detected: High-level synthesis. <span className="text-primary font-bold">Optimization recommended:</span> Focus on quantification of Q3 results."
            </p>
          </div>
          {/* Floating Data Points */}
          <div className="absolute top-1/4 right-10 glass-panel-heavy py-2 px-4 rounded-full border border-white/20 text-[10px] font-mono text-secondary animate-bounce duration-[3000ms] flex items-center gap-2">
            <TrendingUp className="w-3 h-3" /> CONFIDENCE: +12%
          </div>
          <div className="absolute bottom-1/4 left-10 glass-panel-heavy py-2 px-4 rounded-full border border-white/20 text-[10px] font-mono text-tertiary animate-pulse duration-[2500ms] flex items-center gap-2">
            <AlertTriangle className="w-3 h-3" /> STRESS DETECTED
          </div>
          {/* AI Tone Analysis */}
          <div className="absolute bottom-12 -left-16 glass-panel-heavy p-6 rounded-3xl w-72 float-anim z-40 border border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-primary/20 rounded-lg">
                <Mic className="text-primary w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-primary-container uppercase tracking-wide">AI Tone Analysis</span>
            </div>
            <p className="text-sm font-body text-slate-300 leading-relaxed italic border-l-2 border-primary/30 pl-3">
              "Tone: Highly Professional. Pacing: Optimal. Recommendation: Project more warmth in intros."
            </p>
          </div>
          {/* Interview Progress */}
          <div className="absolute -bottom-6 right-8 glass-panel-heavy py-3 px-6 rounded-2xl flex items-center gap-3 float-anim z-30 border border-secondary/20">
            <CheckCircle2 className="text-secondary w-5 h-5" />
            <span className="text-xs font-bold tracking-wide text-white">Interview Progress: 80% Complete</span>
          </div>
        </div>
      </div>
    </section>
  );
}
