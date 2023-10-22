import React from 'react'

function Footer() {
 return (
  <footer className='max-w-md pb-16 text-sm text-slate-500 sm:pb-0'>
   <p>
    Inspired From
    <a href="https://brittanychiang.com/#about"
     className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
     target="_blank" rel="noreferrer"> Brittany Chiang Portfolio</a>. Coded in
    <a href="https://code.visualstudio.com/"
     className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
     target="_blank" rel="noreferrer">Visual Studio Code</a>
    by yours truly. Built with
    <a href="https://nextjs.org/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
     target="_blank" rel="noreferrer">Next.js</a> and
    <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
     target="_blank" rel="noreferrer">Tailwind CSS</a>, deployed with
    <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
     target="_blank" rel="noreferrer">Vercel</a>.</p>
  </footer>
 )
}

export default Footer