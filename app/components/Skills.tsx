import { FaReact, FaJs, FaCss3Alt, FaNode, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: FaReact, name: "React", delay: 100 },
    { icon: SiNextdotjs, name: "Next.js", delay: 150 },
    { icon: FaJs, name: "JavaScript", delay: 200 },
    { icon: SiTypescript, name: "TypeScript", delay: 250 },
    { icon: FaCss3Alt, name: "CSS3", delay: 300 },
    { icon: SiTailwindcss, name: "Tailwind", delay: 350 },
    { icon: FaNode, name: "Node.js", delay: 400 },
    { icon: FaGitAlt, name: "Git", delay: 450 },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-black to-zinc-950"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          <span className="bg-linear-to-r from-white to-yellow-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-xl bg-zinc-900/50 border border-yellow-600/20 backdrop-blur-sm text-center transition-all duration-400 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-600/20 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={skill.delay}
              >
                <Icon className="text-5xl text-yellow-600 mb-4 mx-auto transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
