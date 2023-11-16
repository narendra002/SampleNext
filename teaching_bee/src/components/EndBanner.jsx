import React from 'react';

const InterviewReadyComponent = () => {
  return (
    <div className="flex flex-col  md:flex-row items-center justify-center mx-auto my-10 md:my-3 rounded-lg overflow-hidden text-center max-w-5xl bg-gradient-to-r from-blue-700 via-blue-700 to-blue-700">
      <div className="w-full md:w-1/2 p-6 md:p-12">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Get InterviewReady Now!
        </h1>
        <button className="mt-4 md:mt-6 px-6 py-2 bg-white text-blue-700 rounded-full text-md md:text-lg font-medium focus:outline-none">
          Start Learning
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="https://cdn.interviewready.io/gk_333.png"
          alt="cta image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default InterviewReadyComponent;
