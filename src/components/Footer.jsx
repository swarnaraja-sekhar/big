import { Hexagon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-32 border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16 px-6">
        
        {/* Brand */}
        <div className="flex flex-col max-w-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-900">
              <Hexagon className="text-white w-5 h-5 fill-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">BIGlogic.ai</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            The operational backbone for fast-moving reconstruction teams. Automate your workflows, speed up approvals, and scale without chaos.
          </p>
          <div className="flex items-center gap-4">
            {/* Social SVGs could go here */}
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-slate-400">X</div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-slate-400">In</div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-auto flex-1 md:pl-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Product</h4>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Features</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Integrations</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Changelog</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Solutions</h4>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">For General Contractors</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">For Restoration Teams</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">For Estimators</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Resources</h4>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Documentation</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Help Center</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">API Reference</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Blog</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Company</h4>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">About Us</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Careers</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Contact</a>
            <a href="#" className="text-sm text-slate-400 hover:text-purple-400 transition-colors">Partners</a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 px-6 text-center sm:text-left">
        <span className="text-xs text-slate-600">© 2026 BIGlogic.ai. All rights reserved.</span>
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
          <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-xs text-slate-600 hover:text-white transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
}
