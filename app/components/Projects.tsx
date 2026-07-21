"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaShoppingCart,
  FaHeadphones,
  FaRocket,
  FaHashtag,
  FaUser,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaHouseChimney, FaXTwitter } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";

const PROJECTS = [
  {
    id: 5,
    title: "Open Profile",
    subtitle: "Profile Platform",
    description: "Create One Searchable Profile People Can Find And Trust.",
    tech: ["Next.js", "Tailwind CSS"],
    icon: FaUser,
    image: "/open.png",
    link: "https://open-profile.hng14.com",
  },
  {
    id: 1,
    title: "Trackyt",
    subtitle: "Expense Tracker",
    description: "Track your expenses and income with ease.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    icon: GiReceiveMoney,
    image: "/trackyt.png",
    link: "https://trackyt-app.onrender.com/",
  },
  {
    id: 2,
    title: "PostSyncer",
    subtitle: "AI Video Creator",
    description:
      "Manage social accounts, schedule content, and create AI videos in minutes.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: FaHashtag,
    image: "/postsync.png",
    link: "https://postsyncc.vercel.app/",
  },
  {
    id: 3,
    title: "Tio",
    subtitle: "Real Estate",
    description:
      "Explore homes where every room is designed with comfort and style.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    icon: FaHouseChimney,
    image: "/tio.png",
    link: "https://tio-seven.vercel.app/",
  },
  {
    id: 4,
    title: "Super𝕏",
    subtitle: "Growth OS",
    description: "The All-in-One Growth OS for Serious 𝕏 Creators.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    icon: FaXTwitter,
    image: "/superx.png",
    link: "https://studiox-flame-five.vercel.app/",
  },
];

function TiltCard({
  project,
  index,
  visible,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  visible: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
  }, []);

  const onMouseLeave = useCallback(() => {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`h-full flex flex-col tilt-card group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-700 cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 80}ms`, background: "#0a0a0a" }}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        {/* Icon badge */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center">
          <Icon className="text-white text-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="tilt-card-inner p-6 flex flex-col flex-grow">
        <div className="flex flex-col items-start mb-4">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-2">
            {project.subtitle}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group/cta inline-flex items-center gap-3 w-full"
          >
            <span className="text-xl sm:text-2xl font-bold text-white relative inline-block pb-1">
              {project.title}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white to-gray-400 scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-500 origin-left"></span>
            </span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover/cta:bg-white group-hover/cta:border-white group-hover/cta:text-black transition-all duration-300 flex-shrink-0">
              <FaArrowRight className="text-sm -rotate-45 group-hover/cta:rotate-0 transition-transform duration-300" />
            </span>
          </a>
        </div>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gold line reveal */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-white to-gray-400 transition-all duration-500" />
    </div>
  );
}

function ProjectsCarousel({
  projects,
  visible,
}: {
  projects: typeof PROJECTS;
  visible: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth, scrollWidth, scrollLeft } = scrollRef.current;
      const scrollAmount = direction === "left" ? -350 : 350;
      
      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction === "left" && scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    if (!visible || isHovered) return;
    const interval = setInterval(() => {
      scroll("right");
    }, 3000);
    return () => clearInterval(interval);
  }, [visible, isHovered, scroll]);

  return (
    <div
      className={`relative transition-all duration-700 w-full ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Buttons - Hidden on touch devices */}
      <button
        onClick={() => scroll("left")}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 items-center justify-center text-white backdrop-blur-md transition-all duration-300 group"
      >
        <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 items-center justify-center text-white backdrop-blur-md transition-all duration-300 group"
      >
        <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 sm:px-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="w-[85vw] sm:w-[320px] lg:w-[350px] flex-shrink-0 snap-center h-full"
          >
            <TiltCard project={p} index={i} visible={visible} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.05 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      <div className="gold-line absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4 block">
            What I&apos;ve built
          </span>
          <h2 className="text-5xl md:text-6xl font-black gold-text">
            Featured Work
          </h2>
        </div>
      </div>
        
      {/* Carousel replaces both Mobile & Desktop views */}
      <div className="w-full">
        <ProjectsCarousel projects={PROJECTS} visible={vis} />
      </div>

      <div className="gold-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
