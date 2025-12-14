import React, { useEffect, useRef, useState } from 'react';
import { Mic, ArrowRight, Play } from 'lucide-react';

// YouTube video ID
const VIDEO_1_ID = 'v291dWeNzME';

// Declare YouTube API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const Demo: React.FC = () => {
  const video1Ref = useRef<HTMLDivElement>(null);
  const player1Ref = useRef<any>(null);
  const [isAPIReady, setIsAPIReady] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setIsAPIReady(true);
      };
    } else {
      setIsAPIReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isAPIReady || !video1Ref.current) return;

    // Initialize video player with autoplay
    player1Ref.current = new window.YT.Player(video1Ref.current, {
      videoId: VIDEO_1_ID,
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
      },
    });

    return () => {
      // Cleanup
      if (player1Ref.current) {
        player1Ref.current.destroy();
      }
    };
  }, [isAPIReady]);

  return (
    <div className="min-h-screen bg-dark-900 text-slate-200 relative overflow-hidden">
      {/* Unified Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-emerald-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 md:w-[550px] md:h-[550px] bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center ">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-800 text-emerald-400 text-xs sm:text-sm font-medium mb-4 md:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Demo Videolar
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Sado
              </span>
              {' '}Qanday Ishlaydi?
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
              Platformamizning kuchini ko'rsatadigan demo videolar
            </p>
          </div>
        </div>
      </section>

      {/* Full-Width Voice Wave Element */}
      <section className="relative py-6 md:py-8 overflow-hidden">
        <div className="w-full relative">
          {/* Audio Wave Visualization */}
          <div className="flex items-center justify-center h-16 md:h-20 gap-1 md:gap-1.5 px-4">
            {[...Array(60)].map((_, i) => {
              const height = Math.sin(i * 0.3) * 20 + 25;
              const delay = i * 0.05;
              return (
                <div
                  key={i}
                  className="w-0.5 md:w-1 bg-gradient-to-t from-emerald-500/40 via-emerald-400/60 to-emerald-300/40 rounded-full"
                  style={{
                    height: `${height}%`,
                    animation: `wave ${2 + Math.random()}s ease-in-out infinite`,
                    animationDelay: `${delay}s`,
                  }}
                />
              );
            })}
          </div>
        </div>
        <style>{`
          @keyframes wave {
            0%, 100% {
              transform: scaleY(0.5);
              opacity: 0.4;
            }
            50% {
              transform: scaleY(1);
              opacity: 0.8;
            }
          }
        `}</style>
      </section>

      {/* Video 1 - Nearly Full Screen */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center justify-center py-6 md:py-12">
        <div className="w-full max-w-[95vw] mx-auto px-4 sm:px-6 relative z-10">
          <div className="relative rounded-lg md:rounded-xl overflow-hidden border border-dark-700/50">
            {/* Video Container - Responsive */}
            <div className="relative w-full bg-dark-800/40" style={{ height: 'clamp(400px, 70vh, 800px)' }}>
              <div className="absolute inset-0 w-full h-full">
                {/* YouTube Video Player */}
                <div
                  ref={video1Ref}
                  className="w-full h-full"
                  style={{ height: '100%' }}
                />
                {/* Loading placeholder */}
                {!isAPIReady && (
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-900/60">
                    <div className="text-center px-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse">
                        <Play className="text-emerald-400 ml-1" size={24} style={{ width: 'clamp(20px, 5vw, 32px)', height: 'clamp(20px, 5vw, 32px)' }} />
                      </div>
                      <p className="text-slate-300 text-sm sm:text-base font-medium">Yuklanmoqda...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Minimalistic Description */}
            <div className="p-4 sm:p-6 bg-dark-800/30 border-t border-dark-700/30">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                Muammo, Yechim va Texnologiyalar
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                O'zbek tilidagi nutqni matnga aylantirish muammolari va Sado yechimlari
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

          {/* Minimal Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            O'zingiz sinab ko'ring <br />
            <span className="text-emerald-400">hoziroq.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 md:mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Hech qanday ro'yxatdan o'tish shart emas. Shunchaki tugmani bosing va texnologiyani sinab ko'ring.
          </p>

          {/* Action Area */}
          <div className="relative inline-block group">

            {/* Main Button */}
            <a
              href="https://sadoo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-dark-900 hover:bg-emerald-50 rounded-xl md:rounded-2xl font-bold text-sm sm:text-base md:text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] flex items-center gap-2 sm:gap-3 mx-auto"
            >
              <Mic size={20} style={{ width: 'clamp(20px, 5vw, 24px)', height: 'clamp(20px, 5vw, 24px)' }} className="text-emerald-600" />
              <span>Demoni Boshlash</span>
              <ArrowRight size={18} style={{ width: 'clamp(18px, 4vw, 20px)', height: 'clamp(18px, 4vw, 20px)' }} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Animated Creative Cue (Desktop) */}
            <div className="hidden lg:block absolute -right-48 top-1/2 -translate-y-1/2 pointer-events-none">
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
                  <Play className="text-white fill-emerald-500 rotate-[-15deg]" size={24} />
                </div>
              </div>
            </div>

            {/* Mobile Hint (Simple Arrow) */}
            <div className="lg:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-80">
              <div className="w-px h-6 bg-gradient-to-b from-transparent to-emerald-500"></div>
              <span className="text-xs text-emerald-400 font-mono tracking-widest uppercase">Tepaga</span>
            </div>

          </div>

          {/* Minimal Footer Stats */}
          <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 text-xs text-slate-600 font-mono uppercase tracking-widest">
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
    </div>
  );
};

export default Demo;
