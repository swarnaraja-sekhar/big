import { 
  Zap, Play, Clock, ShieldCheck, TrendingUp, CheckCircle2, 
  AlertCircle, LayoutDashboard, Folder, FileText, CheckSquare, 
  Activity, MessageSquare, Settings, Bell, Search,
  AlertTriangle, FileWarning, Sliders, ClipboardList, Files, 
  Users, CalendarDays, Puzzle, Headset, Crown, MessageCircle, 
  Hexagon
} from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full flex flex-col pt-4 lg:pt-2 space-y-16 mt-[-10px]">
      {/* 2-Column Hero Area */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center lg:items-start justify-between min-h-[600px] xl:pt-4">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-5/12 flex flex-col items-start z-20 relative pt-2 lg:pt-4">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 rounded-full px-4 py-1.5 mb-7 overflow-hidden relative shadow-[0_0_15px_rgba(239,68,68,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent flex -translate-x-full animate-[shimmer_2s_infinite]"></div>
            <Zap className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-200">
              WARNING: Slow operations are costing you <span className="text-red-400">high-value clients.</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-bold font-orbitron text-white leading-[1.05] tracking-tight">
            Do 10 Workers' Work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 relative inline-block mt-3 font-orbitron">
              With 1 Worker.
              <br />
              In Seconds.
              {/* Magic underline effect */}
              <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-60"></div>
            </span>
          </h1>

          {/* Subheadline (Hormozi / FOMO Equation) */}
          <p className="mt-8 text-base lg:text-lg text-slate-300 max-w-[480px] leading-relaxed font-medium">
            While your competition is bleeding cash on 10x the payroll, industry leaders are quietly automating their workflows. Transform <strong className="text-white">ONE</strong> team member into an unstoppable force. Execute approvals, process claims, and finalize paperwork instantly—<strong className="text-white">before your rivals even wake up.</strong>
          </p>

          {/* 3 Mini Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">10x Output</h4>
              <p className="text-xs text-slate-400 leading-tight">One single worker matching the output of an entire 10-person department.</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">0 New Hires</h4>
              <p className="text-xs text-slate-400 leading-tight">Scale your operations brutally fast without adding a dime in payroll overhead.</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Absolute Speed</h4>
              <p className="text-xs text-slate-400 leading-tight">Workflows that used to take teams months are finished in mere seconds.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col mt-12 gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-lg shadow-[0_0_30px_rgba(109,40,217,0.4)] transition-all transform hover:-translate-y-[2px] hover:scale-105 border border-purple-500/50">
                Claim Your Free Trial <span>&rarr;</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-slate-600 text-white font-semibold py-4 px-7 rounded-lg transition-all">
                <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center bg-white/10">
                  <Play className="w-2.5 h-2.5 ml-0.5 fill-white" />
                </div>
                Watch How It Works
              </button>
            </div>
            <span className="text-xs text-slate-500 ml-1 font-medium flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500"/> No credit card required. Cancel anytime.</span>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 mt-10 p-4 rounded-2xl bg-white/[0.02] border border-white/5 w-fit">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0b0a10] overflow-hidden bg-slate-700">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 max-w-[200px] font-medium leading-relaxed">
              <span className="text-red-400 font-bold">Over 1,200+ teams</span> are already crushing their competition with BIGlogic.ai.
            </p>
          </div>

        </div>

        {/* Right Side: Visual Dashboard UI representation with floating element overlays */}
        <div className="w-full lg:w-7/12 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-4 xl:-mt-4" style={{ perspective: '2200px' }}>
          
          <div className="glow-bg mix-blend-screen opacity-60" style={{ transform: 'translate(-30%, -50%) scale(0.8)' }}></div>

          {/* Wrapper for perspective transform */}
          <div className="relative w-full max-w-[960px] h-[660px] duration-700 ease-out z-10 transition-all cursor-default" 
               style={{ 
                 transform: 'rotateY(-12deg) rotateX(4deg) scale(0.85)', 
                 transformOrigin: 'center center',
                 boxShadow: '-20px 40px 100px rgba(0,0,0,0.5), 0 0 40px rgba(168,85,247,0.1)'
               }}>
            
            {/* Main Dashboard Panel */}
            <div className="absolute inset-0 bg-panel border gap-4 border-panel-border rounded-xl flex overflow-hidden">
              
              {/* Sidebar mock */}
            <div className="w-52 bg-[#0a0a0f] border-r border-panel-border flex flex-col py-4 overflow-y-auto scrollbar-hide shrink-0 z-20">
              <div className="px-4 mb-6 flex items-center gap-2">
                <div className="relative flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-purple-600 to-purple-900 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
                  <Hexagon className="text-white w-3.5 h-3.5 fill-white" />
                </div>
                <span className="font-bold text-white text-sm tracking-tight">BIGlogic.ai</span>
              </div>
              
              <div className="flex flex-col gap-0.5 px-2">
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-purple-600/20 text-purple-400 text-[10px] font-medium border border-purple-500/20">
                  <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <ClipboardList className="w-3.5 h-3.5" /> Projects
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <FileText className="w-3.5 h-3.5" /> Claims
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <CheckSquare className="w-3.5 h-3.5" /> Estimates
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <CheckSquare className="w-3.5 h-3.5" /> Approvals
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <Files className="w-3.5 h-3.5" /> Documents
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <Search className="w-3.5 h-3.5" /> Inspections
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <MessageSquare className="w-3.5 h-3.5" /> Communication
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <Users className="w-3.5 h-3.5" /> Teams
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <CalendarDays className="w-3.5 h-3.5" /> Reports
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <Puzzle className="w-3.5 h-3.5" /> Integrations
                </div>
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-[10px] font-medium transition-colors cursor-pointer">
                  <Settings className="w-3.5 h-3.5" /> Settings
                </div>
              </div>

              {/* Need Help Card */}
              <div className="mt-4 mx-3 p-3 rounded-xl bg-gradient-to-b from-[#161622] to-[#0f0f16] border border-white/5 flex flex-col gap-2 shrink-0 shadow-lg">
                <div className="flex items-center gap-2">
                  <Headset className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-[10px] font-bold text-white">Need Help?</span>
                </div>
                <p className="text-[9px] text-slate-400 leading-snug">Talk to your dedicated success manager.</p>
                <button className="mt-1 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 text-[9px] text-purple-300 hover:bg-purple-500/20 transition-colors">
                  <MessageCircle className="w-2.5 h-2.5" /> Contact Support
                </button>
              </div>

              {/* Pro Plan Card */}
              <div className="mt-3 mx-3 p-3 rounded-xl bg-[#0a0a0f] border border-white/5 flex flex-col gap-2 mb-2 shrink-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5 text-orange-400" />
                    <span className="text-[10px] font-bold text-white">Pro Plan</span>
                  </div>
                </div>
                <p className="text-[8px] text-slate-400">Renews on Jun 12, 2025</p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-purple-500 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[9px] text-purple-400 hover:text-purple-300 cursor-pointer transition-colors">Manage Plan &rarr;</span>
                  <span className="text-[8px] text-slate-400">92% used</span>
                </div>
              </div>
            </div>

            {/* Main Content Area Mock */}
            <div className="flex-1 p-4 lg:p-5 relative flex flex-col overflow-hidden bg-[#0c0c12]">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white text-base lg:text-lg font-semibold tracking-tight">Welcome back, Alex! 👋</h3>
                  <p className="text-slate-400 text-[10px] mt-0.5">Here's how your team is moving faster today.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#161622] border border-white/5 text-[9px] text-slate-300">
                    <CalendarDays className="w-3 h-3 text-slate-400" /> May 12 - May 18, 2025 &or;
                  </div>
                  <div className="relative p-1.5 rounded-full bg-[#161622] border border-white/5">
                    <Bell className="w-3.5 h-3.5 text-slate-300" />
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#161622]"></div>
                  </div>
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
                    <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Sub-banner */}
              <div className="text-[8px] font-bold text-indigo-400 tracking-widest mb-2 flex items-center gap-1">
                <span className="text-purple-500">&rsaquo;</span> WORK FASTER. CLOSE FASTER. GET PAID FASTER.
              </div>

              {/* 4 Metric Cards */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { title: 'Estimate Processing', sub: 'From upload to ready', t1: '3 Hours', t2: '30 Sec', p: '95% Faster', c: 'text-purple-400', b: 'border-purple-500/20', bg: 'from-purple-500/10' },
                  { title: 'Document Validation', sub: 'Verify & extract data', t1: '45 Min', t2: 'Instant', p: '98% Faster', c: 'text-orange-400', b: 'border-orange-500/20', bg: 'from-orange-500/10' },
                  { title: 'Meeting Summaries', sub: 'Notes to action items', t1: '1 Hour', t2: 'Automatic', p: '90% Faster', c: 'text-green-400', b: 'border-green-500/20', bg: 'from-green-500/10' },
                  { title: 'Approval Tracking', sub: 'From request to approval', t1: '2 Days', t2: 'Real-time', p: '85% Faster', c: 'text-blue-400', b: 'border-blue-500/20', bg: 'from-blue-500/10' },
                ].map((m, i) => (
                  <div key={i} className={`bg-[#12121a] rounded-lg p-2.5 border border-white/5 relative overflow-hidden`}>
                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${m.bg} to-transparent opacity-20 pointer-events-none`}></div>
                    <h4 className="text-[10px] font-semibold text-white mb-0.5">{m.title}</h4>
                    <p className="text-[8px] text-slate-500 mb-2">{m.sub}</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-slate-300">{m.t1}</span>
                        <span className="text-[7px] text-slate-500">Without BIGlogic</span>
                      </div>
                      <span className="text-slate-600 text-[10px] tracking-widest">&raquo;&rsaquo;</span>
                      <div className="flex flex-col text-right">
                        <span className={`text-[11px] font-semibold ${m.c}`}>{m.t2}</span>
                        <span className="text-[7px] text-slate-500">With BIGlogic</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[8px]">
                      <Zap className={`w-2.5 h-2.5 ${m.c} fill-current`} />
                      <span className={m.c}>{m.p}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Middle Section Grid: Workflow & Active Projects on Left, Extra boxes on right */}
              <div className="grid grid-cols-12 gap-3 flex-1 min-h-[0]">
                {/* Left Column (Span 7) */}
                <div className="col-span-7 flex flex-col gap-3">
                  
                  {/* Reconstruction Workflow */}
                  <div className="bg-[#12121a] border border-white/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="text-[9px] font-bold tracking-widest text-slate-300">RECONSTRUCTION WORKFLOW</h4>
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">In Progress</span>
                    </div>
                    <div className="flex items-start justify-between relative mt-1 px-2">
                       <div className="absolute top-2.5 left-6 right-6 h-[2px] bg-slate-800 -z-10"></div>
                       <div className="absolute top-2.5 left-6 w-[60%] h-[2px] bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] -z-10"></div>
                       {[
                         { lbl: 'Inspection\nCompleted', date: 'May 10', icon: <CheckSquare className="w-2.5 h-2.5" />, on: true },
                         { lbl: 'Estimate\nParsed', date: 'May 10', icon: <CheckSquare className="w-2.5 h-2.5" />, on: true },
                         { lbl: 'Insurance\nVerified', date: 'May 11', icon: <CheckSquare className="w-2.5 h-2.5" />, on: true },
                         { lbl: 'Materials\nScheduled', date: 'May 11', icon: <CheckSquare className="w-2.5 h-2.5" />, on: true },
                         { lbl: 'Contract\nGenerated', date: 'May 12', icon: <CheckSquare className="w-2.5 h-2.5" />, on: true },
                         { lbl: 'Rebuild\nIn Progress', date: '', icon: <AlertTriangle className="w-3 h-3 text-orange-400" />, hot: true },
                         { lbl: 'Final Review\nPending', date: '', icon: <Clock className="w-2.5 h-2.5 text-slate-500" /> },
                       ].map((step, i) => (
                         <div key={i} className="flex flex-col items-center gap-1 text-center w-[12%]">
                           <div className={`w-5 h-5 rounded-full flex items-center justify-center ${step.hot ? 'bg-orange-500/20 border border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]' : (step.on ? 'bg-purple-600 text-white shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'bg-[#1a1a24] text-slate-500 border border-slate-700/50')}`}>
                             {step.on ? <CheckCircle2 className="w-3 h-3" /> : step.icon}
                           </div>
                           <span className={`text-[7px] leading-tight mt-0.5 ${step.hot ? 'text-white' : 'text-slate-400'}`} style={{whiteSpace: 'pre-line'}}>{step.lbl}</span>
                           <span className="text-[6px] text-slate-500">{step.date}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Active Projects */}
                  <div className="bg-[#12121a] border border-white/5 rounded-lg p-3 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-[9px] font-bold tracking-widest text-slate-300">ACTIVE PROJECTS</h4>
                      <span className="text-[8px] text-purple-400 hover:text-purple-300 cursor-pointer">View all projects &rarr;</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       {[
                         { n: 'Ocean View Apartments', loc: 'Miami, FL', tag: 'Flood Damage', status: 'In Progress', statC: 'text-purple-400 bg-purple-400/10', prog: 68, im: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&h=100&fit=crop', due: 'May 24, 2025' },
                         { n: 'Sunset Villas', loc: 'Austin, TX', tag: 'Water Damage', status: 'In Progress', statC: 'text-purple-400 bg-purple-400/10', prog: 42, im: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100&h=100&fit=crop', due: 'May 28, 2025' },
                         { n: 'Maplewood Townhomes', loc: 'Dallas, TX', tag: 'Storm Damage', status: 'Planning', statC: 'text-blue-400 bg-blue-400/10', prog: 25, im: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=100&fit=crop', due: 'Jun 02, 2025' },
                         { n: 'Riverside Condos', loc: 'Tampa, FL', tag: 'Fire Damage', status: 'Review', statC: 'text-orange-400 bg-orange-400/10', prog: 90, im: 'https://images.unsplash.com/photo-1583847268964-b28ce8fba321?w=100&h=100&fit=crop', due: 'May 20, 2025' }
                       ].map((proj, i) => (
                         <div key={i} className="flex items-center justify-between p-1.5 hover:bg-white/[0.02] rounded-lg transition-colors border-b border-white/5 last:border-0 pb-2">
                           <div className="flex gap-2.5 items-center w-5/12">
                             <img src={proj.im} alt="prop" className="w-8 h-8 rounded shrink-0 object-cover border border-white/10" />
                             <div className="flex flex-col">
                               <span className="text-[10px] text-white font-medium truncate">{proj.n}</span>
                               <span className="text-[8px] text-slate-400">{proj.loc} &bull; {proj.tag}</span>
                             </div>
                           </div>
                           <div className="w-[15%]">
                             <div className={`text-[8px] px-1.5 py-0.5 rounded-full inline-block font-medium ${proj.statC}`}>{proj.status}</div>
                           </div>
                           <div className="w-[10%] text-right font-medium text-white text-[9px] pr-2">
                             {proj.prog}%
                           </div>
                           <div className="w-[15%] flex flex-col items-start gap-1">
                             <span className="text-[7px] text-slate-500">Project Manager</span>
                             <div className="flex -space-x-1.5 relative z-0">
                               {[1,2,3].map(avatar => <img key={avatar} src={`https://i.pravatar.cc/100?img=${i*3 + avatar + 20}`} className="w-4 h-4 rounded-full border border-[#12121a] object-cover shrink-0" alt="u"/>)}
                             </div>
                           </div>
                           <div className="w-[15%] flex flex-col items-end">
                             <span className="text-[7px] text-slate-500">Due Date</span>
                             <span className="text-[8px] text-slate-300">{proj.due}</span>
                           </div>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>

                {/* Right Column (Span 5) */}
                <div className="col-span-5 flex flex-col gap-3">
                  
                  {/* Row of Impact / Live Activity */}
                  <div className="grid grid-cols-2 gap-3 h-[140px]">
                     {/* Impact */}
                     <div className="bg-[#12121a] border border-white/5 rounded-lg p-3 relative overflow-hidden">
                       <h4 className="text-[9px] font-bold tracking-widest text-slate-300 mb-2">TODAY'S IMPACT</h4>
                       <div className="flex flex-col gap-2">
                         {[
                           { i: <CheckCircle2 className="w-3.5 h-3.5" />, c: 'text-green-500 bg-green-500/10', val: '37', lbl: 'Issues Resolved Today' },
                           { i: <FileText className="w-3 h-3" />, c: 'text-purple-400 bg-purple-500/10', val: '94', lbl: 'Approvals Completed' },
                           { i: <Settings className="w-3 h-3" />, c: 'text-blue-400 bg-blue-500/10', val: '128', lbl: 'Tasks Automated' },
                           { i: <TrendingUp className="w-3 h-3" />, c: 'text-orange-400 bg-orange-500/10', val: '16', lbl: 'Projects Back On Track' },
                         ].map((st, i) => (
                           <div key={i} className="flex gap-2 items-center">
                             <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${st.c}`}>{st.i}</div>
                             <div className="flex flex-col">
                               <span className="text-[11px] font-bold text-white leading-none">{st.val}</span>
                               <span className="text-[7px] text-slate-400">{st.lbl}</span>
                             </div>
                           </div>
                         ))}
                       </div>
                       {/* Subtle wave graph at bottom */}
                       <div className="absolute bottom-0 left-0 right-0 h-6 opacity-30 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(168,85,247,0.2), transparent)'}}></div>
                     </div>

                     {/* Live Activity */}
                     <div className="bg-[#12121a] border border-white/5 rounded-lg p-3">
                       <div className="flex justify-between items-center mb-2">
                         <h4 className="text-[9px] font-bold tracking-widest text-slate-300">LIVE ACTIVITY</h4>
                         <span className="text-[7px] text-purple-400 hover:text-purple-300 cursor-pointer">View all</span>
                       </div>
                       <div className="flex flex-col gap-2 relative">
                         <div className="absolute left-2 top-2 bottom-2 w-[1px] bg-white/5 -z-10"></div>
                         {[
                           { t: 'Insurance document approved', sub: 'Project: Ocean View Apartments', time: '2m ago', c: 'text-green-400 bg-green-500/20 shadow-[0_0_5px_rgba(34,197,94,0.4)]' },
                           { t: 'Site inspection uploaded', sub: 'Project: Sunset Villas', time: '15m ago', c: 'text-purple-400 bg-purple-500/20' },
                           { t: 'Contract signed', sub: 'Project: Maplewood Townhomes', time: '1h ago', c: 'text-orange-400 bg-orange-500/20' },
                           { t: 'Material request confirmed', sub: 'Project: Riverside Condos', time: '2h ago', c: 'text-blue-400 bg-blue-500/20' },
                         ].map((act, i) => (
                           <div key={i} className="flex items-start gap-1.5">
                             <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 border border-[#12121a] ${act.c}`}>
                               <CheckCircle2 className="w-2.5 h-2.5" />
                             </div>
                             <div className="flex flex-col flex-1 pl-1">
                               <span className="text-[8px] text-white leading-tight font-medium">{act.t}</span>
                               <span className="text-[7px] text-slate-500 leading-tight">{act.sub}</span>
                             </div>
                             <span className="text-[7px] text-slate-500">{act.time}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                  </div>

                  {/* Row of Documents / Team */}
                  <div className="grid grid-cols-2 gap-3 flex-1 min-h-[0]">
                     {/* Recent Documents */}
                     <div className="bg-[#12121a] border border-white/5 rounded-lg p-3">
                       <div className="flex justify-between items-center mb-2">
                         <h4 className="text-[9px] font-bold tracking-widest text-slate-300">RECENT DOCUMENTS</h4>
                         <span className="text-[7px] text-purple-400 hover:text-purple-300">View all</span>
                       </div>
                       <div className="flex flex-col gap-2.5">
                         {[
                           { doc: 'Insurance Approval.pdf', n: 'Ocean View Apartments', t: '2m ago', ic: 'text-red-400 bg-red-400/10', tx: 'PDF' },
                           { doc: 'Inspection Report.pdf', n: 'Sunset Villas', t: '15m ago', ic: 'text-blue-400 bg-blue-400/10', tx: 'PDF' },
                           { doc: 'Material Estimate.xlsx', n: 'Maplewood Townhomes', t: '1h ago', ic: 'text-green-400 bg-green-400/10', tx: 'XLS' }
                         ].map((d,i) => (
                           <div key={i} className="flex items-center gap-2">
                             <div className={`w-5 h-6 rounded flex items-center justify-center text-[5px] font-bold ${d.ic}`}>{d.tx}</div>
                             <div className="flex flex-col flex-1">
                               <span className="text-[8px] text-white font-medium">{d.doc}</span>
                               <span className="text-[7px] text-slate-500">{d.n}</span>
                             </div>
                             <span className="text-[7px] text-slate-500">{d.t}</span>
                           </div>
                         ))}
                       </div>
                     </div>

                     {/* Team Workload */}
                     <div className="bg-[#12121a] border border-white/5 rounded-lg p-3">
                       <div className="flex justify-between items-center mb-2">
                         <h4 className="text-[9px] font-bold tracking-widest text-slate-300">TEAM WORKLOAD</h4>
                         <span className="text-[7px] text-purple-400 hover:text-purple-300">View all</span>
                       </div>
                       <div className="flex flex-col gap-2">
                         {[
                           { n: 'James Miller', p: 78, bar: 'bg-orange-500' },
                           { n: 'Sarah Johnson', p: 62, bar: 'bg-blue-500' },
                           { n: 'Michael Brown', p: 48, bar: 'bg-purple-500' },
                           { n: 'Emily Davis', p: 35, bar: 'bg-green-500' },
                         ].map((tm,i) => (
                           <div key={i} className="flex items-center gap-2">
                             <img src={`https://i.pravatar.cc/100?img=${i+44}`} className="w-5 h-5 rounded-full object-cover shrink-0 border border-[#161622]" alt="u"/>
                             <span className="text-[8px] text-slate-300 w-16">{tm.n}</span>
                             <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                               <div className={`h-full ${tm.bar} rounded-full`} style={{width: `${tm.p}%`}}></div>
                             </div>
                             <span className="text-[7px] text-white w-4 text-right">{tm.p}%</span>
                           </div>
                         ))}
                       </div>
                     </div>
                  </div>

                </div>
              </div>

              {/* Bottom "Everything you need" Banner */}
              <div className="mt-3 bg-[#161622] rounded-lg border border-purple-500/20 p-3 mb-1">
                <h4 className="text-[8px] font-bold tracking-widest text-slate-400 mb-2">EVERYTHING YOU NEED. ALL IN ONE PLACE.</h4>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { t: 'Smart Estimates', d: 'Upload, extract, and organize estimates in seconds.', i: <FileText className="w-3 h-3 text-purple-400" /> },
                    { t: 'Communication Hub', d: 'Centralize messages, updates, and decisions.', i: <MessageSquare className="w-3 h-3 text-blue-400" /> },
                    { t: 'AI Meeting Notes', d: 'Auto-generate summaries from any meeting.', i: <Folder className="w-3 h-3 text-green-400" /> },
                    { t: 'Compliance Check', d: 'Auto-verify compliance on every project.', i: <ShieldCheck className="w-3 h-3 text-orange-400" /> },
                  ].map((x,i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-white text-[9px] font-semibold">{x.i} {x.t}</div>
                      <p className="text-[7px] text-slate-400 leading-tight">{x.d}</p>
                      <span className="text-[7px] text-purple-400 mt-1 cursor-pointer">Learn more &rarr;</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            
            {/* Overlay Bar directly on top of dashboard bottom (WITHOUT / WITH logic) */}
            <div className="absolute -bottom-4 right-8 w-[92%] h-14 bg-[#0a0a0f] border border-white/10 rounded-xl shadow-2xl flex items-center z-50 transform translate-y-6 overflow-hidden">
              <div className="w-[45%] h-full bg-[#160a0a] flex items-center justify-around px-4 border-r border-red-500/20">
                <div className="absolute left-2 top-1 text-[7px] font-bold text-red-500/50">WITHOUT BIGLOGIC</div>
                {[
                  { t: 'Manual\nPaperwork' }, { t: 'Delayed\nApprovals' }, { t: 'Scattered\nCommunication' }, { t: 'Slow\nWorkflows' }
                ].map((bad, i) => (
                  <div key={i} className="flex items-center gap-1.5 mt-2">
                    <AlertCircle className="w-3 h-3 text-red-500" />
                    <span className="text-[7px] text-slate-300 leading-tight">{bad.t}</span>
                  </div>
                ))}
              </div>
              <div className="absolute left-[45%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#1a1a24] border border-white/10 flex items-center justify-center text-[9px] font-bold text-slate-400 z-10 shadow-lg">VS</div>
              <div className="w-[55%] h-full bg-[#0d1612] flex items-center justify-around px-6 pl-8">
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-green-500/10 pointer-events-none"></div>
                <div className="absolute left-[48%] top-1 text-[7px] font-bold text-green-400">WITH BIGLOGIC.AI</div>
                {[
                  { t: 'Connected\nWorkflows' }, { t: 'Real-time\nUpdates' }, { t: 'Clear\nCommunication' }, { t: 'Projects Move\nSmoothly' }
                ].map((good, i) => (
                  <div key={i} className="flex items-center gap-1.5 mt-2 z-10">
                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                    <span className="text-[7px] text-white leading-tight font-medium">{good.t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Light border overlay to create the mock OS window sheen */}
            <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none z-40"></div>
            </div>

            {/* FLOATING CARDS - Shifted into the 3D transformed wrapper to align perfectly */}
            
            {/* Top Left Float */}
            <div className="absolute -top-6 -left-6 z-20 bg-[#161622] border border-white/10 p-3 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex items-start gap-3 backdrop-blur-xl max-w-[220px] transform hover:-translate-y-2 transition-transform cursor-default">
              <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Approval Completed</span>
                <span className="text-[10px] text-slate-400 mt-0.5 leading-snug">Insurance approval received</span>
                <span className="text-[9px] text-slate-500 mt-1">2m ago</span>
              </div>
            </div>

            {/* Top Right Float */}
            <div className="absolute top-10 -right-10 z-20 bg-[#161622] border border-white/10 p-3 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex items-start gap-3 backdrop-blur-xl max-w-[200px] transform hover:-translate-y-2 transition-transform cursor-default">
               <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Folder className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Issue Resolved</span>
                <span className="text-[10px] text-slate-400 mt-0.5 leading-snug">Water damage claim approved</span>
                <span className="text-[9px] text-slate-500 mt-1">5m ago</span>
              </div>
            </div>

            {/* Bottom Left Float */}
            <div className="absolute bottom-16 -left-12 z-20 bg-[#161622] border border-white/10 p-3 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex items-start gap-3 backdrop-blur-xl max-w-[220px] transform hover:-translate-y-2 transition-transform cursor-default">
              <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Project Back On Track</span>
                <span className="text-[10px] text-slate-400 mt-0.5 leading-snug">Materials scheduled and confirmed</span>
                <span className="text-[9px] text-slate-500 mt-1">8m ago</span>
              </div>
            </div>

            {/* Bottom Right Float */}
            <div className="absolute -bottom-8 right-8 z-20 bg-[#161622] border border-white/10 p-3 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex items-start gap-3 backdrop-blur-xl max-w-[200px] transform hover:-translate-y-2 transition-transform cursor-default">
               <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Inspection Cleared</span>
                <span className="text-[10px] text-slate-400 mt-0.5 leading-snug">All issues resolved on site</span>
                <span className="text-[9px] text-slate-500 mt-1">10m ago</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Hormozi Principle & Trusted Companies Section */}
      <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-8 mt-12 bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
        {/* Ambient glow behind the section */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-transparent pointer-events-none"></div>

        {/* Left: Hormozi Value Equation breakdown */}
        <div className="flex flex-col gap-3 w-full xl:w-5/12 relative z-10">
          <span className="text-[10px] font-bold tracking-[0.2em] text-purple-400 uppercase">The Value Equation</span>
          <h3 className="text-xl md:text-2xl font-bold text-white font-orbitron leading-tight">
            Dream Outcome &times; Absolute Certainty 
            <br className="hidden md:block"/>
            <span className="text-indigo-400">Divided By Zero Effort.</span>
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md">
            Your clients want results yesterday. Our software mathematically guarantees it by dropping your time-delay to zero and removing the effort of executing manual tasks. It's an offer your market can't refuse.
          </p>
        </div>

        {/* Right: Trusted Companies Logo Strip */}
        <div className="flex flex-col gap-4 w-full xl:w-7/12 relative z-10 border-t xl:border-t-0 xl:border-l border-white/10 pt-8 xl:pt-0 xl:pl-10">
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase text-center xl:text-left">Trusted By Top Teams Processing 10x Volume</span>
          
          <div className="flex flex-wrap justify-center xl:justify-start items-center gap-x-8 gap-y-6 md:gap-x-12 mt-2">
            {[
              { n: 'ACME', w: 'w-24', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png' },
              { n: 'GLOBEX', w: 'w-24', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' },
              { n: 'SOYUZ', w: 'w-20', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png' },
              { n: 'Umbrella', w: 'w-24', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png' },
            ].map((company, i) => (
              <div key={i} className="flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                <img src={company.img} alt={company.n} className={`${company.w} h-auto object-contain brightness-0 invert`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Trouble/Problem Banner */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 px-10 rounded-2xl bg-[#11111a] border border-white/5 shadow-xl relative overflow-hidden mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-red-500"></div>
        
        <div className="mb-6 md:mb-0 md:mr-10 shrink-0">
          <h2 className="text-xl font-bold font-orbitron text-orange-400 flex flex-col">
            <span>Every delay</span>
            <span>costs more.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:flex flex-1 gap-6 justify-between text-left relative z-10">
          <div className="flex items-start gap-4 flex-1">
            <Clock className="w-7 h-7 text-orange-500/70 shrink-0 mt-1" />
            <div className="flex flex-col">
              <span className="text-sm text-white font-medium">Slower approvals</span>
              <span className="text-xs text-slate-400 mt-1 leading-snug">push projects back.</span>
            </div>
          </div>
          
          <div className="flex items-start gap-4 flex-1">
            <FileWarning className="w-7 h-7 text-orange-500/70 shrink-0 mt-1" />
            <div className="flex flex-col">
              <span className="text-sm text-white font-medium">Manual work</span>
              <span className="text-xs text-slate-400 mt-1 leading-snug">creates expensive bottlenecks.</span>
            </div>
          </div>
          
          <div className="flex items-start gap-4 flex-1">
            <AlertTriangle className="w-7 h-7 text-orange-500/70 shrink-0 mt-1" />
            <div className="flex flex-col">
              <span className="text-sm text-white font-medium">Communication gaps</span>
              <span className="text-xs text-slate-400 mt-1 leading-snug">lead to mistakes and rework.</span>
            </div>
          </div>
          
          <div className="flex items-start gap-4 flex-1">
            <Sliders className="w-7 h-7 text-orange-500/70 shrink-0 mt-1" />
            <div className="flex flex-col">
              <span className="text-sm text-white font-medium">Disconnected systems</span>
              <span className="text-xs text-slate-400 mt-1 leading-snug">cost time, money, and clients.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Logos */}
      <div className="w-full flex flex-col items-center mt-8">
        <p className="text-xs font-semibold text-indigo-400/80 tracking-widest uppercase mb-8">Trusted by reconstruction leaders across the USA</p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Simplified logo typography to represent the company marks */}
          <div className="text-xl font-serif italic text-white/80 whitespace-nowrap">ServiceMaster<br/><span className="text-sm ml-10">Restore</span></div>
          <div className="text-2xl font-black text-white/80 flex items-center gap-1 tracking-tighter">BELFOR (O)</div>
          <div className="flex flex-col items-center justify-center text-white/80">
            <div className="text-2xl font-black italic tracking-tighter shadow-lg">ATI</div>
          </div>
          <div className="flex flex-col px-4 text-white/80">
            <div className="text-xl font-bold tracking-tighter">PAULDAVIS</div>
          </div>
          <div className="flex flex-col items-center px-4 text-white/80">
            <div className="flex flex-col -gap-2">
              <span className="text-3xl font-black tracking-tight mt-[-5px]">DKI</span>
            </div>
          </div>
          <div className="text-lg font-black border-y-2 border-white/30 px-3 py-1 bg-white/5 text-white/80 italic">SERVPRO</div>
        </div>
      </div>
    </div>
  );
}
