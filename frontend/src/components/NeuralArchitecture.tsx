import { Video, Activity, Briefcase, TrendingUp } from "lucide-react";

export default function NeuralArchitecture() {
  return (
    <section className="py-32 px-8 lg:px-24 relative" id="neural-architecture">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-[40%] h-[40%] bg-secondary/10 blur-[150px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-secondary shadow-[0_0_10px_#22d3ee]"></div>
            <h2 className="text-4xl lg:text-6xl font-headline font-black tracking-tighter text-white">
              NEURAL <span className="text-secondary italic">ARCHITECTURE</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl font-body">Deep integration of generative AI and biometric feedback loops creates a preparation environment indistinguishable from reality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Feature 1: Wide */}
          <div className="md:col-span-8 group glass-panel-heavy rounded-3xl p-12 hover:border-secondary/40 transition-all duration-700 relative overflow-hidden border border-transparent">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[80px] group-hover:bg-secondary/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Video className="text-secondary w-9 h-9" />
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 text-white group-hover:text-secondary transition-colors">Adaptive AI Avatars</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Our avatars react to your micro-expressions and tone. Utilizing 2026-grade emotional synthesis, they provide the most realistic confrontation prep in existence.
              </p>
              <div className="mt-10 flex gap-4">
                <div className="px-4 py-2 rounded-full border border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lip-Sync</div>
                <div className="px-4 py-2 rounded-full border border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Expression Analysis</div>
                <div className="px-4 py-2 rounded-full border border-white/5 text-[10px] font-bold text-slate-500 uppercase tracking-widest">0-Latency</div>
              </div>
            </div>
          </div>

          {/* Feature 2: Small */}
          <div className="md:col-span-4 group glass-panel-heavy rounded-3xl p-12 hover:border-primary/40 transition-all duration-700 relative overflow-hidden border border-transparent">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 blur-[60px]"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform">
                <Activity className="text-primary w-9 h-9" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-white">Quantum Feedback</h3>
              <p className="text-slate-400 leading-relaxed">
                Instantaneous decomposition of your performance into 150+ metrics. Actionable intelligence for your evolution.
              </p>
            </div>
          </div>

          {/* Feature 3: Small */}
          <div className="md:col-span-4 group glass-panel-heavy rounded-3xl p-12 hover:border-tertiary/40 transition-all duration-700 relative overflow-hidden border border-transparent">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary/5 blur-[60px]"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-8">
                <Briefcase className="text-tertiary w-9 h-9" />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-white">Industry Matrix</h3>
              <p className="text-slate-400 leading-relaxed">
                Domain-specific challenges generated from a real-time database of the world's most elite hiring protocols.
              </p>
            </div>
          </div>

          {/* Feature 4: Wide */}
          <div className="md:col-span-8 group glass-panel-heavy rounded-3xl p-12 hover:border-secondary/40 transition-all duration-700 relative overflow-hidden border border-transparent">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px]"></div>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-8">
                  <TrendingUp className="text-secondary w-9 h-9" />
                </div>
                <h3 className="text-3xl font-headline font-bold mb-6 text-white group-hover:text-secondary transition-colors">Progress Visualization</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Visualize your neural growth. Our data engine maps your trajectory from recruit to industry leader using hyper-accurate modeling.
                </p>
              </div>
              <div className="w-full md:w-64 glass-panel rounded-2xl border border-white/5 p-4 flex flex-col gap-3">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-secondary shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-primary shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-tertiary shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-[95%] bg-white/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
