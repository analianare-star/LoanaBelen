import React, { useState } from 'react';
import { Sparkles, Send, Copy, CheckCircle } from 'lucide-react';
import { SectionId } from '../types';
import { generateMarketingIdeas } from '../services/geminiService';

/**
 * AiMarketingTool Component / Herramienta de Marketing IA
 * Interactive tool to generate content ideas using AI.
 * Herramienta interactiva para generar ideas de contenido usando IA.
 */
const AiMarketingTool: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'caption' | 'strategy' | 'hashtags'>('caption');

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setResult('');
    setCopied(false);
    
    const generatedContent = await generateMarketingIdeas(topic, activeTab);
    
    setResult(generatedContent);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id={SectionId.AI_TOOL} className="toolSection">
       <div className={`glowBlob top-0 right-0 bg-brand-600 mix-blend-overlay`}></div>
       <div className={`glowBlob bottom-0 left-0 bg-purple-600 mix-blend-overlay`}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/30">
              <Sparkles size={12} className="mr-2" />
              Powered by Google Gemini
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Asistente Creativo IA</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Prueba una demostración de cómo la tecnología puede potenciar tu marca. Genera ideas de contenido, captions o hashtags en segundos.
            </p>
            
            <div className="inputCard">
              <div className="flex space-x-2 mb-6 bg-slate-900/50 p-1 rounded-lg">
                {[
                  { id: 'caption', label: 'Instagram Caption' },
                  { id: 'strategy', label: 'Ideas de Estrategia' },
                  { id: 'hashtags', label: 'Hashtags' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                      activeTab === tab.id 
                        ? 'bg-brand-600 text-white shadow-lg' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  ¿De qué trata tu publicación o negocio?
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Ej: Liquidación de verano de zapatos, Nuevo menú de cafetería..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  />
                  <button
                    onClick={handleGenerate}
                    disabled={loading || !topic}
                    className="absolute right-2 top-1.5 p-1.5 bg-brand-600 rounded-lg text-white hover:bg-brand-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-purple-600 rounded-3xl blur opacity-20 transform rotate-3"></div>
             <div className="resultCard">
                <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-4">
                  <span className="text-sm font-mono text-slate-400">Salida generada por IA</span>
                  {result && (
                    <button 
                      onClick={handleCopy}
                      className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-1 text-sm"
                    >
                      {copied ? <><CheckCircle size={16} /> Copiado</> : <><Copy size={16} /> Copiar</>}
                    </button>
                  )}
                </div>
                
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center h-full space-y-4">
                      <div className="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-slate-500 text-sm animate-pulse">La IA está pensando...</p>
                    </div>
                  ) : result ? (
                    <p className="text-slate-300 whitespace-pre-line leading-relaxed font-light">{result}</p>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-600">
                      <Sparkles size={48} className="mb-4 opacity-20" />
                      <p>Escribe un tema y presiona enviar para ver la magia.</p>
                    </div>
                  )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiMarketingTool;