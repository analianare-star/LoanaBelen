import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { SectionId } from '../types';

/**
 * Footer Component / Componente Pie de Página
 * Bottom navigation, social links and copyright info.
 * Navegación inferior, enlaces sociales e información de derechos de autor.
 */
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a href={`#${SectionId.HOME}`} className="font-bold text-2xl text-white mb-2 hover:text-brand-500 transition-colors">
              Loana Digital
            </a>
            <p className="text-sm opacity-60 max-w-xs">
              Estrategias digitales que conectan marcas con personas reales.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6 text-sm font-medium">
            <a href={`#${SectionId.SERVICES}`} className="hover:text-white transition-colors">Servicios</a>
            <a href={`#${SectionId.PORTFOLIO}`} className="hover:text-white transition-colors">Portfolio</a>
            <a href={`#${SectionId.CONTACT}`} className="hover:text-white transition-colors">Contacto</a>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="socialIcon">
              <Instagram size={18} />
            </a>
            <a href="#" className="socialIcon">
              <Facebook size={18} />
            </a>
            <a href="mailto:bellabeel.cm@gmail.com" className="socialIcon">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col items-center">
          <p className="text-xs opacity-40">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className="text-[10px] opacity-30 mt-2 hover:opacity-100 transition-opacity">
            Diseñado por <a href="https://instagram.com/Tellounder" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-400">Tellounder</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;