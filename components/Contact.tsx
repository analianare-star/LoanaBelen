import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { SectionId } from '../types';
import styles from './Contact.module.css';

/**
 * Contact Component / Componente de Contacto
 * Form and contact details to generate leads.
 * Formulario y detalles de contacto para generar clientes potenciales.
 */
const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', company: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id={SectionId.CONTACT} className="contactSection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 md:p-12 glassCard">
          
          <div className="gradientBlob"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Info Column */}
            <div className="flex flex-col justify-center">
              <span className="text-brand-600 font-bold tracking-widest text-xs uppercase mb-3 block">Contacto</span>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">¡Trabajemos Juntos!</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                Tenemos 3 presupuestos diferentes pre-armados, pero también podemos hacer uno <strong>acorde a tu presupuesto</strong>. ¡Charlémoslo!
              </p>

              <div className="space-y-4">
                <a href="mailto:bellabeel.cm@gmail.com" className="flex items-center p-4 rounded-2xl group shadow-sm contactItem">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 group-hover:text-brand-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-base font-medium text-slate-900">bellabeel.cm@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/5491158490347" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-2xl group shadow-sm contactItem">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 group-hover:text-brand-600 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <p className="text-base font-medium text-slate-900">+54 9 11 5849-0347</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-lg border border-slate-100 relative overflow-hidden">
               {formState === 'success' ? (
                  <div className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Recibido!</h3>
                    <p className="text-slate-600">Gracias por escribir. Te voy a responder en breve.</p>
                  </div>
               ) : (
               <form className="space-y-4" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-1.5">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Nombre</label>
                     <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-light text-sm" 
                        placeholder="Tu nombre" 
                      />
                   </div>
                   <div className="space-y-1.5">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Empresa</label>
                     <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-light text-sm" 
                        placeholder="Tu marca" 
                      />
                   </div>
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                   <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all font-light text-sm" 
                      placeholder="hola@ejemplo.com" 
                    />
                 </div>
                 <div className="space-y-1.5">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mensaje</label>
                   <textarea 
                      required 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all resize-none font-light text-sm" 
                      placeholder="Contame sobre tu proyecto..."
                    ></textarea>
                 </div>
                 <button 
                   disabled={formState === 'loading'}
                   className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-brand-600 transition-all shadow-xl hover:shadow-brand-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2 text-sm"
                 >
                   {formState === 'loading' ? (
                     <>Enviando... <Loader2 size={18} className="animate-spin" /></>
                   ) : (
                     <>Enviar Mensaje <Send size={18} /></>
                   )}
                 </button>
               </form>
               )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;