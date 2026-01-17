import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { SectionId } from '../types';
import { Butterfly } from './Butterfly';

/**
 * Navbar Component / Componente de Barra de Navegación
 * Fixed top navigation that changes style on scroll.
 * Navegación superior fija que cambia de estilo al hacer scroll.
 */
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navContainer ${scrolled ? 'glassNav' : 'transparentNav'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href={`#${SectionId.HOME}`} className="flex items-center cursor-pointer group">
            <div className={`transition-all duration-500 animate-float-subtle ${scrolled ? 'text-brand-600 scale-90' : 'text-brand-600 scale-100'}`}>
               <div className="animate-spin-sporadic">
                 <Butterfly className="w-10 h-10 md:w-12 md:h-12" />
               </div>
            </div>
            <span className={`ml-3 font-bold text-xl tracking-tight logoText ${scrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              Loana<span className="font-light">Digital</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <div className={`flex items-center space-x-1 rounded-full transition-all duration-300 ${scrolled ? 'px-2 py-1.5 bg-slate-50/50 border border-white/40 shadow-sm' : 'px-4 py-2'}`}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`navLink text-sm font-medium text-slate-600 hover:text-brand-600 rounded-full hover:bg-white/50 relative group ${scrolled ? 'px-3 py-1.5' : 'px-4 py-2'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <a
              href={`#${SectionId.CONTACT}`}
              className={`ctaButton ml-3 bg-brand-600 text-white rounded-full text-sm font-medium hover:bg-brand-700 transition-all flex items-center gap-2 ${scrolled ? 'px-5 py-2' : 'px-6 py-2.5'}`}
            >
              Comenzar
              <Rocket size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;