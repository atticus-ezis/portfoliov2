import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(195, 100%, 60%), transparent 70%)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(280, 100%, 70%), transparent 70%)",
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-1/3 w-[550px] h-[550px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(210, 100%, 65%), transparent 70%)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(at 0% 0%, hsla(195, 100%, 60%, 0.3) 0px, transparent 50%),
            radial-gradient(at 100% 0%, hsla(280, 100%, 70%, 0.3) 0px, transparent 50%),
            radial-gradient(at 100% 100%, hsla(210, 100%, 65%, 0.3) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(195, 100%, 60%, 0.3) 0px, transparent 50%)
          `,
        }}
      />

      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(195, 100%, 60%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(195, 100%, 60%) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
