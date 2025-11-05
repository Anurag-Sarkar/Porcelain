import React, { useState } from 'react'
import HoverSwapText from '../../hooks/animation/HoverSwapText'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='w-full bg-transparent'>
      <nav className='flex items-center justify-between px-4 py-4 md:px-14 md:py-8'>
        {/* Brand */}
        <div className='font-subheading tracking-[0.3rem] text-xl md:text-3xl'>PORCELAIN</div>

        {/* Desktop links */}
        <div className='hidden md:flex gap-8 items-center font-medium text-lg md:text-xl font-subheading'>
          <HoverSwapText text="Shop" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
          <HoverSwapText text="About" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
          <HoverSwapText text="Contact" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
          <HoverSwapText text="Treatments" distance="1em" dxStep="-0.05em" staggerMs={60} durationMs={600} />
        </div>

        {/* Actions */}
        <div className='flex items-center gap-4'>
          {/* Appointment button: smaller on mobile, full on desktop */}
          <button className='hidden md:inline-block bg-black cursor-pointer font-body rounded-md text-white px-5 py-2'>Book an Appointment</button>

          {/* Mobile menu button */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className='md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-blue'
            onClick={() => setOpen(v => !v)}
          >
            <svg className='w-6 h-6 text-black' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              {open ? (
                <path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel - full screen from right */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transition-transform duration-500 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className='flex flex-col h-full px-6 py-8'>
          {/* Close button */}
          <button
            aria-label='Close menu'
            className='self-end p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent-blue'
            onClick={() => setOpen(false)}
          >
            <svg className='w-8 h-8 text-black' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>

          {/* Mobile links - centered */}
          <nav className='flex flex-col items-center justify-center flex-1 gap-8'>
            <a href='#shop' className='block text-3xl font-medium hover:text-accent-blue transition-colors'>Shop</a>
            <a href='#about' className='block text-3xl font-medium hover:text-accent-blue transition-colors'>About</a>
            <a href='#contact' className='block text-3xl font-medium hover:text-accent-blue transition-colors'>Contact</a>
            <a href='#treatments' className='block text-3xl font-medium hover:text-accent-blue transition-colors'>Treatments</a>
          </nav>

          {/* Book button at bottom */}
          <button className='w-full bg-black text-white py-4 rounded-md font-medium text-lg'>
            Book an Appointment
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBar