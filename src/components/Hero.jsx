import React, { useState, useEffect } from 'react';
import { 
  Zap, Play, Clock, Star, Users, TrendingUp, LayoutDashboard, Folder, Workflow, Bot, Cpu, Database, Link2, BarChart3, Settings, Bell, Search, Hexagon, CheckCircle2,
  ShieldCheck, AlertCircle, FileText, CheckSquare, Activity, MessageSquare, AlertTriangle, FileWarning, Sliders, ClipboardList, Files, CalendarDays, Puzzle, Headset, Crown, MessageCircle, Trophy
} from 'lucide-react';

export default function Hero() {
  const workflowSteps = [
    { lbl: 'Inspection\nUploaded', date: 'May 10', icon: <CheckCircle2 className="w-4 h-4" /> },
    { lbl: 'Estimate\nProceed', date: 'May 10', icon: <CheckCircle2 className="w-4 h-4" /> },
    { lbl: 'Document\nVerified', date: 'May 11', icon: <CheckCircle2 className="w-4 h-4" /> },
    { lbl: 'Team\nCoordinated', date: 'May 11', icon: <CheckCircle2 className="w-4 h-4" /> },
    { lbl: 'Project\nMoving', date: 'May 12', icon: <Activity className="w-4 h-4 text-white" /> },
  ];

  const [activeStep, setActiveStep] = useState(4);
  useEffect(() => {
    const id = setInterval(() => setActiveStep(i => (i + 1) % workflowSteps.length), 2000);
    return () => clearInterval(id);
  }, []);
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
      <div className="w-full max-w-[1240px] relative mt-8 lg:mt-12 px-4">
        
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
                <Workflow className="w-4 h-4" /> Workflows
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <ClipboardList className="w-4 h-4" /> Projects
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 text-[12px] font-medium transition-colors cursor-pointer">
                <Users className="w-4 h-4" /> Teams
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

              {/* Banner: From Prompt To Deployment */}
              <div className="bg-[#12121a] rounded-xl p-6 border border-white/5 flex items-center justify-center">
                <h4 className="text-center text-2xl sm:text-3xl font-bold text-white tracking-wide">FROM PROMPT TO DEPLOYMENT</h4>
              </div>

              {/* Main Middle Section Grid: Workflow & Active Projects on Left, Extra boxes on right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1">
                {/* Left Column (full width) */}
                <div className="lg:col-span-12 flex flex-col gap-4">
                  
                  {/* Reconstruction Workflow (autoplay) */}
                  <div className="bg-[#12121a] border border-white/5 rounded-xl p-5 overflow-x-auto scrollbar-hide">
                    <div className="flex items-center gap-3 mb-5 min-w-[500px]">
                      <h4 className="text-xs font-bold tracking-widest text-slate-300">RECONSTRUCTION WORKFLOW</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">In Progress</span>
                    </div>
                      <div className="flex items-start justify-center gap-3 sm:gap-4 relative mt-2 px-4 min-w-[500px]">
                        <div className="absolute top-3.5 left-8 right-8 h-[3px] -z-10 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.7)]"></div>
                       {workflowSteps.map((step, i) => {
                           const isDone = i < activeStep;
                           const isActive = i === activeStep;
                           const circleCls = isActive
                             ? 'bg-orange-500 border-2 border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)] text-white'
                             : (isDone ? 'bg-purple-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-[#1a1a24] text-slate-500 border border-slate-700/50 border-dashed');
                           const labelCls = isActive ? 'text-white' : 'text-slate-400';

                           return (
                             <div key={i} className="relative flex flex-col items-center gap-2 text-center w-[88px] sm:w-[100px] flex-none">
                               {i < workflowSteps.length - 1 && (
                                 <div className="absolute top-4 left-[calc(50%+1.05rem)] right-[-50%] h-[3px] rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.75)]"></div>
                               )}
                               <div className={`w-8 h-8 rounded-full flex items-center justify-center ${circleCls}`}>
                                 {step.icon}
                               </div>
                               <span className={`text-[10px] leading-tight font-medium ${labelCls}`} style={{whiteSpace: 'pre-line'}}>{step.lbl}</span>
                               <span className="text-[9px] text-slate-500">{step.date}</span>
                             </div>
                           );
                         })}
                    </div>
                  </div>

                  {/* Active Projects removed */}
                  
                </div>

                {/* Right column removed */}
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
              
              {/* Without/With comparison banner removed */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
