"use client";
import { useEffect, useRef, useState } from "react";
import { FaReact, FaJs, FaCss3Alt, FaNode, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiFigma } from "react-icons/si";

const SKILLS = [
  { icon: FaReact, name: "React", level: 60, color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", level: 80, color: "#fff" },
  { icon: SiTypescript, name: "TypeScript", level: 85, color: "#3178C6" },
  { icon: FaJs, name: "JavaScript", level: 75, color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind CSS", level: 95, color: "#38BDF8" },
  { icon: FaCss3Alt, name: "CSS3", level: 94, color: "#264DE4" },
  { icon: SiFramer, name: "Framer Motion", level: 70, color: "#BB4FFF" },
  { icon: FaNode, name: "Node.js", level: 70, color: "#68A063" },
  { icon: FaGitAlt, name: "Git", level: 88, color: "#F05032" },
  { icon: SiFigma, name: "Figma", level: 75, color: "#F24E1E" },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative"
      style={{ background: "linear-gradient(180deg, #050505 0%, #0a0a0a 50%, #050505 100%)" }}>

      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4 block">What I work with</span>
          <h2 className="text-5xl md:text-6xl font-black gold-text">Technical Arsenal</h2>
        </div>

        {/* Floating icons marquee */}
        <div className="overflow-hidden mb-20 opacity-20">
          <div className="marquee-track flex gap-12 w-max">
            {[...SKILLS, ...SKILLS].map((s, i) => {
              const Icon = s.icon;
              return <Icon key={i} className="text-4xl flex-shrink-0" style={{ color: s.color }} />;
            })}
          </div>
        </div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name}
                className={`group transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="p-5 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Icon className="text-2xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />
                      <span className="font-medium text-gray-200">{skill.name}</span>
                    </div>
                    <span className="text-sm font-mono text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="skill-bar-fill"
                      style={{ width: vis ? `${skill.level}%` : "0%", transitionDelay: `${i * 60 + 300}ms` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
