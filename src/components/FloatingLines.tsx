import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface FloatingLinesProps {
  lineCount?: number;
  lineDistance?: number; // kept for API compatibility
  animationSpeed?: number;
  bendStrength?: number; // kept for API compatibility
  className?: string;
}

// CSS-driven recreation of the Reactbits Floating Lines background.
// This avoids three.js / react-three-fiber to keep the bundle light and stable.
export const FloatingLines = ({
  lineCount = 12,
  lineDistance = 4,
  animationSpeed = 1,
  className,
}: FloatingLinesProps) => {
  const lines = Array.from({ length: lineCount });

  const baseDuration = 22 / (animationSpeed || 1);

  return (
    <div
      aria-hidden="true"
      className={cn("floating-lines-wrapper", className)}
    >
      {lines.map((_, index) => {
        const offset = (index - lineCount / 2) * lineDistance * 3;
        const opacity = 0.35 + (index / lineCount) * 0.4;

        return (
          <div
            key={index}
            className="floating-line"
            style={{
              "--line-index": index,
              "--line-offset": `${offset}%`,
              "--line-opacity": opacity,
              "--line-duration": `${baseDuration}s`,
            } as CSSProperties}
          />
        );
      })}
    </div>
  );
};
