import React, { useState } from 'react';

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item bg-blue-50 p-4 rounded-lg transition-all duration-700 ease-in-out transform shadow-md mb-4 md:mb-0 ${isOpen ? 'border-2 border-blue-500 rounded-lg' : ''}`}>
      <div className="flex flex-row justify-between md:flex-row md:justify-between md:items-center">
        <h3 className="text-lg text-black font-medium mb-2 md:mb-0 md:text-xl">{faq.question}</h3>
        <div
          className={`cursor-pointer ${isOpen ? 'text-blue-500' : 'text-blue-700 hover:text-white'}`}
          onClick={handleToggle}
        >
          {isOpen ? (
            <span className="text-4xl font-bold text-white bg-blue-500 px-3 rounded-lg">-</span>
          ) : (
            <span className="text-4xl font-bold hover:bg-blue-500 px-2 rounded-lg">+</span>
          )}
        </div>
      </div>
      {isOpen && <p className="text-gray-600 font-medium mt-2 delay-700 transition-all ease-linear">{faq.answer}</p>}
    </div>
  );
};

const FaqHeading = () => {
  return (
    <div className="faq-heading text-black flex flex-col md:flex-row items-center">
      {/* Show only on medium and larger screens */}
      <div className="hidden md:flex md:flex-row items-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-0 md:mr-1">F</h1>
        <h4 className="text-base md:text-xl mb-1 md:mb-0 md:mr-1 px-2">to the</h4>
        <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-0 md:mr-1">A</h1>
      </div>

      {/* Show only on small screens */}
      <div className="md:hidden flex flex-row items-center">
        {['F', 'A', 'Q'].map((item, index) => (
          <h1
            key={index}
            className="text-2xl md:text-4xl px-1 font-bold mb-1 md:mb-0 md:mr-1"
          >
            {item}
          </h1>
        ))}
        <img
          className="w-full md:w-48 h-auto md:h-72 mb-1 md:mb-0 md:mr-1"
          src="https://scrimba.com/static/art/peep-oracle.svg"
          alt="Cartoon"
        />
      </div>

      {/* Show on extra-large screens and always show the image */}
      <img
        className="hidden md:block w-full md:w-48 h-auto md:h-72 mb-1 md:mb-0 md:mr-1"
        src="https://scrimba.com/static/art/peep-oracle.svg"
        alt="Cartoon"
      />

      {/* Show only on medium and larger screens */}
      <div className="hidden md:flex md:flex-row items-center">
        <h4 className="text-base md:text-xl mb-1 md:mb-0 md:mr-1 px-2">to the</h4>
        <h1 className="text-2xl md:text-4xl font-bold">Q</h1>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'Where does it come from?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },{
        question: 'What is Lorem Ipsum?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
      },
      {
        question: 'Why do we use it?',
        answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        question: 'Where does it come from?',
        answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-section max-w-3/4 mx-14 mt-8">
      <FaqHeading />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqData.map((faq, index) => (
          <div key={index}>
            <FaqItem faq={faq} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
