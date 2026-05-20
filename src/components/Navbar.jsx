import { ChevronDown, Hexagon, Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <nav className="relative w-full py-5 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
          <Hexagon className="text-white w-5 h-5 fill-white" />
        </div>
        <span className="text-white font-bold text-xl tracking-tight">BIGlogic.ai</span>
      </div>

      {/* Center Links */}
      <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
        <a href="#transformation" className="cursor-pointer hover:text-white transition-colors">Transformation</a>
        <a href="#how-it-works" className="cursor-pointer hover:text-white transition-colors">How It Works</a>
        <a href="#features" className="cursor-pointer hover:text-white transition-colors">Features</a>
        <a href="#who-is-it-for" className="cursor-pointer hover:text-white transition-colors">Who It's For</a>
        <a href="#security" className="cursor-pointer hover:text-white transition-colors">Security</a>
        <a href="#testimonials" className="cursor-pointer hover:text-white transition-colors">Clients</a>
        <a href="#faq" className="cursor-pointer hover:text-white transition-colors">FAQ</a>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 transition-colors"
          title="Toggle Light/Dark Theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <a href="#" className="hidden md:block text-sm font-semibold text-white hover:text-purple-400 transition-colors">Log in</a>
        <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white text-sm font-semibold py-2.5 px-5 rounded-lg shadow-[0_0_15px_rgba(109,40,217,0.4)] transition-all transform hover:-translate-y-[1px]">
          Start Free Trial
          <span className="text-lg leading-none">&rarr;</span>
        </button>
        
        {/* Hamburger Menu Toggle (Mobile) */}
        <button 
          className="lg:hidden flex items-center justify-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-[-1.5rem] right-[-1.5rem] sm:left-[-2rem] sm:right-[-2rem] bg-[#0b0a10]/95 backdrop-blur-xl border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto">
          <a href="#transformation" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">Transformation</a>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">How It Works</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">Features</a>
          <a href="#who-is-it-for" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">Who It's For</a>
          <a href="#security" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">Security</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">Clients</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">FAQ</a>
          <div className="border-t border-white/10 my-2 pt-4 flex flex-col gap-4">
            <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-white">Log in</a>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 text-white font-semibold py-3 rounded-lg w-full">
              Start Free Trial &rarr;
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
