// Companies.js

import React from 'react';

const Companies = () => {
  const companyLogos = [
    'https://example.com/company1-logo.png',
    'https://example.com/company2-logo.png',
    'https://example.com/company3-logo.png',
    // Add more company logos as needed
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Top Companies</h2>
      <div className="flex flex-wrap justify-center">
        {companyLogos.map((logo, index) => (
          <div key={index} className="m-4">
            <img
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
