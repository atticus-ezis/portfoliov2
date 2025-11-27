import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const lines = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {lines.map((i) => (
          <motion.line
            key={i}
            x1="-100%"
            y1={`${(i * 100) / 12}%`}
            x2="200%"
            y2={`${(i * 100) / 12 + 15}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
              x: ["-10%", "10%"],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
      
      {/* Additional accent lines with secondary color */}
      <svg className="w-full h-full absolute inset-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradientSecondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {lines.slice(0, 6).map((i) => (
          <motion.line
            key={`secondary-${i}`}
            x1="-100%"
            y1={`${(i * 200) / 12}%`}
            x2="200%"
            y2={`${(i * 200) / 12 + 20}%`}
            stroke="url(#lineGradientSecondary)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.4, 0],
              x: ["10%", "-10%"],
            }}
            transition={{
              duration: 10 + i * 0.7,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedBackground;
