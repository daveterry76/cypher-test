import React from 'react'

const HTMLForms = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>HTML Forms</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Forms are crucial for user interaction on the web. Learn how to create HTML forms to collect user input, validate data, and submit it to a server. This sub-section covers form elements, input types, and form validation techniques.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Form Structure</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Common Input Types</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Form Validation</li>
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
          Elevate user interaction with HTML Forms – the gateway to collecting and validating user input. Delve into the intricacies of form structure, common input types, and techniques for seamless form validation. Unlock the power to create engaging and user-friendly web experiences.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Form Structure:</h5>
          <p className='leading-loose text-lg'>Explore the anatomy of HTML forms, understanding the essential elements like `form`, `input`, and `button`. Learn how these tags work together to create a seamless user input experience on your web pages.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Common Input Types:</h5>
          <p className='leading-loose text-lg'>Dive into the variety of input types available in HTML forms. From text fields (`input type="text"`) to checkboxes (`input type="checkbox"`) and radio buttons (`input type="radio"`), uncover the versatility of input elements for different user interactions.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Form Validation:</h5>
          <p className='leading-loose text-lg'>Master the art of validating user input with HTML forms. Explore techniques to ensure data accuracy and completeness before submission. Understand how attributes like required and pattern contribute to effective form validation.</p>
        </div>
      </div>
    </div> 
  )
}

export default HTMLForms