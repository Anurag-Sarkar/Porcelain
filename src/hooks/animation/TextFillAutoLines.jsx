import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);


const TextFillAutoLines = ({
  children,
  fillColor = "#111827", // filled color
  baseColor = "#d1d5db", // unfilled color
  direction = "horizontal",
  segment = 420,
  pin = true,
  className = "",
  lineClassName = "",
}) => {
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const split = new SplitType(el, { types: "lines", lineClass: "fill-line" });

    // initialize line styles
    split.lines?.forEach((line) => {
      const l = line;
      l.style.setProperty("--p", "0%");
      l.style.setProperty("--fill", fillColor);
      l.style.setProperty("--base", baseColor);
      l.style.setProperty("--angle", direction === "horizontal" ? "90deg" : "0deg");
      l.style.backgroundImage =
        "linear-gradient(var(--angle), var(--fill) 0 var(--p), var(--base) var(--p) 100%)";
      (l.style).WebkitBackgroundClip = "text";
      l.style.backgroundClip = "text";
      l.style.color = "transparent";
    });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: pin ? `+=${segment * (split.lines?.length || 1)}` : "bottom 20%",
        scrub: true,
        pin,
        pinSpacing: pin,
        anticipatePin: 1,
      },
    });

    split.lines?.forEach((line, i) => {
      tl.to(line, { duration: 1, "--p": "100%" }, i);
    });

    // re-split on resize
    const ro = new ResizeObserver(() => {
      const progress = tl.progress();
      tl.scrollTrigger?.kill();
      tl.kill();
      split.revert();

      const newSplit = new SplitType(el, { types: "lines", lineClass: "fill-line" });
      newSplit.lines?.forEach((l) => {
        const lineEl = l;
        lineEl.style.setProperty("--p", "0%");
        lineEl.style.setProperty("--fill", fillColor);
        lineEl.style.setProperty("--base", baseColor);
        lineEl.style.setProperty("--angle", direction === "horizontal" ? "90deg" : "0deg");
        lineEl.style.backgroundImage =
          "linear-gradient(var(--angle), var(--fill) 0 var(--p), var(--base) var(--p) 100%)";
        (lineEl.style).WebkitBackgroundClip = "text";
        lineEl.style.backgroundClip = "text";
        lineEl.style.color = "transparent";
      });

      const tl2 = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: pin ? `+=${segment * (newSplit.lines?.length || 1)}` : "bottom 50%",
          scrub: true,
          pin,
          pinSpacing: pin,
          anticipatePin: 1,
        },
      });

      newSplit.lines?.forEach((line, i) => tl2.to(line, { duration: 1, "--p": "100%" }, i));
      tl2.progress(progress);
    });
    ro.observe(el);

    return () => {
      ro.disconnect();
      split.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [fillColor, baseColor, direction, segment, pin]);

  return (
    <div className={className}>
      <div ref={wrapRef} className={lineClassName}>
        {children}
      </div>

      <style>{`
        .highlight {
          background: none !important;
          -webkit-background-clip: initial !important;
          background-clip: initial !important;
          color: var(--hl, #d4af37) !important; /* gold */
          -webkit-text-fill-color: var(--hl, #d4af37) !important;
          mix-blend-mode: normal;
        }
      `}</style>
    </div>
  );
};

export default TextFillAutoLines;