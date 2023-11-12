import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'

const Slider = dynamic(() => import('react-slick'), { ssr: false }); // Use dynamic to import Slider on the client side
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';

const Testimonials = () => {
  const commonSettings = {
    // dots: true,
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
        slidesToShow: 0.77,
      },
    },
    {
      breakpoint: 768, // Medium devices (tablets)
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992, // Large devices (desktops)
      settings: {
        slidesToShow: 2.5,
      },
    },
    {
      breakpoint: 1200, // Extra-large devices
      settings: {
        slidesToShow: 3,
      },
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    // Check if window is defined before adding event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      // Check if window is defined before removing event listener
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  function getSlidesToShow() {
    // Check if window is defined before using it
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

    if (screenWidth < 576) {
      return 0.69;
    } else if (screenWidth < 768) {
      return 2;
    } else if (screenWidth < 992) {
      return 2.5;
    } else {
      return 3.3;
    }
  }

  const settings = {
    ...commonSettings,
    slidesToShow,
    responsive: responsiveSettings,
  };

  return (
    <div className='bg-white h-auto p-8 text-black'>
      <div className='max-w-5/6 mx-auto'>
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
