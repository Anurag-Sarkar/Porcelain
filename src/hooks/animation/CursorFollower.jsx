import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const moveCircle = (e) => {
      const { clientX, clientY } = e;
      // smooth follow using transform instead of top/left
      circle.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    window.addEventListener("mousemove", moveCircle);
    return () => window.removeEventListener("mousemove", moveCircle);
  }, []);

  return (
    <div
      ref={circleRef}
      className="hidden lg:block fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999]
                 bg-white mix-blend-difference translate-x-[-50%] translate-y-[-50%]
                 transition-transform duration-500 ease-out"
    />
  );
};

export default CursorFollower;