// InterviewReadyComponent.jsx
import React from 'react';

const InterviewReadyComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-auto my-72 md:my-32 rounded-lg overflow-hidden text-center max-w-5xl bg-gradient-to-r from-blue-700 via-blue-700 to-blue-700">
      <div className="w-full md:w-1/2 p-8 md:p-16">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Get InterviewReady Now!
        </h1>
        <button className="mt-6 md:mt-8 px-8 py-3 bg-white text-blue-700 rounded-full text-lg md:text-xl font-medium focus:outline-none">
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
