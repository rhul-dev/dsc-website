import React, { FC } from 'react';
import AboutImage from '../../public/GDSCAbout.png'
import Image from 'next/image';


const About: FC = () => {
  return (
    <>
      <div className="flex justify-center">
      <h1 className='mb-8 font-medium text-2xl'>About Us</h1>
      </div>
      <div className='flex justify-center gap-8'>
        <Image src={AboutImage} alt='AboutImage' width={480} height={250}/>
        <p className='w-2/5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus suscipit elit, in volutpat massa. Donec ut justo felis. Nulla sit amet fringilla ante, sed venenatis metus. Duis et orci ut diam pulvinar varius nec in odio. Integer placerat tempor felis, in consequat dolor. Vestibulum odio ligula, pellentesque sit amet sapien a, bibendum sollicitudin urna. Duis nunc ligula, bibendum eu sapien ac, facilisis aliquam libero. Cras nec libero ex. Vestibulum varius, justo vel ornare gravida, mauris orci suscipit nisl, pellentesque malesuada nulla arcu a turpis. Nunc dapibus sapien leo, ut malesuada massa blandit ut. Morbi aliquam pellentesque volutpat. Pellentesque eu enim lacinia, tempor tellus sit amet, ultricies dui. Nam eget massa nec neque consequat ullamcorper ut nec arcu. Vivamus eu tortor tempor, imperdiet magna et, eleifend erat. Morbi at eros vitae ex scelerisque finibus.
        Phasellus consectetur scelerisque augue non ornare. Suspendisse tempus eros urna. Maecenas sollicitudin sapien eu elit condimentum sollicitudin. Donec sodales maximus arcu quis ultrices. Mauris vel ipsum in sem mattis semper ac sit amet massa. Donec vitae metus viverra, efficitur sem finibus, accumsan lectus. Donec at lacinia elit. Pellentesque nisl mi, aliquet sed turpis quis, ullamcorper dictum nulla. Suspendisse at iaculis est. Etiam hendrerit aliquam massa.
        </p>
      </div>
    </>
  );
};

export default About;