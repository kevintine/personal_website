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
        const response = await fetch('http://localhost:5000/blogs'); // Adjust to your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
        console.log(blogs)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs(); // Fetch blogs when the main page loads
  }, []);

  const handleBlogClick = () => {
    // Store blogs in localStorage or context if needed before navigating
    localStorage.setItem('blogs', JSON.stringify(blogs)); // Example using localStorage
    navigate('/blog'); // Navigate to the Blog page
  };

  return (
    <motion.div 
      className="p-4 min-h-screen flex flex-col items-center justify-center border border-black"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }}  // Animate to opacity 1
      transition={{ duration: 1 }}  // Set the duration of the fade-in
    >
      <div className="flex-grow flex flex-col items-center justify-center w-[500px]">
        <h1 style={{ fontFamily: 'EBGaramond, sans-serif' }} className="text-4xl font-semibold mb-1">
          My little slice of the internet
        </h1>
        <p style={{ fontFamily: 'AfacadFlux-Light, sans-serif' }} className="text-2xl italic tracking-wide mb-8">
          A solo developer trying to help people and himself
        </p>
        
        <div className="flex justify-center space-x-8 mb-4">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
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
            href="https://github.com/your-github-username"
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

        <div className="flex flex-col item-center space-y-4 w-full">
          <a
            href="/about"
            className="group text-3xl text-gray-700 w-full"
            style={{ fontFamily: 'AfacadFlux, sans-serif' }}
          >
            <span className="relative inline-block w-full text-center">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-500 group-hover:w-full"></span>
            </span>
          </a>
          <button
            onClick={handleBlogClick} // Use button for Blog link
            className="group text-3xl text-gray-700 w-full"
            style={{ fontFamily: 'AfacadFlux, sans-serif' }}
          >
            <span className="relative inline-block w-full text-center">
              Blog
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-500 group-hover:w-full"></span>
            </span>
          </button>
          <a
            href="/contact"
            className="group text-3xl text-gray-700 w-full"
            style={{ fontFamily: 'AfacadFlux, sans-serif' }}
          >
            <span className="relative inline-block w-full text-center">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-500 group-hover:w-full"></span>
            </span>
          </a>
        </div>
      </div>
      <Footer/>
    </motion.div>
  );
}

export default Page2;
