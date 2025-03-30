import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import SquareLoader from "react-spinners/SquareLoader";

const MarkdownWrapper = styled.div`
  font-family: "AfacadFlux", sans-serif;
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  p {
    margin: 1.5em 0;
  }

  ul,
  ol {
    margin-left: 2rem;
    padding-left: 1.5rem;
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
  
        // Try fetching directly from the backend
        const response = await fetch(`https://personal-website-api-vzi5.onrender.com/blogs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog from the backend.");
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        console.error("Fetch failed, trying localStorage...", err);
  
        // Try localStorage as a backup
        const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
        if (storedBlogs) {
          const blogPost = storedBlogs.find((b) => b._id === id);
          if (blogPost) {
            setBlog(blogPost);
            return;
          }
        }
  
        // Still failed
        setError("Blog not found.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
        <SquareLoader color="#ff2b2b" size={50} />
        <p className="mt-4 text-sm text-center" style={{ color: "#ff2b2b" }}>
          Blogs are hosted on a free service backend. Please be patient!
        </p>
      </div>
    );

  if (error)
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
        <p className="text-center text-red-500">{error}</p>
        <Link to="/blog" className="mt-4 text-blue-500 hover:text-blue-700">
          Back to Blog
        </Link>
      </div>
    );

  return (
    <motion.div
      className="p-6 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-[900px] mx-auto p-4 md:p-8 flex-grow flex flex-col items-start justify-center">
        <h1
          style={{ fontFamily: "EBGaramond, sans-serif" }}
          className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left"
        >
          {blog.title}
        </h1>
        <p
          style={{ fontFamily: "AfacadFlux, sans-serif" }}
          className="text-base sm:text-lg text-gray-400 mb-4 text-center sm:text-left"
        >
          {new Date(blog.dateCreated).toLocaleDateString()}
        </p>

        <MarkdownWrapper className="text-base sm:text-lg">
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </MarkdownWrapper>

        <Link to="/blog" className="mt-8 flex items-center text-blue-500 hover:text-blue-700">
          <span className="mr-2">&#8592;</span>
          <span>Go Back</span>
        </Link>
      </div>
      <Footer />
    </motion.div>
  );
}

export default BlogDetail;
