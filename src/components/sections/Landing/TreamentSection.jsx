import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './TreatmentSwiper.css'

const TreamentSection = () => {
  const treatments = [
    { name: 'Micro Needling', image: 'https://images.unsplash.com/photo-1761718209852-54ca4210183e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNraW4lMjB0cmVhdG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900' },
    { name: 'Carbon Laser', image: 'https://images.unsplash.com/photo-1761718209793-cb6d348831e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNraW4lMjB0cmVhdG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900' },
    { name: 'Oxy Dome', image: 'https://images.unsplash.com/photo-1761718209694-70031ee64f82?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNraW4lMjB0cmVhdG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900' },
    { name: 'Red Carpet', image: 'https://images.unsplash.com/photo-1555820585-c5ae44394b79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbiUyMHRyZWF0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900' },
    { name: 'K18 Peptide', image: 'https://plus.unsplash.com/premium_photo-1661476179686-80c9122da693?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbiUyMHRyZWF0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900' },
    { name: 'Biomoduling Skin Booster', image: 'https://plus.unsplash.com/premium_photo-1664299995993-ebfac0a1b66b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNraW4lMjB0cmVhdG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900' },
  ]

  return (
    <section className='mt-20 md:mt-40 pt-12 md:pt-20 border-t mb-32 md:mb-60 border-black/20'>
      <h1 className='mb-16 md:mb-30 text-3xl sm:text-4xl md:text-[5rem] font-heading leading-tight md:leading-normal mx-4 md:mx-14'>
        Uncover treatments designed to reveal your Glow.
      </h1>

      {/* Mobile/Tablet Carousel */}
      <div className='block lg:hidden relative w-full'>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={'auto'}
          centeredSlides={true}
          centerInsufficientSlides={true}
          loop={false}
          initialSlide={0}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slideToClickedSlide={true}
          watchSlidesProgress={true}
          className="treatment-swiper-centered"
        >
          {treatments.map((treatment, index) => (
            <SwiperSlide key={index}>
              <div className="group w-full transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5 w-max">
                  <div className="w-fit">
                    <p className="text-xl md:text-2xl font-light">{treatment.name}</p>
                    <div
                      className="w-full h-[1px] bg-black origin-left
                         scale-x-0 group-hover:scale-x-100
                         transition-transform duration-500 ease-out"
                    />
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28" height="28" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                    className="md:w-8 md:h-8 transition-transform duration-500 ease-out group-hover:-rotate-45"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>

                <div className="aspect-[2/3] h-[28rem] md:h-[35rem] overflow-hidden rounded-lg">
                  <img
                    src={treatment.image}
                    alt={`${treatment.name} treatment`}
                    className="w-full h-full object-cover
                       transform-gpu will-change-transform
                       transition-transform duration-500 ease-out
                       group-hover:scale-110"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className='hidden lg:block mx-4 md:mx-14'>
        <div className='grid grid-cols-3 gap-8 mb-12'>
          {treatments.slice(0, 3).map((treatment, index) => (
            <div key={index} className="group cursor-pointer w-full">
              <div className="flex items-center gap-4 mb-5 w-max">
                <div className="w-fit">
                  <p className="text-2xl font-light">{treatment.name}</p>
                  <div
                    className="w-full h-[1px] bg-black origin-left
                       scale-x-0 group-hover:scale-x-100
                       transition-transform duration-500 ease-out"
                  />
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32" height="32" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-500 ease-out group-hover:-rotate-45"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              <div className="aspect-[2/3] h-[35rem] overflow-hidden rounded-lg">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} treatment`}
                  className="w-full h-full object-cover
                     transform-gpu will-change-transform
                     transition-transform duration-500 ease-out
                     group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-3 gap-8'>
          {treatments.slice(3, 6).map((treatment, index) => (
            <div key={index + 3} className="group cursor-pointer w-full">
              <div className="flex items-center gap-4 mb-5 w-max">
                <div className="w-fit">
                  <p className="text-2xl font-light">{treatment.name}</p>
                  <div
                    className="w-full h-[1px] bg-black origin-left
                       scale-x-0 group-hover:scale-x-100
                       transition-transform duration-500 ease-out"
                  />
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32" height="32" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform duration-500 ease-out group-hover:-rotate-45"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              <div className="aspect-[2/3] h-[35rem] overflow-hidden rounded-lg">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} treatment`}
                  className="w-full h-full object-cover
                     transform-gpu will-change-transform
                     transition-transform duration-500 ease-out
                     group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreamentSection
