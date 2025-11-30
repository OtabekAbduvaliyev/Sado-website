import React from 'react';
import { Mic, ArrowRight, MousePointer2 } from 'lucide-react';

const TryDemo: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-dark-900 border-t border-dark-800/50">
      {/* Minimalist Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Minimal Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ovozingiz kuchini <br />
          <span className="text-emerald-400">his qiling.</span>
        </h2>
        
        <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto font-light leading-relaxed">
          Hech qanday ro'yxatdan o'tish shart emas. Shunchaki tugmani bosing va texnologiyani sinab ko'ring.
        </p>
        
        {/* Action Area */}
        <div className="relative inline-block group">
          
          {/* Main Button */}
          <a 
            href="https://matozai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 px-10 py-5 bg-white text-dark-900 hover:bg-emerald-50 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] flex items-center gap-3 mx-auto"
          >
            <Mic size={24} className="text-emerald-600" />
            <span>Demoni Boshlash</span>
            <ArrowRight size={20} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Animated Creative Cue (Desktop) */}
          <div className="hidden md:block absolute -right-48 top-1/2 -translate-y-1/2 pointer-events-none">
             <div className="relative">
                {/* Handwritten-style Arrow SVG */}
                <svg width="120" height="60" viewBox="0 0 120 60" className="text-emerald-500/80 -rotate-12 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                  <path 
                    d="M 110 10 Q 60 50 10 30" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    className="animate-[dash_2s_ease-in-out_infinite]"
                  />
                  <path 
                    d="M 10 30 L 25 25 M 10 30 L 20 40" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
                
                {/* Floating Label */}
                <span className="absolute -top-4 right-0 font-handwriting text-emerald-400 text-sm -rotate-6 animate-pulse">
                  Hoziroq sinab ko'ring!
                </span>

                {/* Simulated Mouse Cursor */}
                <div className="absolute -left-4 bottom-0 animate-[bounce_2s_infinite]">
                  <MousePointer2 className="text-white fill-emerald-500 rotate-[-15deg]" size={24} />
                </div>
             </div>
          </div>

          {/* Mobile Hint (Simple Arrow) */}
          <div className="md:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-80">
            <div className="w-px h-6 bg-gradient-to-b from-transparent to-emerald-500"></div>
            <span className="text-xs text-emerald-400 font-mono tracking-widest uppercase">Tepaga</span>
          </div>

        </div>

        {/* Minimal Footer Stats */}
        <div className="mt-20 flex justify-center gap-10 text-xs text-slate-600 font-mono uppercase tracking-widest">
           <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
             Bepul
           </div>
           <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
             Tezkor
           </div>
           <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
             Xavfsiz
           </div>
        </div>

      </div>
    </section>
  );
};

export default TryDemo;