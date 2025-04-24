
import React from "react";

const AboutSection: React.FC = () => {
  const tags = [
    "Minecraft Developer", 
    "Hosting Founder", 
    "UI Designer", 
    "Full Stack Dev",
    "Cloud Expert"
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center mb-4 text-white text-glow">
          About Me
        </h2>
        
        <div className="h-1 w-20 bg-neon-blue mx-auto mb-12 animate-pulse-glow rounded-full"></div>
        
        <div data-aos="fade-up" data-aos-delay="200" className="glass-card max-w-4xl mx-auto p-6 md:p-8 rounded-xl border border-neon-purple/20 border-glow">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 relative rounded-full border-2 border-neon-purple border-glow overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 to-neon-cyan/30"></div>
              <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-white">Hiro <span className="text-neon-cyan">.</span></h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate developer with expertise in Minecraft plugin development, web design, and hosting solutions. With over 5 years of experience, I specialize in creating innovative digital experiences that combine functionality with striking visuals. My mission is to build robust, scalable solutions that help businesses and creative projects thrive in the digital space.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded-full text-sm border ${index % 2 === 0 ? 'border-neon-purple text-neon-purple border-glow' : 'border-neon-cyan text-neon-cyan border-glow-cyan'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
