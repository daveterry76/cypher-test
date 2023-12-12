import React from 'react'

const StylingWithCSS = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>Styling with CSS</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Cascading Style Sheets (CSS) allow you to control the visual presentation of your HTML documents. This section covers the basics of styling, including selectors, properties, and the box model.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Selectors</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Properties</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>The Box Model</li>
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
          Elevate your HTML documents with the magic of Cascading Style Sheets (CSS). Dive into the essentials of styling, from mastering selectors to unleashing a plethora of properties. Discover the art of the box model and transform your web pages into visually stunning creations.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Selectors:</h5>
          <p className='leading-loose text-lg'>Understand the art of selecting HTML elements for styling. Dive into CSS selectors, from basic element selectors to more advanced ones like class (.) and ID (#) selectors. Explore how to target specific elements or groups for precise styling.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Properties:</h5>
          <p className='leading-loose text-lg'>Explore the vast array of styling properties available in CSS. From text properties like font-family and color to layout properties like margin and padding, uncover the tools to customize the visual appearance of your HTML documents.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>The Box Model:</h5>
          <p className='leading-loose text-lg'>Master the fundamental concept of the CSS box model. Understand how elements are structured with content, padding, borders, and margins. Learn to manipulate these components to create visually appealing and well-spaced layouts.</p>
        </div>
      </div>
    </div> 
  )
}

export default StylingWithCSS