import { 
  Sparkles, X, Check, FileText, Clock, MessageSquare, 
  Bell, Database, Hourglass, Monitor, Zap, RefreshCw, 
  Link, CheckCircle2, Rocket, BarChart2, CheckCircle, 
  XCircle, AlertTriangle, MessageCircle, FileWarning, 
  AlertCircle 
} from 'lucide-react';

export default function Transformation() {
  return (
    <div id="transformation" className="w-full flex flex-col items-center mt-32 relative z-10">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl">
        <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">THE TRANSFORMATION</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight">
          This Is What Faster Operations <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Actually</span> Look Like.
        </h2>
        
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
          BIGlogic removes the delays, back-and-forth communication, manual coordination, 
          and operational bottlenecks that slow reconstruction teams down every day.
        </p>
      </div>

      {/* VS Comparison Section */}
      <div className="w-full relative mt-16 z-10">
        
        {/* Center VS Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-gradient-to-b from-indigo-500 via-purple-600 to-purple-900 border-4 border-[#0b0a10] flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)]">
          <span className="font-black text-xl text-white italic">VS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative">
          
          {/* LEFT: Without BIGlogic */}
          <div className="bg-[#110d16] border border-red-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.03)]">
            {/* Top Red Gradient */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/4 right-1/4 h-[300px] bg-red-500/10 blur-[100px] pointer-events-none rounded-full"></div>

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="flex items-center gap-2 text-red-400 text-sm font-bold tracking-widest uppercase mb-3">
                <div className="w-5 h-5 rounded-full border border-red-500/50 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3" />
                </div>
                WITHOUT BIGLOGIC
              </div>
              <h3 className="text-2xl font-semibold text-white">Slow. Disconnected. Costly.</h3>
            </div>

            {/* Inner Content Grid */}
            <div className="grid grid-cols-5 gap-6 h-full relative z-10">
              {/* Feature Cards (3 columns) */}
              <div className="col-span-3 flex flex-col gap-3">
                {[
                  { i: <FileText/>, t: 'Manual paperwork', d: 'Hours spent on repetitive work' },
                  { i: <Clock/>, t: 'Delayed approvals', d: 'Projects stall waiting for updates' },
                  { i: <MessageSquare/>, t: 'Scattered communication', d: 'Important details get missed' },
                  { i: <Bell/>, t: 'Missed follow-ups', d: 'Tasks slip through the cracks' },
                  { i: <Database/>, t: 'Disconnected systems', d: 'Data lives in multiple places' },
                  { i: <Hourglass/>, t: 'Slow workflows', d: 'Projects take longer to complete' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-black/40 border border-white/5 rounded-xl p-3.5 flex items-center gap-4 hover:border-red-500/30 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                      <div className="w-4 h-4">{item.i}</div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-200">{item.t}</span>
                      <span className="text-xs text-slate-500 mt-0.5">{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Timeline (2 columns) */}
              <div className="col-span-2 relative pl-6 flex flex-col justify-center">
                {/* Connecting Line */}
                <div className="absolute left-[38px] top-6 bottom-12 w-[1px] border-l border-dashed border-red-500/30"></div>
                
                <div className="flex flex-col gap-8 w-full relative">
                  
                  {/* Node 1 */}
                  <div className="flex items-start gap-4 relative z-10 opacity-70">
                    <div className="w-6 h-6 rounded-full bg-[#1c1216] border border-red-500/30 flex items-center justify-center shrink-0 mt-1">
                      <FileWarning className="w-3 h-3 text-red-400" />
                    </div>
                    <div className="flex flex-col bg-black/40 border border-white/5 rounded-lg p-2.5 w-full">
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-xs font-semibold text-slate-300 leading-tight">Inspection Completed</span>
                        <span className="text-[8px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Pending</span>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1 line-through">Processed</span>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="flex items-start gap-4 relative z-10 w-[115%] -ml-[15%]">
                    <div className="absolute top-1/2 right-[100%] w-6 h-[1px] border-t border-dashed border-red-500/30"></div>
                    <div className="flex justify-start w-full">
                      <div className="w-6 h-6 rounded-full bg-[#1c1216] border border-red-500/30 flex items-center justify-center shrink-0 mt-1 mr-4">
                        <MessageSquare className="w-3 h-3 text-red-400" />
                      </div>
                      <div className="flex flex-col bg-black/40 border border-white/5 rounded-lg p-2.5 w-[85%] border-red-500/30">
                        <span className="text-xs font-semibold text-slate-200">Estimate Received</span>
                        <span className="text-[10px] text-red-400 mt-0.5">2 days delay</span>
                      </div>
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div className="flex items-start gap-4 relative z-10 -ml-4">
                     <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(239,68,68,0.4)]">
                      <MessageCircle className="w-3 h-3 text-red-400" />
                    </div>
                    <div className="flex flex-col bg-[#1c1216] border border-red-500/40 rounded-lg p-2.5 w-full shadow-lg">
                      <span className="text-xs font-semibold text-white">Documents Requested</span>
                      <span className="text-[10px] text-red-400 mt-0.5 animate-pulse">Waiting...</span>
                    </div>
                  </div>

                  {/* Node 4 */}
                  <div className="flex items-start gap-4 relative z-10 ml-6">
                    <div className="absolute top-1/2 right-[100%] w-6 h-[1px] border-t border-dashed border-red-500/30"></div>
                    <div className="w-6 h-6 rounded-full bg-[#1c1216] border border-red-500/30 flex items-center justify-center shrink-0 mt-1">
                      <FileText className="w-3 h-3 text-red-400" />
                    </div>
                    <div className="flex flex-col bg-black/40 border border-white/5 rounded-lg p-2.5 w-full">
                      <span className="text-xs font-semibold text-slate-300">Approval Pending</span>
                      <span className="text-[10px] text-red-400 mt-0.5">3 days delay</span>
                    </div>
                  </div>

                  {/* Node 5 */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/50 flex items-center justify-center shrink-0 mt-1">
                      <AlertTriangle className="w-3 h-3 text-red-500" />
                    </div>
                    <div className="flex flex-col bg-black/40 border border-white/5 rounded-lg p-2.5 w-full">
                      <span className="text-xs font-semibold text-slate-300">Project On Hold</span>
                      <span className="text-[10px] text-slate-500 mt-0.5">No updates</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: With BIGlogic */}
           <div className="bg-[#0b1614] border border-green-500/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.03)]">
            {/* Top Green Gradient */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/4 right-1/4 h-[300px] bg-green-500/10 blur-[100px] pointer-events-none rounded-full"></div>

            {/* Header */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="flex items-center gap-2 text-green-400 text-sm font-bold tracking-widest uppercase mb-3">
                <div className="w-5 h-5 rounded-full border border-green-500/50 flex items-center justify-center shrink-0 bg-green-500/10">
                  <Check className="w-3 h-3" />
                </div>
                WITH BIGLOGIC
              </div>
              <h3 className="text-2xl font-semibold text-white">Fast. Connected. Profitable.</h3>
            </div>

            {/* Inner Content Grid */}
            <div className="grid grid-cols-5 gap-6 h-full relative z-10">
              {/* Feature Cards (3 columns) */}
              <div className="col-span-3 flex flex-col gap-3">
                {[
                  { i: <Monitor/>, t: 'Live project visibility', d: 'Everything in real-time' },
                  { i: <Zap/>, t: 'Faster approvals', d: 'Auto-routing & notifications' },
                  { i: <MessageSquare/>, t: 'Connected communication', d: 'All updates in one place' },
                  { i: <RefreshCw/>, t: 'Automatic follow-ups', d: 'Nothing slips through' },
                  { i: <Link/>, t: 'Everything integrated', d: 'One system. One source of truth' },
                  { i: <CheckCircle2/>, t: 'Projects move smoothly', d: 'On-time, every time' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-black/40 border border-white/5 rounded-xl p-3.5 flex items-center gap-4 hover:border-green-500/30 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 border border-green-500/20">
                      <div className="w-4 h-4">{item.i}</div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-200">{item.t}</span>
                      <span className="text-xs text-slate-500 mt-0.5">{item.d}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Timeline (2 columns) */}
              <div className="col-span-2 relative pl-6 flex flex-col justify-center">
                {/* Connecting Line */}
                <div className="absolute left-[35.5px] top-6 bottom-8 w-1 bg-gradient-to-b from-indigo-500 via-blue-500 to-green-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                
                <div className="flex flex-col gap-8 w-full relative">
                  
                  {/* Node 1 */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#1e1ea8] border-2 border-indigo-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10 relative">
                      <div className="absolute inset-0 bg-indigo-500 blur-sm rounded-full -z-10 opacity-50"></div>
                      <div className="w-2.5 h-2.5 bg-indigo-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col bg-black/40 border border-white/5 rounded-lg p-2.5 w-full flex-1">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-slate-200 leading-tight">Inspection Completed</span>
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-green-400">Completed</span>
                        <span className="text-[9px] text-slate-500">Today</span>
                      </div>
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#133177] border-2 border-blue-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 relative">
                      <div className="w-2.5 h-2.5 bg-blue-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col bg-black/40 border border-white/5 rounded-lg p-2.5 w-full flex-1">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-slate-200 leading-tight">Estimate Received</span>
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-green-400">Completed</span>
                        <span className="text-[9px] text-slate-500">Today</span>
                      </div>
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#0d4e5a] border-2 border-teal-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10 relative">
                      <div className="w-2.5 h-2.5 bg-teal-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col bg-black/40 border border-white/5 rounded-lg p-2.5 w-full flex-1">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-slate-200 leading-tight">Documents Verified</span>
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-green-400">Completed</span>
                        <span className="text-[9px] text-slate-500">Today</span>
                      </div>
                    </div>
                  </div>

                  {/* Node 4 */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#0f5431] border-2 border-emerald-400 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10 relative">
                      <div className="w-2.5 h-2.5 bg-emerald-200 rounded-full"></div>
                    </div>
                    <div className="flex flex-col bg-black/40 border border-white/5 rounded-lg p-2.5 w-full flex-1">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-slate-200 leading-tight">Approval Received</span>
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-green-400">Completed</span>
                        <span className="text-[9px] text-slate-500">Today</span>
                      </div>
                    </div>
                  </div>

                  {/* Node 5 */}
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#12121a] border-2 border-green-500 flex items-center justify-center shrink-0 mt-1 z-10 relative shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                      <BarChart2 className="w-3 h-3 text-green-400" />
                    </div>
                    <div className="flex flex-col bg-[#0f1f16] border border-green-500/40 rounded-lg p-2.5 w-full flex-1">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-white leading-tight">Project In Progress</span>
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      </div>
                      <span className="text-[10px] text-green-400 mt-1 font-medium">On Track</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8 z-10">
        {[
          { i: <Rocket/>, v: '3X', t: 'Faster Coordination', d: 'Projects move 3x faster from start to finish.', bg: 'bg-indigo-500/10', c: 'text-indigo-400' },
          { i: <Zap/>, v: '90%', t: 'Less Manual Work', d: 'Automate repetitive tasks and reduce busywork.', bg: 'bg-purple-500/10', c: 'text-purple-400' },
          { i: <CheckCircle2/>, v: 'On Time', t: 'Projects Delivered', d: 'Keep projects on schedule and clients happy.', bg: 'bg-pink-500/10', c: 'text-pink-400' },
          { i: <BarChart2/>, v: '70%', t: 'Fewer Delays', d: 'Reduce delays and operational bottlenecks.', bg: 'bg-blue-500/10', c: 'text-blue-400' },
        ].map((metric, idx) => (
          <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-${metric.c.replace('text-', '')} to-transparent`}></div>
            <div className={`w-14 h-14 rounded-full ${metric.bg} border border-white/10 flex items-center justify-center mb-5`}>
              <div className={`w-7 h-7 ${metric.c}`}>{metric.i}</div>
            </div>
            <span className="text-3xl font-bold text-white mb-2">{metric.v}</span>
            <span className="text-sm font-semibold text-slate-200 mb-2">{metric.t}</span>
            <p className="text-xs text-slate-400">{metric.d}</p>
          </div>
        ))}
      </div>

      {/* Bottom Callout Banner */}
      <div className="w-full bg-[#100f18] border border-white/10 rounded-2xl p-5 md:p-6 mt-8 z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
          <Rocket className="w-5 h-5 text-purple-400" />
        </div>
        <p className="text-slate-300 text-sm md:text-base font-medium max-w-2xl">
          While other teams are still buried in delays, <br className="hidden md:block"/>
          modern reconstruction companies are <span className="text-purple-400 font-bold">already operating like this.</span>
        </p>
      </div>

    </div>
  );
}