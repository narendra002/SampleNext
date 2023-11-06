import React from 'react';

function HeroSection() {
  return (
    <section className="bg-gray-100 py-5 sm:py-5">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <div className="sm:w-1/2 pr-8 text-center sm:text-left"> {/* Center text in small screens */}
          <h1 className="text-3xl text-black sm:text-4xl md:text-5xl font-bold mb-4">
            Grokking System Design and Coding Interview
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-bold text-black mb-8"> {/* Change font to bold and color to gray */}
            One-Stop Portal For Tech Interviews.
          </p>

          <div className="flex items-center justify-center sm:justify-start"> {/* Center icons in small screens */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-blue-500 hover:underline"
            >
              <img width="24" height="24" src="https://img.icons8.com/color/48/microsoft.png" alt="microsoft"/> Microsoft
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-blue-500 hover:underline"
            >
              <img width="24" height="24" src="https://img.icons8.com/fluency/48/meta.png" alt="meta"/> Meta
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <img width="24" height="24" src="https://img.icons8.com/color/48/netflix.png" alt="netflix"/> Netflix
            </a>
          </div>
        </div>

        <div className="sm:w-1/2 mt-8 sm:mt-0 text-center sm:text-left"> {/* Center image in small screens */}
          <img
            src="https://www.designgurus.io/_next/static/media/headerImage.8b989394.svg"
            alt="Freelancer Illustration"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
