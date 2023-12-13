import React from 'react'
import { Link } from 'react-router-dom';
import NextPage from '../Buttons/NextPage';
import PrevPage from '../Buttons/PrevPage';
import Disqus from '../Disqus';

const NodeOverview = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>Node.js Overview</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Node.js enables server-side JavaScript development. Learn the basics of Node.js, including event-driven architecture and asynchronous programming. This sub-section provides a foundation for building scalable and high-performance server applications.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Event-Driven Architecture</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Asynchronous Programming</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Building Scalable Server Applications</li>
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
          Embark on your journey into server-side JavaScript with Node.js. From understanding its event-driven architecture to mastering asynchronous programming, build the foundation for developing scalable and high-performance server applications.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Event-Driven Architecture:</h5>
          <p className='leading-loose text-lg'>Explore the core of Node.js with its event-driven architecture. Understand how Node.js efficiently handles asynchronous operations by utilizing events and callbacks, providing a scalable and non-blocking approach to server-side JavaScript development.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Asynchronous Programming:</h5>
          <p className='leading-loose text-lg'>Delve into the essence of asynchronous programming in Node.js. Learn how to manage concurrent operations using callbacks, Promises, and async/await syntax. Understand the importance of non-blocking I/O for building performant and responsive server applications.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Building Scalable Server Applications:</h5>
          <p className='leading-loose text-lg'>Uncover the fundamentals of building scalable server applications with Node.js. Explore techniques for handling concurrent connections, optimizing performance, and leveraging the npm ecosystem to enhance the functionality of your Node.js applications.</p>
        </div>
      </div>
      <div className='flex justify-between my-12'>
        <div className='flex gap-5'>
        </div>
        <div className='flex justify-around gap-5'>
          <Link to='/backend/expressjs'> 
            <NextPage />
          </Link>
        </div>
      </div>
      <Disqus title="Node Overview" />
    </div> 
  )
}

export default NodeOverview