import { Brain, Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full border-t border-primary/10 relative z-20">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 px-12 py-20 max-w-screen-2xl mx-auto font-body text-sm">
        <div className="col-span-2">
          <div className="text-2xl font-black text-white flex items-center gap-2 mb-8 font-headline">
            <Brain className="text-violet-400" />
            AIVision
          </div>
          <p className="text-slate-400 max-w-xs mb-10 leading-relaxed">Defining the standard for AI-driven professional development and career readiness technology.</p>
          <div className="flex gap-4">
            <a className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 hover:border hover:border-primary/30 transition-all" href="#"><Share2 className="w-6 h-6" /></a>
            <a className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-slate-400 hover:text-secondary hover:bg-secondary/10 hover:border hover:border-secondary/30 transition-all" href="#"><Globe className="w-6 h-6" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Product</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Simulator</a></li>
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Analytics</a></li>
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Resources</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Community</a></li>
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Insights Hub</a></li>
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">API Reference</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Our Mission</a></li>
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Careers</a></li>
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Newsroom</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Support</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Help Center</a></li>
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Security</a></li>
            <li><a className="text-slate-400 hover:text-secondary transition-colors" href="#">Status</a></li>
          </ul>
        </div>
        <div className="col-span-full pt-16 mt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 font-label">
          <p>© 2025 AIVision Intelligence. Engineered for the future of work.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Protocol</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Core</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
