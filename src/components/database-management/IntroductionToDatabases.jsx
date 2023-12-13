import React from 'react'
import { Link } from 'react-router-dom';
import NextPage from '../Buttons/NextPage';
import PrevPage from '../Buttons/PrevPage';
import Disqus from '../Disqus';

const IntroductionToDatabases = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>Introduction to Databases</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Databases are essential for storing and retrieving data in web applications. This section provides an overview of databases, their types, and their role in modern web development.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Understanding Databases</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Types of Databases</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Role of Databases in Modern Web Development</li>
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
          Dive into the world of databases with this introductory guide. From understanding their fundamental concepts to exploring diverse database types and recognizing their crucial role in modern web development, build the foundation for effective data management in your applications.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Understanding Databases:</h5>
          <p className='leading-loose text-lg'>Delve into the fundamental concept of databases. Understand their role in web applications for storing and retrieving data. Explore the various types of databases, including relational databases, NoSQL databases, and in-memory databases.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Types of Databases:</h5>
          <p className='leading-loose text-lg'>Explore the diverse landscape of databases. Understand the characteristics and use cases of different database types, such as relational databases like MySQL and PostgreSQL, NoSQL databases like MongoDB, and in-memory databases like Redis.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Role of Databases in Modern Web Development:</h5>
          <p className='leading-loose text-lg'>Uncover the pivotal role of databases in modern web development. Explore how databases enable data persistence, support efficient data retrieval, and contribute to the scalability and performance of web applications.</p>
        </div>
      </div>
      <div className='flex justify-between my-12'>
        <div className='flex gap-5'>
        </div>
        <div className='flex justify-around gap-5'>
          <Link to='/database/mongodb'> 
            <NextPage />
          </Link>
        </div>
      </div>
      <Disqus title="Introduction to Databases" />
    </div> 
  )
}

export default IntroductionToDatabases