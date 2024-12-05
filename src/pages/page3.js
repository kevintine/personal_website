import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Page3() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      // Check sessionStorage for cached blogs
      const cachedBlogs = sessionStorage.getItem("cachedBlogs");
      if (cachedBlogs) {
        setBlogs(JSON.parse(cachedBlogs));
        setLoading(false);
      } else {
        try {
          const response = await fetch("http://localhost:5000/blogs"); // Update with your backend endpoint
          if (!response.ok) throw new Error("Failed to fetch blogs");
          const data = await response.json();
          setBlogs(data);

          // Cache blogs in sessionStorage
          sessionStorage.setItem("cachedBlogs", JSON.stringify(data));
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBlogs();
  }, []);

  // Helper function to format the date (e.g., "Mar 3")
  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Helper function to extract the year
  const getYear = (dateString) => new Date(dateString).getFullYear();

  // Group blogs by year
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
            <p>Loading blogs...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="mt-4 w-full">
              {Object.keys(groupedBlogs)
                .sort((a, b) => b - a) // Sort years in descending order
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
                        <a
                          key={blog._id}
                          href={`/blog/${blog._id}`}
                          className="block border-b border-dotted border-gray-700 tracking-wide"
                        >
                          <span className="relative inline-block group w-full p-2 md:p-4">
                            <div className="flex justify-between items-center w-full">
                              <h2 className="text-xl md:text-3xl text-gray-900">
                                {blog.title}
                              </h2>
                              <p className="text-sm md:text-lg text-gray-600">
                                {formatDate(blog.dateCreated)}
                              </p>
                            </div>
                              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-red-500 group-hover:w-full"></span>
                          </span>
                        </a>
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
