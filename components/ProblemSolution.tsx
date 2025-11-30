import React from 'react';
import { X, Check, Globe, Clock, FileText, Smartphone } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const items = [
    {
      id: 1,
      icon: Globe,
      problem: "Til To'sig'i",
      descP: "Ko'plab dasturlar o'zbek tili shevalarini va grammatikasini tushunmaydi.",
      solution: "Maxsus AI Modeli",
      descS: "Toshkent shevasi va adabiy tilga moslashtirilgan Gemini 2.5 modeli."
    },
    {
      id: 2,
      icon: FileText,
      problem: "Qo'lda Yozish",
      descP: "Intervyu va ma'ruzalarni qog'ozga tushirish soatlab vaqt oladi.",
      solution: "Jonli Transkripsiya",
      descS: "Gapirishingiz bilan matn tayyor bo'ladi. Vergul va nuqtalar avtomatik qo'yiladi."
    },
    {
      id: 3,
      icon: Clock,
      problem: "Axborot Ko'pligi",
      descP: "Uzun matnlarni o'qib chiqish va tahlil qilish qiyin.",
      solution: "AI Xulosa (Summary)",
      descS: "Bir tugma bilan 1 soatlik suhbatning qisqa mazmunini oling."
    },
    {
      id: 4,
      icon: Smartphone,
      problem: "Noqulay Interfeys",
      descP: "Professional dasturlar mobil telefonlar uchun moslashmagan.",
      solution: "Soft UI Dizayn",
      descS: "Telefonda oson boshqarish uchun maxsus 'Action Deck' paneli."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Muammo va Yechim</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            MatozAI an'anaviy vositalar ojiz qolgan joyda ishlaydi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-dark-800 rounded-3xl overflow-hidden border border-dark-700 flex flex-col group hover:border-emerald-500/30 transition-all duration-300">
              {/* Problem Section (Top) */}
              <div className="p-8 bg-gradient-to-b from-red-900/10 to-transparent border-b border-dark-700 relative">
                <div className="absolute top-6 right-6 text-red-500/20 group-hover:text-red-500/40 transition-colors">
                  <item.icon size={48} />
                </div>
                <div className="flex items-center gap-3 mb-3 text-red-400 font-bold uppercase tracking-wider text-xs">
                  <X size={14} strokeWidth={3} />
                  Muammo
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.problem}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.descP}</p>
              </div>

              {/* Solution Section (Bottom) */}
              <div className="p-8 bg-gradient-to-t from-emerald-900/10 to-transparent relative flex-grow">
                 <div className="flex items-center gap-3 mb-3 text-emerald-400 font-bold uppercase tracking-wider text-xs">
                  <Check size={14} strokeWidth={3} />
                  MatozAI Yechimi
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.solution}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.descS}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;