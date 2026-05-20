import { 
  Zap, CloudUpload, Calculator, ShieldCheck, Users, TrendingUp, 
  CheckCircle2, Clock, CheckCircle, FileText, UserPlus, FileSignature, 
  Fingerprint, Bell, FolderOpen, Lock, Smartphone, Rocket, Activity, 
  Home
} from 'lucide-react';

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="w-full flex flex-col mt-40 relative z-10">
      
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 w-full mb-16 px-4 md:px-0">
        
        {/* Left Side: Headlines */}
        <div className="flex flex-col w-full lg:w-3/5">
          <div className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 rounded-full px-4 py-1.5 mb-6 w-fit">
            <Zap className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
            <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">HOW BIGLOGIC WORKS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Every Step Connected. <br />
            Every Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Moving Forward.</span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            BIGlogic brings your projects, people, processes, and documents 
            together in one smart operational flow.
          </p>
        </div>

        {/* Right Side: Quote / Graphic Card */}
        <div className="w-full lg:w-2/5 p-8 rounded-2xl bg-gradient-to-br from-[#12121e] to-[#0a0a0f] border border-white/5 relative overflow-hidden flex flex-col justify-center min-h-[220px]">
          {/* Wireframe house background graphic */}
          <div className="absolute -right-10 -bottom-10 opacity-20 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-300">
               <path d="M3 10l9-7 9 7" />
               <path d="M4 10v10h16V10" />
               <path d="M9 20v-6h6v6" />
               <path d="M10 10h4v4h-4z" />
               <path d="M15 4v3" />
               <line x1="3" y1="15" x2="21" y2="15" />
               <line x1="2" y1="20" x2="22" y2="20" />
            </svg>
          </div>

          <div className="text-5xl font-serif text-indigo-500/40 absolute top-4 left-4 font-black">"</div>
          <div className="relative z-10 pl-6 space-y-2">
            <p className="text-xl text-white font-medium">One platform.</p>
            <p className="text-xl text-white font-medium">One flow.</p>
            <p className="text-xl text-purple-400 font-bold mb-4">Zero delays.</p>
            <p className="text-sm text-slate-400 max-w-[220px] leading-relaxed">
              Built for reconstruction teams that move fast.
            </p>
          </div>
        </div>

      </div>

      {/* 5-Step Process Section */}
      <div className="w-full relative mt-10">
        
        {/* Continuous Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="absolute top-1 lg:top-7 w-full h-[2px] lg:h-[1px] bg-gradient-to-r from-transparent to-purple-500/50 lg:hidden"></div>
            
            <div className="w-14 h-14 rounded-full bg-[#151522] border-2 border-purple-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:border-purple-400 transition-colors relative">
               <span className="absolute -top-3 bg-[#0b0a10] px-1 text-xs font-bold text-slate-300">01</span>
               <CloudUpload className="w-6 h-6 text-purple-400" />
            </div>
            
            <h4 className="text-base font-bold text-white mb-2">Inspection Uploaded</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 h-12">
              Upload photos, notes, and details from any device.
            </p>

            {/* UI Mock Card */}
            <div className="w-full bg-[#11111a] border border-white/5 rounded-xl p-3 shadow-xl transform transition-transform group-hover:-translate-y-1">
              <div className="text-left text-[10px] text-slate-400 mb-2 font-medium">Inspection</div>
              <div className="w-full h-24 rounded-lg overflow-hidden relative mb-3">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=200&fit=crop" alt="House" className="w-full h-full object-cover" />
                <div className="absolute bottom-1 right-1 bg-black/60 px-1.5 py-0.5 rounded flex items-center gap-1">
                  <span className="text-[8px] text-white">Uploaded</span>
                  <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
                </div>
                <div className="absolute bottom-1 left-1 text-[8px] text-white bg-black/60 px-1.5 py-0.5 rounded font-medium">OCEAN VIEW APTS</div>
              </div>
              <div className="flex justify-center border-t border-white/5 pt-2">
                <span className="text-[10px] text-indigo-400 flex items-center gap-1 font-medium"><CheckCircle className="w-3 h-3"/> Completed</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-14 h-14 rounded-full bg-[#151522] border-2 border-purple-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:border-purple-400 transition-colors relative">
               <span className="absolute -top-3 bg-[#0b0a10] px-1 text-xs font-bold text-slate-300">02</span>
               <Calculator className="w-6 h-6 text-purple-400" />
            </div>
            
            <h4 className="text-base font-bold text-white mb-2">Estimate Processed</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 h-12">
              AI extracts data, builds estimates, and routes for approvals.
            </p>

            {/* UI Mock Card */}
            <div className="w-full bg-[#11111a] border border-white/5 rounded-xl p-4 shadow-xl transform transition-transform group-hover:-translate-y-1 flex flex-col min-h-[160px]">
              <div className="text-left text-[10px] text-slate-400 mb-2 font-medium">Estimate Summary</div>
              <div className="text-left text-2xl font-bold text-white mb-4">$24,560</div>
              
              <div className="flex justify-between items-center w-full mb-2">
                <span className="text-[9px] text-slate-500">Line Items</span>
                <span className="text-[9px] text-slate-300 bg-white/10 px-1.5 rounded">128</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full mb-4">
                <div className="w-[85%] h-full bg-indigo-500 rounded-full"></div>
              </div>

              <div className="flex justify-center border-t border-white/5 pt-3 mt-auto">
                <span className="text-[10px] text-orange-400 flex items-center gap-1 font-medium"><Clock className="w-3 h-3"/> In Review</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-14 h-14 rounded-full bg-[#151522] border-2 border-purple-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:border-purple-400 transition-colors relative">
               <span className="absolute -top-3 bg-[#0b0a10] px-1 text-xs font-bold text-slate-300">03</span>
               <ShieldCheck className="w-6 h-6 text-purple-400" />
            </div>
            
            <h4 className="text-base font-bold text-white mb-2">Documents Verified</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 h-12">
              Compliance checks run automatically and keep everything audit-ready.
            </p>

            {/* UI Mock Card */}
            <div className="w-full bg-[#11111a] border border-white/5 rounded-xl p-4 shadow-xl transform transition-transform group-hover:-translate-y-1 flex flex-col min-h-[160px]">
               <div className="text-left text-[10px] text-slate-400 mb-3 font-medium">Compliance Checklist</div>
               
               <div className="flex flex-col gap-2 mt-1">
                 {[
                   { t: 'Scope of Work', icon: <FileText className="w-3 h-3" /> },
                   { t: 'Proof of Loss', icon: <FileSignature className="w-3 h-3" /> },
                   { t: 'Contract', icon: <FileText className="w-3 h-3" /> },
                   { t: 'ID Verification', icon: <Fingerprint className="w-3 h-3" /> }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                       <span className="text-slate-600">{item.icon}</span>
                       <span className="text-[10px] font-medium text-slate-300">{item.t}</span>
                     </div>
                     <CheckCircle2 className="w-3 h-3 text-green-500" />
                   </div>
                 ))}
               </div>

              <div className="flex justify-center border-t border-white/5 pt-3 mt-auto">
                <span className="text-[10px] text-green-400 flex items-center gap-1 font-medium"><CheckCircle className="w-3 h-3"/> Verified</span>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-14 h-14 rounded-full bg-[#151522] border-2 border-purple-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:border-purple-400 transition-colors relative">
               <span className="absolute -top-3 bg-[#0b0a10] px-1 text-xs font-bold text-slate-300">04</span>
               <Users className="w-6 h-6 text-purple-400" />
            </div>
            
            <h4 className="text-base font-bold text-white mb-2">Team Coordinated</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 h-12">
              Tasks are assigned, teams are notified, and everyone stays aligned.
            </p>

             {/* UI Mock Card */}
             <div className="w-full bg-[#11111a] border border-white/5 rounded-xl p-4 shadow-xl transform transition-transform group-hover:-translate-y-1 flex flex-col min-h-[160px]">
               <div className="text-left text-[10px] text-slate-400 mb-3 font-medium">Team Activity</div>
               
               <div className="flex flex-col gap-2 mt-1">
                 {[
                   { role: 'Project Manager', st: 'Assigned', c: 'text-green-400', d: 'bg-green-400' },
                   { role: 'Estimator', st: 'In Progress', c: 'text-green-400', d: 'bg-green-400' },
                   { role: 'Adjuster', st: 'Reviewing', c: 'text-orange-400', d: 'bg-orange-400' },
                   { role: 'Vendor', st: 'Scheduled', c: 'text-green-400', d: 'bg-green-400' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between">
                     <div className="flex items-center gap-1.5">
                       <img src={`https://i.pravatar.cc/100?img=${i + 30}`} className="w-4 h-4 rounded-full object-cover grayscale opacity-80" alt="u"/>
                       <span className="text-[9px] text-slate-300">{item.role}</span>
                     </div>
                     <div className="flex items-center gap-1">
                       <div className={`w-1.5 h-1.5 rounded-full ${item.d}`}></div>
                       <span className={`text-[8px] ${item.c}`}>{item.st}</span>
                     </div>
                   </div>
                 ))}
               </div>

              <div className="flex justify-center border-t border-white/5 pt-3 mt-auto">
                <span className="text-[10px] text-indigo-400 flex items-center gap-1 font-medium"><CheckCircle className="w-3 h-3"/> All Set</span>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-14 h-14 rounded-full bg-[#151522] border-2 border-purple-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:border-purple-400 transition-colors relative">
               <span className="absolute -top-3 bg-[#0b0a10] px-1 text-xs font-bold text-slate-300">05</span>
               <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            
            <h4 className="text-base font-bold text-white mb-2">Project Moving</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 h-12">
              Real-time updates keep projects on track and clients informed.
            </p>

            {/* UI Mock Card */}
            <div className="w-full bg-[#11111a] border border-white/5 rounded-xl p-4 shadow-xl transform transition-transform group-hover:-translate-y-1 flex flex-col min-h-[160px]">
              <div className="text-left text-[10px] text-slate-400 mb-2 font-medium">Project Progress</div>
              <div className="text-left text-2xl font-bold text-white mb-3">72%</div>
              
              <div className="w-full h-1.5 bg-white/5 rounded-full mb-4">
                <div className="w-[72%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              </div>

              <div className="flex justify-between items-end mb-2 text-left">
                <div className="flex flex-col">
                  <span className="text-[7px] text-slate-500 uppercase">Next Milestone</span>
                  <span className="text-[9px] text-slate-300">Materials Approval</span>
                </div>
                <span className="text-[9px] text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded">3 Days</span>
              </div>

              <div className="flex justify-center border-t border-white/5 pt-3 mt-auto">
                <span className="text-[10px] text-green-400 flex items-center gap-1 font-medium"><CheckCircle className="w-3 h-3"/> On Track</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Info Strip (5 Icons) */}
      <div className="w-full bg-[#11111a] border border-white/5 rounded-2xl p-6 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full box-border">
         {[
           { i: <Clock className="w-6 h-6 text-indigo-400"/>, t: 'Real-time visibility', d: "Know what's happening, before anyone asks." },
           { i: <Bell className="w-6 h-6 text-purple-400"/>, t: 'Automatic notifications', d: "The right updates to the right people—instantly." },
           { i: <FolderOpen className="w-6 h-6 text-pink-400"/>, t: 'Centralized documents', d: "All files, approvals, and reports in one place." },
           { i: <Lock className="w-6 h-6 text-purple-400"/>, t: 'Secure & compliant', d: "Built with enterprise-grade security and compliance." },
           { i: <Smartphone className="w-6 h-6 text-indigo-400"/>, t: 'Access anywhere', d: "Web + mobile access for teams in the field." },
         ].map((item, idx) => (
           <div key={idx} className="flex items-start gap-4">
             <div className="mt-1 shrink-0">{item.i}</div>
             <div className="flex flex-col">
               <span className="text-sm font-semibold text-white mb-1">{item.t}</span>
               <span className="text-[11px] text-slate-400 leading-snug">{item.d}</span>
             </div>
           </div>
         ))}
      </div>

      {/* Bottom Rocket/Metrics Banner */}
      <div className="w-full bg-gradient-to-r from-[#12101e] via-[#100f18] to-[#141220] border border-white/10 rounded-2xl p-6 lg:p-8 mt-6 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden z-10 shadow-2xl mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full box-border">
         {/* Background ambient glow */}
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none"></div>

         <div className="flex items-center gap-6 z-10 w-full lg:w-1/2">
           <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
             <Rocket className="w-8 h-8 text-white fill-purple-400" />
           </div>
           <div className="flex flex-col">
             <h3 className="text-lg md:text-xl font-medium text-white mb-1">Operations shouldn't slow you down.</h3>
             <p className="text-lg md:text-xl font-bold text-purple-400">BIGlogic helps you move faster, with confidence.</p>
           </div>
         </div>

         <div className="flex flex-wrap items-center justify-between gap-6 z-10 w-full lg:w-1/2">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
               <Zap className="w-4 h-4 text-indigo-400" />
             </div>
             <div className="flex flex-col">
               <span className="text-xl font-bold text-white leading-none mb-1">3X</span>
               <span className="text-[10px] text-slate-400 leading-tight">Faster<br/>Coordination</span>
             </div>
           </div>
           
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
               <Activity className="w-4 h-4 text-purple-400" />
             </div>
             <div className="flex flex-col">
               <span className="text-xl font-bold text-white leading-none mb-1">90%</span>
               <span className="text-[10px] text-slate-400 leading-tight">Less<br/>Manual Work</span>
             </div>
           </div>

           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
               <TrendingUp className="w-4 h-4 text-blue-400" />
             </div>
             <div className="flex flex-col">
               <span className="text-xl font-bold text-white leading-none mb-1">2.5X</span>
               <span className="text-[10px] text-slate-400 leading-tight">Faster Project<br/>Completion</span>
             </div>
           </div>

           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
               <CheckCircle2 className="w-4 h-4 text-pink-400" />
             </div>
             <div className="flex flex-col">
               <span className="text-xl font-bold text-white leading-none mb-1">85%</span>
               <span className="text-[10px] text-slate-400 leading-tight">Fewer<br/>Delays</span>
             </div>
           </div>
         </div>

      </div>

    </div>
  );
}
