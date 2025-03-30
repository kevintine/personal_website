import React from "react";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

function Page4() {
  return (
    <div 
      style={{ scrollbarGutter: "stable" }} 
      className="p-6 flex flex-col items-center overflow-x-hidden"
    >
      <motion.div 
        className="w-full max-w-[900px] mx-auto p-4 md:p-8 flex-grow flex flex-col items-start justify-center"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}  
        transition={{ duration: 1 }}
      >
        <h1 
          style={{ fontFamily: 'EBGaramond, sans-serif' }} 
          className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center md:text-left"
        >
          About
        </h1>
        <p 
  style={{ fontFamily: 'Roboto, sans-serif' }} 
  className="text-left tracking-wide text-sm md:text-lg"
>
  Hey there!<br /><br />

  Welcome to my blog. I'm currently working as a&nbsp;
  <a 
    href="https://en.wikipedia.org/wiki/Numerical_control" 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative text-black hover:text-black group"
  >
    <span className="relative inline-block">
      CNC Machinist
      <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
    </span>
  </a>
  , while continuously exploring new ideas and developing personal projects in my spare time.
  <br /><br />

  My journey into tech began in 2018 through machining, where I discovered a deep interest in automation and systems thinking. I enrolled at&nbsp;
  <a 
    href="https://learner.mycreds.ca/r/sharelink/56633dab-b720-4e8f-be19-15cb97fdfee6/5d2e0692-6392-47ca-b2ad-3a55fd111cf3" 
    target="_blank" 
    rel="noopener noreferrer"
    className="relative text-black hover:text-black group"
  >
    <span className="relative inline-block">
      Seneca College
      <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
    </span>
  </a>
  &nbsp;in 2021, where I studied Computer Programming and&nbsp;
  <span className="relative inline-block">
    graduated in April 2024
    <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
  </span>
  .
  <br /><br />

  These days, I’m focused on developing tools that combine&nbsp;
  <span className="relative inline-block">
    algorithmic trading
    <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
  </span>
  ,&nbsp;
  <span className="relative inline-block">
    data analytics
    <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
  </span>
  , and financial strategy. This blog is where I share thoughts, technical tutorials, and personal updates. You’ll find a mix of topics here—from software challenges to machining tricks to the occasional sports commentary.
</p>

<hr className="border-t-2 border-gray-300 my-8 w-[90%] mx-auto" />

<p 
  style={{ fontFamily: 'Roboto, sans-serif' }} 
  className="text-left tracking-wide text-sm md:text-lg"
>
  Current Projects:<br /><br />
  <ul className="list-disc ml-6">
    <li>
      <a 
        href="https://github.com/kevintine/Python-Trading-Bot" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative text-black hover:text-black group"
      >
        <span className="relative inline-block">
          Python Stock Trading Bot
          <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
        </span>
      </a>
      &nbsp;: Currently a backtesting enviroment for algorithmic trading. Able to run strategies and visualize results. 
    </li>
    <li>
      <a 
        href="https://github.com/kevintine/Fantasy-BBall-App" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative text-black hover:text-black group"
      >
        <span className="relative inline-block">
          Yahoo Fantasy NBA Analysis
          <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
        </span>
      </a>
      &nbsp;: Statistical tools to analyze player and trade value for fantasy sports. 
    </li>
    <li>
      <a 
        href="https://github.com/kevintine/Museum-of-Art-Collection-API" 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative text-black hover:text-black group"
      >
        <span className="relative inline-block">
          Metropolitan Museum of Art Website
          <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
        </span>
      </a>
      &nbsp;: Pulls artwork from an external API to display in a gallery-style interface.
    </li>
  </ul>

  <br />
  I’m currently working through some deployment issues with the&nbsp;
  <span className="relative inline-block">
    TA-Lib library
    <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
  </span>
  &nbsp;used in my trading bot. If you're familiar with deploying Python apps that rely on compiled .whl files—or using Docker to simplify things—feel free to reach out!
</p>

      </motion.div>

      <Footer/>
    </div>
  );
}

export default Page4;
