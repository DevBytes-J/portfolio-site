'use client';

import { useEffect, useState, useRef } from 'react';

export default function Experience() {
  const [counters, setCounters] = useState({ years: 0, projects: 0 });
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const yearTarget = 1;
    const projectTarget = 40;
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        years: Math.floor(yearTarget * progress),
        projects: Math.floor(projectTarget * progress)
      });
      
      if (step >= steps) {
        clearInterval(interval);
        setCounters({ years: yearTarget, projects: projectTarget });
      }
    }, duration / steps);
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16" data-aos="fade-up">
          <span className="bg-gradient-to-r from-white to-yellow-600 bg-clip-text text-transparent">Experience & Impact</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Years of Experience */}
          <div className="text-center p-8 rounded-2xl bg-zinc-900/50 border border-yellow-600/20 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <div className="text-6xl sm:text-7xl font-bold text-yellow-600 mb-4">
              {counters.years}+
            </div>
            <p className="text-xl text-gray-300">Years of Experience</p>
          </div>
          
          {/* Projects Completed */}
          <div className="text-center p-8 rounded-2xl bg-zinc-900/50 border border-yellow-600/20 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 cursor-pointer" data-aos="fade-up" data-aos-delay="200">
            <div className="text-6xl sm:text-7xl font-bold text-yellow-600 mb-4">
              {counters.projects}+
            </div>
            <p className="text-xl text-gray-300">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
