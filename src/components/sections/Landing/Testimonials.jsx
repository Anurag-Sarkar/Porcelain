"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the heading in the center
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: headingRef.current,
        pinSpacing: false, // cards overlap heading
        anticipatePin: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gold/30 pb-12 md:pb-20 px-4 md:px-14 w-full">
      {/* Heading pinned (z-10 so text stays below cards visually) */}
      <h1
        ref={headingRef}
        className="pt-64 pb-40 md:pt-70 font-heading text-5xl sm:text-4xl md:text-5xl lg:text-[7rem] mx-auto w-full md:w-[90%] text-center text-deep-blue z-10 relative pointer-events-none leading-tight md:leading-normal"
      >
        Transformation That Goes Beyond Skin.
      </h1>

      {/* Cards wrapper higher z-index so they scroll OVER the h1 */}
      <div className="relative z-20">
        <div className="mt-24 md:mt-50 flex flex-col md:flex-row gap-8 md:gap-20 justify-center">
          <div className="w-full md:w-3/5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] p-8 md:p-15 rounded-[1rem] bg-[#f0e0c5]">
            <p className="text-3xl md:text-4xl mb-4 md:mb-5 font-heading">Wow Effect</p>
            <p className="text-base md:text-xl leading-relaxed">
              My experience at Porcelain Skin Clinic was exceptional! The
              customer service was top-notch, with friendly staff who made me
              feel valued. The clinic maintained impeccable sterilisation
              standards, ensuring a safe environment. The effective medicines
              provided immediate results, and the high standard of care from the
              doctors was evident throughout my visit. Highly recommend!
            </p>
            <p className="text-lg md:text-2xl mt-3">~ Osama</p>
          </div>
          <div className="w-full md:w-2/5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] p-6 md:p-10 rounded-[1rem] bg-[#f0e0c5]">
            <p className="text-3xl font-heading md:text-4xl mb-4 md:mb-5">Effective</p>
            <p className="text-base md:text-xl leading-relaxed">
              Excellent experience at Porcelain clinic! Dr. Mayank and Dr Nitya
              are knowledgeable and caring. The laser treatment effectively
              reduced my acne scars. Clean and welcoming facility. Highly
              recommend!
            </p>
            <p className="text-lg md:text-2xl mt-3">~ Dr Namrata Karma</p>
          </div>
        </div>

        <div className="mt-8 md:mt-20 flex flex-col md:flex-row gap-8 md:gap-20 justify-center">
          <div className="w-full md:w-1/2 shadow-[0_8px_24px_rgba(0,0,0,0.25)] p-8 md:p-15 rounded-[1rem] bg-[#f0e0c5]">
            <p className="text-3xl font-heading md:text-4xl mb-4 md:mb-5">Comforting</p>
            <p className="text-base md:text-xl leading-relaxed">
              My experience in porcelain Skin Aesthetics was so fantastic. Dr
              Mayank Bajpai and Dr Nitya Bajpai very kind and caring person. I'm
              very shy girl, she makes me feel comfortable. Good experience with
              laser hair reduction.
            </p>
            <p className="text-lg md:text-2xl mt-3">~ Shreyasha Gaur</p>
          </div>
          <div className="w-full md:w-1/2 shadow-[0_8px_24px_rgba(0,0,0,0.25)] p-6 md:p-10 rounded-[1rem] bg-[#f0e0c5]">
            <p className="text-3xl font-heading md:text-4xl mb-4 md:mb-5">Blown Away</p>
            <p className="text-base md:text-xl leading-relaxed">
              I visited Porcelain Skin Clinic for my treatment and was blown
              away by the experience. The clinic is beautifully designed, staff
              are warm and professional, and Dr. Mayank takes so much time to
              understand your skin. This is by far the best dermatology clinic
              in Bhopal for anyone looking for advanced yet gentle treatments.
            </p>
            <p className="text-lg md:text-2xl mt-3">~ Shubham Patel</p>
          </div>
        </div>

        <div className="mt-8 md:mt-20 flex flex-col md:flex-row gap-8 md:gap-20 justify-center">
          <div className="w-full md:w-2/5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] p-8 md:p-15 rounded-[1rem] bg-[#f0e0c5]">
            <p className="text-3xl font-heading md:text-4xl mb-4 md:mb-5">It Works</p>
            <p className="text-base md:text-xl leading-relaxed">
              I've noticed significant improvements: my hair feels thicker and
              healthier, flare-ups are under control, and my complexion has
              never looked clearer.
            </p>
            <p className="text-lg md:text-2xl mt-3">~ Saumya Doodoo</p>
          </div>
          <div className="w-full md:w-3/5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] p-6 md:p-10 rounded-[1rem] bg-[#f0e0c5]">
            <p className="text-3xl font-heading md:text-4xl mb-4 md:mb-5">Professional and Trained</p>
            <p className="text-base md:text-xl leading-relaxed">
              The dermatologist at the centre is highly qualified, with years of
              experience in both clinical and aesthetic dermatology. Professional
              yet empathetic, with clear treatment explanations and after-care
              guidance.
            </p>
            <p className="text-lg md:text-2xl mt-3">~ Khushvant Pathak</p>
          </div>
        </div>
      </div>

      <div className="h-[10vh] md:h-[20vh]" />
    </section>
  );
};

export default Testimonials;