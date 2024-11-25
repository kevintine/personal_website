import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Page2() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://personal-website-api-vzi5.onrender.com/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = () => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
    navigate('/blog');
  };

  return (
    <motion.div 
      className="p-4 min-h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}  
      transition={{ duration: 1 }}  
    >
      <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg">
        <h1 
          style={{ fontFamily: 'EBGaramond, sans-serif' }} 
          className="text-4xl font-semibold mb-1 text-center"
        >
          My little slice of the internet
        </h1>
        <p 
          style={{ fontFamily: 'AfacadFlux-Light, sans-serif' }} 
          className="text-2xl italic tracking-wide mb-8 text-center"
        >
          A solo developer helping people and himself
        </p>

        <div className="flex justify-center space-x-8 mb-4">
          <a
            href="https://www.linkedin.com/in/kevin-tran-854b90168/"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-4xl text-black hover:text-blue-600"
          >
            <span className="relative inline-block">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </span>
          </a>
          <a
            href="https://github.com/kevintine"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-4xl text-black hover:text-blue-600"
          >
            <span className="relative inline-block">
              <FontAwesomeIcon icon={faGithub} />
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-4 w-full">
          <a
            href="/about"
            className="group text-3xl text-gray-700 w-full text-center"
            style={{ fontFamily: 'AfacadFlux, sans-serif' }}
          >
            <span className="relative inline-block w-full">
              About
              <span className="absolute left-0 -bottom-1 h-1 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </a>
          <button
            onClick={handleBlogClick}
            className="group text-3xl text-gray-700 w-full text-center"
            style={{ fontFamily: 'AfacadFlux, sans-serif' }}
          >
            <span className="relative inline-block w-full">
              Blog
              <span className="absolute left-0 -bottom-1 h-1 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </button>
          <a
            href="/contact"
            className="group text-3xl text-gray-700 w-full mb-12 text-center"
            style={{ fontFamily: 'AfacadFlux, sans-serif' }}
          >
            <span className="relative inline-block w-full">
              Contact
              <span className="absolute left-0 -bottom-1 h-1 bg-red-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </a>
        </div>

        {loading && <p>Blogs loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
      <Footer />
    </motion.div>
  );
}

export default Page2;
