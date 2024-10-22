import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425); // Check if screen is <= 425px
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0); // Use useRef to keep track of lastScrollY

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY.current) {
        // Scrolling up, show the navbar
        setShowNavbar(true);
      } else {
        // Scrolling down, hide the navbar
        setShowNavbar(false);
      }
      lastScrollY.current = window.scrollY; // Update the ref
    };

    const handleResize = () => {
      // Check if the screen width is <= 425px
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // No dependencies needed here

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close state
  };

  return (
    <div 
      className={`z-50 bg-white text-gray-600 text-3xl flex items-center justify-start h-20 w-full fixed bottom-0 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : 'translate-y-full'}`}
      style={{ boxShadow: "0px -2px 1px rgba(0, 0, 0, 0.5)" }} // Custom shadow to make it stronger
    >
      <div className="flex-grow flex justify-between max-w-screen-xl mx-auto px-4"> {/* Added padding to the sides */}
        {isMobile ? (
          <>
            {/* Mobile hamburger icon */}
            <button onClick={toggleMenu} className="text-3xl">
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>

            {/* Mobile menu - initially hidden */}
            <div
              className={`absolute bottom-20 left-0 w-full bg-white p-6 transition-transform duration-500 ease-in-out transform ${
                menuOpen ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              {menuOpen && (
                <div className="flex flex-col items-center space-y-6">
                  <Link
                    onClick={toggleMenu}
                    style={{ fontFamily: 'AfacadFlux, sans-serif' }}
                    className="text-black hover:text-red-500"
                    to={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    style={{ fontFamily: 'AfacadFlux, sans-serif' }}
                    className="hover:text-red-500"
                    to={"/blog"}
                  >
                    Blog
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    style={{ fontFamily: 'AfacadFlux, sans-serif' }}
                    className="hover:text-red-500"
                    to={"/about"}
                  >
                    About
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    style={{ fontFamily: 'AfacadFlux, sans-serif' }}
                    className="hover:text-red-500"
                    to={"/contact"}
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Full-size Navbar */}
            <div className="space-x-10">
              <Link
                style={{ fontFamily: 'AfacadFlux, sans-serif' }}
                className="text-black hover:text-red-500"
                to={"/"}
              >
                Home
              </Link>
              <Link
                style={{ fontFamily: 'AfacadFlux, sans-serif' }}
                className="hover:text-red-500"
                to={"/blog"}
              >
                Blog
              </Link>
              <Link
                style={{ fontFamily: 'AfacadFlux, sans-serif' }}
                className="hover:text-red-500"
                to={"/about"}
              >
                About
              </Link>
            </div>
            <div>
              <Link
                style={{ fontFamily: 'AfacadFlux, sans-serif' }}
                className="hover:text-red-500"
                to={"/contact"}
              >
                Contact
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
