import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzznwwnq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-black to-zinc-950"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-white to-yellow-600 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            create something amazing together.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900/50 border border-yellow-600/20 rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:border-yellow-600 focus:shadow-lg focus:shadow-yellow-600/25 focus:outline-none cursor-text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900/50 border border-yellow-600/20 rounded-lg text-white placeholder-gray-500 transition-all duration-300 focus:border-yellow-600 focus:shadow-lg focus:shadow-yellow-600/25 focus:outline-none cursor-text"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900/50 border border-yellow-600/20 rounded-lg text-white placeholder-gray-500 transition-all duration-300 resize-none focus:border-yellow-600 focus:shadow-lg focus:shadow-yellow-600/25 focus:outline-none cursor-text"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-4 bg-linear-to-r from-yellow-600 to-yellow-500 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-600/50 hover:scale-105 cursor-pointer ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <p className="mt-4 text-green-500 font-medium">
              Message sent successfully! I&apos;ll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-500 font-medium">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
