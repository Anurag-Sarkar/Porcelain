import React, { useEffect, useRef, useState } from 'react';
import TextAnimator from '../../Libs/TextAnimation.js';

const AnimatedText = ({
    text,
    className = '',
    parentClassName = '',
    animateOn = 'view',
    charDuration = 0.1,
    staticCharDelay = false,
    charDelayMultiplier,
    repeatCount = 2,
    repeatDelay = 0.05,
    completionDelay = 0.1,
    mainDuration = 1,
    mainEase = 'expo',
    ...props
}) => {
    const textRef = useRef(null);
    const animatorRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (textRef.current && !animatorRef.current) {
            try {
                animatorRef.current = new TextAnimator(textRef.current, {
                    charDuration,
                    staticCharDelay,
                    charDelayMultiplier,
                    repeatCount,
                    repeatDelay,
                    completionDelay,
                    mainDuration,
                    mainEase,
                });
            } catch (error) {
                console.error('Failed to initialize TextAnimator:', error);
            }
        }
    }, [charDuration, staticCharDelay, charDelayMultiplier, repeatCount, repeatDelay, completionDelay, mainDuration, mainEase]);

    useEffect(() => {
        if (animateOn !== 'view' && animateOn !== 'both') return;

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated && animatorRef.current) {
                    setIsVisible(true);
                    animatorRef.current.animate();
                    setHasAnimated(true);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -100px 0px',
            threshold: 0.8,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const currentRef = textRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [animateOn, hasAnimated]);

    useEffect(() => {
        if (isHovering && animatorRef.current && (animateOn === 'hover' || animateOn === 'both')) {
            setIsVisible(true);
            animatorRef.current.animate();
        }
    }, [isHovering, animateOn]);

    const hoverProps =
        animateOn === 'hover' || animateOn === 'both'
            ? {
                onMouseEnter: () => setIsHovering(true),
                onMouseLeave: () => setIsHovering(false),
            }
            : {};

    return (
        <span className={parentClassName} {...hoverProps} {...props}>
            <span
                ref={textRef}
                className={className}
                style={{ 
                    display: 'inline-block',
                    opacity: isVisible ? 1 : 0
                }}
            >
                {text}
            </span>
        </span>
    );
};

export default AnimatedText;