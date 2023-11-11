import React from 'react';

function Card() {
  return (
    <div className="max-w-md mx-auto my-8 rounded overflow-hidden shadow-2xl bg-white p-6 ">
      <div className="py-2 flex items-center space-x-1">
        {/* Assuming you have a star image for the rating */}
        {[1, 2, 3, 4, 5].map((index) => (
          <img
            key={index}
            src="https://img.icons8.com/emoji/48/star-emoji.png"
            alt={`star-${index}`}
            className="w-6 h-6 inline"
          />
        ))}
      </div>
      <p className="text-gray-700 text-base mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero eu sem lobortis ullamcorper.
      </p>
      <div className="flex items-center mt-4">
        <img className="w-14 h-14 inline" src="https://img.icons8.com/clouds/100/user.png" alt="user" />
        <div className="ml-4 flex flex-col">
          <div className="font-xl">Narendra</div>
          <div className="text-gray-500">Developer At teachingBee</div>
        </div>
        <div className="ml-auto">
          <img className="w-12 h-12" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
        </div>
      </div>
    </div>
  );
}

export default Card;
