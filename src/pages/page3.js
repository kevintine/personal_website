import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SquareLoader from 'react-spinners/SquareLoader';

function Page3() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Apply styles for the scrollbar
    document.documentElement.style.overflowY = "scroll"; // Permanent vertical scrollbar
    document.documentElement.style.overflowX = "hidden"; // Prevent horizontal scrollbar
  
    const fetchBlogs = async () => {
      const cachedBlogs = localStorage.getItem("blogs");
      if (cachedBlogs) {
        setBlogs(JSON.parse(cachedBlogs));
        setLoading(false);
      } else {
        try {
          const response = await fetch("https://personal-website-api-vzi5.onrender.com/blogs"); // Update with your backend endpoint
          if (!response.ok) throw new Error("Failed to fetch blogs");
          const data = await response.json();
          setBlogs(data);
  
          localStorage.setItem("blogs", JSON.stringify(data));
          console.log("Blogs saved to localStorage:", data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };
  
    fetchBlogs();
  }, []);
  

  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getYear = (dateString) => new Date(dateString).getFullYear();

  const groupedBlogs = blogs.reduce((acc, blog) => {
    const year = getYear(blog.dateCreated);
    acc[year] = acc[year] || [];
    acc[year].push(blog);
    return acc;
  }, {});

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-4 md:p-16 lg:p-32 flex flex-col items-center overflow-x-hidden">
        <motion.div
          className="max-w-[900px] w-full p-4 md:p-8 flex-grow flex flex-col items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            style={{ fontFamily: "EBGaramond, sans-serif" }}
            className="text-3xl md:text-4xl font-bold mb-4 md:mb-8"
          >
            Blog
          </h1>

          {loading ? (
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
              {/* Loader */}
              <SquareLoader color="#ff2b2b" size={50} />
              
              {/* Message */}
              <p className="mt-4 text-sm text-center" style={{ color: "#ff2b2b" }}>
                Blogs are hosted on a free service backend. Please be patient!
              </p>
            </div>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="mt-4 w-full">
              {Object.keys(groupedBlogs)
                .sort((a, b) => b - a)
                .map((year) => (
                  <div
                    key={year}
                    style={{ fontFamily: "AfacadFlux, sans-serif" }}
                    className="flex items-start mb-8"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-right pr-8 md:pr-12 pt-4">
                      {year}
                    </div>
                    <div className="flex-grow">
                      {groupedBlogs[year].map((blog) => (
                        <Link
                        key={blog._id}
                        to={`/blog/${blog._id}`}
                        className="block border-b border-dotted border-gray-700 tracking-wide"
                        >
                          <span className="relative inline-block group w-full p-2 md:p-4">
                            <div
                              className="flex justify-between items-center w-full"
                              style={{ fontFamily: "Roboto, sans-serif" }}
                            >
                              <h2 className="md:text-2xl text-gray-900">
                                {blog.title}
                              </h2>
                              <p className="text-sm md:text-base text-gray-600">
                                {formatDate(blog.dateCreated)}
                              </p>
                            </div>
                            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-500 group-hover:w-full"></span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default Page3;
