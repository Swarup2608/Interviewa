export default function Features() {
  return (
    <section className="py-32 px-8 md:px-16 relative" id="solutions">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Engineered for success</span>
            <h2 className="font-headline text-6xl font-bold mb-6 tracking-tight">Master Every <br/><span className="text-gradient-primary">Interaction</span></h2>
            <p className="font-body text-lg text-on-surface-variant/80">Our multi-layered neural engine analyzes biometric data, semantic structures, and delivery patterns to provide unparalleled growth insights.</p>
          </div>
          <button className="text-secondary font-bold flex items-center gap-3 hover:gap-5 transition-all text-lg group">
            Explore All Features <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">trending_flat</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-8 h-auto md:h-[650px]">
          <div className="md:col-span-6 md:row-span-2 glass-card rounded-[2.5rem] p-12 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-dim/20 rounded-full blur-[80px] group-hover:bg-primary-dim/30 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-primary-dim/15 border border-primary/20 flex items-center justify-center mb-10 shadow-lg">
                <span className="material-symbols-outlined text-primary text-4xl">videocam</span>
              </div>
              <h3 className="font-headline text-4xl font-bold mb-6">Real-time AI interviews</h3>
              <p className="font-body text-on-surface-variant text-xl leading-relaxed">Experience hyper-realistic video interviews where the AI adapts its questions dynamically based on your previous responses and emotional cues.</p>
            </div>
            <div className="relative mt-10 rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all">
              <img className="w-full h-56 object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" alt="Team of diverse professionals collaborating" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQCUs6dV7zBII2rYqFA-fKxdlRtrW5ini8fhT9-GhU7DU6ythb73XY_FpuOb3s7W2w9sjq3fNoKnroSpgYAt4MAGZZc5nRsta3iSkVJbjS_64D63Fjk3CDOs8VC6cnij1ArBwlhiYBEuoCw0d6ctZqkD6xqENYxjhQIN7PmmxTn6SKgHke-Q-DVstVVlH-n4ToFV4sXpcPlrX4RAvZOQVmDqW3gYeOYylSrKk24qBFGquTl9eTx6lemBLCbPr2sT6EwP4_QBjq5g"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
          
          <div className="md:col-span-6 glass-card rounded-[2.5rem] p-12 flex items-center gap-10 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-20 h-20 shrink-0 rounded-3xl bg-secondary-container/15 border border-secondary/20 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-secondary text-4xl">bolt</span>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold mb-4">Smart feedback system</h3>
              <p className="font-body text-on-surface-variant text-lg">Comprehensive breakdown of performance, from micro-expressions to technical accuracy and industry benchmarks.</p>
            </div>
          </div>
          
          <div className="md:col-span-3 glass-card rounded-[2.5rem] p-8 flex flex-col justify-center text-center group border-tertiary/20 hover:border-tertiary/40 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-tertiary-container/10 mx-auto mb-6 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary text-4xl">work</span>
            </div>
            <h3 className="font-headline text-xl font-bold">Role-based contexts</h3>
          </div>
          
          <div className="md:col-span-3 glass-card rounded-[2.5rem] p-8 flex flex-col justify-center text-center group border-primary/20 hover:border-primary/40 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-primary-container/10 mx-auto mb-6 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">analytics</span>
            </div>
            <h3 className="font-headline text-xl font-bold">Progress analytics</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
