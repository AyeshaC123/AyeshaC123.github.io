// src/types/index.ts
export interface Section {
    title: string;
    subtitle?: string;
    content?: string;
  }
  
  export interface SectionMap {
    [key: string]: Section;
  }
  
  export interface NavItem {
    name: string;
    path: string;
  }
  
  export interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted: string;
  }
  
  export interface ProjectData {
    id: number;
    title: string;
    description: string;
    image?: string;
    tags?: string[];
    url?: string;
  }
  
  export interface FormData {
    name: string;
    email: string;
    message: string;
  }