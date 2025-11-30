import React from 'react';
import { ROADMAP } from '../constants';
import { CheckCircle2, Circle, Clock, ArrowDown } from 'lucide-react';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-dark-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">Rivojlanish Yo'l Xaritasi</h2>
        <p className="text-slate-400 text-center mb-16">Bizning loyihamiz qanday o'sib borayotganini ko'ring</p>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-dark-700 to-dark-900 md:-ml-0.5"></div>

          {ROADMAP.map((step, idx) => (
            <div key={idx} className={`relative flex items-center mb-16 md:justify-between ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              
              {/* Content Card */}
              <div className="ml-20 md:ml-0 md:w-[45%] group">
                <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                  step.status === 'current' 
                    ? 'bg-dark-800 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                    : 'bg-dark-900 border-dark-700 hover:border-dark-600'
                }`}>
                   <div className="flex justify-between items-center mb-3">
                     <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${
                       step.status === 'completed' ? 'bg-emerald-900/20 text-emerald-400' :
                       step.status === 'current' ? 'bg-blue-900/20 text-blue-400' :
                       'bg-slate-800 text-slate-400'
                     }`}>
                       {step.phase}
                     </span>
                     {step.status === 'current' && <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>}
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{step.title}</h3>
                   <ul className="space-y-3">
                     {step.items.map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                         <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            step.status === 'completed' ? 'bg-emerald-500' : 'bg-slate-600'
                         }`}></span>
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              {/* Status Icon */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-dark-900 bg-dark-800 flex items-center justify-center z-10 shadow-xl">
                {step.status === 'completed' ? (
                  <CheckCircle2 size={24} className="text-emerald-500" />
                ) : step.status === 'current' ? (
                  <Clock size={24} className="text-blue-500 animate-pulse-slow" />
                ) : (
                  <Circle size={24} className="text-slate-700" />
                )}
              </div>

              {/* Empty Spacer */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;