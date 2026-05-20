import { 
  Rocket, Sparkles, MoveRight, Check, Activity, Folder, 
  MessageSquare, ShieldCheck, Users, CheckCircle2, CloudUpload, 
  Package, TrendingUp, Zap
} from 'lucide-react';

export default function Features() {
  return (
    <div id="features" className="w-full flex flex-col items-center mt-32 relative z-10">
      
      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Header & Top Right Activity Feed */}
      <div className="w-full flex flex-col xl:flex-row justify-between items-start gap-10 mb-12">
        <div className="flex flex-col items-start w-full xl:w-2/3">
          <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-[#16122d] rounded-full px-4 py-1.5 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Rocket className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-200 uppercase">POWERFUL FEATURES. ONE PLATFORM.</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight">
            Everything Your Team Needs <br className="hidden md:block"/>
            To <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Move Faster.</span>
          </h2>
          
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            BIGlogic brings workflows, approvals, communication, estimates, documents,
            coordination, and project visibility together into one connected operational system.
          </p>
        </div>

        {/* Top Right Activity Mock */}
        <div className="w-full xl:w-1/3 bg-[#0a0a0f] border border-white/5 rounded-2xl p-4 flex flex-col gap-3 shadow-xl">
           {[
             { i: <CheckCircle2 className="w-4 h-4 text-green-400" />, bg: 'bg-green-500/20', t: 'Approval Completed', d: 'Insurance Estimate', time: '2m ago' },
             { i: <CloudUpload className="w-4 h-4 text-purple-400" />, bg: 'bg-purple-500/20', t: 'Inspection Uploaded', d: 'Ocean View Apartments', time: '5m ago' },
             { i: <Package className="w-4 h-4 text-orange-400" />, bg: 'bg-orange-500/20', t: 'Materials Scheduled', d: 'Delivering Tomorrow', time: '15m ago' },
             { i: <TrendingUp className="w-4 h-4 text-blue-400" />, bg: 'bg-blue-500/20', t: 'Project Back On Track', d: 'Riverside Condos', time: '18m ago' },
           ].map((act, i) => (
             <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 hover:bg-white/[0.02] rounded-lg transition-colors border border-transparent hover:border-white/5">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/5 ${act.bg}`}>
                    {act.i}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-200">{act.t}</span>
                    <span className="text-[10px] text-slate-400">{act.d}</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-500 sm:text-right">{act.time}</span>
             </div>
           ))}
        </div>
      </div>

      {/* Grid Row 1 (Two Large Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-6 relative">
         
         {/* Smart Estimate Processing */}
         <div className="bg-[#0b0a11] border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden flex flex-col group min-h-[440px]">
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] pointer-events-none rounded-full"></div>
           
           <div className="flex items-start gap-4 mb-4">
             <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
               <Sparkles className="w-5 h-5 text-purple-400" />
             </div>
             <div className="flex flex-col mt-0.5">
               <h3 className="text-xl font-bold text-white leading-tight mb-2">Smart Estimate Processing</h3>
             </div>
           </div>

           <p className="text-sm text-slate-400 mb-6 max-w-[280px]">
             Upload estimates, organize documents, and move approvals faster with less manual work.
           </p>

           <div className="flex flex-col gap-2.5 mb-8">
             {['AI data extraction', 'Auto categorization', 'Faster approvals'].map((ft, i) => (
               <div key={i} className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50">
                   <Check className="w-2.5 h-2.5 text-purple-400" />
                 </div>
                 <span className="text-xs font-medium text-slate-300">{ft}</span>
               </div>
             ))}
           </div>

           <a href="#" className="flex items-center gap-2 text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors w-fit border border-purple-500/30 px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20">
             Learn more <MoveRight className="w-4 h-4" />
           </a>

           {/* Inner UI mock absolute positioned bottom right */}
           <div className="absolute bottom-6 right-6 w-3/5 lg:w-[320px] bg-[#110e1c] border border-white/10 rounded-2xl p-4 shadow-2xl hidden sm:flex gap-4 transform group-hover:-translate-y-2 transition-transform">
              <div className="w-1/2 flex flex-col">
                <div className="bg-white rounded p-2 border border-slate-200 opacity-90 h-32 flex flex-col relative overflow-hidden">
                  <div className="w-full h-1 bg-slate-300 mb-1.5 rounded"></div>
                  <div className="w-3/4 h-1 bg-slate-300 mb-3 rounded"></div>
                  <div className="w-full h-0.5 bg-slate-200 mb-1"></div>
                  <div className="w-full h-0.5 bg-slate-200 mb-1"></div>
                  <div className="w-full h-0.5 bg-slate-200 mb-3"></div>
                  <div className="w-1/2 h-1.5 bg-purple-200 rounded self-end mb-1 mt-auto"></div>
                  <span className="absolute bottom-1 left-2 text-[6px] text-slate-500">1/25</span>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                 <div className="flex flex-col">
                   <span className="text-[9px] font-bold text-slate-300 mb-1">Extracted Summary</span>
                   <div className="flex justify-between items-center bg-black/40 rounded px-1.5 py-1 mb-0.5 border border-white/5"><span className="text-[7px] text-slate-400">Total</span><span className="text-[8px] font-medium text-white">$24,560.00</span></div>
                   <div className="flex justify-between items-center px-1.5 py-0.5"><span className="text-[7px] text-slate-500">Labor</span><span className="text-[7px] text-slate-400">$12,450.00</span></div>
                   <div className="flex justify-between items-center px-1.5 py-0.5"><span className="text-[7px] text-slate-500">Materials</span><span className="text-[7px] text-slate-400">$8,320.00</span></div>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[9px] font-bold text-slate-300 mb-1">Approval Routing</span>
                   <div className="flex justify-between items-center px-1 py-0.5 hover:bg-white/5 rounded">
                     <div className="flex gap-1 items-center"><img src="https://i.pravatar.cc/100?img=11" className="w-3 h-3 rounded-full" /><span className="text-[7px] text-slate-300">Estimator</span></div>
                     <span className="text-[7px] text-green-400">Approved</span>
                   </div>
                   <div className="flex justify-between items-center px-1 py-0.5 hover:bg-white/5 rounded">
                     <div className="flex gap-1 items-center"><img src="https://i.pravatar.cc/100?img=12" className="w-3 h-3 rounded-full" /><span className="text-[7px] text-slate-300">Project Manager</span></div>
                     <span className="text-[7px] text-orange-400">Pending</span>
                   </div>
                 </div>
              </div>
              
              {/* Connector line */}
              <div className="absolute left-[38%] top-[25%] right-[55%] h-[1px] bg-purple-500/50">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
              </div>
           </div>
         </div>

         {/* Live Project Visibility */}
         <div className="bg-[#0a0f1c] border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden flex flex-col group min-h-[440px]">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] pointer-events-none rounded-full"></div>
           
           <div className="flex flex-col w-full z-10 mb-6 relative">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight mt-1">Live Project Visibility</h3>
             </div>
             
             <p className="text-sm text-slate-400 max-w-[320px]">
               Track progress, delays, milestones, and updates across every active reconstruction project.
             </p>
           </div>
           
           {/* UI Mock: Active Projects + Timeline */}
           <div className="flex flex-col mt-auto gap-4 relative z-10 bg-[#070b14] border border-white/5 rounded-2xl p-4 sm:p-5 shadow-2xl">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-white">Active Projects</span>
                <span className="text-[10px] text-blue-400 hover:text-blue-300 cursor-pointer">View all</span>
              </div>

              {/* Progress Rows */}
              <div className="flex flex-col gap-3">
                {[
                  { n: 'Ocean View Apartments', p: 72, s: 'On Track', sc: 'text-green-400 bg-green-400/10', c: 'bg-green-400', u: '11' },
                  { n: 'Riverside Condos', p: 48, s: 'At Risk', sc: 'text-orange-400 bg-orange-400/10', c: 'bg-orange-400', u: '12' },
                  { n: 'Maple Grove Townhomes', p: 23, s: 'Delayed', sc: 'text-red-400 bg-red-400/10', c: 'bg-red-400', u: '13' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 w-5/12 shrink-0">
                      <img src={`https://i.pravatar.cc/100?img=${row.u}`} className="w-4 h-4 rounded-full" alt="u" />
                      <span className="text-[10px] text-slate-300 font-medium truncate">{row.n}</span>
                    </div>
                    <div className="w-3/12 flex items-center pr-2">
                       <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                         <div className={`h-full ${row.c}`} style={{width: `${row.p}%`}}></div>
                       </div>
                    </div>
                    <span className="text-[10px] text-slate-400 w-1/12 text-right">{row.p}%</span>
                    <div className="w-2/12 flex justify-end">
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${row.sc}`}>{row.s}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline graphic below */}
              <div className="border-t border-white/5 pt-4 mt-2">
                <span className="text-[10px] text-slate-400 mb-3 block">Timeline</span>
                <div className="relative w-full h-1 bg-white/5 rounded-full mb-6">
                  <div className="absolute left-0 top-0 h-full w-[60%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  
                  {/* Nodes */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full border-2 border-[#070b14] flex items-center justify-center shrink-0">
                    <Check className="w-1.5 h-1.5 text-[#070b14] font-bold" />
                  </div>
                  <div className="absolute left-[25%] top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full border-2 border-[#070b14] flex items-center justify-center shrink-0">
                     <Check className="w-1.5 h-1.5 text-[#070b14] font-bold" />
                  </div>
                  <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-[#070b14] shrink-0 blur-[1px]"></div>
                  <div className="absolute left-[60%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#070b14] rounded-full border-2 border-purple-400 shrink-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-700/50 rounded-full border-2 border-[#070b14] shrink-0"></div>

                  {/* Labels */}
                  <div className="absolute -left-1 top-4 flex flex-col"><span className="text-[8px] text-slate-300">Inspection</span><span className="text-[7px] text-green-400">Complete</span></div>
                  <div className="absolute left-[23%] top-4 flex flex-col"><span className="text-[8px] text-slate-300">Estimate</span><span className="text-[7px] text-green-400">Approved</span></div>
                  <div className="absolute left-[48%] top-4 flex flex-col"><span className="text-[8px] text-slate-300">Materials</span><span className="text-[7px] text-blue-400">In Progress</span></div>
                  <div className="absolute left-[58%] top-4 flex flex-col"><span className="text-[8px] text-slate-300">Rebuild</span><span className="text-[7px] text-purple-400">In Progress</span></div>
                  <div className="absolute right-0 top-4 flex flex-col items-end text-right"><span className="text-[8px] text-slate-500">Closeout</span><span className="text-[7px] text-orange-400">Pending</span></div>
                </div>
              </div>

           </div>
         </div>
      </div>

      {/* Grid Row 2 (Four Smaller Info / UI Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full mb-6 relative">
        
        {/* Card 1: Communication */}
        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-5 flex flex-col hover:border-pink-500/20 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-pink-500/10 border border-pink-500/20 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.3)]">
               <MessageSquare className="w-4 h-4 text-pink-400" />
            </div>
            <h4 className="text-sm font-semibold text-white">Communication Hub</h4>
          </div>
          <p className="text-xs text-slate-400 mb-4 h-12">Keep conversations, updates, notes, and team coordination connected in one place.</p>
          
          <div className="bg-[#0b0a0f] border border-white/5 rounded-xl flex-1 flex flex-col overflow-hidden text-left p-3">
            <div className="flex items-center gap-4 border-b border-white/5 pb-2 mb-2">
              <span className="text-[9px] text-white border-b border-white pb-0.5">All</span>
              <span className="text-[9px] text-slate-500 hover:text-slate-300">Updates</span>
              <span className="text-[9px] text-slate-500 hover:text-slate-300">Mentions</span>
            </div>
            <div className="flex flex-col gap-3 flex-1 overflow-hidden">
              <div className="flex items-start gap-2">
                <img src="https://i.pravatar.cc/100?img=33" className="w-5 h-5 rounded-full mt-0.5" />
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-slate-300">Project Manager</span>
                    <span className="text-[7px] text-slate-500">Today 10:30 AM</span>
                  </div>
                  <span className="text-[8px] text-slate-400 leading-snug">Materials are on-site. Ready for framing inspection.</span>
                </div>
                <div className="w-3 h-3 bg-purple-500 rounded-full flex items-center justify-center text-[6px] text-white shrink-0 mt-2">3</div>
              </div>
              <div className="flex items-start gap-2">
                <img src="https://i.pravatar.cc/100?img=43" className="w-5 h-5 rounded-full mt-0.5" />
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-slate-200">Estimator</span>
                    <span className="text-[7px] text-slate-500">Today 9:15 AM</span>
                  </div>
                  <span className="text-[8px] text-slate-400 leading-snug">Estimate revision uploaded.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Document Center */}
        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-5 flex flex-col hover:border-blue-500/20 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
               <Folder className="w-4 h-4 text-blue-400" />
            </div>
            <h4 className="text-sm font-semibold text-white">Document Center</h4>
          </div>
          <p className="text-xs text-slate-400 mb-4 h-12">Store contracts, approvals, inspection reports, and project files without the chaos.</p>
          
          <div className="bg-[#0b0a0f] border border-white/5 rounded-xl flex-1 flex flex-col overflow-hidden text-left p-3">
             <div className="flex justify-between items-center mb-3">
               <span className="text-[9px] text-white/50 uppercase font-bold tracking-widest">Documents</span>
               <span className="text-[8px] text-indigo-400">View all</span>
             </div>
             
             <div className="flex flex-col gap-2">
               {[
                 { n: 'Contract Agreement.pdf', s: 'Contract • 2.4 MB', ic: 'bg-red-500/20 text-red-500 border border-red-500/20', on: true },
                 { n: 'Inspection Report.pdf', s: 'Inspection • 4.1 MB', ic: 'bg-blue-500/20 text-blue-500 border border-blue-500/20', on: true },
                 { n: 'Scope of Work.pdf', s: 'Scope • 1.2 MB', ic: 'bg-blue-500/20 text-blue-500 border border-blue-500/20', on: true },
                 { n: 'Lien Waiver.pdf', s: 'Compliance • 890 KB', ic: 'bg-slate-700/50 text-slate-400 border border-white/10', on: false },
               ].map((d, i) => (
                 <div key={i} className="flex items-center justify-between group/doc cursor-pointer">
                   <div className="flex items-center gap-2">
                     <div className={`w-5 h-5 rounded flex items-center justify-center ${d.ic} text-[8px] font-bold`}>PDF</div>
                     <div className="flex flex-col">
                       <span className="text-[9px] font-semibold text-slate-300">{d.n}</span>
                       <span className="text-[7px] text-slate-500">{d.s}</span>
                     </div>
                   </div>
                   {d.on ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <div className="w-3 h-3 rounded-full bg-slate-700"></div>}
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Card 3: Compliance Tracking */}
        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-5 flex flex-col hover:border-green-500/20 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.3)]">
               <ShieldCheck className="w-4 h-4 text-green-400" />
            </div>
            <h4 className="text-sm font-semibold text-white">Compliance Tracking</h4>
          </div>
          <p className="text-xs text-slate-400 mb-4 h-12">Reduce risk with organized approvals, verification workflows, and audit-ready documentation.</p>
          
          <div className="bg-[#0b0a0f] border border-white/5 rounded-xl flex-1 flex flex-col overflow-hidden text-left p-3">
             <div className="flex justify-between items-center mb-3">
               <span className="text-[9px] text-white/50 uppercase font-bold tracking-widest">Compliance Overview</span>
               <span className="text-[8px] text-indigo-400">View report</span>
             </div>

             <div className="flex gap-4 items-center mt-2 h-full">
               <div className="w-14 h-14 rounded-full border-4 border-[#12121a] flex items-center justify-center relative shrink-0">
                  <div className="absolute inset-0 rounded-full border-4 border-green-500 rounded-bl-transparent rotate-45 border-b-transparent mix-blend-screen shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-white leading-none">92%</span>
                    <span className="text-[6px] text-slate-400 uppercase mt-0.5">Compliant</span>
                  </div>
               </div>
               
               <div className="flex flex-col flex-1 gap-2 border-l border-white/5 pl-3">
                 <div className="flex justify-between items-center">
                   <span className="text-[9px] text-slate-300">Approvals</span>
                   <div className="flex items-center gap-1.5"><span className="text-[9px] font-medium text-slate-400">24 / 26</span><div className="w-1 h-1 bg-green-500 rounded-full"></div></div>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-[9px] text-slate-300">Verifications</span>
                   <div className="flex items-center gap-1.5"><span className="text-[9px] font-medium text-slate-400">18 / 20</span><div className="w-1 h-1 bg-green-500 rounded-full"></div></div>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-[9px] text-slate-300">Documents</span>
                   <div className="flex items-center gap-1.5"><span className="text-[9px] font-medium text-slate-400">32 / 34</span><div className="w-1 h-1 bg-green-500 rounded-full"></div></div>
                 </div>
                 <div className="flex justify-between items-center pt-1 border-t border-white/5 opacity-70">
                   <span className="text-[8px] text-slate-400">Expiring Soon</span>
                   <div className="flex items-center gap-1"><span className="text-[8px] font-medium text-orange-400">2</span><div className="w-1 h-1 bg-orange-500 rounded-full"></div></div>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Card 4: Real-Time Coordination */}
        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-5 flex flex-col hover:border-orange-500/20 transition-colors group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.3)]">
               <Users className="w-4 h-4 text-orange-400" />
            </div>
            <h4 className="text-sm font-semibold text-white">Real-Time Coordination</h4>
          </div>
          <p className="text-xs text-slate-400 mb-4 h-12">Keep field teams, managers, adjusters, and vendors aligned without constant follow-ups.</p>
          
          <div className="bg-[#0b0a0f] border border-white/5 rounded-xl flex-1 flex flex-col overflow-hidden text-left p-3">
             <div className="flex justify-between items-center mb-3">
               <span className="text-[9px] text-white/50 uppercase font-bold tracking-widest">Team Activity</span>
               <span className="text-[8px] text-indigo-400">View all</span>
             </div>

             <div className="flex flex-col gap-2.5 flex-1 relative justify-center">
               <div className="absolute left-[9px] top-1 bottom-1 w-[1px] border-l border-dashed border-white/10 z-0"></div>
               {[
                 { r: 'Site Supervisor', a: 'Uploaded 12 photos', t: '2m ago', c: 'bg-green-500' },
                 { r: 'Field Crew', a: 'Updated progress', t: '15m ago', c: 'bg-blue-500' },
                 { r: 'Vendor', a: 'Confirmed delivery', t: '30m ago', c: 'bg-green-500' },
                 { r: 'Adjuster', a: 'Left a comment', t: '1h ago', c: 'bg-orange-500' },
               ].map((itm, i) => (
                 <div key={i} className="flex items-center gap-2 z-10 relative">
                   <img src={`https://i.pravatar.cc/100?img=${i + 15}`} className="w-5 h-5 rounded-full border border-[#0b0a0f] relative z-10 shrink-0 object-cover" />
                   <div className="flex justify-between items-center w-full">
                     <div className="flex flex-col w-20 shrink-0">
                       <span className="text-[8px] font-semibold text-slate-300 truncate">{itm.r}</span>
                     </div>
                     <span className="text-[8px] text-slate-400 truncate flex-1 pl-2 border-l border-white/5">{itm.a}</span>
                     <div className="flex items-center gap-1.5 shrink-0 ml-1">
                       <span className="text-[7px] text-slate-500">{itm.t}</span>
                       <div className={`w-1 h-1 rounded-full ${itm.c}`}></div>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>

      {/* Bottom Banner Section */}
      <div className="w-full bg-[#11111a] border border-white/5 rounded-2xl p-6 lg:p-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-6 relative shadow-2xl overflow-hidden z-10">
         {/* Background gradient hint */}
         <div className="absolute right-0 bottom-0 w-[50%] h-full bg-gradient-to-r from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>

         <div className="flex items-center gap-6 w-full md:w-1/2 relative z-10">
           <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
             <Rocket className="w-6 h-6 text-white fill-purple-300" />
           </div>
           <div className="flex flex-col">
             <h3 className="text-sm md:text-base font-medium text-white mb-1">The fastest reconstruction companies today</h3>
             <p className="text-sm md:text-base font-bold text-purple-400">aren't relying on disconnected systems anymore.</p>
           </div>
         </div>

         {/* 4 Stats */}
         <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-6 w-full md:w-1/2 md:border-l border-white/10 md:pl-8 relative z-10">
           {[
             { i: <Zap className="w-3.5 h-3.5 text-indigo-400" />, bg: 'bg-indigo-500/10 border-indigo-500/20', v: '3X', t: 'Faster Coordinaton' },
             { i: <TrendingUp className="w-3.5 h-3.5 text-blue-400" />, bg: 'bg-blue-500/10 border-blue-500/20', v: '90%', t: 'Less Manual Work' },
             { i: <Activity className="w-3.5 h-3.5 text-purple-400" />, bg: 'bg-purple-500/10 border-purple-500/20', v: '2.5X', t: 'Faster Project Completion' },
             { i: <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />, bg: 'bg-pink-500/10 border-pink-500/20', v: '85%', t: 'Fewer Operational Delays' },
           ].map((st, idx) => (
             <div key={idx} className="flex items-start gap-2 w-[45%] md:w-1/4">
               <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center border shrink-0 ${st.bg}`}>
                 {st.i}
               </div>
               <div className="flex flex-col">
                 <span className="text-lg font-bold text-white leading-tight">{st.v}</span>
                 <span className="text-[8px] text-slate-400 leading-tight">{st.t}</span>
               </div>
             </div>
           ))}
         </div>

      </div>
    </div>
  );
}