import React from 'react'

const IntroductionToJavaScript = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>Introduction to JavaScript</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: JavaScript is a versatile programming language that adds interactivity to web pages. This section introduces the basics of JavaScript, including variables, data types, and control structures.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Variables and Data Types</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Control Structures</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Functions and Modular Code</li>
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
          Elevate your web pages with the power of JavaScript. Dive into the fundamentals, from variables and data types to control structures. Unleash interactivity and learn how JavaScript transforms static web pages into dynamic, engaging experiences.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Variables and Data Types:</h5>
          <p className='leading-loose text-lg'>Delve into the world of JavaScript variables, mastering the art of declaration and understanding their scope within the program. Explore the diverse data types in JavaScript, from primitive types like strings and numbers to complex types like arrays and objects.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Control Structures:</h5>
          <p className='leading-loose text-lg'>Understand the essence of functions as fundamental building blocks in JavaScript. Learn how to declare and call functions, passing arguments and returning values. Explore the concept of modular code, breaking down your scripts into reusable functions for enhanced organization and maintainability.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Functions and Modular Code:</h5>
          <p className='leading-loose text-lg'>Uncover the secrets of fluid typography to enhance readability and aesthetics on any device. Explore how to use relative units like percentages and viewport units to scale font sizes seamlessly. Learn to create a typographic hierarchy that adjusts dynamically to different screen dimensions.</p>
        </div>
      </div>
    </div> 
  )
}

export default IntroductionToJavaScript