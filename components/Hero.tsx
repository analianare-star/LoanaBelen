import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionId } from '../types';
import { Butterfly } from './Butterfly';

/**
 * Hero Component / Componente Hero
 * Main landing section with value proposition and CTA.
 * Sección principal de aterrizaje con propuesta de valor y llamada a la acción.
 */
const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="heroSection">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <div className={`absolute top-[-10%] right-[-5%] w-[600px] h-[600px] blur-[80px] opacity-60 gradientMesh1`}></div>
         <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] blur-[80px] opacity-60 gradientMesh2`}></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo Element */}
          <div className="animate-float mb-6">
            <div className={`w-24 h-24 md:w-28 md:h-28 rounded-[2rem] flex items-center justify-center border-white/60 logoCard`}>
                <Butterfly className="w-14 h-14 md:w-16 md:h-16 text-brand-600" />
            </div>
          </div>

          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/80 border border-white/60 backdrop-blur-sm text-brand-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm animate-fade-in-up">
            <Sparkles size={12} className="mr-2" />
            Marketing Digital & Diseño Gráfico
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
            Bienvenido a <br/>
            Loana<span className="textGradient">Digital</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up [animation-delay:200ms]">
             Si estás buscando <span className="font-semibold text-slate-900">potenciar tu emprendimiento</span> y crecer en redes sociales, estás en el lugar indicado. Ayudamos a incrementar tus ingresos con herramientas de diseño y marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:300ms]">
            <a
              href={`#${SectionId.CONTACT}`}
              className="px-10 py-4 rounded-full bg-slate-900 text-white font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Potenciar mi marca
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`#${SectionId.PORTFOLIO}`}
              className={`px-10 py-4 rounded-full text-slate-700 font-semibold text-lg hover:bg-white transition-all shadow-md hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center logoCard`}
            >
              Ver Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;