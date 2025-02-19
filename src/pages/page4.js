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
        {/* <div className="w-full mb-4 md:mb-6">
          <img
            src={main}  
            alt="Welcome Banner"
            className="w-full h-[250px] md:h-[500px] object-cover mb-2 rounded" 
          />
          <p 
            style={{ fontFamily: 'AfacadFlux, sans-serif' }} 
            className="text-center text-gray-600"
          >
            Tobermory Summer 2022
          </p>
        </div> */}
        <p 
          style={{ fontFamily: 'Roboto, sans-serif' }} 
          className="text-left tracking-wide text-sm md:text-lg"
        >
          Hey There!<br/><br/>

          Welcome to my blog, I'm currently working as a&nbsp;
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
          &nbsp; while working on my own projects and learning new things in the mean while. 
          Send me a message about anything! I'd love to chat. <br/><br/>
          
          I've been machining since 2018 where I really developed a passion for automated systems and all the possibilities
          that come with it. I went to Seneca College in 2021 for computer programming and&nbsp;
          <a 
            href="https://learner.mycreds.ca/r/sharelink/56633dab-b720-4e8f-be19-15cb97fdfee6/5d2e0692-6392-47ca-b2ad-3a55fd111cf3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative text-black hover:text-black group"
          >
            <span className="relative inline-block">
              graduated in April 2024
              <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
            </span>
          </a>
          . I've been working 
          working primarily on technologies such as React, Node.js, and Python.  <br/><br/>

          This blog is a collection of my thoughts, tutorials, and news I shared as an individual. I may touch on
          sports, machining tricks, and of course developer struggles.
        </p>

        <hr className="border-t-2 border-gray-300 my-8 w-[90%] mx-auto" />

        <p 
          style={{ fontFamily: 'Roboto, sans-serif' }} 
          className="text-left tracking-wide text-sm md:text-lg"
        >
          My current projects are:<br/><br/>

          <ul className="list-disc ml-6">
            <li>
              <a 
                href="https://github.com/kevintine/Python-Trading-Bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative text-black hover:text-black group"
              >
                <span className="relative inline-block">
                  Python Candlesticks Analysis Chart
                  <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
                </span>
              </a>
              &nbsp;: Able to identify any type of candlestick pattern on any stock during any timeframe. 
            </li>
            <li>
              Currently building a full stack website for my employer using React, Node.js, Express, and Tailwind CSS.
            </li>
          </ul>

          <br/>
          A few others:<br/><br/>

          <ul className="list-disc ml-6">
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
              &nbsp;: Teams and trade analysis based on player statistics. Hoping to win my league this year.
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
              &nbsp;: Pulls art pieces from an external API to display on a React/Next.js site
            </li>
          </ul>

          <br/>
          I'm currently having issues deploying my Python Trading Bot online, issues with the TA-Lib library and the .whl file, let me know if you can help with that. I might have to pick up on how to use Docker.  
        </p>
      </motion.div>

      <Footer/>
    </div>
  );
}

export default Page4;
