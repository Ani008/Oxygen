import React, { useState } from 'react'

function Featured() {
    const[a, b]=useState(false);

  return (
  
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-10'>
            <h1 className='text-7xl tracking-tight'>Featured products</h1>
        </div>

        <div className="px-20">
        <div className="CARDS w-full gap-10 mt-10 flex overflow-hidden">
          
          <div className="rounded-3xl CARDS_CONTAINER relative w-1/2 h-[80vh] transform transition-transform duration-500 hover:scale-105">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img 
              onMouseEnter={() => b(true)}
              onMouseLeave={() => b(false)}
              className="w-full h-full bg-cover" src="/images/cloth1.png" alt="" />
            </div>
          </div>

          <div className="rounded-3xl CARDS_CONTAINER relative w-1/2 h-[80vh] transform transition-transform duration-500 hover:scale-105">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img 
              onMouseEnter={() => b(true)}
              onMouseLeave={() => b(false)}
              className="w-full h-full bg-cover" src="/images/cloth2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="Structure flex justify-between mt-5">
            <div className="relative flex gap-2">
            {["PURE COTTON", "DIGITAL PRINT", "RELAXED FIT"].map((items, index)=>{
            return <div className="masker">
            <button className="px-4 py-2 border-[2px] border-zinc-900 rounded-full leading-none tracking-tight">
                {items}
                </button>
                </div>
            })}
            </div>

            <div className="relative flex mr-[275px] gap-2">
            {["POLYSTER", "EMBRIODARY", "QUICK DRYING"].map((items, index)=>{
            return <div className="masker">
            <button className="px-4 py-2 border-[2px] border-zinc-900 rounded-full leading-none tracking-tight">
                {items}
                </button>
                </div>
            })}
            </div>
        
        </div>
        </div>

        {/* SECOND SECTION */}

        <div className="mt-20 px-20">
        <div className="CARDS w-full gap-10 mt-10 flex overflow-hidden">
          
          <div className="rounded-3xl CARDS_CONTAINER relative w-1/2 h-[80vh] transform transition-transform duration-500 hover:scale-105"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img 
              onMouseEnter={() => b(true)}
              onMouseLeave={() => b(false)}
              className="w-full h-full bg-cover" src="/images/cloth3.png" alt="" />
            </div>
          </div>

          <div
            className="rounded-3xl CARDS_CONTAINER relative w-1/2 h-[80vh] transform transition-transform duration-500 hover:scale-105"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img 
              onMouseEnter={() => b(true)}
              onMouseLeave={() => b(false)}
              className="w-full h-full bg-cover" src="/images/cloth4.png" alt="" />
            </div>
          </div>
        </div>
        </div>

        <div className="Structure flex justify-between mt-5">
            <div className="relative flex ml-[80px] gap-2">
            {["RAYON", "DIGITAL PRINT", "SOFT"].map((items, index)=>{
            return <div className="masker">
            <button className="px-4 py-2 border-[2px] border-zinc-900 rounded-full leading-none tracking-tight">
                {items}
                </button>
                </div>
            })}
            </div>

            <div className="relative flex mr-[385px] gap-2">
            {["COTTON", "VINYL PRINT", "RELAXED FIT"].map((items, index)=>{
            return <div className="masker">
            <button className="px-4 py-2 border-[2px] border-zinc-900 rounded-full leading-none tracking-tight">
                {items}
                </button>
                </div>
            })}
            </div>
        
        </div>

        <div className=" flex item-center justify-center mt-10">
        <button className=" flex gap-10 items-center px-10 py-4 mt-10 bg-black rounded-full text-white">VIEW ALL PRODUCTS</button>

        </div>
    </div>
  )
}

export default Featured
