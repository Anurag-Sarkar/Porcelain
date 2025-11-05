import React from 'react'
import HoverSwapText from '../../hooks/animation/HoverSwapText'
import AnimatedText from '../../hooks/animation/AnimatedText'

const Footer = () => {
    return (
        <section className='overflow-hidden flex flex-col justify-end relative w-full  bg-accent-blue md:pb-0'>
            <div className='text-ivory py-8 md:py-14 font-heading flex flex-row flex-wrap gap-4 md:gap-6 justify-around items-center px-4 md:px-0'>
                {/* <p className='text-4xl'>Shop</p> */}
                <HoverSwapText text="SHOP" className="text-lg md:text-2xl lg:text-4xl" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
                <HoverSwapText text="ABOUT" className="text-lg md:text-2xl lg:text-4xl" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
                <HoverSwapText text="TREATMENT" className="text-lg md:text-2xl lg:text-4xl" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
                <HoverSwapText text="CONTACT" className="text-lg md:text-2xl lg:text-4xl" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
            </div>
            <div className='text-ivory text-sm md:text-[2vw] my-[2rem] md:my-0  md:mt-[8rem] md:self-end  text-medium  uppercase font-semibold font-body flex md:flex-row flex-col md:flex:row px-4 md:px-5 w-full gap-5 sm:gap-4 md:gap-6 justify-between items-center'>
                <div className='flex flex-col text-center md:text-left'>
                    <AnimatedText
                        text="+91 6268-440839"
                        animateOn="view"
                        charDuration={0.2}
                        staticCharDelay={true}
                    />
                    <AnimatedText
                        text="touch@porcelainskinclinic.com"
                        animateOn="view"
                        charDuration={0.2}
                        staticCharDelay={true}
                    />
                </div>
                <div onClick={window.open("https://www.instagram.com/porcelainskinclinic/")} className='text-center'>
                    <AnimatedText
                        text="INSTAGRAM"
                        animateOn="view"
                        charDuration={0.2}
                        staticCharDelay={true}
                    />
                </div>
                <div className='text-center md:text-right flex flex-col items-center md:items-end'>
                    <AnimatedText
                        text="E-7/ 578, Arera Colony"
                        animateOn="view"
                        charDuration={0.2}
                        staticCharDelay={true}
                    />
                    <AnimatedText
                        text="Bhopal Madhya Pradesh"
                        animateOn="view"
                        charDuration={0.2}
                        staticCharDelay={true}
                    />
                </div>
            </div>
            {/* <div className='w-full bottom-0 justify-between flex flex-col items-center text-white font-tertiary'>
            </div> */}
            <p className='font-tertiary pointer-events-none text-[52vw] md:translate-y-0 text-ivory  leading-[35vw] text-center'>
                PORCELAIN
            </p>
        </section>
    )
}

export default Footer