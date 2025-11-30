import { LucideIcon } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  imageUrl: string;
  bio: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface RoadmapItem {
  phase: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
  items: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechStackItem {
  name: string;
  description: string;
  logo: string; // URL or text representation
  category: 'Frontend' | 'AI' | 'Data' | 'Design' | 'Backend' | 'Security';
}