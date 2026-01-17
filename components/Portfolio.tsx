import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ImageOff, Loader2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import { SectionId, PortfolioItem } from '../types';

// Enhanced Image Component with Fallback Logic
const PortfolioImage = ({ src, alt, className, imgClassName = "object-cover" }: { src: string, alt: string, className?: string, imgClassName?: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      setIsLoading(false);
      setError(true);
    };
  }, [src]);

  if (error) {
    const initials = alt.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const isLogo = imgClassName.includes('contain');
    
    if (isLogo) {
      return (
        <div className={`${className} bg-brand-50 flex items-center justify-center text-brand-600`}>
           <span className="font-bold text-lg tracking-tighter">{initials}</span>
        </div>
      );
    }

    return (
      <div className={`${className} bg-slate-100 flex flex-col items-center justify-center text-slate-400 border border-slate-200 min-h-[200px]`}>
        <ImageOff size={24} className="mb-1 opacity-50" />
      </div>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden bg-white`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-50 animate-pulse">
          <Loader2 className="w-5 h-5 text-slate-300 animate-spin" />
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full ${imgClassName} transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        loading="lazy"
      />
    </div>
  );
};

/**
 * Portfolio Component / Componente Portfolio
 * Grid display of projects with detailed modal view.
 * Visualización en cuadrícula de proyectos con vista modal detallada.
 */
const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedItem(null);
    setTimeout(() => {
      const contactSection = document.getElementById(SectionId.CONTACT);
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id={SectionId.PORTFOLIO} className="portfolioSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold tracking-widest text-xs uppercase mb-3 block">Nuestros Trabajos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Portfolio <span className="font-light italic text-slate-500">Premium</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Selección de proyectos donde la estrategia y el diseño convergen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="portfolioCard group"
            >
              {/* Wrapper for image + logo to allow overlapping without clipping */}
              <div className="relative w-full">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <PortfolioImage 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full bg-slate-100"
                  />
                  
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"></div>
                </div>

                {/* Logo moved outside overflow-hidden container */}
                <div className="absolute -bottom-8 right-6 z-20 w-16 h-16 rounded-[1.2rem] bg-white shadow-xl p-1 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out border border-white/50">
                   <div className="w-full h-full rounded-[1rem] overflow-hidden bg-slate-50 relative">
                     <PortfolioImage 
                       src={item.logo} 
                       alt={`${item.title} logo`} 
                       className="w-full h-full" 
                       imgClassName="object-contain p-1"
                     />
                   </div>
                </div>
              </div>

              <div className="p-6 pt-10 md:p-8 md:pt-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Glass Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 transition-opacity duration-500 modalOverlay"
            onClick={() => setSelectedItem(null)}
          ></div>
          
          <div className="modalContent w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-modal-pop flex flex-col md:flex-row overflow-hidden">
            
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 bg-white/50 backdrop-blur rounded-full hover:bg-slate-100 transition-colors z-30 text-slate-500 hover:text-red-500"
            >
              <X size={24} />
            </button>

            {/* Left/Top: Visual */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <PortfolioImage 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r"></div>
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white z-10">
                 <div className="w-16 h-16 rounded-2xl bg-white shadow-lg mb-4 overflow-hidden p-1">
                    <PortfolioImage 
                       src={selectedItem.logo} 
                       alt="Logo" 
                       className="w-full h-full rounded-xl" 
                       imgClassName="object-contain"
                     />
                 </div>
                 <h2 className="text-4xl font-bold tracking-tight">{selectedItem.title}</h2>
                 <p className="opacity-80 font-light">{selectedItem.category}</p>
              </div>
            </div>

            {/* Right/Bottom: Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-white/50">
              <div className="space-y-8">
                
                <div>
                  <h4 className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-3">El Desafío</h4>
                  <p className="text-slate-600 leading-relaxed font-light">{selectedItem.details.challenge}</p>
                </div>

                <div className="p-6 bg-white/60 rounded-3xl border border-white shadow-sm">
                   <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">Solución & Resultado</h4>
                   <p className="text-slate-600 text-sm mb-4">{selectedItem.details.solution}</p>
                   <div className="w-full h-px bg-slate-100 my-4"></div>
                   <p className="text-slate-800 font-medium text-sm">✨ {selectedItem.details.result}</p>
                </div>

                <button 
                   onClick={handleContactClick}
                   className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2 group"
                >
                  Quiero resultados así 
                  <ExternalLink size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;