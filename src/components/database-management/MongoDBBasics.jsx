import React from 'react'

const MongoDBBasics = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>MongoDB Basics</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: MongoDB is a popular NoSQL database. Explore the basics of MongoDB, including document-oriented data storage, CRUD operations, and indexing. This sub-section provides a foundation for using MongoDB in web applications.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Document-Oriented Data Storage</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>CRUD Operations in MongoDB</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Indexing in MongoDB</li>
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
          Embark on your MongoDB journey with this foundational guide. From understanding document-oriented data storage to mastering CRUD operations and indexing, build the skills needed to leverage MongoDB effectively in your web applications.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Document-Oriented Data Storage:</h5>
          <p className='leading-loose text-lg'>Delve into the core concept of document-oriented data storage in MongoDB. Understand how MongoDB organizes data as JSON-like documents, offering flexibility and scalability in handling complex and dynamic data structures.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>CRUD Operations in MongoDB:</h5>
          <p className='leading-loose text-lg'>Explore the essentials of performing CRUD (Create, Read, Update, Delete) operations in MongoDB. Learn how to insert documents into collections, retrieve data based on queries, update existing documents, and delete records.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Indexing in MongoDB:</h5>
          <p className='leading-loose text-lg'>Uncover the importance of indexing in MongoDB. Explore how indexes enhance query performance by providing a quick and efficient way to access data. Learn about different types of indexes and their impact on database performance.</p>
        </div>
      </div>
    </div> 
  )
}

export default MongoDBBasics