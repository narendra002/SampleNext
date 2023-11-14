"use client"
import React from "react";
import SpecialOffer from "../components/SpecialOffer.js";
import Banner from "../components/Banner.js";
import Testimonials from "@/components/Testimonials.jsx";
import FaqSection from "@/components/Faq.jsx";
import InterviewReadyComponent from "@/components/EndBanner.jsx";
import Footer from "@/components/Footer.jsx";
import Companies from "@/components/Company.jsx";
import Blog from "@/components/Blog.jsx";
const Header = () => {
  return (
    // <div className="flex flex-col"><header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
    //   <h1 className="text-black text-2xl font-bold">Design Gurus</h1>
    //   <nav>
    //     <ul className="flex space-x-4 ">
    //       <li>
    //         <a href="/courses" className="text-blue-500 font-semibold hover:text-orange-600">Courses</a>
    //       </li>
    //       <li>
    //         <a href="/pricing" className="text-blue-500 font-semibold hover:text-orange-600">Pricing</a>
    //       </li>
    //       <li>
    //         <a href="/mock-interviews" className="text-blue-500 font-semibold hover:text-orange-600">Mock Interviews</a>
    //       </li>
    //       <li>
    //         <a href="/interview-bootcamp" className="text-blue-500 font-semibold hover:text-orange-600">Interview Bootcamp</a>
    //       </li>
    //       <li>
    //         <a href="/guides" className="text-blue-500 font-semibold hover:text-orange-600">Guides</a>
    //       </li>
    //     </ul>
    //   </nav>
    //   <div className="flex space-x-4">
    //     <a href="/contact-us" className="text-blue-500 font-semibold hover:text-orange-600">
    //       Contact Us
    //     </a>
    //     <a href="/login" className="text-blue-500 font-semibold hover:text-orange-600 flex items-center ">
    //       <img className="pr-1" width="24" height="24" src="https://img.icons8.com/ios-filled/50/login-rounded-right.png" alt="Login" />
    //       Login
    //     </a>

    //     <a href="/signup" className="text-blue-500 font-semibold hover:text-orange-600 flex items-center ">
    //       <img className="pr-1" width="24" height="24" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-add-user-tanah-basah-basic-outline-tanah-basah-2.png" alt="Signup" />
    //       Signup
    //     </a>
    //   </div>


    // </header>
    
    // <SpecialOffer className='bg-blue-400 flex justify-around h-10' /> 
    // <Banner className='bg-gray-100 py-5 ' />
//    </div>
<div className="bg-white  m-14">
  <Companies/>
  <Testimonials/>
  <div className="flex">
  <Blog/> 
  <Blog/><Blog/> 
  
    </div>
 
  <FaqSection/>
  <InterviewReadyComponent/>
  <Footer/>
  
  
  
</div>

  );
};

export default Header;
