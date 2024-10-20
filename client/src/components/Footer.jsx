import logo from '../assets/logo.png'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
import bslogo from '../assets/bslogo.png'
const footer = () => {
  const [showModal, setShowModal] = useState(false)
  const [isUlVisible1, setIsUlVisible1] = useState(false);
  const [isUlVisible2, setIsUlVisible2] = useState(false);
  const [isUlVisible3, setIsUlVisible3] = useState(false);
  const [isUlVisible4, setIsUlVisible4] = useState(false);
  const [isUlVisible5, setIsUlVisible5] = useState(false);

  const toggleUlVisibility1 = () => {
    setIsUlVisible1(!isUlVisible1);
  };
  const toggleUlVisibility2 = () => {
    setIsUlVisible2(!isUlVisible2);
  };
  const toggleUlVisibility3 = () => {
    setIsUlVisible3(!isUlVisible3);
  };
  const toggleUlVisibility4 = () => {
    setIsUlVisible4(!isUlVisible4);
  };
  const toggleUlVisibility5 = () => {
    setIsUlVisible5(!isUlVisible5);
  };
  return (
    <div className='w-full flex items-center justify-center bg-[#1D1B1B] pb-4'>
      <div className='w-11/12 md:w-10/12'>
        <div className='flex flex-col-reverse md:flex-row w-full'>
          <div className=''>
          <img className="h-12 md:h-20" src={bslogo} alt="" />
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-start justify-between'>
          <div className='md:w-[30%]'>
            <div>
              <p className='text-white font-roboto font-light text-sm'>Pushker Badri Sarraf is your destination for exquisite, handcrafted jewelry that embodies timeless elegance. From special occasions to everyday wear, our pieces bring beauty and sophistication to any style. With a commitment to quality and innovation, Badri Sarraf offers jewelry that you’ll cherish for generations.</p>
            </div>
            <div className='md:mt-12 mt-4 md:mb-6 mb-4 flex items-start'>
              <IoHomeOutline className='text-primary text-lg'/>
              <div className='flex flex-col'>
                <p className='text-white font-roboto font-light text-sm pl-2'>M-16 Basement Gole Market Lucknow</p>
                <p className='text-white font-roboto font-light text-sm pl-2'>3/113 Vivek Khand Gomtinagar Lucknow</p>
              </div>
            </div>
            <div className='flex items-start'>
              <IoMailOutline className='text-primary text-lg'/>
              <div className='flex flex-col items-start pl-2'>
                <a href='mailto:badrisarraf@gmail.com' className='text-white hover:text-deep-green font-roboto font-light text-sm pb-1'>badrisarraf@gmail.com</a>
                <h1 className='text-white font-roboto font-light text-sm md:pb-1 mb-4'>+91 9598225333</h1>
              </div>

            </div>
          </div>
          <div className='w-full md:w-[65%] flex flex-col'>
            <div className='w-full flex flex-col md:flex-row justify-end gap-4 '>
                <div className='w-full md:w-[25%]'>
                  <h1 className='text-primary font-normal text-base mb-3 hidden md:block'>Company</h1>
                  <div onClick={toggleUlVisibility1} className='flex items-center justify-between cursor-poroboto md:hidden'>
                    <h1 className='text-primary font-light text-sm mb-1'>Company</h1>   
                    {isUlVisible1 ? (
                      <IoIosArrowUp className='text-white text-2xl' onClick={toggleUlVisibility1} />
                    ) : (
                      <IoIosArrowDown className='text-white text-2xl' onClick={toggleUlVisibility1} />
                    )}             
                  </div>
                  <div className='mb-1 md:hidden'>
                    <hr className='border-b-1 border-gray-500'/>
                  </div>
                  {isUlVisible1 && (
                  <ul className=''>
                    <NavLink to='about'><li className='text-white font-roboto font-light text-sm pb-1'>About Us</li></NavLink>
                  </ul>
                  )}
                  <ul className=' hidden md:block'>
                  <NavLink to='about'><li className='text-white hover:text-primary font-roboto cursor-pointer font-light text-sm pb-4'>About Us</li></NavLink>          
                  </ul>
                </div>
                <div className='w-full md:w-[25%]'>
                  <h1 className='text-primary font-normal text-base mb-3 hidden md:block'>Policies</h1>
                  <div onClick={toggleUlVisibility3} className='flex items-center justify-between cursor-poroboto md:hidden'>
                      <h1 className='text-primary font-light text-sm mb-1'>Policies</h1>
                      {isUlVisible3 ? (
                      <IoIosArrowUp className='text-white text-2xl' onClick={toggleUlVisibility3} />
                      ) : (
                        <IoIosArrowDown className='text-white text-2xl' onClick={toggleUlVisibility3} />
                      )}
                  </div>
                  <div className='mb-1 md:hidden'>
                    <hr className='border-b-1 border-gray-500'/>
                  </div>
                  {isUlVisible3 && (
                    <ul className=''>
                      <NavLink to='/terms&conditions'><li className='text-white font-roboto font-light text-sm pb-1 cursor-pointer'>Terms And Conditions</li></NavLink>
                      <NavLink to='/privacy-policy'><li className='text-white font-roboto font-light text-sm pb-1 cursor-pointer'>Privacy Policy</li></NavLink>
                    </ul> 
                  )}  
                  <ul className=' hidden md:block'>
                    <NavLink to='terms&conditions'><li className='text-white hover:text-primary font-roboto font-light text-sm pb-4 cursor-pointer'>Terms And Conditions</li></NavLink>
                    <NavLink to='/privacy-policy'><li className='text-white hover:text-primary font-roboto font-light text-sm pb-4 cursor-pointer'>Privacy Policy</li></NavLink>
                  </ul> 
                </div>
                <div className='w-full md:w-[25%]'>
                  <h1 className='text-primary  font-normal text-base mb-3 hidden md:block'>Support</h1>
                  <div onClick={toggleUlVisibility5} className='flex items-center justify-between cursor-poroboto md:hidden'>
                      <h1 className='text-primary font-light text-sm
                       mb-1'>Support</h1>
                      {isUlVisible5 ? (
                      <IoIosArrowUp className='text-white text-2xl' onClick={toggleUlVisibility5} />
                      ) : (
                        <IoIosArrowDown className='text-white text-2xl' onClick={toggleUlVisibility5} />
                      )} 
                  </div>
                  <div className='mb-1 md:hidden'>
                    <hr className='border-b-1 border-gray-500'/>
                  </div>
                  {isUlVisible5 && (
                    <ul className=''>
                      <NavLink to="/"><li className='text-white font-roboto font-light text-xs w-full pb-1'>FAQ</li></NavLink>
                      <NavLink to="/"><li className='text-white font-roboto font-light text-xs w-full pb-1'>Customer Care</li></NavLink>
                    </ul> 
                  )}
                    <ul className=' hidden md:block'>
                      <NavLink to="/"><li className='text-white hover:text-primary font-roboto font-light text-sm pb-4'>FAQ</li></NavLink>
                      <NavLink to="/"><li className='text-white hover:text-primary font-roboto font-light text-sm pb-4'>Customer Care</li></NavLink>
                    </ul>
                </div>
            </div>
          </div>
        </div>

        <div className='mb-4 mt-10'>
          <hr className='border-b-1 border-white md:border-b'/>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center md:gap-8'>
          <div className='flex text-white items-center justify-center text-xs md:text-sm'>
          <LuCopyright/>
          <h1 className='pl-1'>2024 BADRISARRAF PVT LTD. All Rights Reserved</h1>
          </div>
          <div className='flex items-center justify-center text-white text-xs md:text-sm'>
            <h1>CIN: U52219UP2023PTC160</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;