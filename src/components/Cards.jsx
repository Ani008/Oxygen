import React from 'react'

function Cards() {
  return (
    <div className=" bg-[#e5e4e4] w-full h-screen">
        <div className="flex items-center justify-center text-[3vw]">
          <h1 className="mt-40">STAY UP TO DATE</h1>
        </div>

      <div className="flex justify-center items-center mt-20">
      <input className="w-[360px] mr-5 border-none bg-transparent outline-none placeholder-zinc-900 text-black py-2" type="EMAIL" placeholder="EMAIL"/>
      </div>

      <div className="flex justify-center items-center mt-20">
      <button className="flex gap-10 items-center px-10 py-4 mt-10 bg-black rounded-full text-white">SUBSCRIBE</button>
      
      </div>
      
        

    </div>
  )
}

export default Cards
