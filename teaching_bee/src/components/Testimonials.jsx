import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

const Testimonials = () => {
  const commonSettings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500, // Set the duration for each slide
  };
  
  const responsiveSettings = [
    {
      breakpoint: 576, // Small devices (phones)
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768, // Medium devices (tablets)
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992, // Large devices (desktops)
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200, // Extra-large devices
      settings: {
        slidesToShow: 1,
      },
    },
  ];
  
  const settings = {
    ...commonSettings,
    slidesToShow: 2.8,
    responsive: responsiveSettings,
  };
  

  return (
    <div className='bg-white h-auto p-8 text-black'>
      <div className='max-w-5/6 mx-auto'>
        {/* You can add additional styling or classes to this div if needed */}
        <Slider {...settings} className='shadow-sm'>
          {[1, 2, 3, 4].map((index) => (
            <div key={index}>
              <Card />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
