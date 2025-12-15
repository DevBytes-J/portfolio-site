'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/DevBytes-J', clickable: true },
    { icon: FaLinkedin, label: 'LinkedIn', href: '#', clickable: false },
    { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://x.com/Bassey_Joanna', clickable: true }
  ];

  return (
    <footer className="border-t border-yellow-600/30 bg-black py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright - Left Side */}
          <div>
            <p className="text-gray-500 text-sm">
              © {currentYear} Joanna Bassey. All rights reserved.
            </p>
          </div>

          {/* Social Media Links - Right Side */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              
              if (social.clickable) {
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-gray-700 bg-zinc-900/50 flex items-center justify-center text-gray-400 hover:text-yellow-600 hover:border-yellow-600 transform hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              } else {
                return (
                  <div
                    key={index}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-gray-700 bg-zinc-900/50 flex items-center justify-center text-gray-600 cursor-not-allowed opacity-50"
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
