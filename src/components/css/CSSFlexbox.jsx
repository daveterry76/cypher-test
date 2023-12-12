import React from 'react'

const CSSFlexbox = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className='text-5xl font-bold my-8'>CSS Flexbox</h1> 
      <h3 className='text-lg italic opacity-70'>
        Summary: Flexbox is a powerful layout model that simplifies the design of complex layouts. Learn how to use Flexbox to create flexible and responsive page structures. This sub-section covers Flexbox properties and common use cases.
      </h3>

      <div className='bg-slate-200 rounded-md px-10 py-6 w-fit my-12'>
        <h6 className='text-lg font-bold my-3'>Table Of Contents</h6>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer' onClick={() => scrollToSection('1')}>Flexbox Properties</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('2')}>Creating Flexible Layouts</li>
          <li className='cursor-pointer' onClick={() => scrollToSection('3')}>Common Use Cases</li>
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
          Simplify the art of layout design with CSS Flexbox. This powerful layout model empowers you to create flexible and responsive page structures effortlessly. Master Flexbox properties and explore practical use cases, transforming your designs into dynamic and visually pleasing experiences.        
        </p>
      </div>


      <div className='flex flex-col gap-12 my-12'>
        <div id='1'>
          <h5 className='text-3xl my-10'>Flexbox Properties:</h5>
          <p className='leading-loose text-lg'>Dive into the versatility of Flexbox properties. Explore how display: flex transforms a container into a flex container, allowing for flexible layouts. Understand properties like flex-direction, justify-content, and align-items to control the arrangement and alignment of flex items.</p>
        </div>
        
        <div id='2'>
          <h5 className='text-3xl my-10'>Creating Flexible Layouts:</h5>
          <p className='leading-loose text-lg'>Unlock the power of Flexbox to design adaptable and responsive page structures. Learn how to distribute space, align items, and reorder content dynamically with Flexbox. Understand how Flexbox simplifies the challenges of complex layouts.</p>
        </div>
        
        <div id='3'>
          <h5 className='text-3xl my-10'>Common Use Cases:</h5>
          <p className='leading-loose text-lg'>Explore real-world scenarios where Flexbox shines. From creating navigation bars to building card layouts, delve into common use cases where Flexbox provides an efficient and elegant solution for responsive design.</p>
        </div>
      </div>
    </div> 
  )
}

export default CSSFlexbox