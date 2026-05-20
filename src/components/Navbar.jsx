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
    <nav className="w-full py-6 flex items-center justify-between border-b border-white/5">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
          <Hexagon className="text-white w-5 h-5 fill-white" />
        </div>
        <span className="text-white font-bold text-xl tracking-tight">BIGlogic.ai</span>
      </div>

      {/* Center Links */}
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          Product <ChevronDown className="w-4 h-4 opacity-70" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          Solutions <ChevronDown className="w-4 h-4 opacity-70" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          Industries <ChevronDown className="w-4 h-4 opacity-70" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          Resources <ChevronDown className="w-4 h-4 opacity-70" />
        </div>
        <a href="#" className="cursor-pointer hover:text-white transition-colors">Pricing</a>
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
