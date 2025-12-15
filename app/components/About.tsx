import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-yellow-600 bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>I&apos;m a passionate frontend developer dedicated to crafting exceptional digital experiences that blend aesthetics with functionality. With over 1 year of experience, I specialize in building responsive, user-focused interfaces that not only look stunning but perform flawlessly.</p>
              <p>My approach combines modern design principles with cutting-edge technologies to deliver solutions that exceed expectations. I believe in the power of clean code, smooth animations, and intuitive user experiences to create products that users love.</p>
              <p>When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers in the community.</p>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-yellow-600/30">
              <Image src="/my-profile.png" alt="Joanna Bassey" className="w-full h-auto object-cover" width={500} height={500} />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-yellow-600/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
