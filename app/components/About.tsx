"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="gold-line absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image side */}
        <div className={`relative transition-all duration-1000 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-white/8 rounded-3xl" />
          <div className="absolute -inset-8 border border-white/25/5 rounded-3xl" />

          {/* Corner accents */}
          {["-top-2 -left-2", "-top-2 -right-2", "-bottom-2 -left-2", "-bottom-2 -right-2"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-6 h-6`}>
              <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
              <div className="absolute top-0 left-0 w-px h-full bg-white/20" />
            </div>
          ))}

          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/profile.jpeg"
              alt="Joanna Bassey"
              width={300}
              height={400}
              className="w-full h-auto object-cover"
            />
            {/* Gold overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-gray-300">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className={`transition-all duration-1000 delay-200 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4 block">Who I am</span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            <span className="gold-text">Crafting</span>
            <br />
            <span className="text-white">Digital</span>
            <br />
            <span className="text-gray-500">Experiences</span>
          </h2>

          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p>
              I&apos;m a passionate frontend developer dedicated to crafting exceptional digital experiences
              that blend aesthetics with functionality. With 2+ years of experience, I specialize in
              building responsive, user-focused interfaces that perform flawlessly.
            </p>
            <p>
              My approach combines modern design principles with cutting-edge technologies to deliver
              solutions that exceed expectations — clean code, smooth animations, and intuitive UX.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX"].map((tag) => (
              <span key={tag}
                className="px-3 py-1 text-xs border border-white/10 text-gray-400 rounded-full hover:border-white/30 hover:text-white transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="gold-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
