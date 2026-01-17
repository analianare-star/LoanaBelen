
export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  process: string[]; // Steps of the service
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  logo: string; // Added logo property
  description: string;
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    result: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HOME = 'inicio',
  ABOUT = 'sobre-mi',
  SERVICES = 'servicios',
  PORTFOLIO = 'portfolio',
  AI_TOOL = 'consultoria-ia',
  CONTACT = 'contacto'
}
