import React from 'react';
import { 
  Zap, Play, Clock, Star, Users, TrendingUp, LayoutDashboard, Folder, Workflow, Bot, Cpu, Database, Link2, BarChart3, Settings, Bell, Search, Hexagon, CheckCircle2,
  ShieldCheck, AlertCircle, FileText, CheckSquare, Activity, MessageSquare, AlertTriangle, FileWarning, Sliders, ClipboardList, Files, CalendarDays, Puzzle, Headset, Crown, MessageCircle, Trophy
} from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center pt-8 lg:pt-12 space-y-6 relative overflow-hidden font-sans pb-24">
      
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Badge */}
      <div className="relative lg:absolute lg:-top-12 lg:left-10 inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2 shadow-lg z-40">
        <Zap className="w-4 h-4 text-purple-400 fill-purple-400" />
        <span className="text-xs font-semibold text-slate-300 tracking-wider uppercase">
          AI THAT WORKS WHILE YOU SCALE
        </span>
      </div>

      {/* Headlines */}
      <div className="flex flex-col items-center text-center px-4 max-w-5xl z-10 relative">
        <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6 relative -translate-y-6 lg:-translate-y-10">
          10 Members Worth Of Work.
          <br />
          Done By 1 Member. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">In Seconds.</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed relative -translate-y-3 lg:-translate-y-6">
          BigLogicAI automates, builds, and executes everything your team normally takes weeks to deliver—so you can move <span className="text-purple-400 font-semibold">10x faster.</span>
        </p>

        {/* Floating stats beside headline on large screens */}
        <div className="hidden lg:flex absolute -right-52 top-1/2 -translate-y-1/2 flex-col items-start gap-6 p-4 bg-[#0b0b10]/50 border border-white/5 rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i)=>(
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+15}`} className="w-8 h-8 rounded-full border-2 border-[#0A0A0F] object-cover" alt="u"/>
              ))}
            </div>
            <div className="flex space-x-1">
              {[1,2,3,4,5].map((i)=> <Star key={i} className="w-4 h-4 text-yellow-400" />)}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">10x</span>
              <span className="text-sm text-slate-400">Faster Execution</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">80%</span>
              <span className="text-sm text-slate-400">Time Saved</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">100+</span>
              <span className="text-sm text-slate-400">Powerful Integrations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10 mt-2">
        <button className="flex items-center justify-center gap-2 bg-[#5B33FF] hover:bg-[#4B29E6] text-white font-semibold py-4 px-8 rounded-lg transition-all w-full sm:w-auto h-[52px]">
          Start Building For Free &rarr;
        </button>
        <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all w-full sm:w-auto h-[52px]">
          Book a Demo
        </button>
      </div>

      {/* NOTE: moved social proof + stats beside the headline for a cleaner hero */}

      {/* Dashboard Graphic Area */}
      <div className="w-full max-w-[1240px] relative -mt-10 lg:-mt-20 px-4">
        
        {/* Floating Card Left (hidden to keep dashboard clear) */}
        <div className="hidden">
          <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center mb-4">
            <Clock className="w-5 h-5" />
          </div>
          <h4 className="text-white text-[15px] font-semibold mb-2">Turn weeks of work into seconds</h4>
          <p className="text-slate-400 text-xs leading-relaxed">Ship, automate and scale at AI speed.</p>
        </div>

        {/* Floating Card Right (hidden to keep dashboard clear) */}
        <div className="hidden">
          <div className="w-10 h-10 bg-[#5B33FF]/20 text-[#5B33FF] rounded-lg flex items-center justify-center mb-4">
            <Users className="w-5 h-5" />
          </div>
          <h4 className="text-white text-[15px] font-semibold mb-2">The output of 10 members</h4>
          <p className="text-slate-400 text-xs leading-relaxed">Handled by one smart AI-powered system.</p>
        </div>

        {/* Floating Card Bottom Right (hidden to keep dashboard clear) */}
        <div className="hidden">
          <div className="w-10 h-10 bg-indigo-500/20 text-indigo-400 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h4 className="text-white text-[15px] font-semibold mb-2">Real results.<br/>Real growth.</h4>
          <p className="text-slate-400 text-xs leading-relaxed">Automate more. Achieve more.</p>
        </div>

        {/* The Dashboard UI Mock */}
        <div className="relative w-full rounded-2xl border border-white/10 bg-[#0A0A0F] shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto lg:h-[640px] mx-auto z-30 ring-1 ring-white/5 lg:-mt-8">
          
          {/* Dashboard Sidebar */}
          <div className="hidden lg:flex w-[240px] bg-[#0A0A0F] border-r border-[#1a1a24] flex-col py-5 overflow-y-auto scrollbar-hide shrink-0 z-20">
            <div className="px-5 mb-8 flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-purple-900 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">
                <Hexagon className="text-white w-4 h-4 fill-white" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">BIGlogic.ai</span>
            </div>
            
            <div className="flex flex-col gap-1 px-3 flex-1">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-purple-600/20 text-purple-400 text-[12px] font-medium border border-purple-500/20">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <ClipboardList className="w-4 h-4" /> Projects
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <FileText className="w-4 h-4" /> Claims
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <CheckSquare className="w-4 h-4" /> Estimates
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <CheckSquare className="w-4 h-4" /> Approvals
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <Files className="w-4 h-4" /> Documents
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <Search className="w-4 h-4" /> Inspections
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <MessageSquare className="w-4 h-4" /> Communication
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <Users className="w-4 h-4" /> Teams
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <CalendarDays className="w-4 h-4" /> Reports
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <Puzzle className="w-4 h-4" /> Integrations
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <Settings className="w-4 h-4" /> Settings
              </div>
            </div>

            <div className="mt-8 px-4 flex flex-col gap-3">
              {/* Need Help Card */}
              <div className="p-3 rounded-xl bg-gradient-to-b from-[#161622] to-[#0f0f16] border border-white/5 flex flex-col gap-2 shrink-0 shadow-lg">
                <div className="flex items-center gap-2">
                  <Headset className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold text-white">Need Help?</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-snug">Talk to your dedicated success manager.</p>
                <button className="mt-1 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 text-xs text-purple-300 hover:bg-purple-500/20 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" /> Contact Support
                </button>
              </div>

              {/* Pro Plan Card */}
              <div className="p-3 rounded-xl bg-[#0a0a0f] border border-white/5 flex flex-col gap-2 shrink-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-orange-400" />
                    <span className="text-xs font-bold text-white">Pro Plan</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">Renews on Jun 12, 2025</p>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mt-1">
                  <div className="w-[92%] h-full bg-purple-500 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] text-purple-400 hover:text-purple-300 cursor-pointer transition-colors">Manage Plan &rarr;</span>
                  <span className="text-[10px] text-slate-400">92% used</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area Mock */}
          <div className="flex-1 bg-[#0c0c12] flex flex-col relative overflow-hidden">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-5 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-sm z-10 sticky top-0">
              <div>
                <h3 className="text-white text-lg font-semibold tracking-tight">Welcome back, Alex! 👋</h3>
                <p className="text-slate-400 text-xs mt-1">Here's how your team is moving faster today.</p>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#161622] border border-white/5 text-xs text-slate-300 cursor-pointer hover:bg-white/5">
                  <CalendarDays className="w-3.5 h-3.5 text-slate-400" /> May 12 - May 18, 2025 &or;
                </div>
                <div className="relative p-2 rounded-full bg-[#161622] border border-white/5 cursor-pointer hover:bg-white/5 transition-colors">
                  <Bell className="w-4 h-4 text-slate-300" />
                  <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#161622]"></div>
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800 cursor-pointer">
                  <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Dashboard Content Scroll Area */}
            <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-4 scrollbar-thin">
              
              {/* Sub-banner */}
              <div className="text-xs font-bold text-indigo-400 tracking-widest flex items-center gap-2">
                <span className="text-purple-500">&rsaquo;</span> WORK FASTER. CLOSE FASTER. GET PAID FASTER.
              </div>

              {/* Metric Cards - 4 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Estimate Processing', sub: 'From upload to ready', t1: '3 Hours', t2: '30 Sec', p: '95% Faster', c: 'text-purple-400', bg: 'from-purple-500/10' },
                  { title: 'Document Validation', sub: 'Verify & extract data', t1: '45 Min', t2: 'Instant', p: '98% Faster', c: 'text-orange-400', bg: 'from-orange-500/10' },
                  { title: 'Meeting Summaries', sub: 'Notes to action items', t1: '1 Hour', t2: 'Automatic', p: '90% Faster', c: 'text-green-400', bg: 'from-green-500/10' },
                  { title: 'Approval Tracking', sub: 'From request to approval', t1: '2 Days', t2: 'Real-time', p: '85% Faster', c: 'text-blue-400', bg: 'from-blue-500/10' },
                ].map((m, i) => (
                  <div key={i} className={`bg-[#12121a] rounded-xl p-4 border border-white/5 relative overflow-hidden flex flex-col`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${m.bg} to-transparent opacity-20 pointer-events-none`}></div>
                    <div className="mb-4">
                      <h4 className="text-[13px] font-semibold text-white mb-1">{m.title}</h4>
                      <p className="text-[11px] text-slate-500">{m.sub}</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[14px] font-semibold text-slate-300">{m.t1}</span>
                          <span className="text-[9px] text-slate-500 mt-0.5">Without BIGlogic</span>
                        </div>
                        <span className="text-slate-600 text-sm tracking-widest">&raquo;&rsaquo;</span>
                        <div className="flex flex-col text-right">
                          <span className={`text-[15px] font-semibold ${m.c}`}>{m.t2}</span>
                          <span className="text-[9px] text-slate-500 mt-0.5">With BIGlogic</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1 border-t border-white/5 pt-2">
                        <Zap className={`w-3.5 h-3.5 ${m.c} fill-current`} />
                        <span className={`text-xs font-semibold ${m.c}`}>{m.p}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Middle Section Grid: Workflow & Active Projects on Left, Extra boxes on right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1">
                {/* Left Column (Span 7) */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  
                  {/* Reconstruction Workflow */}
                  <div className="bg-[#12121a] border border-white/5 rounded-xl p-5 overflow-x-auto scrollbar-hide">
                    <div className="flex items-center gap-3 mb-5 min-w-[500px]">
                      <h4 className="text-xs font-bold tracking-widest text-slate-300">RECONSTRUCTION WORKFLOW</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">In Progress</span>
                    </div>
                    <div className="flex items-start justify-between relative mt-2 px-4 min-w-[500px]">
                       <div className="absolute top-3.5 left-8 right-8 h-[3px] bg-slate-800 -z-10 rounded-full"></div>
                       <div className="absolute top-3.5 left-8 w-[62%] h-[3px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] -z-10 rounded-full"></div>
                       {[
                         { lbl: 'Inspection\nCompleted', date: 'May 10', icon: <CheckCircle2 className="w-4 h-4" />, on: true },
                         { lbl: 'Estimate\nParsed', date: 'May 10', icon: <CheckCircle2 className="w-4 h-4" />, on: true },
                         { lbl: 'Insurance\nVerified', date: 'May 11', icon: <CheckCircle2 className="w-4 h-4" />, on: true },
                         { lbl: 'Materials\nScheduled', date: 'May 11', icon: <CheckCircle2 className="w-4 h-4" />, on: true },
                         { lbl: 'Contract\nGenerated', date: 'May 12', icon: <CheckCircle2 className="w-4 h-4" />, on: true },
                         { lbl: 'Rebuild\nIn Progress', date: '', icon: <Activity className="w-4 h-4 text-white" />, hot: true },
                         { lbl: 'Final Review\nPending', date: '', icon: <Clock className="w-4 h-4 text-slate-500" /> },
                       ].map((step, i) => (
                         <div key={i} className="flex flex-col items-center gap-2 text-center w-[12%]">
                           <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step.hot ? 'bg-orange-500 border-2 border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : (step.on ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-[#1a1a24] text-slate-500 border border-slate-700/50 border-dashed')}`}>
                             {step.icon}
                           </div>
                           <span className={`text-[10px] leading-tight font-medium ${step.hot ? 'text-white' : 'text-slate-400'}`} style={{whiteSpace: 'pre-line'}}>{step.lbl}</span>
                           <span className="text-[9px] text-slate-500">{step.date}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Active Projects */}
                  <div className="bg-[#12121a] border border-white/5 rounded-xl p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xs font-bold tracking-widest text-slate-300">ACTIVE PROJECTS</h4>
                      <span className="text-[11px] text-purple-400 hover:text-purple-300 cursor-pointer">View all projects &rarr;</span>
                    </div>
                    <div className="flex flex-col gap-1 overflow-x-auto scrollbar-hide">
                      <div className="min-w-[500px]">
                       {[
                         { n: 'Ocean View Apartments', loc: 'Miami, FL', tag: 'Flood Damage', status: 'In Progress', statC: 'text-purple-400 bg-purple-500/10', prog: 68, im: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=100&h=100&fit=crop', due: 'May 24, 2025' },
                         { n: 'Sunset Villas', loc: 'Austin, TX', tag: 'Water Damage', status: 'In Progress', statC: 'text-purple-400 bg-purple-500/10', prog: 42, im: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100&h=100&fit=crop', due: 'May 28, 2025' },
                         { n: 'Maplewood Townhomes', loc: 'Dallas, TX', tag: 'Storm Damage', status: 'Planning', statC: 'text-blue-400 bg-blue-500/10', prog: 25, im: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&h=100&fit=crop', due: 'Jun 02, 2025' },
                         { n: 'Riverside Condos', loc: 'Tampa, FL', tag: 'Fire Damage', status: 'Review', statC: 'text-orange-400 bg-orange-500/10', prog: 90, im: 'https://images.unsplash.com/photo-1583847268964-b28ce8fba321?w=100&h=100&fit=crop', due: 'May 20, 2025' }
                       ].map((proj, i) => (
                         <div key={i} className="flex items-center justify-between p-2.5 hover:bg-white/[0.02] rounded-lg transition-colors border-b border-white/5 last:border-0 w-full mb-1">
                           <div className="flex gap-3 items-center w-4/12">
                             <img src={proj.im} alt="prop" className="w-10 h-10 rounded shrink-0 object-cover border border-white/10" />
                             <div className="flex flex-col">
                               <span className="text-[13px] text-white font-medium truncate">{proj.n}</span>
                               <span className="text-[10px] text-slate-400 mt-0.5">{proj.loc} &bull; {proj.tag}</span>
                             </div>
                           </div>
                           <div className="w-[15%]">
                             <div className={`text-[10px] px-2 py-0.5 rounded-full inline-block font-medium ${proj.statC}`}>{proj.status}</div>
                           </div>
                           <div className="w-[10%] text-right font-medium text-white text-[12px] pr-4">
                             {proj.prog}%
                           </div>
                           <div className="w-[15%] flex flex-col items-start gap-1">
                             <span className="text-[9px] text-slate-500">Project Manager</span>
                             <div className="flex items-center gap-1.5">
                               <div className="flex -space-x-2 relative z-0">
                                 {[1,2,3].map(avatar => <img key={avatar} src={`https://i.pravatar.cc/100?img=${i*4 + avatar + 25}`} className="w-5 h-5 rounded-full border-2 border-[#12121a] object-cover shrink-0" alt="u"/>)}
                               </div>
                               <span className="text-[9px] text-slate-400">+{i+2}</span>
                             </div>
                           </div>
                           <div className="w-[15%] flex flex-col items-end">
                             <span className="text-[9px] text-slate-500">Due Date</span>
                             <span className="text-[11px] text-slate-300 font-medium">{proj.due}</span>
                           </div>
                         </div>
                       ))}
                      </div>
                    </div>
                  </div>
                  
                </div>

                {/* Right Column (Span 5) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  
                  {/* Row of Impact & Live Activity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {/* Impact */}
                     <div className="bg-[#12121a] border border-white/5 rounded-xl p-5 relative overflow-hidden">
                       <h4 className="text-xs font-bold tracking-widest text-slate-300 mb-4">TODAY'S IMPACT</h4>
                       <div className="flex flex-col gap-4">
                         {[
                           { i: <CheckCircle2 className="w-4 h-4" />, c: 'text-green-500 bg-green-500/10', val: '37', lbl: 'Issues Resolved Today' },
                           { i: <FileText className="w-4 h-4" />, c: 'text-purple-400 bg-purple-500/10', val: '94', lbl: 'Approvals Completed' },
                           { i: <Settings className="w-4 h-4" />, c: 'text-blue-400 bg-blue-500/10', val: '128', lbl: 'Tasks Automated' },
                           { i: <TrendingUp className="w-4 h-4" />, c: 'text-orange-400 bg-orange-500/10', val: '16', lbl: 'Projects Back On Track' },
                         ].map((st, i) => (
                           <div key={i} className="flex gap-3 items-center">
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${st.c}`}>{st.i}</div>
                             <div className="flex flex-col">
                               <span className="text-[15px] font-bold text-white leading-none mb-1">{st.val}</span>
                               <span className="text-[10px] text-slate-400">{st.lbl}</span>
                             </div>
                           </div>
                         ))}
                       </div>
                       {/* Subtle wave graph at bottom */}
                       <div className="absolute bottom-0 left-0 right-0 h-10 opacity-30 pointer-events-none flex items-end px-2 pb-2">
                         <svg viewBox="0 0 100 20" className="w-full h-full text-purple-600" fill="none" preserveAspectRatio="none">
                           <path d="M0 20 L0 10 Q 15 20, 30 10 T 60 10 T 80 5 T 100 15 L100 20 Z" fill="currentColor"></path>
                         </svg>
                       </div>
                     </div>

                     {/* Live Activity */}
                     <div className="bg-[#12121a] border border-white/5 rounded-xl p-5 flex flex-col h-full">
                       <div className="flex justify-between items-center mb-4 min-h-[16px]">
                         <h4 className="text-xs font-bold tracking-widest text-slate-300">LIVE ACTIVITY</h4>
                         <span className="text-[10px] text-purple-400 hover:text-purple-300 cursor-pointer">View all</span>
                       </div>
                       <div className="flex flex-col gap-3 relative flex-1 justify-between">
                         <div className="absolute left-2.5 top-3 bottom-3 w-[1px] bg-white/10 -z-10"></div>
                         {[
                           { t: 'Insurance document approved', sub: 'Project: Ocean View Apartments', time: '2m ago', c: 'text-green-400 bg-green-500/20 shadow-[0_0_8px_rgba(34,197,94,0.3)]' },
                           { t: 'Site inspection uploaded', sub: 'Project: Sunset Villas', time: '15m ago', c: 'text-purple-400 bg-purple-500/20' },
                           { t: 'Contract signed', sub: 'Project: Maplewood Townhomes', time: '1h ago', c: 'text-orange-400 bg-orange-500/20' },
                           { t: 'Material request confirmed', sub: 'Project: Riverside Condos', time: '2h ago', c: 'text-blue-400 bg-blue-500/20' },
                           { t: 'Project milestone completed', sub: 'Project: Ocean View Apartments', time: '3h ago', c: 'text-green-400 bg-green-500/20' },
                         ].map((act, i) => (
                           <div key={i} className="flex items-start gap-2.5">
                             <div className={`mt-0.5 w-[22px] h-[22px] rounded-full flex items-center justify-center shrink-0 border-2 border-[#12121a] ${act.c}`}>
                               <CheckCircle2 className="w-3 h-3" />
                             </div>
                             <div className="flex flex-col flex-1">
                               <span className="text-[11px] text-white font-medium mb-0.5">{act.t}</span>
                               <span className="text-[9px] text-slate-500">{act.sub}</span>
                             </div>
                             <span className="text-[9px] text-slate-500 pt-0.5">{act.time}</span>
                           </div>
                         ))}
                       </div>
                       <div className="mt-3 pt-3 border-t border-white/5">
                         <span className="text-[10px] text-purple-400 cursor-pointer hover:underline">View all activity &rarr;</span>
                       </div>
                     </div>
                  </div>

                  {/* Row of Documents / Team */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 h-full">
                     {/* Recent Documents */}
                     <div className="bg-[#12121a] border border-white/5 rounded-xl p-5 flex flex-col justify-between">
                       <div className="flex justify-between items-center mb-4">
                         <h4 className="text-[11px] font-bold tracking-widest text-slate-300">RECENT DOCUMENTS</h4>
                         <span className="text-[10px] text-purple-400 hover:text-purple-300 cursor-pointer">View all</span>
                       </div>
                       <div className="flex flex-col gap-3">
                         {[
                           { doc: 'Insurance Approval.pdf', n: 'Ocean View Apartments', t: '2m ago', ic: 'text-red-400 bg-red-500/10', tx: 'PDF' },
                           { doc: 'Inspection Report.pdf', n: 'Sunset Villas', t: '15m ago', ic: 'text-blue-400 bg-blue-500/10', tx: 'PDF' },
                           { doc: 'Material Estimate.xlsx', n: 'Maplewood Townhomes', t: '1h ago', ic: 'text-green-400 bg-green-500/10', tx: 'XLS' },
                           { doc: 'Contract Signed.pdf', n: 'Riverside Condos', t: '2h ago', ic: 'text-red-400 bg-red-500/10', tx: 'PDF' }
                         ].map((d,i) => (
                           <div key={i} className="flex items-center gap-3">
                             <div className={`w-7 h-8 rounded border border-white/5 flex items-center justify-center text-[7px] font-bold ${d.ic}`}>{d.tx}</div>
                             <div className="flex flex-col flex-1 overflow-hidden">
                               <span className="text-[11px] text-white font-medium truncate">{d.doc}</span>
                               <span className="text-[9px] text-slate-500 truncate">{d.n}</span>
                             </div>
                             <span className="text-[9px] text-slate-500 shrink-0">{d.t}</span>
                           </div>
                         ))}
                       </div>
                     </div>

                     {/* Team Workload */}
                     <div className="bg-[#12121a] border border-white/5 rounded-xl p-5 flex flex-col justify-between">
                       <div className="flex justify-between items-center mb-4">
                         <h4 className="text-[11px] font-bold tracking-widest text-slate-300">TEAM WORKLOAD</h4>
                         <span className="text-[10px] text-purple-400 hover:text-purple-300 cursor-pointer">View all</span>
                       </div>
                       <div className="flex flex-col gap-4">
                         {[
                           { n: 'James Miller', p: 78, bar: 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' },
                           { n: 'Sarah Johnson', p: 62, bar: 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' },
                           { n: 'Michael Brown', p: 48, bar: 'bg-blue-500' },
                           { n: 'Emily Davis', p: 35, bar: 'bg-green-500' },
                         ].map((tm,i) => (
                           <div key={i} className="flex items-center gap-3">
                             <img src={`https://i.pravatar.cc/100?img=${i+50}`} className="w-6 h-6 rounded-full object-cover shrink-0 border border-[#161622]" alt="u"/>
                             <span className="text-[11px] text-white font-medium w-[85px] truncate">{tm.n}</span>
                             <div className="flex-1 h-1.5 bg-[#1a1a24] rounded-full overflow-hidden">
                               <div className={`h-full ${tm.bar} rounded-full`} style={{width: `${tm.p}%`}}></div>
                             </div>
                             <span className="text-[10px] text-white w-6 text-right font-medium">{tm.p}%</span>
                           </div>
                         ))}
                       </div>
                     </div>
                  </div>

                </div>
              </div>

              {/* Bottom "Everything you need" Banner */}
              <div className="mt-2 bg-[#12121a] rounded-xl border border-white/5 p-5">
                <h4 className="text-[11px] font-bold tracking-widest text-slate-400 mb-4">EVERYTHING YOU NEED. ALL IN ONE PLACE.</h4>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    { t: 'Smart Estimates', d: 'Upload, extract, and organize estimates in seconds.', i: <FileText className="w-4 h-4 text-purple-400" />, c: 'bg-purple-500/10' },
                    { t: 'Communication Hub', d: 'Centralize messages, updates, and decisions.', i: <MessageSquare className="w-4 h-4 text-blue-400" />, c: 'bg-blue-500/10' },
                    { t: 'AI Meeting Notes', d: 'Auto-generate summaries and action items.', i: <Folder className="w-4 h-4 text-green-400" />, c: 'bg-green-500/10' },
                    { t: 'Document Center', d: 'Store, organize, and find every document instantly.', i: <ClipboardList className="w-4 h-4 text-orange-400" />, c: 'bg-orange-500/10' },
                    { t: 'Compliance Check', d: 'Auto-verify compliance and reduce risk on projects.', i: <ShieldCheck className="w-4 h-4 text-indigo-400" />, c: 'bg-indigo-500/10' },
                  ].map((x,i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`p-1.5 rounded-lg ${x.c}`}>{x.i}</div>
                        <span className="text-white text-[12px] font-semibold">{x.t}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed min-h-[30px]">{x.d}</p>
                      <span className="text-[10px] text-purple-400 mt-2 cursor-pointer hover:underline w-max">Learn more &rarr;</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom "Without / With" Comparison Banner */}
              <div className="mt-2 flex flex-col xl:flex-row gap-4">
                {/* Visual Bar */}
                <div className="flex flex-col lg:flex-row flex-1 h-auto lg:h-[80px] border border-white/5 rounded-xl overflow-hidden relative shadow-lg">
                  {/* Without Area */}
                  <div className="w-full lg:w-[45%] bg-gradient-to-r from-red-500/5 to-transparent h-full flex flex-col justify-center px-4 md:px-6 py-4 lg:py-0 border-b lg:border-b-0 lg:border-r border-white/5 relative group">
                    <span className="text-[9px] font-bold text-red-500 tracking-wider absolute top-2 right-4 lg:right-auto lg:left-6">WITHOUT BIGLOGIC</span>
                    <div className="flex items-center justify-between xl:justify-around w-full mt-4 lg:mt-2">
                      {[
                        { t: 'Manual\nPaperwork' }, { t: 'Delayed\nApprovals' }, { t: 'Scattered\nCommunication' }, { t: 'Slow\nWorkflows' }, { t: 'Operational\nBottlenecks' }
                      ].map((bad, i) => (
                        <div key={i} className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                          <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                          <span className="hidden sm:block text-[10px] text-slate-400 leading-tight font-medium whitespace-pre-line">{bad.t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Center VS Circle */}
                  <div className="absolute left-[50%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#12121a] border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400 z-10 shadow-[0_0_15px_rgba(0,0,0,0.8)] hidden lg:flex">VS</div>
                  
                  {/* With Area */}
                  <div className="w-full lg:w-[55%] bg-gradient-to-l from-green-500/5 to-transparent h-full flex flex-col justify-center px-4 md:px-8 py-4 lg:py-0 relative group">
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-green-500/10 pointer-events-none"></div>
                    <span className="text-[10px] font-bold text-green-400 tracking-wider absolute top-2 right-4 lg:right-auto lg:left-[50px] drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">WITH BIGLOGIC.AI</span>
                    <div className="flex items-center justify-between xl:justify-around w-full mt-4 lg:mt-2 pl-0 lg:pl-10 relative z-10">
                      {[
                        { t: 'Connected\nWorkflows' }, { t: 'Real-time\nUpdates' }, { t: 'Clear\nCommunication' }, { t: 'Faster\nApprovals' }, { t: 'Projects Move\nSmoothly' }
                      ].map((good, i) => (
                        <div key={i} className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                          <span className="hidden sm:block text-[10px] text-white leading-tight font-medium whitespace-pre-line">{good.t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Built for teams badge */}
                <div className="hidden lg:flex w-full xl:w-[220px] rounded-xl border border-[#5B33FF]/30 bg-gradient-to-br from-[#5B33FF]/10 to-transparent items-center justify-center p-4 gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#5B33FF]/20 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 text-[#5B33FF]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-white leading-tight">Built for teams that move fast and win.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
