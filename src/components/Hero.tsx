import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollY } from "@/hooks/use-scroll";

const Hero = () => {
  const scrollY = useScrollY();
  const parallaxOffset = scrollY * 0.5;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background waves with parallax */}
      <div 
        className="absolute inset-0 overflow-hidden opacity-30"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <svg className="absolute bottom-0 left-0 w-full h-auto animate-float" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z"
            fill="url(#gradient1)"
            opacity="0.5"
          />
          <path
            d="M0,250 Q300,150 600,250 T1200,250 L1200,400 L0,400 Z"
            fill="url(#gradient2)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "hsl(195, 100%, 60%)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "hsl(280, 100%, 70%)", stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "hsl(280, 100%, 70%)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "hsl(195, 100%, 60%)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Avatar */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(59,195,255,0.5)] hover-glow"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl md:text-8xl font-bold text-gradient">AE</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex gap-4 justify-center md:justify-start mb-4">
              <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                <a href="https://github.com/atticusezis" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-primary">
                <a href="https://linkedin.com/in/atticusezis" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Atticus Ezis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Backend Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Junior backend developer focused on Django REST Framework. Built accounting software for enterprise clients, 
              designing payment systems and implementing robust backend solutions with comprehensive testing.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
              <a href="mailto:atticus.ezis@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                atticus.ezis@gmail.com
              </a>
              <a href="tel:3035329126" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (303) 532-9126
              </a>
              <a href="https://atticusezis.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                atticusezis.com
              </a>
            </div>

            <motion.div 
              className="mt-8 flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <a href="#experience">View Experience</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
