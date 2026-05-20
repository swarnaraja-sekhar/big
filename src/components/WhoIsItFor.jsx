import { Users, HardHat, FileText, ShieldCheck, Building, Check, Zap, Link, Shield, LineChart } from 'lucide-react';

export default function WhoIsItFor() {
  const roles = [
    {
      title: "Project Managers",
      description: "Keep projects on track and everything moving forward.",
      icon: <HardHat className="w-5 h-5 text-white" />,
      features: [
        "Real-time project visibility",
        "Track milestones and updates",
        "Keep teams aligned"
      ],
      badge: "Stay Ahead Of Delays",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Operations Teams",
      description: "Coordinate tasks, resources, and communication seamlessly.",
      icon: <Users className="w-5 h-5 text-white" />,
      features: [
        "Centralized communication",
        "Connected workflows",
        "Increase team efficiency"
      ],
      badge: "Operate With Clarity",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Estimators",
      description: "Create accurate estimates and turn them into approved work.",
      icon: <FileText className="w-5 h-5 text-white" />,
      features: [
        "Smart estimate templates",
        "Material & labor tracking",
        "Faster approvals"
      ],
      badge: "Win More. Approve Faster.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Field Teams",
      description: "Capture updates, complete tasks, and close work in the field.",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      features: [
        "Mobile-first experience",
        "Instant updates & photos",
        "Close work faster"
      ],
      badge: "Work Efficiently Anywhere",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Owners & Stakeholders",
      description: "Get full visibility and confidence in every decision.",
      icon: <Building className="w-5 h-5 text-white" />,
      features: [
        "Executive dashboards",
        "Real-time insights",
        "Complete transparency"
      ],
      badge: "Make Confident Decisions",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div id="who-is-it-for" className="w-full flex flex-col items-center mt-32 relative z-10 px-4 sm:px-6">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="flex flex-col items-center text-center z-10 w-full mb-16">
        <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-[#140b1e] rounded-full px-4 py-1.5 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
          <Users className="w-4 h-4 text-purple-400" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-purple-300 uppercase">BUILT FOR OPERATIONAL TEAMS</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          Built For The Teams <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Who Keep Projects Moving.</span>
        </h2>
        
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl font-light">
          BIGlogic is designed for reconstruction and operations teams that need clarity, speed, and coordination every single day.
        </p>
      </div>

      {/* Roles Grid */}
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 w-full pb-8 lg:pb-0 gap-4 snap-x snap-mandatory scrollbar-hide">
        {roles.map((role, i) => (
          <div key={i} className="min-w-[280px] lg:min-w-0 snap-center flex flex-col bg-[#0b0a10] border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors group">
            
            {/* Image & Icon container */}
            <div className="relative h-40 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a10] via-transparent to-transparent z-10"></div>
              <img src={role.image} alt={role.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
                {role.icon}
              </div>
            </div>

            <div className="flex flex-col flex-grow p-5 pt-2">
              <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                {role.description}
              </p>

              <ul className="flex flex-col gap-2 mb-6">
                {role.features.map((feature, j) => (
                   <li key={j} className="flex items-start gap-2">
                     <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                       <Check className="w-2.5 h-2.5 text-purple-400" />
                     </div>
                     <span className="text-slate-300 text-xs font-medium">{feature}</span>
                   </li>
                ))}
              </ul>

              <div className="mt-auto border border-purple-900/40 rounded-full py-1.5 px-3 text-center transition-colors group-hover:bg-purple-900/20">
                <span className="text-xs font-semibold text-purple-400">{role.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="w-full mt-12 bg-[#0b0a10] border border-slate-800 rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12 relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        {/* Left Side */}
        <div className="flex items-center gap-6 z-10 w-full lg:w-auto">
          <div className="w-16 h-16 rounded-full bg-slate-900 border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)] shrink-0">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">One Platform.</h3>
            <p className="text-xl font-bold text-purple-400 mb-2">Every Role. Every Project.</p>
            <p className="text-slate-400 text-sm max-w-sm">BIGlogic connects every person, process, and project so your entire operation runs as one.</p>
          </div>
        </div>

        {/* Right Side Stats/Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:flex-1 lg:pl-10 lg:border-l border-slate-800 z-10">
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-purple-900/50 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white text-sm font-semibold">Built For Speed</span>
            </div>
            <p className="text-slate-400 text-xs text-left pl-8">Purpose-built for reconstruction operations.</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-purple-900/50 flex items-center justify-center">
                <Link className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white text-sm font-semibold leading-tight">Connected From End To End</span>
            </div>
            <p className="text-slate-400 text-xs text-left pl-8">Everything connected. Nothing slips through the cracks.</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-purple-900/50 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white text-sm font-semibold">Secure & Reliable</span>
            </div>
            <p className="text-slate-400 text-xs text-left pl-8">Enterprise-grade security you can count on.</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-purple-900/50 flex items-center justify-center">
                <LineChart className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white text-sm font-semibold">Scalable For Growth</span>
            </div>
            <p className="text-slate-400 text-xs text-left pl-8">From small teams to large multi-project operations.</p>
          </div>

        </div>
      </div>

      <div className="mt-8 text-center text-slate-400">
        BIGlogic adapts to <span className="text-purple-400 font-semibold">your team</span>. Not the other way around.
      </div>

    </div>
  );
}