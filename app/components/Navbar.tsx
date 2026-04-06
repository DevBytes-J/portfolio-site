"use client";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const NAV_LINKS = [
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps { onMenuClick: () => void; }

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "py-3 bg-black/70 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-black gold-text italic">&lt;/&gt;</a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href}
              onClick={() => setActive(link.name)}
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                active === link.name ? "text-white" : "text-gray-500 hover:text-gray-200"
              }`}>
              {link.name}
            </a>
          ))}
        </div>

        <button onClick={onMenuClick} className="md:hidden text-gray-400 hover:text-white transition-colors">
          <HiMenuAlt3 className="text-2xl" />
        </button>
      </div>
    </nav>
  );
}
