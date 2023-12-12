import React from 'react'

const RESTfulAPIs = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>RESTful APIs</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Representational State Transfer (REST) is an architectural style for designing networked applications. Learn how to design and implement RESTful APIs using Node.js and Express.js. This sub-section covers REST principles, routes, and data persistence.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>REST Principles</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Designing Routes for RESTful APIs</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Data Persistence in RESTful APIs</li>
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
          Unlock the power of RESTful APIs with this guide. From understanding REST principles to designing robust routes and implementing data persistence using Node.js and Express.js, build the foundation for creating scalable and interoperable networked applications.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>REST Principles:</h5>
          <p className='leading-loose text-lg'>Delve into the fundamental principles of Representational State Transfer (REST). Understand the key concepts, such as stateless communication, resource representation, and standard HTTP methods, that define the REST architectural style.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Designing Routes for RESTful APIs:</h5>
          <p className='leading-loose text-lg'>Explore the art of designing routes for RESTful APIs using Node.js and Express.js. Learn how to map HTTP methods to CRUD operations, creating a clear and consistent API structure. Understand the importance of endpoint naming conventions.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Data Persistence in RESTful APIs:</h5>
          <p className='leading-loose text-lg'>Uncover the methods for implementing data persistence in RESTful APIs. Explore techniques for interacting with databases, handling CRUD operations, and ensuring the integrity of your data. Understand the role of models in representing resources.</p>
        </div>
      </div>
    </div> 
  )
}

export default RESTfulAPIs