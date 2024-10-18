import React, { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll/modules'
import { Link as LinkRouter } from 'react-router-dom'

function Page1Container() {
  const [click, setClick] = useState(false);

  return (
    <div id="/" className="relative">
        <div className="flex">
          <div className="mr-10 cursor-pointer" onClick={() => setClick(!click)}>•</div>
          <LinkRouter onClick={() => setClick(false)} to="/">Page 1</LinkRouter>

          {click && (
            <div className="whitespace-nowrap flex flex-col absolute bg-gray-600 m-4 p-4 mt-14 rounded-b-md font-extrabold space-y-1 text-gray-200">
              <LinkScroll activeClass="active" to="/1" spy={true} smooth={true} offset={0} duration={500}>Top</LinkScroll>
              <LinkScroll activeClass="active" to="pageonescroll" spy={true} smooth={true} offset={0} duration={500}>Page 1.1</LinkScroll>
              <LinkScroll activeClass="active" to="pagetwoscroll" spy={true} smooth={true} offset={0} duration={500}>Page 1.2</LinkScroll>
              <LinkScroll activeClass="active" to="pagethreescroll" spy={true} smooth={true} offset={0} duration={500}>Page 1.3</LinkScroll>
            </div>
          )}
        </div>
      </div>
  )
}

export default Page1Container