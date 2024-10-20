import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';  
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';  
import styled from 'styled-components';

const MarkdownWrapper = styled.div`
  font-family: 'AfacadFlux', sans-serif; // Change to your desired font
  font-size: 1.3rem; // Adjust the size as needed
  line-height: 1.5; // Adjust line height for better readability
  margin-bottom: 2rem; // Margin bottom to space out the content
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

  if (!blog) return <div>Loading...</div>;  

  return (
    <motion.div 
      className="p-32 flex flex-col items-center"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }}  // Animate to opacity 1
      transition={{ duration: 1 }}  // Set the duration of the fade-in
    >
      <div className="w-[900px] p-8 flex-grow flex flex-col items-start justify-center">
        <h1 style={{ fontFamily: 'EBGaramond, sans-serif' }} className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p style={{ fontFamily: 'AfacadFlux, sans-serif' }} className="text-lg text-gray-400 mb-4">{new Date(blog.dateCreated).toLocaleDateString()}</p>

        {/* Render markdown content using ReactMarkdown */}
        <MarkdownWrapper>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
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
