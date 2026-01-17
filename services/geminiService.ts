import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const sendChatMessage = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  if (!apiKey) {
    return "Ups, parece que falta configurar la API Key. Por favor, revisá la configuración.";
  }

  const modelId = 'gemini-3-flash-preview';

  // System instruction defining the Persona with Argentine context and PDF details
  const systemInstruction = `
    Sos el Asistente Virtual Inteligente de "Loana Digital", una agencia de Marketing Digital y Diseño Gráfico.
    Tu misión es asesorar a emprendedores que quieren potenciar sus negocios, siempre hablando en ESPAÑOL ARGENTINO, con respeto pero cercanía (usá el "voseo" típico: "querés", "podés", "tenés", pero mantené la formalidad profesional).

    FILOSOFÍA DE LA MARCA (CRUCIAL):
    - Creemos que para obtener buenos resultados se necesita "constancia y disciplina".
    - La clave es una buena estrategia y "humanizar lo más posible tu marca".
    - Estamos acá para acompañarlos en ese camino de crecimiento.

    SERVICIOS Y PRESUPUESTOS (Basado en nuestra info oficial):
    Ofrecemos soluciones integrales divididas en 3 pilares:

    1. BRANDING (Identidad de la Marca):
       - Incluye: Logo, Paleta de Colores, Tipografía.
       - Extras clave: Fotoproductos y Catálogo.
       - Info importante: Armamos placas con medios de pago, ubicación, contacto, días y horarios.

    2. ACTIVACIÓN DE REDES SOCIALES (Community Manager):
       - Creación de cuentas (si hace falta).
       - Diseño de Historias diarias (para estar siempre presente).
       - Diseño de Posteos semanales.
       - Diseño y Creación de Reels/Videos (clave hoy en día).
       - Automatización del contenido.
       - Gestión de WhatsApp Business, Instagram y Facebook.

    3. PUBLICITAR:
       - Campañas Publicitarias en Meta Ads.
       - Generación de Contenido y Copy (textos persuasivos).

    SI PREGUNTAN PRECIOS:
    - Deciles que tenemos tres presupuestos diferentes pre-armados, pero que "también podemos hacer uno acorde a tu presupuesto".
    - Invitalos siempre a contactarnos por WhatsApp para ver qué necesita puntualmente su negocio.

    TU TONO:
    - Empático, motivador ("¡Dale que tu emprendimiento puede crecer mucho!").
    - Usá emojis (🦋, ✨, 🚀).
    - Si te preguntan algo técnico, explicalo fácil.
    - Objetivo: Que se sientan contenidos y terminen escribiéndonos al WhatsApp o Email.

    Contacto: Email (bellabeel.cm@gmail.com), WhatsApp (+54 9 11 5849-0347).
    
    Responde de forma concisa (máximo 3 párrafos cortos). No seas robótico, sé humano, como Loana.
  `;

  try {
    const conversationHistory = history.map(msg => 
      `${msg.role === 'user' ? 'Cliente' : 'Loana Bot'}: ${msg.text}`
    ).join('\n');

    const fullPrompt = `
      ${systemInstruction}

      HISTORIAL DE CONVERSACIÓN:
      ${conversationHistory}
      Cliente: ${newMessage}
      Loana Bot:
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: fullPrompt,
    });

    return response.text || "Disculpá, me quedé tildado. ¿Me podrías repetir la pregunta?";
  } catch (error) {
    console.error("Error generating chat response:", error);
    return "Estoy teniendo un problemita de conexión. Escribime directo al WhatsApp y lo vemos, ¿dale?";
  }
};

export const generateMarketingIdeas = async (topic: string, type: 'caption' | 'strategy' | 'hashtags'): Promise<string> => {
  if (!apiKey) {
    return "Falta la API Key che. Revisá la configuración.";
  }

  const modelId = 'gemini-3-flash-preview';
  
  let prompt = "";
  
  switch(type) {
    case 'caption':
      prompt = `Actuá como un experto en Copywriting argentino.
      Escribí un caption de Instagram atractivo, persuasivo y con emojis para una publicación sobre: "${topic}".
      El tono debe ser amigable, usando voseo (ej: "mirá", "aprovechá"). Incluí una llamada a la acción (CTA) clara.`;
      break;
    case 'strategy':
      prompt = `Actuá como un estratega de Marketing Digital.
      Tirá 3 ideas creativas y estratégicas para promocionar: "${topic}".
      Para cada idea, explicá brevemente el formato (Reel, Carrusel, Historia) y el objetivo. Hablá en español argentino profesional.`;
      break;
    case 'hashtags':
      prompt = `Actuá como un especialista en SEO para Instagram.
      Generá una lista de 30 hashtags relevantes y optimizados para una publicación sobre: "${topic}".
      Agrupalos por: Alta competencia, Nicho específico y Ubicación/Comunidad.`;
      break;
  }

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });
    return response.text || "No pude generar el contenido, probemos de nuevo.";
  } catch (error) {
    console.error("Error generating marketing ideas:", error);
    return "Hubo un error al generar las ideas. Intentalo de nuevo en un ratito.";
  }
};