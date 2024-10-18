import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling up, show the navbar
        setShowNavbar(true);
      } else {
        // Scrolling down, hide the navbar
        setShowNavbar(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div 
    className={`z-50 bg-white text-gray-600 text-2xl flex items-center justify-start h-20 w-full fixed bottom-0 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : 'translate-y-full'}`}
    style={{ boxShadow: "0px -2px 1px rgba(0, 0, 0, 0.5)" }} // Custom shadow to make it stronger
    >
    <div className="flex-grow flex justify-between max-w-screen-xl mx-auto px-4"> {/* Added padding to the sides */}
        <div className="space-x-10">
        <Link className="text-black hover:text-red-500" to={"/"}>Home</Link>
        <Link className="hover:text-red-500" to={"/blog"}>Blog</Link>
        <Link className="hover:text-red-500" to={"/about"}>About</Link>
        </div>
        <div>
        <Link className="hover:text-red-500" to={"/contact"}>Contact</Link>
        </div>
    </div>
    </div>

  );
}

export default Navbar;
