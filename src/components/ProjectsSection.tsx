
import React from "react";
import { ArrowRight } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const project = {
    title: "HEXRA.CLOUD",
    description: "Advanced cloud hosting platform for Minecraft servers with custom control panel and instant deployment.",
    tags: ["Hosting", "Minecraft", "SaaS"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    link: "#"
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center mb-4 text-white text-glow">
          Projects
        </h2>
        
        <div className="h-1 w-20 bg-neon-purple mx-auto mb-12 animate-pulse-glow rounded-full"></div>
        
        <div className="max-w-2xl mx-auto">
          <div 
            data-aos="fade-up"
            className="glass-card rounded-xl overflow-hidden border border-neon-purple/30 group hover:border-neon-purple/60 transition-all duration-300 border-glow"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-purple/30 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-purple transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 rounded-full text-xs border border-neon-cyan/40 text-neon-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link}
                className="inline-flex items-center text-sm gap-2 text-white hover:text-neon-purple transition-colors duration-300"
              >
                View Project
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
