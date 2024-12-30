import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-gray-300 py-8 px-4 md:px-16 mt-auto"> {/* Dark background, light text, padding */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center"> {/* Container for centering, flex for layout */}
                <div className="mb-6 md:mb-0 text-center md:text-left"> {/* Contact Us Section */}
                    <h4 className="text-xl font-semibold mb-2">CONTACT US</h4>
                    <p className="text-sm">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="text-sm">+88 123456789</p>
                    <p className="text-sm">Mon - Fri: 08:00-22:00</p>
                    <p className="text-sm">Sat - Sun: 10:00-23:00</p>
                </div>

                <div className="flex flex-col items-center md:items-start"> {/* Follow Us Section */}
                    <h4 className="text-xl font-semibold mb-2">Follow US</h4>
                    <div className="flex space-x-4"> {/* Social Icons */}
                        <a href="#" className="hover:text-white"> {/* Add your social links and icons */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 pt-4 border-t border-gray-600 text-sm"> {/* Copyright Section */}
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
