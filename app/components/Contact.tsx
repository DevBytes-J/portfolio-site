"use client";
import { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mzznwwnq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) { setStatus("success"); setFormData({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass = "w-full bg-transparent border-b border-white/10 focus:border-white/25 py-3 text-white placeholder-gray-600 outline-none transition-colors duration-300 text-sm";

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050505 0%, #0a0a0a 100%)" }}>

      <div className="gold-line absolute top-0 left-0 right-0" />

      {/* Decorative large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-black text-white/[0.015] leading-none">CONTACT</span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4 block">Get in touch</span>
          <h2 className="text-5xl md:text-6xl font-black gold-text mb-4">Let&apos;s Build Together</h2>
          <p className="text-gray-500 max-w-md mx-auto">Have a project in mind? I&apos;d love to hear about it.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: info */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-gray-400 leading-relaxed mb-10">
              I&apos;m currently available for freelance work and full-time opportunities.
              If you have a project that needs a skilled frontend developer, let&apos;s talk.
            </p>

            <div className="space-y-4 mb-10">
              <a href="mailto:joannabassey@example.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white/20 flex items-center justify-center transition-colors duration-300">
                  <FaEnvelope className="text-sm" />
                </div>
                <span className="text-sm">joannabassey@example.com</span>
              </a>
            </div>

            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: "https://github.com/DevBytes-J", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/joanna-bassey-554004338", label: "LinkedIn" },
                { icon: FaXTwitter, href: "https://x.com/Bassey_Joanna", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-500 hover:text-white transition-all duration-300">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit}
            className={`lg:col-span-3 space-y-8 transition-all duration-700 delay-300 ${vis ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-600 block mb-2">Name</label>
                <input type="text" name="name" value={formData.name} required placeholder="Your name"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass} />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-600 block mb-2">Email</label>
                <input type="email" name="email" value={formData.email} required placeholder="your@email.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass} />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-widest uppercase text-gray-600 block mb-2">Message</label>
              <textarea rows={5} name="message" value={formData.message} required placeholder="Tell me about your project..."
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`} />
            </div>

            <div className="flex items-center gap-6">
              <button type="submit" disabled={status === "sending"}
                className="magnetic group relative px-10 py-4 rounded-full font-semibold text-black overflow-hidden disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #e0e0e0, #ffffff)" }}>
                <span className="relative z-10">
                  {status === "sending" ? "Sending..." : "Send Message"}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </button>

              {status === "success" && <p className="text-green-400 text-sm">Message sent ✓</p>}
              {status === "error" && <p className="text-red-400 text-sm">Failed. Try again.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
