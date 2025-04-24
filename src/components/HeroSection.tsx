
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div data-aos="fade-up" data-aos-delay="100" className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white animate-glow">
            <span>HI, I'M</span>{" "}
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text">HIRO</span>
          </h1>
          
          <div className="h-1 w-40 bg-neon-purple mx-auto mb-6 animate-pulse-glow rounded-full"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-float">
            Creative Developer & Hosting Enthusiast
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neon-purple border border-neon-purple text-white font-medium hover:bg-transparent hover:border-neon-purple hover:text-neon-purple transition-all duration-300 border-glow"
            >
              View Work
              <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-neon-cyan text-white font-medium hover:bg-neon-cyan hover:text-white transition-all duration-300 border-glow-cyan"
            >
              Contact Me
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
