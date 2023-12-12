import React from 'react'

const DOMManipulation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>DOM Manipulation</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: The Document Object Model (DOM) is a programming interface for web documents. Explore how to manipulate the DOM with JavaScript to dynamically update content and respond to user interactions.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Understanding the DOM</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Dynamic Content Updates</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Event Handling and User Interaction</li>
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
          Unlock the power of DOM Manipulation with JavaScript. Navigate through the Document Object Model, dynamically update content, and respond to user interactions. Transform your static web pages into dynamic and responsive experiences with these essential DOM manipulation techniques.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Understanding the DOM:</h5>
          <p className='leading-loose text-lg'>Delve into the Document Object Model (DOM) as the programming interface for web documents. Grasp how the DOM represents the structure of HTML and XML documents, creating a tree-like structure. Explore various node types within the DOM and their hierarchical relationships.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Dynamic Content Updates:</h5>
          <p className='leading-loose text-lg'>Learn techniques for selecting and targeting specific elements within the DOM using JavaScript. Delve into methods for dynamically updating content on your web pages. Modify text, attributes, and HTML structure for a seamless and responsive user experience.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Event Handling and User Interaction:</h5>
          <p className='leading-loose text-lg'>Understand the concept of events in JavaScript and how they are triggered by user interactions or other programmatic occurrences. Master the art of event handling in the DOM, attaching event listeners to elements, and executing JavaScript functions in response to user actions. Explore the concept of event propagation.</p>
        </div>
      </div>
    </div> 
  )
}

export default DOMManipulation