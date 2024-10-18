import React from "react";
import PageOne from '../components/PageOne'
import PageTwo from '../components/PageTwo'
import PageThree from '../components/PageThree'

function Page1() {
  return (
    <div className="w-screen h-screen bg-green-500">
      <div id="/1" className="h-full w-full flex items-center justify-center text-black uppercase text-9xl font-extrabold">
        Hey there, I'm Kevin
      </div>
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  )
}

export default Page1