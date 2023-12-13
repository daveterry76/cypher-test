import React from 'react'
import { Link } from 'react-router-dom';
import NextPage from '../Buttons/NextPage';
import PrevPage from '../Buttons/PrevPage';
import Disqus from '../Disqus';

const ResponsiveDesigns = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>Responsive Design</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: As users access websites on various devices, responsive design becomes crucial. Discover techniques to make your web pages responsive, adapting to different screen sizes and orientations. This sub-section includes media queries and flexible grid layouts.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Media Queries</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Flexible Grid Layouts</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Fluid Typography</li>
        </ul>
      </div>


      <div className='flex flex-col bg-green-200 rounded-md px-5 py-2'>
        <div className='flex mb-3 gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 text-green-500 font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <h5 className='text-green-500 font-bold text-lg'>Info:</h5>
        </div>
        <p className='text-green-500'>
          Empower your web pages to shine on every device with Responsive Design. Explore the dynamic world of media queries, master flexible grid layouts, and dive into fluid typography. Elevate your user experience by ensuring your content looks impeccable, regardless of the screen size or orientation.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'> Media Queries:</h5>
          <p className='leading-loose text-lg'>Explore the magic of media queries to make your web pages responsive. Understand how to apply different styles based on factors such as screen width, height, and device orientation. Dive into the world of breakpoints and create a seamless experience across various devices.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Flexible Grid Layouts:</h5>
          <p className='leading-loose text-lg'>Master the art of building flexible grid layouts that adapt gracefully to different screen sizes. Explore techniques to create a responsive grid using CSS, ensuring that your content flows elegantly and maintains a harmonious structure across a spectrum of devices.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Fluid Typography:</h5>
          <p className='leading-loose text-lg'>Uncover the secrets of fluid typography to enhance readability and aesthetics on any device. Explore how to use relative units like percentages and viewport units to scale font sizes seamlessly. Learn to create a typographic hierarchy that adjusts dynamically to different screen dimensions.</p>
        </div>
      </div>
      <div className='flex justify-between my-12'>
        <div className='flex gap-5'>
         <Link to='/css/flexbox'>
          <PrevPage />
         </Link>
        </div>
        <div className='flex justify-around gap-5'>
        </div>
      </div>
      <Disqus title="Responsive Designs" />
    </div> 
  )
}

export default ResponsiveDesigns