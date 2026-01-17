import React from 'react';
import { SectionId } from '../types';
import { CheckCircle2 } from 'lucide-react';

/**
 * About Component / Componente Sobre Mí
 * Displays professional profile, bio, and key skills.
 * Muestra perfil profesional, biografía y habilidades clave.
 */
const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="aboutSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="w-full md:w-1/2">
             <div className="imageContainer">
                <div className="backgroundShape"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop" 
                  alt="Perfil Profesional" 
                  className="profileImage"
                />
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold tracking-wide text-brand-600 uppercase mb-2">Sobre Mí</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Un camino que recorremos juntos</h3>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Lo más importante para mí es ayudarte a obtener clientes potenciales e incrementar tus ingresos. Es un proceso que conlleva <strong>constancia y disciplina</strong>.
              </p>
              <p>
                Para obtener buenos resultados, es clave una buena estrategia y <span className="text-brand-600 font-semibold">humanizar lo más posible tu marca</span>. Estoy acá para acompañarte en este camino.
              </p>
            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-brand-100">
              <h4 className="font-bold text-slate-900 mb-4">Redes Sociales que trabajo:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 {['Facebook', 'Instagram', 'WhatsApp Business', 'Diseño de Marca'].map(skill => (
                   <li key={skill} className="flex items-center text-slate-700">
                     <CheckCircle2 size={18} className="text-brand-500 mr-2" />
                     {skill}
                   </li>
                 ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;