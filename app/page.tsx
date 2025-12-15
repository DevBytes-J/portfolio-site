'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl top-1/2 right-0 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
