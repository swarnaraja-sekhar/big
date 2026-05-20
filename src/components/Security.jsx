import { ShieldCheck, Lock, Server, Fingerprint, RefreshCcw } from 'lucide-react';

export default function Security() {
  return (
    <div id="security" className="w-full flex flex-col items-center mt-32 relative z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
        
        {/* Left: Text & Pitch */}
        <div className="flex flex-col flex-1">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-[#0e172a] rounded-full px-4 py-1.5 mb-6 w-fit shadow-[0_0_15px_rgba(59,130,246,0.15)]">
             <ShieldCheck className="w-4 h-4 text-blue-400" />
             <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">BANK-GRADE SECURITY. ZERO RISK.</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight">
            Your Data is Your Leverage. <span className="text-blue-400 block">Never Leave It Exposed.</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-2xl leading-relaxed">
            Fast operations demand bulletproof foundations. We handle the enterprise-grade compliance, end-to-end encryption, and multi-layered security so you can focus entirely on scaling—without the late-night panic attacks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Lock, title: "AES-256 Encryption", desc: "Data is encrypted at rest and in transit." },
              { icon: Server, title: "Isolated Environments", desc: "Your data stays entirely separate and secure." },
              { icon: Fingerprint, title: "Role-Based Access", desc: "Strict granular controls over who sees what." },
              { icon: RefreshCcw, title: "Continuous Audits", desc: "Real-time logging of every system action." },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-1">
                  <feature.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold">{feature.title}</h4>
                <span className="text-sm text-slate-500">{feature.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Security Visual */}
        <div className="flex-1 w-full relative flex justify-center lg:justify-end">
           <div className="w-full max-w-md h-[400px] border border-blue-500/20 bg-[#0a0f1c] rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)] flex items-center justify-center p-8 group">
              
              {/* Animated rings */}
              <div className="absolute w-[300px] h-[300px] border border-blue-500/10 rounded-full"></div>
              <div className="absolute w-[400px] h-[400px] border border-blue-500/5 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
              
              <div className="relative z-10 bg-[#0a0a0f] border border-blue-500/30 w-full h-full rounded-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-bold tracking-wide">System Security Status</span>
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-md font-semibold font-mono border border-blue-500/30">PROTECTED</span>
                </div>
                
                <div className="flex flex-col gap-4 mt-2">
                   {[
                     { l: 'Network Traffic', s: 'Encrypted', c: 'text-green-400' },
                     { l: 'Latest Audit', s: 'Passed - 0m ago', c: 'text-green-400' },
                     { l: 'Threat Detection', s: 'Active', c: 'text-blue-400' },
                     { l: 'Active Sessions', s: '24 (Authorized)', c: 'text-slate-300' },
                   ].map((row, i) => (
                     <div key={i} className="flex justify-between items-center bg-black/40 rounded-lg p-3 border border-white/5 group-hover:border-white/10 transition-colors">
                       <span className="text-sm font-medium text-slate-400">{row.l}</span>
                       <span className={`text-sm font-semibold tracking-tight ${row.c}`}>{row.s}</span>
                     </div>
                   ))}
                </div>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
}