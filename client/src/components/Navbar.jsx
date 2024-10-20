import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Button, Drawer } from 'antd';
import { NavLink, useLocation } from "react-router-dom";
import bslogo from '../assets/bslogo.png'


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Terms",
    path: "/terms&conditions",
  },
  {
    id: 3,
    title: "About",
    path: "/about",
  }
];

const Navbar = () => {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  const handleLinkClick = (menuPath) => {
    setActiveLink(menuPath);
  };

  const [scrolled, setScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
    <nav className={`${scrolled ? "backdrop-blur-sm bg-white/70" : ""} w-10/12 z-50`}>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="container flex justify-between items-center">
        {/* Logo section */}
        <div className="">
          <NavLink to="/">
            <img className="h-12 md:h-20" src={bslogo} alt="" />
          </NavLink>
        </div>

        {/* Menu section */}    
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  onClick={() => handleLinkClick(menu.path)}
                  className={`inline-block text-base text- font-normal py-2 px-3 relative group ${
                    activeLink === menu.path ? 'text-light' : 'text-black hover:text-light'
                  }`}
                >
                  <span className="relative">
                    {menu.title}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-1 w-full h-[2px] bg-light transition-all duration-300 ${
                        activeLink === menu.path ? 'block' : 'hidden mt-1'
                      }`}
                    ></div>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden cursor-pointer">
          <IoMdMenu onClick={() => setOpenDrawer(true)} className="text-2xl" />
        </div>
      </motion.div>
      <Drawer className="w-full" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <ul className="font-normal text-lg w-full">
          {NavbarMenu.map((menu) => (
            <li key={menu.id} className="mt-8 w-full">
              <NavLink to={menu.path} onClick={()=>setOpenDrawer(false)} className="w-full text-black/90 hover:text-light">
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </Drawer>
    </nav>
    </div>
  );
};

export default Navbar;