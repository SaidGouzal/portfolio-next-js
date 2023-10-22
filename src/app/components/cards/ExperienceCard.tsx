import React from 'react'
import { Experience } from '@/app/utils/constants'
import Tag from '@/app/components/tags/Tag'
import LinkSVG from '@/app/assets/SVG/LinkSVG'


function ExperienceCard({ link, technologies }: Experience) {
 return (
  <li className='mb-12'>
   <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
    <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label="2018 to Present">
     2018 — Present
    </header>
    <div className='z-10 sm:col-span-6'>
     <h3 className='font-medium leading-snug text-slate-200'>
      <a href={link} rel="noreferrer" target="_blank" className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'>
       <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
      </a>
      <span>
       Lead Engineer · Upstatement
       <span className='inline-block'>
        <LinkSVG />
       </span>
      </span>
      <div>
       <div className='text-slate-500' aria-hidden="true">
        Senior Engineer
       </div>
      </div>
      <div>
       <div className='text-slate-500' aria-hidden="true">
        Engineer
       </div>
      </div>
     </h3>
     <p className='mt-2 text-sm leading-normal'>
      Deliver high-quality, robust production code
      for a diverse array of projects for clients
      including Harvard Business School, Everytown
      for Gun Safety, Pratt Institute, Koala Health,
      Vanderbilt University, The 19th News, and more.
      Provide leadership within engineering department
      through close collaboration, knowledge shares,
      and mentorship.
     </p>
     <ul className='mt-2 flex flex-wrap' aria-label="Technologies used">
      {technologies.map((item, index) => (<Tag key={index} text={item} />))}
     </ul>
    </div>
   </div>
  </li>
 )
}

export default ExperienceCard
