import React from 'react'
import HoverSwapText from '../../hooks/animation/HoverSwapText'
import AnimatedText from '../../hooks/animation/AnimatedText'

const Footer = () => {
    return (
        <section className='overflow-hidden relative w-full h-full md:min-h-screen md:h-screen bg-accent-blue pb-20 md:pb-0'>
            <div className='text-ivory py-8 md:py-14 font-heading flex flex-row flex-wrap gap-4 md:gap-6 justify-around items-center px-4 md:px-0'>
                {/* <p className='text-4xl'>Shop</p> */}
                <HoverSwapText text="SHOP" className="text-xl md:text-2xl lg:text-4xl" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
                <HoverSwapText text="ABOUT" className="text-xl md:text-2xl lg:text-4xl" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
                <HoverSwapText text="TREATMENT" className="text-xl md:text-2xl lg:text-4xl" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
                <HoverSwapText text="CONTACT" className="text-xl md:text-2xl lg:text-4xl" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
            </div>
            <div className='md:absolute w-full md:-bottom-10 md:left-1/2 md:transform md:-translate-x-1/2 md:mb-10 flex flex-col items-center mt-6 text-white font-tertiary md:mt-0'>
                <div className='text-ivory text-medium sm:text-sm md:text-base lg:text-2xl uppercase font-semibold font-body flex md:flex-row flex-col md:flex:row px-4 md:px-5 w-full gap-5 sm:gap-4 md:gap-6 justify-between items-center'>
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
                <p className='pointer-events-none text-[14rem] md:translate-y-0 translate-y-18 sm:text-[12rem] md:text-[20rem] lg:text-[30rem] xl:text-[49rem] text-ivory leading-[8rem] sm:leading-[8rem] md:leading-[12rem] lg:leading-[20rem] xl:leading-[30rem] text-center'>
                    PORCELAIN
                </p>
            </div>
        </section>
    )
}

export default Footer