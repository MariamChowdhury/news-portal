import React from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Openings = () => {
  return (
    <div className="bg-green-50">
      <div className="lg:flex lg:items-center lg:justify-between py-12 px-12">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-green-900 sm:text-3xl sm:truncate">
            Back End Developer
          </h2>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-green-500">
              Full-time
            </div>
            <div className="mt-2 flex items-center text-sm text-green-500">
              Remote
            </div>
            <div className="mt-2 flex items-center text-sm text-green-500">
              $120k &ndash; $140k
            </div>
            <div className="mt-2 flex items-center text-sm text-green-500">
              Closing on June 19, 2021
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-green-300 rounded-md shadow-sm text-sm font-medium text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              View
            </button>
          </span>
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Apply
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Openings;
