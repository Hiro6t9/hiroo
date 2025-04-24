
import React from "react";

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Minecraft Dev",
      skills: ["Skript", "Java", "Plugin Development", "Server Management", "Mod Creation"],
      color: "purple"
    },
    {
      name: "Web Dev",
      skills: ["Tailwind CSS", "React", "Firebase", "Node.js", "TypeScript"],
      color: "cyan"
    },
    {
      name: "Hosting Stack",
      skills: ["Pterodactyl", "Linux", "VPS Management", "Docker", "CloudFlare"],
      color: "blue"
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-black/50 relative">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center mb-4 text-white text-glow">
          Skills
        </h2>
        
        <div className="h-1 w-20 bg-neon-cyan mx-auto mb-12 animate-pulse-glow rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={150 * index}
              className={`glass-card p-6 rounded-xl border ${
                category.color === "purple" ? "border-neon-purple/20 border-glow" : 
                category.color === "cyan" ? "border-neon-cyan/20 border-glow-cyan" : 
                "border-neon-blue/20 border-glow-blue"
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 ${
                category.color === "purple" ? "text-neon-purple text-glow" : 
                category.color === "cyan" ? "text-neon-cyan text-glow-cyan" : 
                "text-neon-blue text-glow-blue"
              }`}>
                {category.name}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${
                      category.color === "purple" ? "bg-neon-purple" : 
                      category.color === "cyan" ? "bg-neon-cyan" : 
                      "bg-neon-blue"
                    }`}></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
