"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 2, suffix: "+", label: "Years of Experience"},
  { value: 40, suffix: "+", label: "Projects Shipped"},
];

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(start);
    }, 30);
    return () => clearInterval(interval);
  }, [active, target]);

  return <span className="text-7xl font-black gold-text tabular-nums">{count}{suffix}</span>;
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-32 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050505 0%, #0a0a0a 100%)" }}>

      {/* Decorative large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.015] leading-none">IMPACT</span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4 block">By the numbers</span>
          <h2 className="text-5xl md:text-6xl font-black gold-text">Experience & Impact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STATS.map((stat, i) => (
            <div key={stat.label}
              className={`group relative p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-700 overflow-hidden ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 150}ms`, background: "rgba(255,255,255,0.02)" }}>

              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(200,200,200,0.05) 0%, transparent 70%)" }} />

              <Counter target={stat.value} suffix={stat.suffix} active={vis} />
              <div className="mt-4">
                <p className="text-lg font-semibold text-white">{stat.label}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.desc}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                <div className="absolute top-4 right-4 w-8 h-px bg-white/20" />
                <div className="absolute top-4 right-4 w-px h-8 bg-white/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
