import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
    
        <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">We bring comfort and style to your wardrobe with our unique collection of tees. Fashion is not just about looking good, but also about feeling great.</h1>
        
    <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#798a3b]">
        <div className="w-1/2">
            <h1 className="text-7xl">Our Approach</h1>
            <button className=" flex gap-10 items-center px-10 py-6 mt-10 bg-black rounded-full text-white">READ MORE
            <div className=" bg-zinc-100 w-2 h-2 rounded-full"></div>
            </button>
       
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-zinc-50">
        <img className=" rounded-3xl w-full h-full object-cover" src="/images/aboutpost.png" alt="About Post"/>
        </div>
    </div>
    </div> 
  )
}

export default About
