import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <div id="cta" className="w-full mt-24 relative overflow-hidden py-32 border-t border-purple-500/20">
      
      {/* Background Images */}
      {/* Dark Theme Image (Aurora) */}
      <img 
        src="https://images.unsplash.com/photo-1579033461387-adb4711818e3?q=80&w=2000&auto=format&fit=crop" 
        alt="Dark Aurora Background" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 dark-theme-img -z-20 border-0"
      />
      
      {/* Light Theme Image (Bright Aurora/Mountains) */}
      <img 
        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000&auto=format&fit=crop" 
        alt="Light Mountains Background" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 light-theme-img -z-20 border-0"
      />

      {/* Darker Gradient Overlay for Text Readability - blending it cleanly */}
      <div className="absolute inset-0 bg-[#0b0a10]/80 sm:bg-[#0b0a10]/70 -z-10"></div>
      
      {/* Radial fade for the center focus map */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0b0a10_100%)] -z-10"></div>

      <div className="flex flex-col items-center justify-center text-center z-10 w-full max-w-4xl mx-auto px-6 relative">
        
        {/* Tiny top text */}
        <span className="text-xs sm:text-sm font-bold tracking-[0.4em] text-purple-400 uppercase mb-8 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
          MULTIPLY YOUR WORKFORCE
        </span>
        
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
          Do the Work of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">10 Team Members</span><br />
          In Seconds With BIGlogic.ai
        </h2>
        
        {/* Subtitle */}
        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl font-light mb-12 leading-relaxed">
          The window to gain an unfair advantage is closing. While you rely on slow processes, top firms are automating heavy documentation instantly. <span className="text-white font-medium">Empower one person to do the work of ten, starting today.</span>
        </p>

        {/* FOMO CTA Button styled properly */}
        <div className="relative group p-[2px] rounded-full overflow-hidden w-full sm:w-auto">
          {/* Animated gradient border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur-[2px] transition-opacity duration-300 animate-spin" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <button className="relative flex items-center w-full justify-center gap-3 bg-[#0b0a10] group-hover:bg-[#130f1c] text-white text-sm sm:text-base font-bold py-4 px-10 rounded-full transition-all duration-300 z-10 shadow-inner">
            <span className="tracking-[0.15em] text-purple-300 uppercase drop-shadow">
              START NOW FOR FREE
            </span>
            <ArrowRight className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Extra FOMO anchor under button */}
        <p className="mt-6 text-sm text-slate-400/80 font-medium">
          Limited slots remaining to claim <span className="text-purple-400 font-bold">Priority Pricing</span>.
        </p>
      </div>

    </div>
  );
}
