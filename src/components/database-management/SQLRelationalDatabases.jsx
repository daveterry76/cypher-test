import React from 'react'
import { Link } from 'react-router-dom';
import NextPage from '../Buttons/NextPage';
import PrevPage from '../Buttons/PrevPage';
import Disqus from '../Disqus';

const SQLRelationalDatabases = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>SQL and Relational Databases</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: SQL databases remain a key player in web development. Learn the fundamentals of Structured Query Language (SQL) and relational databases. This sub-section covers database design, querying, and transactions.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Fundamentals of SQL</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Relational Database Design</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Querying and Transactions</li>
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
          Dive into the world of SQL and relational databases with this comprehensive guide. From mastering the fundamentals of SQL to designing effective relational databases and understanding the nuances of querying and transactions, build the skills needed for robust data management in web development.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Fundamentals of SQL:</h5>
          <p className='leading-loose text-lg'>Delve into the foundational concepts of Structured Query Language (SQL). Understand the syntax and structure of SQL queries. Explore how SQL facilitates the definition, manipulation, and querying of relational databases.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Relational Database Design:</h5>
          <p className='leading-loose text-lg'>Explore the art of designing relational databases. Understand the principles of database normalization, entity-relationship modeling, and creating relational schemas. Learn how to establish relationships between tables for effective data organization.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Querying and Transactions:</h5>
          <p className='leading-loose text-lg'>Uncover the power of querying in SQL. Learn how to retrieve, filter, and sort data using SELECT statements. Explore advanced querying techniques, including JOIN operations. Understand the importance of transactions in maintaining the consistency and integrity of the database.</p>
        </div>
      </div>
      <div className='flex justify-between my-12'>
        <div className='flex gap-5'>
          <Link to='/database/mongodb'>
            <PrevPage />
          </Link>
        </div>
        <div className='flex justify-around gap-5'>
        </div>
      </div>
      <Disqus title="SQL & Relational Databases" />
    </div> 
  )
}

export default SQLRelationalDatabases