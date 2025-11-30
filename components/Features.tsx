import React from 'react';
import { FEATURES } from '../constants';
import { Cpu, Zap, Lock, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Asosiy Imkoniyatlar</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Bizning platformamiz shunchaki diktofon emas. Bu to'liq sun'iy intellekt studiyasi.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          
          {/* Main Feature - Large */}
          <div className="md:col-span-2 bg-gradient-to-br from-emerald-900/20 to-dark-900 rounded-3xl p-8 border border-emerald-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Gibrid AI Dvigateli</h3>
              <p className="text-slate-400 mb-6 text-lg">
                Google Gemini 2.5 Flash Native Audio modeli bilan ishlaydi. 
                Ovoz brauzerdan to'g'ridan-to'g'ri Google serverlariga WebSocket orqali uzatiladi.
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 rounded-md bg-dark-800 border border-dark-700 text-xs text-emerald-400 font-mono">16kHz PCM</span>
                <span className="px-3 py-1 rounded-md bg-dark-800 border border-dark-700 text-xs text-emerald-400 font-mono">WebSocket</span>
                <span className="px-3 py-1 rounded-md bg-dark-800 border border-dark-700 text-xs text-emerald-400 font-mono">Low Latency</span>
              </div>
            </div>
          </div>

          {/* Secondary Feature - Tall */}
          <div className="bg-dark-900 rounded-3xl p-8 border border-dark-800 hover:border-dark-700 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 mb-6">
              <Smartphone size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Mobil Birinchi</h3>
            <p className="text-slate-400 text-sm mb-4">
              "Soft & Easy" dizayni. Barcha tugmalar bosh barmog'ingiz yetadigan joyda joylashgan.
            </p>
            <div className="mt-8 bg-dark-800 rounded-xl p-4 border border-dark-700/50">
               <div className="flex justify-between items-center mb-2">
                 <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                 <div className="w-20 h-2 rounded bg-slate-700"></div>
               </div>
               <div className="w-full h-2 rounded bg-slate-700 mb-2"></div>
               <div className="w-2/3 h-2 rounded bg-slate-700"></div>
            </div>
          </div>

          {/* Grid of smaller features */}
          {FEATURES.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="bg-dark-900 p-6 rounded-3xl border border-dark-800 hover:bg-dark-800/50 transition-colors">
              <feature.icon className="text-emerald-500 mb-4" size={32} />
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-slate-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Banner */}
        <div className="border-t border-dark-800 pt-16">
          <h3 className="text-center text-slate-500 text-sm uppercase tracking-widest mb-10">Texnologik Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-70">
            {["React 19", "TypeScript", "Vite", "Tailwind CSS", "Gemini API", "IndexedDB"].map((tech) => (
              <span key={tech} className="text-xl md:text-2xl font-bold text-slate-300 hover:text-emerald-400 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;