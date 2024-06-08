import React from 'react'

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="bg-zinc-100 w-full h-screen pt-1 text-black">
      <div className="texStructure px-20 mt-40">
        {["WE CREATE", "EYE OPENING", "DESIGNS FOR PRINTS"].map((items, index)=>{
            return <div className="masker">
            <h1 className="text-[7vw] leading-none tracking-tighter font-semibold">
                {items}
                </h1>
                </div>
        })}
   
    
  </div>

  <div className="border-t-[2px] border-zinc-800 mt-10 flex justify-between items-center px-20 py-10 ">
    {["For genz's to icons", "From the first to the fearless"].map((item, index)=>{
        return <p className="text-md font-light tracking-tight leading-none">{item}</p>
    })}

<div className="start">
    <div className="px-4 py-2 border-[2px] border-zinc-900 rounded-full">
        SHOP NOW
    </div>

  </div>
  </div>


  
</div>

  )
}

export default Landing


