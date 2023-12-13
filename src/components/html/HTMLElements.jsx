import React from 'react';
import Disqus from '../Disqus';

const HTMLElements = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold my-8">HTML Elements</h1>
      <h3 className="text-lg italic opacity-70">
        Summary: HTML documents consist of a variety of elements, each serving a specific purpose. This sub-section explores common HTML elements,
        such as headings, paragraphs, lists, and links. Understanding these elements is fundamental to creating well-structured web content.
      </h3>

      <div className="bg-slate-200 rounded-md px-10 py-6 w-fit my-12">
        <h6 className="text-lg font-bold my-3">Table Of Contents</h6>
        <ul className="flex flex-col gap-5 list-disc">
          <li className="cursor-pointer" onClick={() => scrollToSection('1')}>
            Text Elements
          </li>
          <li className="cursor-pointer" onClick={() => scrollToSection('2')}>
            List Elements
          </li>
          <li className="cursor-pointer" onClick={() => scrollToSection('3')}>
            Link Elements
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
          Demystify HTML elements – the building blocks of web content. From text formatting to creating lists and links, this sub-section unlocks the
          essentials for crafting well-structured and engaging web pages.
        </p>
      </div>

      <div className="flex flex-col gap-12 my-12">
        <div id="1">
          <h5 className="text-3xl my-10">Text Elements:</h5>
          <p className="leading-loose text-lg">
            Explore the nuances of text elements in HTML. Heading tags, ranging from h1 to h6, allow you to establish a clear hierarchy in your
            content. Master the use of the paragraph tag (p) to structure text blocks seamlessly. Enhance your text presentation by leveraging bold
            (strong) and italic (em) tags for emphasis.
          </p>
        </div>

        <div id="2">
          <h5 className="text-3xl my-10">List Elements:</h5>
          <p className="leading-loose text-lg">
            Uncover the versatility of list elements. Create unordered lists (ul) for easy-to-read bullet-point information. Utilize ordered lists
            (ol) to bring a sense of order to your content with numbered items. Define terms and their descriptions using the definition list (dl, dt,
            dd), adding clarity and structure to your documents.
          </p>
        </div>

        <div id="3">
          <h5 className="text-3xl my-10">Link Elements:</h5>
          <p className="leading-loose text-lg">
            Master the art of linking within HTML. The anchor tag (a) serves as the gateway to seamless navigation. Link to external resources
            effortlessly and expand your web presence. Create internal links to foster a cohesive user experience, allowing users to navigate
            seamlessly within your website.
          </p>
        </div>
      </div>
      <Disqus title="HTML Elements" />
    </div>
  );
};

export default HTMLElements;
