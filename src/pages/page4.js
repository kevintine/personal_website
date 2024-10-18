import React from "react";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

function Page4() {
  return (
    <div style={{ scrollbarGutter: "stable" }} className="p-32 flex flex-col items-center overflow-x-hidden">
      <motion.div 
        className="max-w-[900px] p-8 flex-grow flex flex-col items-start justify-center"
        initial={{ opacity: 0 }} // Start with opacity 0
        animate={{ opacity: 1 }}  // Animate to opacity 1
        transition={{ duration: 1 }}  // Set the duration of the fade-in
      >
        <h1 style={{ fontFamily: 'EBGaramond, sans-serif' }} className="text-4xl font-bold mb-8">About</h1>
        <p style={{ fontFamily: 'AfacadFlux, sans-serif' }} className="text-left tracking-wide text-lg">
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
          &nbsp;part time while also freelancing websites for 
          individuals and businesses. I have an AD in Mechanical Engineering Technology from Humber College and 
          a AD in Computer Programming And Analysis from Seneca College. I'm currently in the middle of a career 
          switch where I'm looking for a full time developer position. <br/><br/>
          
          I've been machining since 2018 where I really developed a passion for automated systems and all the possibilites
          that come with it. I returned to school in 2021 for programming and graduated in April 2024. I've been on the job 
          hunt ever since. <br/><br/>

          This blog is a collection of my thoughts, ramblings, and news I shared as an individual. I may touch on international news, 
          sports topics, machining tricks, and of course developer struggles. I don't think I'm quite qualified to
          speak on how to code per say so I'll mostly be documenting highlights in my coding journey. 
          
        </p>
        <hr className="border-t-2 border-gray-300 my-8 w-[90%] mx-auto" />
        <p style={{ fontFamily: 'AfacadFlux, sans-serif' }} className="text-left tracking-wide text-lg">
          My current projects are:<br/><br/>

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
          &nbsp;: Teams and trade analysis based on player statistics. Hoping to win my league this year</li>
            <li>Stock Market Pattern Seeker: Choose and identify different candlestick patterns in different stocks</li>
          </ul>

          <br/>
          A few others:<br/><br/>

          <ul className="list-disc ml-6">
            <li><a 
            href="https://github.com/kevintine/PRJ566" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative text-black hover:text-black group"
          >
            <span className="relative inline-block">
            Bowling Alley Web App
              <span className="absolute left-0 bottom-1 w-0 h-1 bg-red-400 w-full opacity-700"></span>
            </span>
          </a>
          &nbsp;: Seneca final year capstone group project. Big website that used a lot of different tech to accomplish</li>
            <li><a 
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
          &nbsp;: Pulls art pieces from an external API to display on a React/Next.js site</li>
          </ul>

          <br/>
          I haven't been working on my projects recently because I've been quite busy outside of coding, but I will be getting back to them soon enough.
        </p>
      </motion.div>

      <Footer/>
    </div>
  );
}

export default Page4;
