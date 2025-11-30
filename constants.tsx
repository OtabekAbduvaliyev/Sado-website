import { 
  Mic, 
  Globe, 
  Sparkles, 
  FileText, 
  Zap, 
  Shield, 
  Smartphone, 
  Share2, 
  Download, 
  History, 
  Cpu, 
  Code, 
  Database, 
  Palette, 
  Layers,
  BrainCircuit,
  Volume2
} from 'lucide-react';
import { TeamMember, RoadmapItem, Feature, TechStackItem } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: "Otabek Abduvaliyev",
    role: "Teamlead & Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    // Placeholder image used. Please replace with your local file: "/assets/otabek.jpg"
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800&h=800",
    bio: "Codevision LLC da 2+ yillik tajriba. Next.js va Tailwind CSS bo'yicha ekspert. Yuqori sifatli UI/UX yechimlari muallifi.",
    links: { 
      github: "https://github.com/OtabekAbduvaliyev", 
      linkedin: "https://www.linkedin.com/in/otabek-abduvaliyev-81872129a/" 
    }
  },
  {
    id: '2',
    name: "Musayev Doniyor",
    role: "Backend Developer",
    skills: ["Node.js", "Microservices", "PostgreSQL", "MongoDB"],
    // Placeholder image used. Please replace with your local file: "/assets/doniyor.jpg"
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800",
    bio: "1.5 yillik tajriba. Microservices arxitekturasi, REST/FastAPI va ma'lumotlar bazalari (Postgres/Mongo) bo'yicha mutaxassis.",
    links: { 
      github: "https://github.com/MusayevDoniyor", 
      linkedin: "https://www.linkedin.com/in/doniyor-musayev-2783592a4/" 
    }
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    phase: "1-Bosqich",
    title: "G'oya va Prototip",
    status: 'completed',
    items: [
      "O'zbek tili ASR muammolarini o'rganish",
      "Gemini 1.5 Pro bilan dastlabki integratsiya",
      "Konseptual veb-ilova (PoC)",
      "Lotin/Kirill o'girish logikasi"
    ]
  },
  {
    phase: "2-Bosqich",
    title: "MVP Ishlab Chiqish",
    status: 'completed',
    items: [
      "Gemini 2.5 Flash Native Audio ga o'tish",
      "Real vaqt vizualizatorini yaratish",
      "IndexedDB mahalliy saqlash tizimi",
      "PDF va Word formatida eksport qilish"
    ]
  },
  {
    phase: "3-Bosqich",
    title: "Ishga Tushirish",
    status: 'current',
    items: [
      "Ommaviy Beta versiya taqdimoti",
      "Mobil PWA optimizatsiyasi",
      "Ijtimoiy tarmoqlarga ulashish (Share)",
      "Foydalanuvchi fikrlarini yig'ish"
    ]
  },
  {
    phase: "4-Bosqich",
    title: "Kelajak Rejalari",
    status: 'upcoming',
    items: [
      "iOS va Android uchun maxsus ilovalar",
      "Oflayn rejim (On-device model)",
      "Spikerlarni ajratish (Diarization)",
      "Bizneslar uchun maxsus API"
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Jonli Transkripsiya",
    description: "Gapirishingiz bilan so'zlar ekranda paydo bo'ladi. <1 soniya kechikish bilan.",
    icon: Zap
  },
  {
    title: "Ikki Alifbo Rejimi",
    description: "Bir tugma bilan Lotin va Kirill yozuvlari o'rtasida o'ting. Barcha avlodlar uchun qulay.",
    icon: Globe
  },
  {
    title: "AI Xulosa & Tarjima",
    description: "Uzun suhbatlarni qisqa mazmunga keltiring yoki ingliz/rus tillariga tarjima qiling.",
    icon: Sparkles
  },
  {
    title: "Tahrirlash & Yozish",
    description: "Yozib olish jarayonida matnni tahrirlang. Ovoz va matn bir vaqtda saqlanadi.",
    icon: FileText
  },
  {
    title: "Mahalliy Xavfsizlik",
    description: "Barcha ma'lumotlar brauzeringizda (IndexedDB) saqlanadi. Hech qanday serverda emas.",
    icon: Shield
  },
  {
    title: "Audio Vizualizator",
    description: "Ovozingizga moslashuvchan, simmetrik zumrad to'lqinlar.",
    icon: Volume2
  },
  {
    title: "Eksport va Ulashish",
    description: "PDF, Word formatlarida yuklab oling yoki Telegram orqali ulashing.",
    icon: Share2
  },
  {
    title: "Mobil Dizayn",
    description: "Telefoningiz uchun maxsus 'Action Deck' boshqaruv paneli.",
    icon: Smartphone
  }
];

export const TECH_STACK: TechStackItem[] = [
  { name: "React 19", description: "UI Kutubxonasi", logo: "⚛️", category: "Frontend" },
  { name: "NestJS", description: "Backend Framework", logo: "🦁", category: "Backend" },
  { name: "Gemini Live", description: "Multimodal AI", logo: "🤖", category: "AI" },
  { name: "PostgreSQL", description: "Asosiy Baza", logo: "🐘", category: "Data" },
  { name: "Prisma ORM", description: "Baza Boshqaruvi", logo: "▲", category: "Backend" },
  { name: "JWT Auth", description: "Xavfsizlik", logo: "🔒", category: "Security" },
  { name: "Tailwind CSS", description: "Zamonaviy Stil", logo: "🎨", category: "Design" },
  { name: "Vite", description: "Tezkor Yig'uvchi", logo: "⚡", category: "Frontend" },
];