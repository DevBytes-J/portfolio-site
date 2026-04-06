"use client";
import { useEffect, useState } from "react";

const ROLES = ["Frontend Developer", "UI/UX Enthusiast", "React Specialist", "Next.js Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(200,200,200,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(200,200,200,0.04) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,200,200,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "100ms" }}>
          <span className="lg:inline-flex items-center gap-2 text-sm tracking-[0.3em] uppercase text-gray-400 mb-8 hidden">
            <span className="w-8 h-px bg-white/20/60" />
            Available for work
            <span className="w-8 h-px bg-white/20/60" />
          </span>
        </div>

        {/* Name with glitch */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "300ms" }}>
          <h1
            className="glitch gold-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 leading-none"
            data-text="Joanna Bassey"
          >
            Joanna Bassey
          </h1>
        </div>

        {/* Typewriter role */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "500ms" }}>
          <p className="typewriter-cursor text-xl sm:text-2xl md:text-3xl text-gray-400 font-light mb-12 h-10">
            {displayed}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "700ms" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="magnetic group relative px-10 py-4 overflow-hidden rounded-full font-semibold text-black"
            style={{ background: "linear-gradient(135deg, #e0e0e0, #ffffff)" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="magnetic px-10 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/20/5 transition-all duration-300"
          >
            Let&apos;s Talk
          </button>
        </div>

        {/* Stats row */}
        <div className={`flex justify-center gap-12 mt-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "900ms" }}>
          {[["2+", "Years Exp."], ["40+", "Projects"], ["100%", "Passion"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold gold-text">{num}</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase text-gray-500">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
