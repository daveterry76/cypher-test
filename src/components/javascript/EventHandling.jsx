import React from 'react'

const EventHandling = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>Event Handling</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Interactivity on the web often involves responding to user actions. Learn how to handle events in JavaScript, from simple click events to more complex interactions. This sub-section covers event listeners and event objects.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Event Listeners</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Types of Events</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Event Objects</li>
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
          Elevate user engagement through Event Handling in JavaScript. From setting up event listeners to understanding diverse event types and leveraging event objects, this sub-section equips you with the tools to craft interactive and responsive web experiences.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Event Listeners:</h5>
          <p className='leading-loose text-lg'>Explore the art of setting up event listeners in JavaScript to respond to various user interactions. Learn how to attach listeners to specific elements and define the corresponding actions that should be executed when an event occurs.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Types of Events:</h5>
          <p className='leading-loose text-lg'>Understand the diverse range of events in JavaScript, from fundamental events like click and mouseover to more specialized events like keyboard and form-related events. Explore how different events cater to specific user interactions.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Event Objects:</h5>
          <p className='leading-loose text-lg'>Delve into the concept of event objects, which provide information about the event that occurred. Explore how to use event objects to access details such as the type of event, target element, and additional properties related to the user interaction.</p>
        </div>
      </div>
    </div> 
  )
}

export default EventHandling