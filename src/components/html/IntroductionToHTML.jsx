import React from 'react';
import Disqus from '../Disqus';

const IntroductionToHTML = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold my-8">Introduction To HTML</h1>
        <h3 className="text-lg italic opacity-70">
          Summary: HTML, or HyperText Markup Language, is the standard markup language for creating web pages and web applications. In this section,
          we'll cover the basics of HTML, including the structure of an HTML document, tags, and attributes.
        </h3>

        <div className="bg-slate-200 rounded-md px-10 py-6 w-fit my-12">
          <h6 className="text-lg font-bold my-3">Table Of Contents</h6>
          <ul className="flex flex-col gap-5 list-disc">
            <li className="cursor-pointer" onClick={() => scrollToSection('1')}>
              HTML Document Structure
            </li>
            <li className="cursor-pointer" onClick={() => scrollToSection('2')}>
              Essential HTML Tags
            </li>
            <li className="cursor-pointer" onClick={() => scrollToSection('3')}>
              Attributes in HTML
            </li>
          </ul>
        </div>

        <div className="flex flex-col bg-green-200 rounded-md px-5 py-2">
          <div className="flex mb-3 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1 text-green-500 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <h5 className="text-green-500 font-bold text-lg">Info:</h5>
          </div>
          <p className="text-green-500">
            Unlock the web's language: HTML. From document structure to tags and attributes, this section is your key to understanding the building
            blocks of web pages.
          </p>
        </div>

        <div className="flex flex-col gap-12 my-12">
          <div id="1">
            <h5 className="text-3xl my-10">HTML Document Structure:</h5>
            <p className="leading-loose text-lg">
              Explore the foundational structure of an HTML document, understanding the crucial components that make up the skeleton of a web page.{' '}
              <br /> Learn about the DOCTYPE declaration, `html` element, and the overall organization of HTML documents.
            </p>
          </div>

          <div id="2">
            <h5 className="text-3xl my-10">Essential HTML Tags:</h5>
            <p className="leading-loose text-lg">
              Dive into the world of HTML tags, the building blocks of web content. <br /> Discover the purpose and usage of common tags such as
              headings (`h1` to `h6`), paragraphs (`p`), lists (`ul`, `ol`, `li`), and more. Understand how these tags contribute to structuring your
              content.{' '}
            </p>
          </div>

          <div id="3">
            <h5 className="text-3xl my-10">Attributes in HTML:</h5>
            <p className="leading-loose text-lg">
              Uncover the power of HTML attributes, enhancing the functionality and presentation of your web pages. Explore common attributes like
              `class` and `id`, which play a crucial role in styling with CSS and JavaScript interactions. Learn how attributes provide additional
              information to HTML elements.
            </p>
          </div>
        </div>
      </div>
      <Disqus title="Introduction To HTML" />
    </>
  );
};

export default IntroductionToHTML;
