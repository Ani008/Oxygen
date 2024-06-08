import About from './components/About';
import Cards from './components/Cards';
import Featured from './components/Featured';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Featured/>
      <Cards/>
  


    </div>
    
  )
}

export default App

