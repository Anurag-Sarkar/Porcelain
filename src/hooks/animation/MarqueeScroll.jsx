// MarqueeScroll.jsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeScroll = ({
  text = "YOUR • LOOPING • TEXT",
  separator = " • ",
  baseDuration = 40,
  className = "",
}) => {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (!wrapRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const wrapEl = wrapRef.current;
      const trackEl = trackRef.current;

      // Ensure enough content to overflow for a seamless loop
      const buildContent = () => {
        trackEl.innerHTML = ""; // reset
        const unit = document.createElement("span");
        unit.className = "inline-block pr-8 font-semibold";
        unit.textContent = text + separator;

        // Duplicate until width > 2x container (gives headroom)
        const temp = document.createElement("div");
        temp.style.position = "absolute";
        temp.style.visibility = "hidden";
        temp.style.whiteSpace = "nowrap";
        document.body.appendChild(temp);

        let total = 0;
        const target = (wrapEl.clientWidth || 1) * 2 + 200; // buffer
        while (total < target) {
          const clone = unit.cloneNode(true);
          temp.appendChild(clone);
          total = temp.scrollWidth;
        }

        // Move temp nodes into track
        Array.from(temp.childNodes).forEach((n) => trackEl.appendChild(n));
        document.body.removeChild(temp);

        return trackEl.scrollWidth;
      };

      let totalWidth = buildContent();

      // Base infinite tween that we’ll speed up/slow down via timeScale
      const tween = gsap.to(trackEl, {
        x: `-=${totalWidth}`,
        ease: "none",
        repeat: -1,
        duration: baseDuration,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const v = parseFloat(x);
            // wrap at totalWidth for seamless loop
            return ((v % -totalWidth));
          }),
        },
      });

      tween.timeScale(1);

      // React to scroll velocity: change direction + temporary speed boost
      const st = ScrollTrigger.create({
        onUpdate(self) {
          const v = self.getVelocity(); // px/s, + down, - up
          const dir = v >= 0 ? 1 : -1;
          const boost = gsap.utils.clamp(0, 3, Math.abs(v) / 800);

          gsap.to(tween, {
            timeScale: (1 + boost) * dir,
            duration: 0.15,
            overwrite: true,
            ease: "power1.out",
          });

          gsap.to(tween, {
            timeScale: 1 * dir,
            duration: 0.6,
            delay: 0.15,
            overwrite: false,
            ease: "power2.out",
          });
        },
      });

      // Rebuild on resize so the loop stays seamless
      const ro = new ResizeObserver(() => {
        const progress = tween.progress();
        tween.pause(0).kill();
        totalWidth = buildContent();

        const newTween = gsap.to(trackEl, {
          x: `-=${totalWidth}`,
          ease: "none",
          repeat: -1,
          duration: baseDuration,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const v = parseFloat(x);
              return ((v % -totalWidth));
            }),
          },
        });
        newTween.progress(progress); // keep relative position
      });
      ro.observe(wrapEl);

      return () => {
        ro.disconnect();
        st.kill();
        gsap.killTweensOf(trackEl);
      };
    }, wrapRef);

    return () => ctx.revert();
  }, [text, separator, baseDuration]);

  return (
    <div
      ref={wrapRef}
      className={`overflow-hidden whitespace-nowrap will-change-transform select-none ${className}`}
    >
      <div ref={trackRef} className="inline-block" />
    </div>
  );
};

export default MarqueeScroll;