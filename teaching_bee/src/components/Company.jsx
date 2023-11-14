import React from 'react';

const Companies = () => {
  const companies = [
    { name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png' },
    { name: 'Meta', logo: 'https://img.icons8.com/fluency/96/meta.png' },
    { name: 'Google', logo: 'https://img.icons8.com/color/96/google-logo.png' },
    { name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png' },
    { name: 'Meta', logo: 'https://img.icons8.com/fluency/96/meta.png' },
    { name: 'Google', logo: 'https://img.icons8.com/color/96/google-logo.png' },
    // Add more companies as needed
  ];

  return (
    <div className="container mx-auto my-4">
      <h2 className="text-2xl text-gray-500 text-center mb-4">Our users received offers from top companies like</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center items-start">
        {companies.map((company, index) => (
          <div
            key={index}
            className="m-2 text-center flex flex-col items-center grayscale cursor-pointer hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-lg text-gray-700 hover:text-gray-900 font-semibold">{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
