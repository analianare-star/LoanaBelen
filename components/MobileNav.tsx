import React, { useEffect, useState } from 'react';
import { Home, Star, Briefcase, User, MessageCircle } from 'lucide-react';
import { SectionId } from '../types';

/**
 * MobileNav Component / Componente Navegación Móvil
 * Super Premium Art Deco Style
 * Estilo Art Deco Súper Premium con acabados de lujo.
 */
const MobileNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SectionId.HOME);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      let current = SectionId.HOME;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: SectionId.HOME, label: 'Inicio', icon: Home },
    { id: SectionId.SERVICES, label: 'Servicios', icon: Star },
    { id: SectionId.CONTACT, label: 'Contacto', icon: MessageCircle, isCenter: true },
    { id: SectionId.PORTFOLIO, label: 'Portfolio', icon: Briefcase },
    { id: SectionId.ABOUT, label: 'Sobre Mí', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* Decorative Art Deco Top Line (Golden/Rose Gradient) */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-300 to-transparent opacity-80"></div>
      
      {/* Glass Container */}
      <div className="bg-white/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)] pt-1 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] relative">
        <div className="flex justify-around items-end h-20 px-4 pb-2 max-w-lg mx-auto relative">
          
          {navItems.map((item) => {
             const isActive = activeSection === item.id;
             const Icon = item.icon;

             // Center Button (The Jewel)
             if (item.isCenter) {
               return (
                 <div key={item.id} className="relative -top-8 group flex flex-col items-center">
                   {/* Glow Effect */}
                   <div className="absolute inset-0 bg-brand-400 blur-2xl opacity-20 rounded-full scale-150 animate-pulse-slow"></div>
                   
                   <a
                     href={`#${item.id}`}
                     className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 via-brand-600 to-purple-600 text-white shadow-[0_8px_25px_rgba(236,72,153,0.5)] border-[3px] border-white/80 ring-1 ring-brand-100/50 backdrop-blur-md transform transition-all duration-300 active:scale-95 group-hover:-translate-y-1 z-10"
                   >
                     {/* Inner Ring Detail */}
                     <div className="absolute inset-1 rounded-full border border-white/20"></div>
                     <Icon size={26} strokeWidth={2} className="drop-shadow-md" />
                   </a>
                   <span className="text-[9px] font-bold uppercase tracking-widest text-brand-800 mt-2 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-5 whitespace-nowrap bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-brand-100">
                     Hablemos
                   </span>
                 </div>
               );
             }

             // Standard Items
             return (
               <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex flex-col items-center justify-end pb-2 flex-1 h-full transition-all duration-300 relative group`}
               >
                  {/* Art Deco Diamond Indicator */}
                  <div className={`absolute top-0 w-1.5 h-1.5 bg-brand-500 rotate-45 shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-500 ease-out ${isActive ? 'opacity-100 translate-y-2' : 'opacity-0 -translate-y-2'}`}></div>
                  
                  {/* Icon */}
                  <div className={`relative transition-all duration-300 ${isActive ? '-translate-y-1' : ''}`}>
                    <Icon 
                      size={22} 
                      strokeWidth={isActive ? 2.5 : 1.5}
                      className={`mb-1.5 transition-all duration-300 ${isActive ? 'text-brand-600 drop-shadow-sm scale-110' : 'text-slate-400 group-hover:text-slate-600'}`} 
                    />
                  </div>

                  {/* Label */}
                  <span className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${isActive ? 'text-brand-900 scale-105' : 'text-slate-400 scale-100'}`}>
                    {item.label}
                  </span>
               </a>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;