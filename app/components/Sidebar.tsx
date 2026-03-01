"use client";

import { HiX } from "react-icons/hi";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-60 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-zinc-950 border-l border-yellow-600/20 z-70 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-bold bg-linear-to-r from-white to-yellow-600 bg-clip-text text-transparent italic">
              JB.
            </span>
            <button
              onClick={onClose}
              className="text-white hover:text-yellow-500 transition-colors cursor-pointer"
            >
              <HiX className="text-3xl" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="text-lg font-medium text-gray-300 hover:text-yellow-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-yellow-600/10 text-center">
            <p className="text-sm text-gray-500">© 2026 Joanna Bassey</p>
          </div>
        </div>
      </aside>
    </>
  );
}
