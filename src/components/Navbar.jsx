import React, { Fragment, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

import logo from "../assets/logo2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <Fragment>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 backdrop-blur-xs bg-[#0a192f]/[0.95] text-gray-300 z-[9]">
        <div>
          <img src={logo} alt="my logo" style={{ width: "75px" }} />
        </div>

        <ul className="hidden md:flex text-2xl">
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Resume</li>
        </ul>

        {/*mobile menu*/}
        <div>
          <ul
            className={
              !nav
                ? "hidden"
                : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            }
          >
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Work</li>
            <li className="py-6 text-4xl">Resume</li>
          </ul>
        </div>

        {/*hamburger*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>

        {/*social icons*/}
        <div className="hidden lg:flex fixed flex-col top-[320%] left-[0]">
          <ul>
            <li
              className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-blue-600"
            >
              <a
                href="https://www.linkedin.com/in/shikhar-gupta-4a8231172/"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Linkedin <FaLinkedinIn size={30} />
              </a>
            </li>
            <li
              className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-[#333333]"
            >
              <a
                href="https://github.com/shikhargupta02"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li
              className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-gradient-to-r from-pink-500 to-yellow-500"
            >
              <a
                href="https://www.instagram.com/accounts/login/?next=/gshikhar38/"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Instagram <FaInstagram size={30} />
              </a>
            </li>
            <li
              className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-[#369c86]"
            >
              <a
                href="mailto: gshikhar38@gmail.com"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Mail <HiMail size={30} />
              </a>
            </li>
            {/* <li
              className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
            hover:ml-[-10px] duration-300 bg-[#565f69]"
            >
              <a
                href=""
                className="flex justify-between items-center w-full text-gray-300"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default Navbar;
