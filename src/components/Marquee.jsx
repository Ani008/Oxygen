import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-8 rounded-tl-3xl rounded-tr-3xl bg-green-800">
        <div className="text-white border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap gap-10 overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="text-[24vw] font-bold leading-tight">WE ARE OXYGEN</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className="text-[24vw] font-bold leading-tight">WE ARE OXYGEN</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
