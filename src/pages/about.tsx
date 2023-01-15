import React, { FC } from 'react';
import AboutImage from '../../public/about-img.svg'
import Image from 'next/image';


const About: FC = () => {
  return (
      <div className='container mx-auto px-10'>
        <div className="flex justify-center">
          <h1 className='about-header mb-8 mt-10 font-medium team-title'>About Us</h1>
        </div>
        <div className='flex justify-center gap-8 mb-10 about-wrap bg-zinc-800'>
          <Image className='mt-5 mb-5 about-img' src={AboutImage} alt='AboutImage' />
          <div className='w-3/5 about-text mr-5'>
            <p className='mt-10 about-desc text-zinc-300'>The <span className='about-highlight'>Royal Holloway Developers Club</span> is a community of curious and open minded
            individuals interested in <span className='about-highlight'>technology</span>. The club is focused on taking a more  <span className='about-highlight'>practical </span> 
            and peer-to-peer approach to help bring together many single-minded people while  <span className='about-highlight'>significantly </span> 
            improving their employability.
            </p>
            <hr className='about-divider'></hr>
            <p className='about-desc mb-10 text-zinc-300'>
            Our goal is to see the <span className='about-highlight'>developers club</span> become a hub for students from all faculties looking for opportunities to improve their knowledge 
            (currently within the field of <span className='about-highlight'>Computer Science</span>) and a platform for all providers of opportunities to find potential uptakers (e.g. 
            CodeGroovers, Student initiated project, UROP, industry, …)
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <a href='https://docs.google.com/document/d/1KB7sEKcovUKxBzmjd9j5qXQy-MU1Q9e-Zv6xq4rLs_I/edit' 
           className='flex items-center gap-3 rounded-lg bg-blue-500 px-5 py-2 text-lg font-semibold text-white transition-colors hover:bg-blue-700 btn-primary'
           target="_blank"
           >Find out more!</a>
        </div>
      </div>
  );
};

export default About;