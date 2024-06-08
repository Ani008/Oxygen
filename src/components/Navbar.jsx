import React, { useState, useEffect } from 'react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`mb-20 fixed z-[999] w-full px-20 py-2 flex justify-between items-center transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
  {/* LOGO */}
  <div className="logo bg-transparent"> {/* Ensure the background is transparent */}
    <img className="h-[100px] mix-blend-multiply" src="/images/logo.png" alt="" />
  </div>

  {/* LINKS */}
  <div className="links flex gap-10">
    {["Shop", "Our Work", "About Us", "Insights"].map((item, index) => {
      return <a key={index} className="text-lg font-semibold">{item}</a>;
    })}
  </div>
</div>

  );
}

export default Navbar;

