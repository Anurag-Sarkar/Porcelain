import MarqueeScroll from '../../../hooks/animation/MarqueeScroll'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const LandingSection = () => {
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    // Step 1: Split into words instead of raw characters first
    const words = el.textContent.trim().split(" ");
    el.innerHTML = words
      .map((word, index) => {
        // Step 2: Split each word into characters, same structure
        const chars = word
          .split("")
          .map((ch) => `<span class="reveal-letter inline-block overflow-hidden align-bottom"><span class="inner inline-block translate-y-full">${ch}</span></span>`)
          .join("");

        // Step 3: Wrap each word so it never breaks mid-word
        const wordHTML = `<span class='word inline-block whitespace-nowrap'>${chars}</span>`;

        // Step 4: Add a <br> after the word "your"
        // if (word.toLowerCase() === "your") return `${wordHTML}<br>`;
        return wordHTML;
      })
      .join(" ");

    // Step 5: Animate as before
    gsap.to(el.querySelectorAll(".inner"), {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.03,
      delay: 0.2,
    });
  }, []);
  return (
    <section className='mt-20 md:mt-50'>
      <div className='px-4 md:px-14 relative mb-12 md:mb-20'>
        <h1
          ref={headingRef}
          className="w-full mt-20 md:w-[80%] font-heading text-6xl md:text-[6rem] leading-tight sm:leading-[4rem] md:leading-[7rem] tracking-wide text-accent-blue"
        >
          Feel Confident in your skin Again
        </h1>
        <p className='font-body ml-auto text-right static md:absolute w-2/3 md:w-70 mt-10 md:mt-0 md:right-[5%] md:top-full md:-translate-y-[100%] text-base md:text-lg'>
        <span>
          World-class technology, proven products, and care that's personal.
        </span>
        </p>
      </div>
      <div className='relative'>
        <div className='w-screen'>
          <img className='w-full object-cover h-[30vh] md:h-auto' src="/images/girl-skin.png" alt="Confident woman with beautiful skin" />
        </div>
        <div className='absolute -translate-x-[50%] -translate-y-[50%] left-1/2 top-1/2 w-screen overflow-hidden'>
          <MarqueeScroll
            text="Confidence • Radiance • Precision • Artistry • Care • Transformation"
            separator=" • "
            baseDuration={200}
            className="tracking-wide whitespace-nowrap uppercase text-white text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-body font-bold"
          />
        </div>
      </div>
    </section>
  )
}

export default LandingSection