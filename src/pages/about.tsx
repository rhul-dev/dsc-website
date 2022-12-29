import React, { FC } from 'react';
import AboutImage from '../../public/GDSCAbout.png'
import Image from 'next/image';


const About: FC = () => {
  return (
    <div className='container mx-auto px-10'>
      <div className="flex justify-center">
      <h1 className='about-header mb-8 font-medium text-2xl'>About Us</h1>
      </div>
      <div className='flex justify-center gap-8 mb-10 about-wrap'>
        <Image className='about-img' src={AboutImage} alt='AboutImage' />
        <div className='w-2/5 about-text'>
          <p className='mt-10 about-desc'>The <span className='about-highlight'>Royal Holloway Developers Club</span> is a community of curious and open minded
           individuals interested in <span className='about-highlight'>technology</span>. The club is focused on taking a more  <span className='about-highlight'>practical </span> 
          and peer-to-peer approach to help bring together many single-minded people while  <span className='about-highlight'>significantly </span> 
          improving their employability.
          </p>
          <hr className='about-divider'></hr>
          <p className='about-desc'>
          Our goal is to see the <span className='about-highlight'>developers club</span> become a hub for students from all faculties looking for opportunities to improve their knowledge 
          (currently within the field of <span className='about-highlight'>Computer Science</span>) and a platform for all providers of opportunities to find potential uptakers (e.g. 
          CodeGroovers, Student initiated project, UROP, industry, …)
          </p>
        </div>
      </div>
      <div className='flex justify-center mb-10'>
        <ul className='list-disc'>
          <li>This is a description about our first goal that we aim to complete</li>
          <li>This is a description about our second goal that we aim to complete</li>
          <li>This is our third goal about our third goal that we aim to complete</li>
          <li>This is our fourth goal about our fourth goal that we aim to complete</li>
        </ul>
      </div>
      <div className='flex justify-center'>
        <a href='https://docs.google.com/document/d/1KB7sEKcovUKxBzmjd9j5qXQy-MU1Q9e-Zv6xq4rLs_I/edit' 
           className='button-primary'
           target="_blank"
           >Find out more!</a>
      </div>
    </div>
  );
};

export default About;