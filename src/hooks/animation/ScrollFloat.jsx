import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    if (typeof children === 'string') {
      const words = children.split(' ');
      return words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, charIndex) => (
            <span className="char" key={`${wordIndex}-${charIndex}`}>
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && <span className="char">&nbsp;</span>}
        </span>
      ));
    }

    // If children is JSX, extract text content and create chars with styling
    const extractTextAndCreateChars = (element) => {
      if (typeof element === 'string') {
        const words = element.split(' ');
        return words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, charIndex) => (
              <span className="char" key={`${wordIndex}-${charIndex}`}>
                {char}
              </span>
            ))}
            {wordIndex < words.length - 1 && <span className="char">&nbsp;</span>}
          </span>
        ));
      }

      if (element && element.props && element.props.children) {
        const { children: childrenProp, className } = element.props;

        if (typeof childrenProp === 'string') {
          const words = childrenProp.split(' ');
          return words.map((word, wordIndex) => (
            <span key={`word-${wordIndex}`} className="word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {word.split('').map((char, charIndex) => (
                <span className={`char ${className || ''}`} key={`${wordIndex}-${charIndex}`}>
                  {char}
                </span>
              ))}
              {wordIndex < words.length - 1 && <span className="char">&nbsp;</span>}
            </span>
          ));
        }

        // Handle mixed content (text + spans)
        if (Array.isArray(childrenProp)) {
          let wordIndex = 0;
          return childrenProp.flatMap((child) => {
            if (typeof child === 'string') {
              const words = child.split(' ');
              return words.map((word, idx) => (
                <span key={`word-${wordIndex++}`} className="word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  {word.split('').map((char, charIndex) => (
                    <span className="char" key={`${wordIndex}-${charIndex}`}>
                      {char}
                    </span>
                  ))}
                  {idx < words.length - 1 && <span className="char">&nbsp;</span>}
                </span>
              ));
            }

            if (child && child.props && child.props.children) {
              const childClassName = child.props.className || '';
              const words = child.props.children.split(' ');
              return words.map((word, idx) => (
                <span key={`word-${wordIndex++}`} className="word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  {word.split('').map((char, charIndex) => (
                    <span className={`char ${childClassName}`} key={`${wordIndex}-${charIndex}`}>
                      {char}
                    </span>
                  ))}
                  {idx < words.length - 1 && <span className="char">&nbsp;</span>}
                </span>
              ));
            }

            return [];
          });
        }
      }

      return [];
    };

    return extractTextAndCreateChars(children);
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll('.char');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
