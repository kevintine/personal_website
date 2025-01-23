import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';  
import { motion } from 'framer-motion'; 
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';  
import styled from 'styled-components';
import SquareLoader from 'react-spinners/SquareLoader';

const MarkdownWrapper = styled.div`
  font-family: 'AfacadFlux', sans-serif;
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  p {
    margin: 1.5em 0; /* Adds space between paragraphs */
  }

  ul, ol {
    margin-left: 2rem; /* Indent lists for better readability */
    padding-left: 1.5rem; /* Adds space for bullets or numbers */
  }

  ul {
    list-style-type: disc; /* Display bullet points */
  }

  ol {
    list-style-type: decimal; /* Display numbers for ordered lists */
  }

  li {
    margin-bottom: 0.5rem; /* Add spacing between list items */
    line-height: 1.6; /* Improve readability of multiline list items */
  }
`;

function BlogDetail() {
  const { id } = useParams();  
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (storedBlogs) {
      const blogPost = storedBlogs.find(blog => blog._id === id);
      setBlog(blogPost);
    }
  }, [id]);

  if (!blog) return <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
  {/* Loader */}
  <SquareLoader color="#ff2b2b" size={50} />
  
  {/* Message */}
  <p className="mt-4 text-sm text-center" style={{ color: "#ff2b2b" }}>
    Blogs are hosted on a free service backend. Please be patient!
  </p>
</div>;

  return (
    <motion.div 
      className="p-6 flex flex-col items-center"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}  
      transition={{ duration: 1 }}
    >
      {/* Container to center content with a max-width */}
      <div className="w-full max-w-[900px] mx-auto p-4 md:p-8 flex-grow flex flex-col items-start justify-center">
        <h1 
          style={{ fontFamily: 'EBGaramond, sans-serif' }} 
          className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left"
        >
          {blog.title}
        </h1>
        <p 
          style={{ fontFamily: 'AfacadFlux, sans-serif' }} 
          className="text-base sm:text-lg text-gray-400 mb-4 text-center sm:text-left"
        >
          {new Date(blog.dateCreated).toLocaleDateString()}
        </p>

        <MarkdownWrapper className="text-base sm:text-lg">
          <ReactMarkdown>
            {blog.content}
          </ReactMarkdown>
        </MarkdownWrapper>

        <Link to="/blog" className="mt-8 flex items-center text-blue-500 hover:text-blue-700">
          <span className="mr-2">&#8592;</span> 
          <span>Back to Blog</span>
        </Link>
      </div>

      <Footer />
    </motion.div>
  );
}

export default BlogDetail;
