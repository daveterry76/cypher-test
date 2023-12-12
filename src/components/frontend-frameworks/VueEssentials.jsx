import React from 'react'

const VueEssentials = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>Vue.js Essentials</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Vue.js is a progressive JavaScript framework for building user interfaces. Explore the essentials of Vue.js, including directives, components, and state management. This sub-section covers the key concepts needed to develop Vue applications.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Directives in Vue.js</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Components in Vue.js</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>State Management in Vue.js</li>
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
        Embark on your Vue.js journey with this guide to the essentials. From mastering directives for dynamic data binding to harnessing the power of components and efficient state management, build the foundation for developing robust and interactive Vue applications.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Directives in Vue.js:</h5>
          <p className='leading-loose text-lg'>Explore the power of directives in Vue.js. Understand how directives like v-bind and v-if enable dynamic data binding and conditional rendering, enhancing the flexibility of your Vue applications.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Components in Vue.js:</h5>
          <p className='leading-loose text-lg'>Delve into the heart of Vue.js by understanding components. Learn how to break down your UI into modular components, fostering reusability and maintainability. Explore the creation, registration, and communication between Vue components.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>State Management in Vue.js:</h5>
          <p className='leading-loose text-lg'>Uncover the essentials of state management in Vue.js. Learn how to manage the state of your application using Vue's reactivity system and understand the role of Vuex for centralized state management in larger applications.</p>
        </div>
      </div>
    </div> 
  )
}

export default VueEssentials