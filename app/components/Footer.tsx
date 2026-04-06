"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black gold-text italic">&lt;/&gt;</span>
          <span className="text-gray-600 text-sm">© {new Date().getFullYear()} Joanna Bassey</span>
        </div>

        <p className="text-gray-700 text-xs tracking-widest uppercase">Designed & Built with passion</p>

        <div className="flex gap-4">
          {[
            { icon: FaGithub, href: "https://github.com/DevBytes-J" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/joanna-bassey-554004338" },
            { icon: FaXTwitter, href: "https://x.com/Bassey_Joanna" },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors duration-300">
              <Icon className="text-lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
