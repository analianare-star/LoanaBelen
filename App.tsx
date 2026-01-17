import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AiConsultant from './components/AiConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

/**
 * Root Component / Componente Raíz
 * Orchestrates the main layout, global styles, and scroll behavior.
 * Orquesta el diseño principal, estilos globales y comportamiento del scroll.
 */
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="appContainer text-slate-900 selection:bg-brand-200 selection:text-brand-900">
      <ParticleBackground />
      <Navbar />
      <main className="mainContent">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <AiConsultant />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;