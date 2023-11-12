import React, { useState } from 'react';


const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-blue-50 p-6 rounded-lg shadow-md mb- md:mb-0 ${isOpen ? 'border-b-2 border-blue-500' : ''} transition-all duration-1000 ease-in-out`}>
      <div className="flex flex-row justify-between md:flex-row md:justify-between md:items-center " >
        <h3 className="text-lg text-black font-lg mb-2 md:mb-0 md:text-xl">{faq.question}</h3>
        <span className={`cursor-pointer transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-500 ease-in-out`}>
          {isOpen ? (
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material/24/minus--v2.png"
              alt="minus--v2"
              onClick={handleToggle}
            />
          ) : (
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/material/24/000000/plus-math--v2.png"
              alt="plus-math--v2"
              className=" hover:bg-blue-500  rounded-lg"
              onClick={handleToggle}
            />
          )}
        </span>
      </div>
      {isOpen && <p className="text-gray-600 mt-2">{faq.answer}</p>}
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
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3/4 mx-14 mt-8">
  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {faqData.map((faq, index) => (
      <div key={index}  >
        <FaqItem faq={faq} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
      </div>
    ))}
  </div>
</div>

  );
};

export default FaqSection;
