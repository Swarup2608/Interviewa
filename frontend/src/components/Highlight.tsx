export default function Highlight() {
  return (
    <section className="py-24 px-8 md:px-16 relative overflow-hidden" id="intelligence">
      <div className="max-w-6xl mx-auto relative glass-card rounded-[4rem] p-16 md:p-28 text-center overflow-hidden border-none shadow-[0_0_80px_rgba(132,85,239,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dim/25 via-background to-secondary-container/20"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary blur-[160px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary blur-[160px] opacity-15 animate-pulse" style={{ animationDelay: "-1s" }}></div>
        <div className="relative z-10">
          <h2 className="font-headline text-6xl md:text-8xl font-black tracking-tight mb-10">
            Ready to Ace Your <br/> <span className="text-gradient-primary">Next Role?</span>
          </h2>
          <p className="font-body text-2xl text-on-surface-variant/90 mb-14 max-w-3xl mx-auto leading-relaxed">
            Join 50,000+ candidates who have accelerated their careers using AIVision's deep-learning interview environment.
          </p>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full blur opacity-40 group-hover:opacity-100 transition-all"></div>
            <button className="relative bg-gradient-cta px-16 py-6 rounded-full font-headline font-bold text-2xl text-on-primary shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-on-surface-variant font-label">
            <span className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-surface-container object-cover" alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39my1sMU3XCraBGZ0A8jZgixf-qUnepMbtRg2TfgqSL6HvjdDlWUOoGzUu-BgaVmIbvoBrh4A9ux-9f5TVvrMhlB1LBWmnc8pGccaaXuTxAhsNoOmut2AGVDhk4-0H4qn7hEP_8qww6MIPcCka-mJwqVq0qsJKccNYf9kJCicHvw86pOInOmhT_OPLhxtEzUua-aTgRzTxjwaOMf8BHFVBe9PSbQM7kofyiXxt-m8asdX0PgZeDsoDeoSN86UkwDL5RBbuTjnQkc"/>
              <img className="w-10 h-10 rounded-full border-2 border-surface-container object-cover" alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhZQ32aUj0bhnB3f-FfNoxzYP4dVZjw5Y3oi2mSmwjXE_NyyWkBvka0U6X3wIwJ9pn5_4Ux1Ix5cC-S9nQni-Vs6JGI6yUH-dZtY0ni0qNKpfqCDR0-DlOJAlVYSzt8rLWGoMqYUtWq0ZwW6_alJ6V0GLLwJ6IP8nUBaREO3SNif-N7gdN4j0xzhALiqy2aUjy9HMiUaHzfeXWv6NG9XBuLsPGEGx0GQI6mS9I_z67sklkhPnfQEJS0sk3kLEvUYQRCwqlyEM-n1o"/>
              <img className="w-10 h-10 rounded-full border-2 border-surface-container object-cover" alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdkH0OlANKLQYnIwSFpG1mg0NFBaDYNdu4cjgOvQ-i6AIkM_oJ4uru53UcHs9cBDySE7jcKDKejSsDL9BBjOir08Doy8D-W1h2glPPmiL05aSdYvQTiOZIOi8bwruMxesq8OKn6O_B1T7I2lUPIfAIthKCTa_8-vSVIMdY9ufaUB39Tn6G9QgjCyEGquNTwK_u_ijlgcScqYQWN2-vn5muXvloA7GLrVyvJcoqgFr_MYupwTaiZ8nXKG0OC9VkBf851ubsO5kZt1Q"/>
            </span>
            <span className="font-bold">Trusted by 50,000+ professionals globally</span>
          </div>
        </div>
      </div>
    </section>
  );
}
