import type { LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "Commercial"
  | "Real Estate"
  | "Brand"
  | "Cinematic"
  | "Social"
  | "Creative";

export interface Project {
  id: string;
  title: string;
  client: string;
  year: number;
  category: ProjectCategory;
  runtime: string;
  thumbnail: string;
  video: string;
  description: string;
  directorNote: string;
  specs: string[];
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Collaboration {
  name: string;
  focus: string;
  scope: string;
  projects: string;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
}

export interface ContactDetails {
  name: string;
  role: string;
  email: string;
  whatsapp: string;
  location: string;
}