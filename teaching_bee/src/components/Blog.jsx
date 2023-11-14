import React from 'react';

function Blog() {
  return (
    <div className="w-full md:w-2/6 lg:max-w-lg xl:max-w-xl mx-4 my-8 rounded-lg overflow-hidden shadow-1xl border border-gray-200 bg-white p-6">
      <div className="flex items-center mb-4">
        <img className="w-12 h-12 rounded-full" src="https://img.icons8.com/clouds/100/user.png" alt="user" />
        <div className="ml-4 flex flex-col">
          <div className="font-semibold text-gray-800">Narendra</div>
          <div className="text-gray-500">Developer at teachingBee</div>
        </div>
        <div className="ml-auto">
          <img className="w-10 h-10" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
        </div>
      </div>
      <p className="text-gray-700 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero eu sem lobortis ullamcorper.
      </p>
      <div className="mt-4">
        <img
          src='https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=740&t=st=1699875358~exp=1699875958~hmac=54889e085f1f57cc5cc85d2ef92efa8ea8fea03c339059c0ccabd1ac5a2ce1a6'
          alt="Blog Illustration"
          className="w-full rounded-lg mix-blend-multiply"
        />
      </div>
    </div>
  );
}

export default Blog;
