import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown

function BlogDetail() {
  const { id } = useParams();  // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (storedBlogs) {
      const blogPost = storedBlogs.find(blog => blog._id === id);
      setBlog(blogPost);
    }
  }, [id]);

  if (!blog) return <div>Loading...</div>; // Display a loading state while the blog is being fetched

  return (
    <div className="p-32 flex flex-col items-center">
      <div className="w-[900px] p-8 flex-grow flex flex-col items-start justify-center border border-black">
        <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>
        <p className="text-xs text-gray-400 mb-4">{new Date(blog.dateCreated).toLocaleDateString()}</p>

        {/* Render markdown content using ReactMarkdown */}
        <ReactMarkdown className="text-lg mb-8">{blog.content}</ReactMarkdown>

        {blog.images && blog.images.length > 0 && (
          <div className="mt-2">
            {blog.images.map((image, index) => (
              <div key={index}>
                <img src={image.url} alt={image.caption} className="max-w-full h-auto" />
                <p className="text-gray-500">{image.caption}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default BlogDetail;
