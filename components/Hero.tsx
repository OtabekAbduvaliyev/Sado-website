import React, { useRef, useEffect, useState } from 'react';
import { Mic, Pause, Globe, RefreshCcw, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const [simulatedText, setSimulatedText] = useState<string>("");
  const fullText = "Salom! Bu Sado platformasi. Biz o'zbek tilidagi nutqni matnga aylantirish uchun eng so'nggi sun'iy intellekt texnologiyalaridan foydalanamiz. Hozir gapirib ko'ring...";

  // Auto-typing effect
  useEffect(() => {
    let timeout: any;
    let currentIndex = 0;
    
    const typeWriter = () => {
      if (currentIndex <= fullText.length) {
        setSimulatedText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(typeWriter, 50); // Typing speed
      }
    };

    typeWriter();

    return () => clearTimeout(timeout);
  }, []);

  // Simulated Audio Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const bars = 60; // Number of bars

    const animate = () => {
      if (!isAnimating) return;
      
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barWidth = canvas.width / bars;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < bars; i++) {
        // Create a symmetric wave effect using Sine waves and Perlin-like noise simulation
        const distFromCenter = Math.abs(i - bars / 2) / (bars / 2);
        const wave = Math.sin(i * 0.2 + time) * Math.cos(time * 0.5);
        const noise = Math.random() * 0.3;
        
        // Make height lower at edges, higher in center
        let height = (wave * 30 + noise * 20 + 10) * (1 - distFromCenter);
        if (height < 2) height = 2; // Min height

        const x = i * barWidth;
        
        // Gradient color
        ctx.fillStyle = `rgba(16, 185, 129, ${0.5 + height / 80})`; // Emerald opacity

        // Draw mirrored bars
        ctx.fillRect(x, centerY - height, barWidth - 2, height);
        ctx.fillRect(x, centerY, barWidth - 2, height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, [isAnimating]);

  return (
    <section id="demo" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Jonli Demo Mavjud
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Erkin Gapiring.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Sado Tinglaydi.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            <strong>O'zbek tili</strong> uchun to'liq optimallashtirilgan birinchi AI ovoz platformasi. 
            99% aniqlik bilan transkripsiya, tarjima va xulosa qilish imkoniyati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://sadoo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20"
            >
              <Mic size={20} />
              Yozishni Boshlash
            </a>
            <button className="px-8 py-4 rounded-xl font-bold text-slate-300 border border-slate-700 hover:bg-slate-800 transition-all">
              Hujjatlarni O'qish
            </button>
          </div>
        </div>

        {/* Demo Interface */}
        <div className="relative z-10 scale-95 md:scale-100">
          <div className="bg-dark-800/90 backdrop-blur-xl border border-dark-600 rounded-3xl p-6 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
            {/* Soft UI Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70 blur-sm"></div>

            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                 <button className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-slate-300 transition-colors border border-dark-600" title="Alifboni o'zgartirish">
                   <Globe size={18} />
                 </button>
                 <button className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-slate-300 transition-colors border border-dark-600" title="Tarix">
                   <RefreshCcw size={18} />
                 </button>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/50 px-3 py-1.5 rounded-full border border-emerald-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                JONLI REJIM
              </div>
            </div>

            {/* Visualizer Canvas */}
            <div className="h-24 w-full bg-dark-900/50 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-dark-700/50 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/20 pointer-events-none"></div>
              <canvas 
                ref={canvasRef} 
                width={500} 
                height={100} 
                className="w-full h-full opacity-90"
              />
            </div>

            {/* Transcription Area */}
            <div className="h-48 bg-dark-900 rounded-xl p-5 text-lg text-slate-200 font-medium leading-relaxed overflow-y-auto border border-dark-700/50 shadow-inner">
               {simulatedText ? (
                 <span className="font-sans">
                   {simulatedText}
                   <span className="animate-pulse inline-block w-0.5 h-5 bg-emerald-500 ml-1 align-middle"></span>
                 </span>
               ) : (
                 <span className="text-slate-600 italic">Mikrofonni bosing va o'zbek tilida gapiring...</span>
               )}
            </div>

            {/* Action Deck */}
            <div className="mt-6 flex justify-between items-center pt-2 border-t border-dark-700/50">
               <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                 MODEL: GEMINI-2.5-NATIVE
               </div>
               <div className="flex gap-3">
                 <button className="p-2 rounded-full bg-dark-700 hover:bg-emerald-600 hover:text-white text-slate-400 transition-all">
                    <Sparkles size={14} />
                 </button>
                 <div className="w-px h-8 bg-dark-700 mx-1"></div>
                 <div className="w-2 h-2 rounded-full bg-slate-600 my-auto"></div>
                 <div className="w-2 h-2 rounded-full bg-slate-600 my-auto"></div>
                 <div className="w-2 h-2 rounded-full bg-emerald-500 my-auto shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
               </div>
            </div>

          </div>
          
          {/* Decorative Elements behind card */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;