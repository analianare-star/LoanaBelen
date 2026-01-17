import React, { useState } from 'react';
import { Palette, Smartphone, LineChart, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../constants';
import { SectionId } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={32} />,
  Smartphone: <Smartphone size={32} />,
  LineChart: <LineChart size={32} />,
};

/**
 * Services Component / Componente de Servicios
 * Displays service cards with expandable process details.
 * Muestra tarjetas de servicios con detalles del proceso expandibles.
 */
const Services: React.FC = () => {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section id={SectionId.SERVICES} className="servicesSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold tracking-widest text-xs uppercase mb-3 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Soluciones Integrales</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Estrategia, diseño y tecnología unidos para escalar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className={`serviceCard ${openService === service.id ? 'activeCard' : ''}`}
            >
              <div className="p-8 md:p-10">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-50 to-white text-brand-600 rounded-2xl flex items-center justify-center mb-6 border border-white shadow-sm">
                  {iconMap[service.icon]}
                </div>
                
                <h4 className="text-brand-600 font-bold text-xs uppercase tracking-widest mb-2 opacity-80">{service.title}</h4>
                <h5 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{service.subtitle}</h5>
                <p className="text-slate-600 leading-relaxed mb-6 font-light text-sm md:text-base">{service.description}</p>
                
                <button 
                  onClick={() => toggleService(service.id)}
                  className="flex items-center text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors uppercase tracking-wider"
                >
                  {openService === service.id ? 'Ocultar Proceso' : 'Ver Proceso'}
                  {openService === service.id ? <ChevronUp size={16} className="ml-2" /> : <ChevronDown size={16} className="ml-2" />}
                </button>
              </div>

              {/* Expandable Process Area */}
              <div className={`bg-white/50 backdrop-blur-sm px-8 md:px-10 transition-all duration-500 ease-in-out overflow-hidden ${openService === service.id ? 'max-h-[500px] py-8 border-t border-slate-100' : 'max-h-0 py-0'}`}>
                <h6 className="font-bold text-slate-900 mb-6 text-sm">Metodología de trabajo</h6>
                <ul className="space-y-4">
                  {service.process.map((step, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600 group">
                      <span className="flex-shrink-0 w-6 h-6 bg-white border border-slate-200 text-brand-600 rounded-full flex items-center justify-center text-[10px] font-bold mr-4 mt-0.5 shadow-sm group-hover:border-brand-200 transition-colors">
                        {idx + 1}
                      </span>
                      <span className="font-light">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;