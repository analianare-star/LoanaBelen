import { PortfolioItem, Service, NavItem, SectionId } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: `#${SectionId.HOME}` },
  { label: 'Sobre Mí', href: `#${SectionId.ABOUT}` },
  { label: 'Servicios', href: `#${SectionId.SERVICES}` },
  { label: 'Portfolio', href: `#${SectionId.PORTFOLIO}` },
  { label: 'Asistente IA', href: `#${SectionId.AI_TOOL}` },
  { label: 'Contacto', href: `#${SectionId.CONTACT}` },
];

export const SERVICES: Service[] = [
  {
    id: 'branding',
    icon: 'Palette',
    title: '1° BRANDING',
    subtitle: 'Identidad de la Marca',
    description: 'Logo, Paleta de Colores, Tipografía, Fotoproductos y Catálogo. Armamos toda la info importante: medios de pago, ubicación y horarios.',
    process: [
      'Briefing: Cuestionario para entender la esencia de tu emprendimiento.',
      'Identidad Visual: Diseño de Logo, Paleta y Tipografías.',
      'Fotoproductos & Catálogo: Para mostrar lo que vendés de forma profesional.',
      'Info Clave: Definición de medios de pago, ubicación y contacto.'
    ]
  },
  {
    id: 'social',
    icon: 'Smartphone',
    title: '2° ACTIVACIÓN',
    subtitle: 'Redes Sociales',
    description: 'Creación de cuentas, historias diarias, posteos semanales, Reels/Videos y automatización del contenido para mantener la constancia.',
    process: [
      'Puesta a Punto: Creación de cuentas (si se requiere) y optimización de perfiles.',
      'Contenido Diario: Diseño de Historias para estar siempre presente.',
      'Feed & Reels: Posteos semanales y videos dinámicos.',
      'Automatización: Gestión inteligente para no perder el ritmo.'
    ]
  },
  {
    id: 'ads',
    icon: 'LineChart',
    title: '3° PUBLICITAR',
    subtitle: 'Campañas & Estrategia',
    description: 'Campañas publicitarias en Meta Ads, generación de contenido estratégico y copywriting para llegar a tus clientes potenciales.',
    process: [
      'Estrategia: Definimos si buscamos alcance o ventas directas.',
      'Meta Ads: Configuración de campañas publicitarias potentes.',
      'Contenido & Copy: Creación de piezas gráficas y textos persuasivos.',
      'Humanización: Estrategias para conectar con tu audiencia real.'
    ]
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'uhart',
    title: 'Uhart Style',
    category: 'Belleza',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://ui-avatars.com/api/?name=Uhart+Style&background=000&color=fff&size=128&bold=true&length=2', 
    description: 'Salón de Belleza. Branding completo y gestión de redes para destacar en el rubro.',
    tags: ['Branding', 'RRSS', 'Belleza'],
    details: {
      challenge: 'La marca necesitaba una identidad visual coherente y ordenar su feed para atraer clientes.',
      solution: 'Diseñamos un logo minimalista y una grilla tipo ajedrez, alternando trabajos con tips de cuidado.',
      result: 'Aumento notable en consultas y una imagen percibida como "Premium" en la zona.'
    }
  },
  {
    id: 'rocky',
    title: 'Rocky Manía',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://ui-avatars.com/api/?name=Rocky+Mania&background=f97316&color=fff&size=128&bold=true&length=2',
    description: 'Tienda de accesorios para mascotas. Estrategia digital y posicionamiento.',
    tags: ['Mascotas', 'E-commerce', 'Estrategia'],
    details: {
      challenge: 'Faltaba conexión con el público a pesar de tener buenos productos.',
      solution: 'Humanizamos la marca con un lenguaje divertido y memes. Activamos campañas de Meta Ads.',
      result: 'Mejoramos el retorno de inversión y la interacción con la comunidad mascotera.'
    }
  },
  {
    id: 'rancho',
    title: 'Rancho Aparte',
    category: 'Gastronomía',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://ui-avatars.com/api/?name=Rancho+Aparte&background=ef4444&color=fff&size=128&bold=true&length=2',
    description: 'Las mejores burgers de la zona. Gestión de redes y campañas de delivery.',
    tags: ['Gastronomía', 'Delivery', 'Redes Sociales'],
    details: {
      challenge: 'Mucha competencia en apps de delivery y poca fidelización.',
      solution: 'Fotografía gastronómica de alto impacto. Sorteos semanales y campañas para activar el fin de semana.',
      result: 'Crecimiento orgánico sostenido y mayor reconocimiento en el barrio.'
    }
  },
  {
    id: 'mizu',
    title: 'Mizu HB',
    category: 'Hotelería',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://ui-avatars.com/api/?name=Mizu+HB&background=14B8A6&color=fff&size=128&bold=true',
    description: 'Hotel Boutique. Branding sofisticado y estrategia turística.',
    tags: ['Turismo', 'Branding', 'Luxury'],
    details: {
      challenge: 'Transmitir exclusividad y paz visual para atraer turistas.',
      solution: 'Paleta de colores tierra y neutros. Videos sensoriales mostrando la experiencia del hotel.',
      result: 'Alta ocupación en temporada gracias a la gestión de reservas directas.'
    }
  },
  {
    id: 'kiosco',
    title: 'Kiosco de Paso',
    category: 'Comercio',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://ui-avatars.com/api/?name=Kiosco+Paso&background=8b5cf6&color=fff&size=128&bold=true&length=2',
    description: 'Identidad visual y presencia digital para comercio 24hs.',
    tags: ['Local', '24hs', 'Diseño'],
    details: {
      challenge: 'Falta de identidad visual que lo hiciera reconocible.',
      solution: 'Cartelería vibrante y optimización en búsquedas locales.',
      result: 'Se convirtió en referencia nocturna del barrio.'
    }
  },
  {
    id: 'joel',
    title: 'Joel Cell',
    category: 'Tecnología',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop',
    logo: 'https://ui-avatars.com/api/?name=Joel+Cell&background=0ea5e9&color=fff&size=128&bold=true&length=2',
    description: 'Servicio técnico de celulares. Branding tech y marketing directo.',
    tags: ['Tech', 'Servicio', 'Branding'],
    details: {
      challenge: 'Generar confianza en el rubro de reparaciones.',
      solution: 'Videos del proceso de reparación para mostrar transparencia y testimonios reales.',
      result: 'Mayor confianza del cliente y consultas más efectivas.'
    }
  },
];