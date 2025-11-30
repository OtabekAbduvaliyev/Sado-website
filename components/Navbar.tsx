import React, { useState, useEffect } from 'react';
import { Mic } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-dark-700 py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
            <Mic size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Matoz<span className="text-emerald-400">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button onClick={() => scrollTo('problem')} className="hover:text-emerald-400 transition-colors">Muammo</button>
          <button onClick={() => scrollTo('features')} className="hover:text-emerald-400 transition-colors">Imkoniyatlar</button>
          <button onClick={() => scrollTo('team')} className="hover:text-emerald-400 transition-colors">Jamoa</button>
          <button onClick={() => scrollTo('roadmap')} className="hover:text-emerald-400 transition-colors">Rejalar</button>
        </div>

        <a 
          href="https://matozai.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/50 text-sm flex items-center gap-2"
        >
          Demoni Sinash
        </a>
      </div>
    </nav>
  );
};

export default Navbar;