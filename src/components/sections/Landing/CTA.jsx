
import React from 'react'
import ScrollFloat from '../../../hooks/animation/scrollFloat'

const CTA = () => {
    return (
        <section className='w-full h-[40rem] px-4 md:px-14 text-center md:min-h-screen py-16 md:py-0 md:h-screen flex flex-col justify-center items-center'>
            <ScrollFloat
                animationDuration={2}
                ease='back.inOut(2)'
                scrollStart='center bottom'
                scrollEnd='bottom bottom-=35%'
                stagger={0.03}
                containerClassName='text-3xl sm:text-4xl md:text-5xl lg:text-[7rem] font-heading'
            >
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[7rem] font-heading leading-tight md:leading-normal break-words'>
                    Because <span className="text-gold">confidence</span> looks good on you.
                </h1>
            </ScrollFloat>
            <button className='bg-accent-blue mt-12 md:mt-20 text-white py-3 px-8 md:px-10 text-lg md:text-xl rounded hover:bg-accent-blue/90 transition-colors'>
                Book your Appointment
            </button>
        </section>
    )
}

export default CTA