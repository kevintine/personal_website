import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

function Page5() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make a POST request to your backend API endpoint
      const response = await fetch('https://personal-website-api-vzi5.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the form data to the backend
      });

      const result = await response.json();

      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('Error sending email, please try again later.');
    }
  };

  return (
    <div className="p-4 h-[110vh] flex items-center justify-center flex flex-col overflow-x-hidden">
      <motion.div 
        className="bg-white max-w-lg w-full p-10"
        initial={{ opacity: 0, y: 0 }}  // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }}   // Fade in and move up
        transition={{ duration: 1 }}     // 1-second animation
      >
        <h1 style={{ fontFamily: 'EBGaramond, sans-serif' }} className="text-4xl font-bold mb-4 text-center">Send Me A Message</h1>
        <p style={{ fontFamily: 'Roboto, sans-serif' }} className="text-left text-lg mb-4">
          If you're interested in a website or just want to chat, send me a message and I'll get back to you shortly!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} style={{ fontFamily: 'AfacadFlux, sans-serif' }} className="flex flex-col space-y-4 text-lg">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Name:</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: true })} // Register field with validation
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.name && <p className="text-red-500">Name is required.</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} // Register field with validation
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500">Please enter a valid email address.</p>}
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message:</label>
            <textarea
              id="message"
              {...register('message', { required: true })} // Register field with validation
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500 h-32"
            />
            {errors.message && <p className="text-red-500">Message is required.</p>}
          </div>
          <button
            type="submit"
            className="bg-red-400 text-white py-2 px-4 hover:bg-red-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </motion.div>
      <Footer/>
    </div>
  );
}

export default Page5;
