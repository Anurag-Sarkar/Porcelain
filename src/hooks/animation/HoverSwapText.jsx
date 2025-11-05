// HoverSwapText.jsx
import React, { useState } from "react";

const HoverSwapText = ({
  text,
  className = "",
  distance = "1em",
  dxStep = "-0.06em",
  staggerMs = 25,
  durationMs = 400,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const letters = Array.from(text); // keeps emojis/ligatures safe

  return (
    <span
      className={`relative inline-block cursor-pointer select-none ${className}`}
      style={{
        // CSS custom props for easy tuning
        ["--distance"]: distance,
        ["--dx-step"]: dxStep,
        ["--stagger"]: `${staggerMs}ms`,
        ["--duration"]: `${durationMs}ms`,
        ["--ease"]: "cubic-bezier(.2,.7,0,1)",
        lineHeight: 1, // keeps mask tight
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mask to hide vertical motion */}
      <span className="relative inline-block overflow-hidden align-baseline">
        {/* TOP copy (visible initially) */}
        <span className="top-copy block">
          {letters.map((ch, i) => (
            <span
              key={`t-${i}`}
              className="letter inline-block will-change-transform"
              style={{
                ["--i"]: i,
                transition: "transform var(--duration) var(--ease)",
                transitionDelay: `calc(var(--i) * var(--stagger))`,
                transform: isHovered
                  ? `translate(calc(var(--dx-step) * var(--i)), calc(-1 * var(--distance)))`
                  : `translate(0, 0)`,
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </span>

        {/* BOTTOM copy (revealed on hover) — positioned exactly on top */}
        <span
          className="bottom-copy absolute inset-0"
          aria-hidden="true"
          style={{ pointerEvents: "none" }}
        >
          {letters.map((ch, i) => (
            <span
              key={`b-${i}`}
              className="letter inline-block will-change-transform"
              style={{
                ["--i"]: i,
                transition: "transform var(--duration) var(--ease)",
                transitionDelay: `calc(var(--i) * var(--stagger))`,
                transform: isHovered
                  ? `translate(calc(var(--dx-step) * var(--i)), 0)`
                  : `translate(calc(var(--dx-step) * var(--i)), var(--distance))`,
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
};

export default HoverSwapText;