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
} from "react-icons/fa";
import { FaHouseChimney, FaXTwitter } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";

const PROJECTS = [
  {
    id: 1,
    title: "Trackyt",
    subtitle: "Expense Tracker",
    description: "Track your expenses and income with ease.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    icon: GiReceiveMoney,
    image: "/trackyt.png",
    link: "https://trackyt-f.onrender.com/",
  },
  {
    id: 2,
    title: "PostSyncer",
    subtitle: "AI Video Creator",
    description:
      "Manage social accounts, schedule content, and create AI videos in minutes.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
  {
    id: 5,
    title: "E-Commerce",
    subtitle: "Product Page",
    description: "Frontend Mentor challenge with full cart functionality.",
    tech: ["React", "CSS", "JavaScript"],
    icon: FaShoppingCart,
    image: "/ecommerce.png",
    link: "https://frontend-mentor-e-commerce-product-three.vercel.app/",
  },
  {
    id: 6,
    title: "Audiophile",
    subtitle: "E-Commerce",
    description: "Multi-page e-commerce website for premium audio equipment.",
    tech: ["Next.js", "Tailwind CSS"],
    icon: FaHeadphones,
    image: "/audiophile.png",
    link: "https://audiophile-ecommerce-website-527b.vercel.app/",
  },
  {
    id: 7,
    title: "Space Tourism",
    subtitle: "Interactive Site",
    description: "Interactive space tourism website with stunning visuals.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: FaRocket,
    image: "/space.png",
    link: "https://space-tourism-website-puce-chi.vercel.app/",
  },
  {
    id: 8,
    title: "Profile Card",
    subtitle: "UI Component",
    description: "Clean and modern profile card component.",
    tech: ["HTML", "CSS"],
    icon: FaUser,
    image: "/profile.png",
    link: "https://profile-card-ui-five.vercel.app/",
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
      className={`tilt-card group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-700 cursor-pointer ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 80}ms`, background: "#0a0a0a" }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
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
      <div className="tilt-card-inner p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">
              {project.subtitle}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xl font-bold text-white hover:text-gray-400 transition-colors duration-300"
            >
              {project.title}
            </a>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs bg-white/5 text-gray-500 rounded border border-white/8"
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

function MobileCarousel({
  projects,
  visible,
}: {
  projects: typeof PROJECTS;
  visible: boolean;
}) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  return (
    <div
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="overflow-hidden"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((p, i) => (
            <div key={p.id} className="w-full flex-shrink-0">
              <TiltCard project={p} index={i} visible={visible} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${i === index ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/20"}`}
          />
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
    <section id="projects" ref={ref} className="py-32 px-6 relative">
      <div className="gold-line absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto">
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

        {/* Mobile: swipeable carousel */}
        <div className="sm:hidden">
          <MobileCarousel projects={PROJECTS} visible={vis} />
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.id} project={p} index={i} visible={vis} />
          ))}
        </div>
      </div>

      <div className="gold-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
