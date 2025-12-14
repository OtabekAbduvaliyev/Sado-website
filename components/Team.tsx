import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Github, Linkedin, Twitter, Code2, Terminal } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Bizning Jamoa</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Sado — bu shunchaki kod emas, bu o'zbek tili kelajagiga befarq bo'lmagan insonlar mehnati mahsulidir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {TEAM_MEMBERS.map((member) => (
            <div 
              key={member.id} 
              className="group relative bg-dark-800 rounded-[2rem] border border-dark-700 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
            >
              {/* Image Section */}
              <div className="h-80 w-full relative overflow-hidden">
                 {/* Green tint overlay */}
                 <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay z-10 pointer-events-none"></div>
                 
                 <img 
                   src={member.imageUrl} 
                   alt={member.name} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                 />
                 
                 {/* Gradient Fade at bottom */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/60 to-transparent z-20"></div>
                 
                 {/* Floating Name on Image */}
                 <div className="absolute bottom-6 left-8 z-30">
                    <h3 className="text-4xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
                    <div className="flex items-center gap-2 text-emerald-400 font-medium tracking-wide uppercase text-sm">
                      <Terminal size={14} strokeWidth={3} />
                      {member.role}
                    </div>
                 </div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-2 relative z-30">
                {/* Bio */}
                <p className="text-slate-300 leading-relaxed mb-8 text-lg border-l-2 border-dark-600 pl-4 italic">
                  "{member.bio}"
                </p>

                {/* Skills Tags */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Code2 size={14} /> Texnologiyalar
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-dark-900 text-slate-300 text-sm font-medium rounded-lg border border-dark-700 group-hover:border-emerald-500/30 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 pt-6 border-t border-dark-700/50">
                  {member.links.github && (
                    <a href={member.links.github} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 hover:bg-white hover:text-dark-900 text-slate-400 transition-all duration-300 font-medium group/link">
                      <Github size={20} />
                      <span className="text-sm">GitHub</span>
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 hover:bg-[#0077b5] hover:text-white text-slate-400 transition-all duration-300 font-medium">
                      <Linkedin size={20} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  )}
                  {member.links.twitter && (
                    <a href={member.links.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 hover:bg-[#1DA1F2] hover:text-white text-slate-400 transition-all duration-300 font-medium">
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;