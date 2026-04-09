import { BadgeCheck, Stars } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-40 px-8 lg:px-24">
      <div className="container mx-auto">
        <div className="relative glass-panel-heavy rounded-[4rem] p-20 lg:p-32 overflow-hidden border border-white/10 text-center">
          {/* Intense Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[180px] rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-secondary/20 blur-[180px] rounded-full"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 mb-10">
              Limited Alpha Access
            </div>
            <h2 className="text-5xl lg:text-[90px] font-headline font-black mb-10 leading-none tracking-tighter text-white">
              READY FOR THE <br />
              <span className="bg-gradient-to-r from-secondary via-primary to-tertiary bg-clip-text text-transparent text-glow">NEURAL ERA?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-400 mb-16 font-body max-w-2xl mx-auto leading-relaxed">
              Join the vanguard of the 2026 workforce. Land the role you were engineered for.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="px-14 py-6 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-label font-black uppercase tracking-[0.3em] shadow-[0_0_50px_rgba(168,85,247,0.5)] hover:scale-105 transition-all text-sm">
                BEGIN PREPARATION
              </button>
              <button className="px-14 py-6 rounded-full glass-panel-heavy border border-white/20 text-white font-label font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all text-sm">
                VIEW PROTOCOLS
              </button>
            </div>
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-on-surface-variant font-label">
              <span className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-surface-container object-cover" alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39my1sMU3XCraBGZ0A8jZgixf-qUnepMbtRg2TfgqSL6HvjdDlWUOoGzUu-BgaVmIbvoBrh4A9ux-9f5TVvrMhlB1LBWmnc8pGccaaXuTxAhsNoOmut2AGVDhk4-0H4qn7hEP_8qww6MIPcCka-mJwqVq0qsJKccNYf9kJCicHvw86pOInOmhT_OPLhxtEzUua-aTgRzTxjwaOMf8BHFVBe9PSbQM7kofyiXxt-m8asdX0PgZeDsoDeoSN86UkwDL5RBbuTjnQkc" />
                <img className="w-10 h-10 rounded-full border-2 border-surface-container object-cover" alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhZQ32aUj0bhnB3f-FfNoxzYP4dVZjw5Y3oi2mSmwjXE_NyyWkBvka0U6X3wIwJ9pn5_4Ux1Ix5cC-S9nQni-Vs6JGI6yUH-dZtY0ni0qNKpfqCDR0-DlOJAlVYSzt8rLWGoMqYUtWq0ZwW6_alJ6V0GLLwJ6IP8nUBaREO3SNif-N7gdN4j0xzhALiqy2aUjy9HMiUaHzfeXWv6NG9XBuLsPGEGx0GQI6mS9I_z67sklkhPnfQEJS0sk3kLEvUYQRCwqlyEM-n1o" />
                <img className="w-10 h-10 rounded-full border-2 border-surface-container object-cover" alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdkH0OlANKLQYnIwSFpG1mg0NFBaDYNdu4cjgOvQ-i6AIkM_oJ4uru53UcHs9cBDySE7jcKDKejSsDL9BBjOir08Doy8D-W1h2glPPmiL05aSdYvQTiOZIOi8bwruMxesq8OKn6O_B1T7I2lUPIfAIthKCTa_8-vSVIMdY9ufaUB39Tn6G9QgjCyEGquNTwK_u_ijlgcScqYQWN2-vn5muXvloA7GLrVyvJcoqgFr_MYupwTaiZ8nXKG0OC9VkBf851ubsO5kZt1Q" />
              </span>
              <span className="font-bold">Trusted by 50,000+ professionals globally</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute left-10 bottom-10 opacity-30 animate-pulse">
            <Stars className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] text-secondary" strokeWidth={1} />
          </div>
          <div className="absolute right-10 top-10 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
            <BadgeCheck className="w-[75px] h-[75px] md:w-[150px] md:h-[150px] text-primary" strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
