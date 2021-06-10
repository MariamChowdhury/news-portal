import React from 'react';
import news from '../images/news-concept-landing-page_52683-20522.jpg'
const Header = () => {
  return (
    <div>
      <div className="bg-green-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-bold font-sans tracking-tight text-green-900 sm:text-4xl">
          <span className="block">Want to know the latest news?</span>
          <span className="block text-green-600 mt-3">You've come to the right place.</span>
          <div className="inline-flex rounded-md shadow mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-normal font-sans rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Get started
            </a>
          </div>
          <div className="mt-8 ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-normal font-sans rounded-md text-green-600 bg-white hover:bg-green-50"
            >
              Learn more
            </a>
          </div>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <img src={news} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;