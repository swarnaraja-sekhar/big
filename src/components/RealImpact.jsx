import { 
  TrendingUp, Rocket, Zap, BarChart2, CheckCircle2, XCircle, 
  Check, X, FileText, Package, Calculator, ShieldCheck, 
  ArrowRight, Activity, Smile
} from 'lucide-react';

export default function RealImpact() {
  return (
    <div id="real-impact" className="w-full flex flex-col items-center mt-32 relative z-10">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 rounded-full px-4 py-1.5 mb-6">
          <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">REAL IMPACT. REAL RESULTS.</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight">
          The Companies Growing Fastest <br className="hidden md:block"/>
          Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Removing Operational Friction.</span>
        </h2>
        
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
          BIGlogic helps reconstruction teams reduce delays, improve coordination, 
          eliminate repetitive work, and keep projects moving without operational slowdowns.
        </p>
      </div>

      {/* Main Grid: Left (Metrics + VS) & Right (Live Activity) */}
      <div className="w-full flex flex-col xl:flex-row gap-6 mb-6">
        
        {/* LEFT COLUMN: Metrics & VS Comparison */}
        <div className="w-full xl:w-[70%] flex flex-col gap-6">
          
          {/* 4 Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Metric 1 */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-5 flex flex-col relative overflow-hidden group hover:border-purple-500/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl font-bold text-white">3X</span>
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Rocket className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-slate-200 mb-1">Faster Coordination</h4>
              <p className="text-[10px] text-slate-400">Teams communicate and execute 3x faster.</p>
              {/* Subtle wave graph */}
              <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 mt-4">
                 <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-purple-500 fill-current">
                   <path d="M0,20 L0,10 C10,12 20,5 30,8 C40,11 50,15 60,10 C70,5 80,12 90,8 L100,5 L100,20 Z" opacity="0.5"/>
                   <path d="M0,20 L0,15 C20,15 30,8 50,12 C70,16 80,5 100,10 L100,20 Z"/>
                 </svg>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-5 flex flex-col relative group hover:border-blue-500/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl font-bold text-white">90%</span>
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Zap className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-slate-200 mb-1">Less Manual Work</h4>
              <p className="text-[10px] text-slate-400 mb-4 z-10">Automate repetitive tasks and eliminate busywork.</p>
              <div className="mt-auto w-full flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400">90%</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-5 flex flex-col relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
               <div className="flex justify-between items-start mb-4">
                <span className="text-4xl font-bold text-white">2.5X</span>
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <TrendingUp className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-slate-200 mb-1">Faster Project Completion</h4>
              <p className="text-[10px] text-slate-400">Projects are completed 2.5x faster from start to finish.</p>
              {/* Subtle wave graph */}
              <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 mt-4">
                 <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full text-indigo-500 fill-current">
                   <path d="M0,20 L0,15 C20,10 30,12 50,8 C70,4 80,10 100,5 L100,20 Z" opacity="0.5"/>
                   <path d="M0,20 L0,18 C15,14 25,8 45,12 C65,16 85,5 100,8 L100,20 Z"/>
                 </svg>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-5 flex flex-col relative group hover:border-pink-500/30 transition-colors">
               <div className="flex justify-between items-start mb-4">
                <span className="text-4xl font-bold text-white">85%</span>
                <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
                  <Smile className="w-4 h-4 text-pink-400" />
                </div>
              </div>
              <h4 className="text-sm font-semibold text-slate-200 mb-1">Fewer Operational Delays</h4>
              <p className="text-[10px] text-slate-400 mb-4 z-10">Reduce delays and keep projects on track.</p>
              <div className="mt-auto w-full flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                </div>
                <span className="text-[10px] font-bold text-slate-400">85%</span>
              </div>
            </div>

          </div>

          {/* Without vs With Comparison */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
             {/* Center VS Badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#161622] border border-white/10 items-center justify-center shadow-xl">
              <span className="font-black text-lg text-white">VS</span>
            </div>

            {/* WITHOUT BIGlogic block */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(239,68,68,0.02)]">
              <div className="flex items-center gap-2 mb-2">
                <XCircle className="w-4 h-4 text-red-500" />
                <h3 className="text-sm font-bold tracking-widest uppercase text-red-400">WITHOUT BIGLOGIC</h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">Operational friction slows everything down.</p>

              <div className="flex flex-col gap-3">
                {[
                  { l: 'Constant follow-ups', r: 'Time wasted', lc: 'text-slate-300', rc: 'text-red-400/80 bg-red-500/10' },
                  { l: 'Disconnected systems', r: 'Information lost', lc: 'text-slate-300', rc: 'text-red-400/80 bg-red-500/10' },
                  { l: 'Missed updates', r: 'Projects at risk', lc: 'text-slate-300', rc: 'text-red-400/80 bg-red-500/10' },
                  { l: 'Approval delays', r: 'Days of delays', lc: 'text-slate-300', rc: 'text-red-400/80 bg-red-500/10' },
                  { l: 'Manual coordination', r: 'Errors increase', lc: 'text-slate-300', rc: 'text-red-400/80 bg-red-500/10' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <X className="w-2.5 h-2.5 text-red-500" />
                      </div>
                      <span className={`text-xs ${row.lc}`}>{row.l}</span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${row.rc}`}>{row.r}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WITH BIGlogic block */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 shadow-[0_0_30px_rgba(34,197,94,0.02)] relative overflow-hidden">
               {/* Ambient green glow inside */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] -z-10 rounded-full"></div>
              
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <h3 className="text-sm font-bold tracking-widest uppercase text-green-400">WITH BIGLOGIC</h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">Everything connected. Everything moves.</p>

              <div className="flex flex-col gap-3">
                {[
                  { l: 'Real-time visibility', r: 'Full clarity', lc: 'text-white', rc: 'text-green-400/90 bg-green-500/10' },
                  { l: 'Connected workflows', r: 'Everything synced', lc: 'text-white', rc: 'text-green-400/90 bg-green-500/10' },
                  { l: 'Faster execution', r: 'No more missed updates', lc: 'text-white', rc: 'text-green-400/90 bg-green-500/10' },
                  { l: 'Approvals move faster', r: 'Hours, not days', lc: 'text-white', rc: 'text-green-400/90 bg-green-500/10' },
                  { l: 'Teams aligned in real time', r: 'Work moves forward', lc: 'text-white', rc: 'text-green-400/90 bg-green-500/10' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.3)]">
                        <Check className="w-2.5 h-2.5 text-green-400" />
                      </div>
                      <span className={`text-xs font-medium ${row.lc}`}>{row.l}</span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${row.rc}`}>{row.r}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Live Business Activity */}
        <div className="w-full xl:w-[30%] bg-[#0e0e14] border border-white/5 rounded-3xl p-6 flex flex-col relative h-full">
          
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-semibold text-white">Live Business Activity</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
              <span className="text-[10px] text-slate-400">Live</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 relative flex-1">
             {/* Vertical connecting line */}
             <div className="absolute left-4 top-2 bottom-4 w-[1px] border-l border-dashed border-white/10 z-0"></div>

             {[
               { icon: <CheckCircle2 className="w-4 h-4" />, bg: "bg-green-500/20", c: "text-green-400", title: "Inspection Approved", sub: "Ocean View Apartments", time: "2m ago" },
               { icon: <FileText className="w-3.5 h-3.5" />, bg: "bg-blue-500/20", c: "text-blue-400", title: "Project Milestone Completed", sub: "Riverside Condos - Framing", time: "7m ago" },
               { icon: <Package className="w-3.5 h-3.5" />, bg: "bg-orange-500/20", c: "text-orange-400", title: "Materials Confirmed", sub: "Maple Grove Townhomes", time: "11m ago" },
               { icon: <Calculator className="w-3.5 h-3.5" />, bg: "bg-indigo-500/20", c: "text-indigo-400", title: "Estimate Processed", sub: "Ocean View Apartments", time: "16m ago" },
               { icon: <ShieldCheck className="w-4 h-4" />, bg: "bg-green-500/20", c: "text-green-400", title: "Documents Verified", sub: "Riverside Condos", time: "22m ago" },
             ].map((evt, idx) => (
                <div key={idx} className="flex items-start gap-4 z-10 relative group">
                  <div className={`w-8 h-8 rounded-full ${evt.bg} flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform ${evt.c}`}>
                    {evt.icon}
                  </div>
                  <div className="flex flex-col pt-0.5 flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-semibold text-slate-200">{evt.title}</span>
                      <span className="text-[10px] text-slate-500">{evt.time}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-0.5">{evt.sub}</span>
                  </div>
                </div>
             ))}
          </div>

          <div className="mt-6 w-full pt-4 border-t border-white/5">
            <button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-indigo-300 transition-colors border border-white/5 flex items-center justify-center gap-2">
              View all activity <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Testimonial Quote */}
      <div className="w-full bg-[#11111a] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[80px] pointer-events-none rounded-full"></div>
        
        <div className="text-6xl font-serif text-indigo-500/20 leading-none shrink-0 opacity-50 absolute left-6 top-4 font-black">"</div>
        
        <div className="flex items-center gap-4 shrink-0 relative z-10 ml-8 md:ml-12">
          <img src="https://i.pravatar.cc/150?img=33" alt="Jason M." className="w-16 h-16 rounded-full border-2 border-indigo-500/50 shadow-lg object-cover" />
        </div>

        <div className="flex-1 text-center md:text-left relative z-10 flex flex-col md:flex-row items-center gap-6">
          <p className="text-lg md:text-xl text-white font-medium max-w-lg leading-snug">
            "Before BIGlogic, our team spent more time <span className="text-indigo-400">chasing updates</span> than moving projects forward."
          </p>
          <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>
          <p className="text-base md:text-lg text-slate-300 leading-snug max-w-[280px]">
            Now everything stays <span className="text-purple-400 font-medium">connected, organized,</span> and <span className="text-purple-400 font-medium">moving.</span>"
          </p>
        </div>

        <div className="shrink-0 flex flex-col text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 relative z-10">
          <span className="text-xs font-semibold text-white">Jason M.</span>
          <span className="text-[10px] text-slate-400">Operations Director</span>
          <span className="text-[10px] text-slate-500">Riverside Construction</span>
        </div>
      </div>

      {/* Footer CTA Banner */}
      <div className="w-full bg-[#0a0a0f] border border-white/5 border-t-purple-500/30 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

        <div className="flex items-center gap-5 z-10">
           <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
             <Rocket className="w-7 h-7 text-indigo-400" />
           </div>
           <p className="text-base md:text-lg text-slate-300 font-medium leading-snug max-w-2xl">
             While some teams are still buried in operational delays, <br className="hidden md:block"/>
             modern reconstruction companies are <span className="text-purple-400 font-bold">already operating at a different speed.</span>
           </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-2 z-10 shrink-0">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-[1px] flex items-center gap-2 border border-purple-400/50">
            See BIGlogic in Action <ArrowRight className="w-4 h-4" />
          </button>
          <span className="text-[10px] tracking-wider text-slate-500 uppercase font-medium">Book a personalized demo</span>
        </div>
      </div>

    </div>
  );
}
