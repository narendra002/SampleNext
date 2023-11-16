// Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-400 py-4">
            <section className="container mx-auto flex flex-wrap p-4  border-t border-gray-300">
                {/* About Section */}
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                    <img className="mix-blend-multiply w-36" src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1699872643~exp=1699873243~hmac=32fadb4d0af9d286b5b90e89c4441b0a5e6a68fdeba530076c9eddc15c5d956a' alt="Logo" />
                    <p className="text-sm">
                        System Design explained with clear, concise videos. Saves time for your next big interview.
                    </p>
                    <div className="flex mt-2">
    <img className="mr-2" width="24" height="24" src="https://img.icons8.com/material-outlined/24/github.png" alt="github"/>
    <img className="mr-2" width="24" height="24" src="https://img.icons8.com/material-outlined/24/github.png" alt="github"/>
    <img className="mr-2" width="24" height="24" src="https://img.icons8.com/material-outlined/24/github.png" alt="github"/>
    <img className="mr-2" width="24" height="24" src="https://img.icons8.com/material-outlined/24/github.png" alt="github"/>
  </div>  </div>

                {/* Support Section */}
                <section className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                    <span className="text-sm font-semibold block mb-2">SUPPORT</span>
                    <a href="/faq" className="text-sm block mb-2 hover:text-gray-500 transition">FAQ</a>
                    <a href="/contact" className="text-sm block hover:text-gray-500 transition">Contact Us</a>
                </section>

                {/* Company Section */}
                <section className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                    <span className="text-sm block font-semibold mb-2">COMPANY</span>
                    <a href="/" aria-current="page" className="text-sm block mb-2 hover:text-gray-500 transition">Home</a>
                    <a href="/blog" className="text-sm block mb-2 hover:text-gray-500 transition">Blog</a>
                    <a href="/about-us" className="text-sm block mb-2 hover:text-gray-500 transition">About us</a>
                    <a href="https://testimonial.to/system-design-course-interviewready/all" target="_blank" rel="noopener noreferrer" className="text-sm block hover:text-gray-500 transition">
                        Testimonials
                    </a>
                </section>

                {/* Legal Section */}
                <section className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
                    <span className="text-sm block mb-2 font-semibold">LEGAL</span>
                    <a href="/disclaimer" className="text-sm block mb-2 hover:text-gray-500 transition">Disclaimer</a>
                    <a href="/privacy-policy" className="text-sm block mb-2 hover:text-gray-500 transition">Privacy Policy</a>
                    <a href="/tnc" className="text-sm block hover:text-gray-500 transition">Terms &amp; Conditions</a>
                </section>
            </section>

            {/* Bottom Section */}
            <section className="text-center border-t border-gray-300 mt-4 pt-2">
                <p className="text-sm">© 2023 Interview Ready. All rights reserved.</p>
            </section>
        </footer>
    );
};

export default Footer;
