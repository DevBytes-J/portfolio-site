import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaShoppingCart,
  FaHeadphones,
  FaRocket,
  FaHashtag,
  FaUser,
} from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      id: 1,
      title: "PostSyncer - AI Video Creator",
      description:
        "PostSyncer helps you manage all your social accounts, schedule content, and create AI videos in minutes.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Pixel-Perfect Responsive Design",
      ],
      icon: FaHashtag,
      image: "/postsync.png",
      link: "https://postsyncc.vercel.app/",
    },
    {
      id: 2,
      title: "Tio - Feel the home.",
      description:
        "Explore homes where every room is designed with comfort and style in mind.",
      tech: [
        "NextJs",
        "Tailwind CSS",
        "Framer Motion",
        "Pixel-Perfect Responsive Design",
      ],
      icon: FaHouseChimney,
      image: "/tio.png",
      link: "https://tio-seven.vercel.app/",
    },
    {
      id: 3,
      title: "E-Commerce Product Page",
      description:
        "Frontend Mentor challenge - E-commerce product page with cart functionality",
      tech: ["React", "CSS", "JavaScript", "Responsive Design"],
      icon: FaShoppingCart,
      image: "/ecommerce.png",
      link: "https://frontend-mentor-e-commerce-product-three.vercel.app/",
    },
    {
      id: 4,
      title: "Audiophile E-Commerce",
      description:
        "Multi-page e-commerce website for audio equipment with modern design",
      tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
      icon: FaHeadphones,
      image: "/audiophile.png",
      link: "https://audiophile-ecommerce-website-527b.vercel.app/",
    },
    {
      id: 5,
      title: "Space Tourism Website",
      description:
        "Interactive space tourism website with stunning visuals and animations",
      tech: ["HTML", "CSS", "JavaScript", "Animations"],
      icon: FaRocket,
      image: "/space.png",
      link: "https://space-tourism-website-puce-chi.vercel.app/",
    },
    {
      id: 6,
      title: "Profile Card UI",
      description:
        "Clean and modern profile card component with responsive design",
      tech: ["HTML", "CSS", "UI Design", "Responsive Design"],
      icon: FaUser,
      image: "/profile.png",
      link: "https://profile-card-ui-five.vercel.app/",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, projects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="relative py-20 px-6 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-white to-yellow-600 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-yellow-500 mx-auto mb-16"></div>

        <div className="relative">
          <div
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Container */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <div key={project.id} className="w-full shrink-0">
                    <div className="relative group cursor-pointer h-[550px] overflow-hidden rounded-2xl border border-yellow-600/20">
                      {/* Project Image (Always Visible Initially) */}
                      <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 p-2 bg-gray-900/50">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                          priority={project.id === 1}
                        />
                        {/* Dark Overlay for contrast when content shows */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/80 transition-colors duration-500"></div>
                      </div>

                      {/* Black Background with Gold Accents (Visible on Hover) */}
                      <div className="w-full h-full relative opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {/* Geometric Shapes */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-600/30 rounded-full"></div>
                          <div className="absolute top-20 right-16 w-16 h-16 bg-yellow-600/20 transform rotate-45"></div>
                          <div className="absolute bottom-20 left-20 w-12 h-12 bg-yellow-600/30 rounded-full"></div>
                          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-yellow-600/20 transform rotate-12"></div>
                        </div>

                        {/* Main Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="text-8xl text-yellow-600 group-hover:scale-110 group-hover:text-yellow-500 transition-all duration-500" />
                        </div>

                        {/* Animated Particles */}
                        <div className="absolute inset-0 opacity-30">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 bg-yellow-600 rounded-full animate-pulse"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 2) * 40}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${2 + i * 0.3}s`,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Hover Overlay Content */}
                      <div className="absolute inset-0 flex flex-col justify-end py-8 px-8 md:px-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm md:text-base mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-yellow-600/30 border border-yellow-600/40 rounded-full text-yellow-400 text-xs md:text-sm font-medium backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Project Link */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 hover:underline font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300 cursor-pointer"
                        >
                          <FaExternalLinkAlt />
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute -left-4 md:-left-16 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-yellow-500 cursor-pointer z-20"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextProject}
            className="absolute -right-4 md:-right-16 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-yellow-500 cursor-pointer z-20"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-yellow-600 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
