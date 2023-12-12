import React from 'react'

const ReactBasics = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>React.js Basics</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: React.js is a popular JavaScript library for building user interfaces. Get started with React basics, including components, state, and props. This sub-section provides a foundation for building dynamic and reusable UI components.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Components in React</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>State Management</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Props in React</li>
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
          Dive into the world of React.js with this foundational guide. From crafting modular components to managing dynamic state and leveraging props for seamless communication, master the basics that form the building blocks of robust and interactive user interfaces.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Components in React:</h5>
          <p className='leading-loose text-lg'>Delve into the fundamental concept of components in React.js. Understand how to structure UI elements into modular components, promoting reusability and maintainability in your web applications.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>State Management:</h5>
          <p className='leading-loose text-lg'>Explore the core of React's dynamic nature by understanding state management. Learn how to manage and update the state within components, enabling your UI to respond dynamically to user interactions.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Props in React:</h5>
          <p className='leading-loose text-lg'>Uncover the power of props (properties) in React.js. Explore how props allow you to pass data from one component to another, facilitating the communication between parent and child components. Grasp the concept of prop drilling.</p>
        </div>
      </div>
    </div> 
  )
}

export default ReactBasics