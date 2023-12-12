import React from 'react'

const ExpressBasics = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>Express.js Basics</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Express.js is a minimal and flexible Node.js web application framework. Explore the basics of Express.js, including routing, middleware, and templating. This sub-section covers the essentials for building web servers with Express.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Routing in Express.js</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Middleware in Express.js</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Templating in Express.js</li>
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
          Master the essentials of Express.js, the minimal and flexible Node.js web application framework. From crafting dynamic routes to leveraging middleware for enhanced functionality and implementing templating for dynamic views, build the foundation for creating robust and scalable web servers.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Routing in Express.js:</h5>
          <p className='leading-loose text-lg'>Explore the fundamental concept of routing in Express.js. Learn how to define routes for different HTTP methods, allowing you to handle various client requests and create a structured API for your web application.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Middleware in Express.js:</h5>
          <p className='leading-loose text-lg'>Delve into the power of middleware in Express.js. Understand how middleware functions intercept and modify the request and response objects, enabling tasks such as logging, authentication, and error handling to be seamlessly integrated into your application.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Templating in Express.js:</h5>
          <p className='leading-loose text-lg'>Uncover the basics of templating in Express.js. Explore how to use templating engines like EJS or Handlebars to dynamically generate HTML content, providing a dynamic and data-driven approach to building views in your web application.</p>
        </div>
      </div>
    </div> 
  )
}

export default ExpressBasics