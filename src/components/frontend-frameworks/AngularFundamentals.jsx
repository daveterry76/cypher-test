import React from 'react'

const AngularFundamentals = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>Angular Fundamentals</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Angular is a powerful frontend framework developed by Google. Dive into the fundamentals of Angular, including components, services, and modules. This sub-section provides a comprehensive overview for building robust web applications.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Components in Angular</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Services in Angular</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Modules in Angular</li>
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
          Dive deep into the world of Angular with this comprehensive guide to the fundamentals. From mastering components and services to harnessing the organizational power of modules, build the foundation for creating powerful and scalable web applications.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Components in Angular:</h5>
          <p className='leading-loose text-lg'>Explore the cornerstone of Angular development - components. Understand how to structure your application into modular components, each encapsulating its own logic, template, and styling.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Services in Angular:</h5>
          <p className='leading-loose text-lg'>Delve into the concept of services in Angular. Learn how services provide a centralized way to share data, functionality, and business logic across different components, promoting a modular and scalable architecture.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Modules in Angular:</h5>
          <p className='leading-loose text-lg'>Uncover the power of Angular modules. Explore how modules help organize your application by grouping related components, services, and other features together. Learn the principles of modularization for a well-structured Angular application.</p>
        </div>
      </div>
    </div> 
  )
}

export default AngularFundamentals