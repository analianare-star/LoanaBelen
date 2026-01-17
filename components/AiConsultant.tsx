import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import { SectionId, ChatMessage } from '../types';
import { sendChatMessage } from '../services/geminiService';
import { Butterfly } from './Butterfly';

const PREDEFINED_QUESTIONS = [
  "¿Qué hace un Community Manager?",
  "¿Por qué necesito Branding?",
  "¿Cómo empezamos a trabajar?",
  "¿Hacen publicidad paga?",
];

/**
 * AiConsultant Component / Componente Consultor IA
 * Chatbot interface for automated customer support using Gemini.
 * Interfaz de chatbot para soporte al cliente automatizado usando Gemini.
 */
const AiConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de Loana Digital. 🦋 ¿En qué puedo ayudarte a potenciar tu marca hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await sendChatMessage([...messages, userMsg], text);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <section 
      id={SectionId.AI_TOOL} 
      className="chatSection"
      aria-labelledby="ai-consultant-title"
    >
       {/* Dark Art Deco Background */}
       <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900/40 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
       </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-brand-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={12} className="mr-2" aria-hidden="true" />
            IA Assistant
          </div>
          <h2 id="ai-consultant-title" className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight">Consultoría Inteligente</h2>
          <p className="text-slate-400 text-lg font-light">
            Respuestas inmediatas sobre cómo transformamos tu negocio.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="chatWindow">
          
          {/* Header */}
          <div className="bg-white/5 p-4 md:p-5 border-b border-white/5 flex items-center gap-4 backdrop-blur-md">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg" aria-hidden="true">
               <Butterfly className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Loana Bot</h3>
              <div className="flex items-center gap-2" role="status" aria-label="Estado: En línea">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" aria-hidden="true"></span>
                <span className="text-xs text-slate-400 font-medium">En línea</span>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar"
            role="log"
            aria-live="polite"
            aria-label="Historial de conversación"
            tabIndex={0}
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                <div className={`flex items-end gap-3 max-w-[85%] md:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div 
                    className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-700' : 'bg-brand-600 shadow-lg shadow-brand-500/20'}`}
                    aria-hidden="true"
                  >
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`px-5 py-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'userMessage'
                      : 'botMessage'
                  }`}>
                    <span className="sr-only">{msg.role === 'user' ? 'Tú:' : 'Loana Bot:'}</span>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start" role="status" aria-label="Loana Bot está escribiendo">
                 <div className="flex items-end gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-600 flex-shrink-0 flex items-center justify-center" aria-hidden="true">
                      <Bot size={14} />
                    </div>
                    <div className="bg-white/5 px-5 py-4 rounded-2xl rounded-bl-sm border border-white/5">
                      <div className="flex gap-1.5" aria-hidden="true">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                      </div>
                      <span className="sr-only">Escribiendo respuesta...</span>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 md:p-5 bg-black/20 border-t border-white/5 backdrop-blur-md">
            <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar no-scrollbar" role="group" aria-label="Preguntas sugeridas">
              {PREDEFINED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  disabled={loading}
                  className="whitespace-nowrap px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-all flex-shrink-0 hover:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label={`Preguntar: ${q}`}
                >
                  {q}
                </button>
              ))}
            </div>

            <form onSubmit={onFormSubmit} className="relative flex items-center">
              <label htmlFor="chat-input" className="sr-only">Escribe tu consulta</label>
              <input
                id="chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta aquí..."
                className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-2xl pl-5 pr-14 py-4 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all placeholder-slate-600 font-light"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="absolute right-2 p-2.5 bg-brand-600 rounded-xl text-white hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-brand-500/40 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Enviar mensaje"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiConsultant;