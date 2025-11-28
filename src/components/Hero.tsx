import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useScrollY } from "@/hooks/use-scroll";
import bgHero from "@/assets/bg-hero.png";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  const scrollY = useScrollY();
  const parallaxOffset = scrollY * 0.5;

  return (
    <section id="home" className="h-auto lg:h-[46vw] flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Animated background image with parallax and pan */}
      {/* <motion.div 
        className="absolute inset-0 opacity-40"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img 
          src={bgHero} 
          alt="Background" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Avatar with decorative background */}
          <motion.div 
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10">
              {/* Large purple gradient circle */}
              <motion.div 
                className="absolute -left-20 -top-20 w-72 h-72 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-30"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Smaller accent circle */}
              <motion.div 
                className="absolute -right-8 -top-12 w-32 h-32 rounded-full opacity-40"
                style={{
                  background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Decorative squiggly line */}
              <motion.svg 
                className="absolute -left-16 top-1/2 w-24 h-24 opacity-20"
                viewBox="0 0 100 100"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <path
                  d="M20,50 Q30,30 40,50 T60,50 Q70,70 80,50"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-primary"
                />
              </motion.svg>
              
              {/* Decorative circles pattern */}
              <motion.svg 
                className="absolute -right-12 bottom-4 w-28 h-28 opacity-20"
                viewBox="0 0 100 100"
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <circle cx="50" cy="20" r="4" fill="currentColor" className="text-primary" />
                <circle cx="70" cy="35" r="4" fill="currentColor" className="text-primary" />
                <circle cx="75" cy="60" r="4" fill="currentColor" className="text-primary" />
                <circle cx="55" cy="75" r="4" fill="currentColor" className="text-primary" />
                <circle cx="30" cy="70" r="4" fill="currentColor" className="text-primary" />
                <circle cx="25" cy="45" r="4" fill="currentColor" className="text-primary" />
              </motion.svg>
              
              {/* Bottom gradient blob */}
              <motion.div 
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-20"
                style={{
                  background: "linear-gradient(225deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -15, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Profile image */}
            <motion.div 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_50px_rgba(59,195,255,0.5)] hover-glow z-10"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={profileImage} 
                alt="Atticus Ezis" 
                className="w-full h-full object-cover"
              />
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
            {/* <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Junior backend developer focused on Django REST Framework. Built accounting software for enterprise clients, 
              designing payment systems and implementing robust backend solutions with comprehensive testing.
            </p> */}

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
