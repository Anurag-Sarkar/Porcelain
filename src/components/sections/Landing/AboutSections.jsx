import React from 'react'
import TextFillAutoLines from '../../../hooks/animation/TextFillAutoLines'

const AboutSections = () => {
    return (
        <section className='px-4 md:px-14 mt-25 md:mt-30'>
            <p className='font-medium uppercase w-3/4 sm:w-80 md:w-80 mb-12 md:mb-20 text-sm md:text-base leading-relaxed'>
                Bringing global dermatology
                expertise and Parisian elegance
                to your skin and hair care journey
            </p>
            <TextFillAutoLines
                className="font-heading text-3xl sm:text-4xl md:text-[4.1rem] leading-tight sm:leading-[3.5rem] md:leading-[5.2rem]"
                segment={200}
                pin={false}
                fillColor="#111827"
                baseColor="#d1d5db"
            >
                At <span className="highlight" style={{ ["--hl"]: "#E4C26A" }}>Porcelain</span>, we combine dermatology and artistry to create subtle, natural, lasting results delivered with global expertise and personal care.
            </TextFillAutoLines>
            <button className='bg-accent-blue text-white px-8 md:px-15 py-2.5 md:py-3 text-base md:text-xl rounded-md mt-12 md:mt-20 w-full sm:w-auto'>
                Experience Now
            </button>
        </section>
    )
}

export default AboutSections