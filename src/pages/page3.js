import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

function Page3() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    } else {
      fetchBlogs();
    }
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/blogs'); // Update with your backend endpoint
      const data = await response.json();
      setBlogs(data);
      localStorage.setItem('blogs', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to fetch blogs', error);
    }
  };

  // Helper function to format the date (month in three letters, date in numbers)
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Helper function to extract the year from the date
  const getYear = (dateString) => {
    return new Date(dateString).getFullYear();
  };

  // Group blogs by year
  const groupedBlogs = blogs.reduce((acc, blog) => {
    const year = getYear(blog.dateCreated);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(blog);
    return acc;
  }, {});

  return (
    <div style={{ scrollbarGutter: "stable" }} className="p-32 flex flex-col items-center overflow-x-hidden">
      <motion.div 
        className="w-[900px] p-8 flex-grow flex flex-col items-start justify-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}  
        transition={{ duration: 1 }}
      >
        <h1 style={{ fontFamily: 'EBGaramond, sans-serif' }} className="text-4xl font-bold mb-8">Blog</h1>

        {/* Render blogs grouped by year */}
        <div className="mt-4 w-full">
          {Object.keys(groupedBlogs)
            .sort((a, b) => b - a)  // Sort years in descending order
            .map(year => (
              <div key={year} style={{ fontFamily: 'AfacadFlux, sans-serif' }} className="flex items-start mb-8">
                {/* Year column */}
                <div className="text-3xl font-bold text-right pr-12 pt-4">
                  {year}
                </div>

                {/* Blogs column */}
                <div className="flex-grow">
                  {groupedBlogs[year].map((blog, index) => (
                    <a 
                      key={blog._id} 
                      href={`/blog/${blog._id}`} 
                      className="block border-b border-dotted border-gray-700 tracking-wide"
                    >
                      <span className="relative inline-block group w-full p-4">
                        <div className="flex justify-between items-center w-full">
                          <h2 className="text-3xl text-gray-900">{blog.title}</h2>
                          <p className="text-lg text-gray-600">{formatDate(blog.dateCreated)}</p>
                        </div>
                        {/* Underline effect */}
                        <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-500 group-hover:w-full"></span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Page3;
