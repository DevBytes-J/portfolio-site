"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-linear-to-br from-yellow-600/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-tl from-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-linear-to-r from-transparent via-yellow-600/20 to-transparent animate-pulse"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4">
            Hi, I&apos;m
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-linear-to-r from-white via-yellow-100 to-yellow-600 bg-clip-text text-transparent">
            Joanna Bassey
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12">
            A Full-Time Frontend Developer
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-linear-to-r from-yellow-600 to-yellow-500 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-600/50 hover:scale-105 border-none outline-none cursor-pointer"
          >
            <span className="relative z-10">View Projects</span>
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-4 border-2 border-yellow-600 text-yellow-600 font-semibold rounded-full transition-all duration-300 hover:bg-yellow-600 hover:text-black hover:scale-105 outline-none cursor-pointer"
          >
            Let&apos;s Work Together
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-yellow-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
