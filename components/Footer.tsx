import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img src="/logo.svg" alt="Sadoo" className="w-8 h-8" />
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Sadoo
            </h1>
          </div>

          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Maxfiylik Siyosati
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Foydalanish Shartlari
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Bog'lanish
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-600 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-blue-400 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-700">
          © 2025 Sadoo. O'zbek tili rivoji uchun yaratilgan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
