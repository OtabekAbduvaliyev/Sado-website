import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-dark-700 py-3 shadow-lg' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
            <Logo size={40} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Sa<span className="text-emerald-400">do</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {location.pathname === '/' ? (
            <>
              <button onClick={() => scrollTo('problem')} className="hover:text-emerald-400 transition-colors">Muammo</button>
              <button onClick={() => scrollTo('features')} className="hover:text-emerald-400 transition-colors">Imkoniyatlar</button>
              <button onClick={() => scrollTo('team')} className="hover:text-emerald-400 transition-colors">Jamoa</button>
              <button onClick={() => scrollTo('roadmap')} className="hover:text-emerald-400 transition-colors">Rejalar</button>
              <Link to="/demo" className="hover:text-emerald-400 transition-colors">Demo</Link>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-emerald-400 transition-colors">Bosh Sahifa</Link>
              <Link to="/demo" className="hover:text-emerald-400 transition-colors text-emerald-400">Demo</Link>
            </>
          )}
        </div>

        <Link
          to="https://sadoo.vercel.app/"
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/50 text-sm flex items-center gap-2"
        >
          Demoni Sinash
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;