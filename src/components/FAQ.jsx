import { useState } from 'react';
import { HelpCircle, Plus, Minus, Clock, Puzzle, User, Layers, Zap, Shield, Building2, CheckCircle2 } from 'lucide-react';

const faqs = [
  { id: '01', icon: Clock, question: 'How long does setup take?', answer: 'Most teams are fully up and running in less than a day. BIGlogic is designed to fit into your existing workflow without slowing operations down.' },
  { id: '02', icon: Puzzle, question: 'Do we need to replace our current tools?', answer: 'No. BIGlogic acts as a centralized operations hub that connects and enhances your existing toolstack. Adopt it incrementally.' },
  { id: '03', icon: User, question: 'Is BIGlogic difficult for teams to learn?', answer: 'It is built specifically for reconstruction teams, with an incredibly intuitive UI. Your team will understand how to use it in 15 minutes.' },
  { id: '04', icon: Layers, question: 'Can we manage multiple projects at once?', answer: 'Absolutely. It is built for scale, giving you a 30,000-foot view of every single project concurrently to eliminate bottlenecks.' },
  { id: '05', icon: Zap, question: 'How does BIGlogic reduce delays?', answer: 'By automating estimate extraction, triggering immediate approval requests, and putting everyone (internal and external) on absolute the same page.' },
  { id: '06', icon: Shield, question: 'Is our data secure?', answer: 'We utilize AES-256 encryption, role-based access controls, and separated environments to ensure enterprise-grade protection for your sensitive data.' },
  { id: '07', icon: Building2, question: 'What kind of teams use BIGlogic?', answer: 'Fast-moving reconstruction operators, disaster restoration firms, and general contractors who refuse to lose sleep or margin over operational disorganization.' }
];

export default function FAQ() {
  const [openId, setOpenId] = useState('01');

  return (
    <div id="faq" className="w-full flex flex-col items-center mt-32 relative z-10 max-w-4xl mx-auto">
      
      <div className="flex flex-col items-center text-center w-full mb-12 px-4 md:px-0">
        <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-[#16122d] rounded-full px-4 py-1.5 mb-6">
          <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-200 uppercase">COMMON QUESTIONS</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
          Everything Teams Ask <br />
          Before <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Moving Faster.</span>
        </h2>
        
        <p className="text-slate-400 text-lg max-w-2xl">
          BIGlogic is built to simplify reconstruction operations —<br />
          not make them more complicated.
        </p>
      </div>

      <div className="w-full flex flex-col gap-3 px-4 md:px-0">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div 
              key={faq.id} 
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className={`w-full border rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden
                ${isOpen ? 'bg-[#0d091e] border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'bg-[#0b0a10] border-white/5 hover:border-white/10 hover:bg-white/[0.02]'}
              `}
            >
              <div className="flex items-center justify-between p-4 sm:p-6 w-full">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors
                    ${isOpen ? 'bg-purple-900/40 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'bg-[#141221] border border-white/5'}
                  `}>
                    <faq.icon className={`w-5 h-5 ${isOpen ? 'text-purple-400' : 'text-purple-400/50'}`} />
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <span className={`font-mono text-sm font-semibold tracking-wider ${isOpen ? 'text-purple-400' : 'text-slate-500'}`}>
                       {faq.id}
                     </span>
                     <h3 className={`text-base sm:text-lg font-semibold transition-colors ${isOpen ? 'text-white' : 'text-slate-300'}`}>
                       {faq.question}
                     </h3>
                  </div>
                </div>

                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors shrink-0
                  ${isOpen ? 'border-purple-500/30 bg-purple-500/10' : 'border-white/10 bg-transparent'}
                `}>
                  {isOpen ? <Minus className="w-4 h-4 text-purple-400" /> : <Plus className="w-4 h-4 text-slate-500" />}
                </div>
              </div>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="flex flex-col md:flex-row px-4 sm:px-6 pb-6 pt-2 gap-8 items-center border-t border-purple-500/10 mt-2">
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed flex-1 sm:pl-16">
                    {faq.answer}
                  </p>
                  
                  {faq.id === '01' && (
                    <div className="w-full max-w-[320px] bg-[#130E26] border border-purple-500/20 rounded-xl p-4 flex gap-4 shadow-xl shrink-0">
                      <div className="w-1/2 flex flex-col gap-2">
                         <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
                           <div className="flex gap-1">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                           </div>
                         </div>
                         <div className="h-2 w-full bg-slate-800 rounded mt-2"></div>
                         <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
                         <div className="h-2 w-full bg-slate-800 rounded"></div>
                         <div className="h-2 w-5/6 bg-slate-800 rounded"></div>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg shrink-0">
                        <CheckCircle2 className="w-8 h-8 text-purple-400 mb-2" />
                        <span className="text-[10px] font-bold text-white text-center">Setup Complete</span>
                        <span className="text-[8px] text-slate-400 mt-1">Ready to move faster.</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
