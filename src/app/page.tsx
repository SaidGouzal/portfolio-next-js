'use client'
import React, { useState, useEffect } from 'react';
import { personalData, SocialMediaElement, Links } from './utils/constants';
import Main from './components/Main'

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { SM, name, title, intro } = personalData
  const trackMousePosition = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    const handleMouseMove = (e: any) => trackMousePosition(e)
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 w-screen h-screen">
      <div className='pointer-events-none inset-0 z-30 transition duration-300 lg:absolute'
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      >
        <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
          <div className='lg:flex lg:justify-between lg:gap-4'>
            <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
              <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
                <a href="/">{name}</a>
              </h1>
              <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>{title}</h2>
              <p className='mt-4 max-w-xs leading-normal'>{intro}.</p>
              <nav className='nav hidden lg:block' aria-label="In-page jump links">
                <ul className='mt-16 w-max'>
                  {Links.map((element: string, index: number) => (
                    <li key={index}>
                      <a href={`#${element}`} className='group flex items-center py-3 active'>
                        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                        <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>{element}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className='ml-1 mt-40 flex items-center cursor-pointer' aria-label="Social media">
                {SM.map((element: SocialMediaElement, index: number) => (
                  <li className='mr-5 text-xs' key={index}>
                    <a href={element.link} rel='noreferrer' target='_blank' className='block hover:text-slate-200'>
                      <span className='sr-only'>{element.name}</span>
                      {element.Icon()}
                    </a>
                  </li>
                ))}
              </ul>
            </header>
            <Main />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
