import React from 'react'
import CountUp from '../../../hooks/animation/CountUp';

const DoctorSection = () => {
    return (
        <section className='mt-16 md:mt-30 px-4 md:px-14'>
            <div className='rounded-[20px] md:rounded-[30px] overflow-hidden h-[30vh] sm:h-[40vh] md:h-[45rem]'>
                <img className='w-full h-full object-cover object-top' src="/src/assets/images/doctors.jpeg" alt="Dr. Mayank and Dr. Nitya - Internationally trained dermatologists" />
            </div>
            <div className='flex flex-col md:flex-row mt-12 md:mt-30 gap-8 md:gap-0 md:justify-between w-full'>
                <div className='w-full md:w-[35%] capitalize font-semibold text-lg sm:text-xl md:text-2xl'>
                    Every Porcelain treatment is crafted by internationally trained doctors, blending precision with personal care
                </div>
                <div className='w-full md:w-[40%] flex flex-col gap-8 md:gap-10'>
                    <div className='text-base md:text-lg'>Dr. Mayank and Dr. Nitya are internationally trained dermatologists specializing in advanced skin and hair treatments - their approach offers personalized care and results that feel natural and lasting.</div>

                    <section className="relative mt-6 md:mt-10">
                        <h3 className="uppercase tracking-wide text-xs md:text-sm font-medium text-black/90">
                            Years of Experience
                        </h3>

                        <span
                            className="absolute left-1 top-5 md:top-6 h-10 md:h-14 w-4 md:w-5 border-l border-b border-black/20"
                            aria-hidden="true"></span>

                        <div className="mt-5 md:mt-6 ml-8 md:ml-10 flex items-end gap-2 md:gap-3">
                            <span className="leading-none text-[#1C3F7C] font-medium text-5xl sm:text-6xl md:text-[6rem]">
                                <CountUp
                                    from={0}
                                    to={7}
                                    separator=","
                                    direction="up"
                                    duration={0.5}
                                    className="count-up-text"
                                />+
                            </span>
                            <span className="pb-2 sm:pb-3 md:pb-5 text-[#1C3F7C] text-lg sm:text-xl md:text-2xl font-medium">
                                years
                            </span>
                        </div>
                    </section>
                    <section className="relative mt-6 md:mt-10">
                        <h3 className="uppercase tracking-wide text-xs md:text-sm font-medium text-black/90">
                            Patient Treated
                        </h3>

                        <span
                            className="absolute left-1 top-5 md:top-6 h-10 md:h-14 w-4 md:w-5 border-l border-b border-black/20"
                            aria-hidden="true"></span>

                        <div className="mt-5 md:mt-6 ml-8 md:ml-10 flex items-end gap-2 md:gap-3">
                            <span className="leading-none text-[#1C3F7C] font-medium text-5xl sm:text-6xl md:text-[6rem]">
                                <CountUp
                                    from={0}
                                    to={1000}
                                    separator=","
                                    direction="up"
                                    duration={0.2}
                                    className="count-up-text"
                                />+
                            </span>
                            <span className="pb-2 sm:pb-3 md:pb-5 text-[#1C3F7C] text-lg sm:text-xl md:text-2xl font-medium">
                                and counting
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default DoctorSection