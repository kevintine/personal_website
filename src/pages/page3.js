import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

function Page3() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      // If blogs exist in localStorage, use them
      setBlogs(JSON.parse(storedBlogs));
    } else {
      // Otherwise, fetch from the server
      fetchBlogs();
    }
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/blogs'); // Update with your backend endpoint
      const data = await response.json();
      setBlogs(data); // Set blogs in state
      localStorage.setItem('blogs', JSON.stringify(data)); // Save blogs to localStorage
    } catch (error) {
      console.error('Failed to fetch blogs', error);
    }
  };

  return (
    <div style={{ scrollbarGutter: "stable" }} className="p-32 flex flex-col items-center overflow-x-hidden">
      <motion.div 
        className="w-[900px] p-8 flex-grow flex flex-col items-start justify-center border border-black"
        initial={{ opacity: 0 }} // Start with opacity 0
        animate={{ opacity: 1 }}  // Animate to opacity 1
        transition={{ duration: 1 }}  // Set the duration of the fade-in
      >
        <h1 style={{ fontFamily: 'EBGaramond, sans-serif' }} className="text-4xl font-bold mb-8">Blog</h1>
        <p style={{ fontFamily: 'AfacadFlux, sans-serif' }} className="text-left tracking-wide text-lg">
          My blog collection
        </p>

        {/* Map through the blogs and display only the title and date */}
        <div className="mt-4">
          {blogs.map(blog => (
            <a key={blog._id} href={`/blog/${blog._id}`} className="block border border-gray-300 p-4 mb-4 rounded">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-xs text-gray-400">{new Date(blog.dateCreated).toLocaleDateString()}</p>
            </a>
          ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Page3;
