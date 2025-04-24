
import React from "react";
import { Github, Mail, ExternalLink } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-black/50 relative">
      <div className="container mx-auto px-4">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center mb-4 text-white text-glow">
          Contact
        </h2>
        
        <div className="h-1 w-20 bg-neon-blue mx-auto mb-12 animate-pulse-glow rounded-full"></div>
        
        <div data-aos="fade-up" data-aos-delay="200" className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            Interested in working together? Feel free to reach out through any of these platforms.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-lighter border border-neon-purple text-white hover:bg-neon-purple/10 transition-all duration-300 border-glow"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            <a 
              href="mailto:hello@hiro.dev" 
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-lighter border border-neon-cyan text-white hover:bg-neon-cyan/10 transition-all duration-300 border-glow-cyan"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-dark-lighter border border-neon-blue text-white hover:bg-neon-blue/10 transition-all duration-300 border-glow-blue"
            >
              <ExternalLink size={20} />
              <span>Discord</span>
            </a>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-neon-purple/20 border-glow">
            <h3 className="text-xl font-bold mb-4 text-white">Get in Touch</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-3 bg-dark-lighter border border-neon-purple/30 rounded-lg focus:outline-none focus:border-neon-purple text-white"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 bg-dark-lighter border border-neon-purple/30 rounded-lg focus:outline-none focus:border-neon-purple text-white"
                  />
                </div>
              </div>
              
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4} 
                  className="w-full px-4 py-3 bg-dark-lighter border border-neon-purple/30 rounded-lg focus:outline-none focus:border-neon-purple text-white resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="inline-block w-full px-6 py-3 bg-neon-purple text-white font-medium rounded-lg border border-neon-purple hover:bg-transparent hover:text-neon-purple transition-all duration-300 border-glow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
