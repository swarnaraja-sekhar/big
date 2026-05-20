import { ChevronDown, Hexagon, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

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
    <nav className="sticky top-0 z-50 w-full py-5 flex items-center justify-between border-b border-white/5 bg-[#0b0a10]/80 backdrop-blur-lg">
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
      <div className="hidden md:flex items-center gap-6">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 transition-colors"
          title="Toggle Light/Dark Theme"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <a href="#" className="text-sm font-semibold text-white hover:text-purple-400 transition-colors">Log in</a>
        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white text-sm font-semibold py-2.5 px-5 rounded-lg shadow-[0_0_15px_rgba(109,40,217,0.4)] transition-all transform hover:-translate-y-[1px]">
          Start Free Trial
          <span className="text-lg leading-none">&rarr;</span>
        </button>
      </div>
    </nav>
  );
}
