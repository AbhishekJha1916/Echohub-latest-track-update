import React from 'react';
import logo from '../assets/Echohub.png';
import profile from '../assets/profile-p.jpg';
import {
  FaSearch,
  FaCompass,
  FaRegCommentDots,
  FaGlobe,
  FaBell,
} from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-2 w-full h-20">
      <div className="flex items-center">
        <img className="w-auto cursor-pointer px-2.5 sm:h-12 h-24" src={logo} alt="Logo" />
        <ul className="ml-4 flex items-center">
          <div className="flex items-center">
            <input 
              type="text" 
              placeholder="Search..." 
              className="pr-20 pl-8 pt-[4px] pb-[4px] border border-gray-300 border-r-0 rounded-l-full outline-none bg-white text-base font-ubuntu text-gray-800" 
            />
            <button 
              className="text-base bg-white border border-gray-300  border-l-0 py-2 px-3 rounded-r-full cursor-pointer text-gray-800 flex items-center justify-center"
            >
              <FaSearch />
            </button>
          </div>
        </ul>
      </div>
      <ul className="list-none flex m-0 px-2.5 items-center">
        <li className="ml-4">
          <button className="bg-[#eff2f6] rounded-lg p-4 text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out text-xl sm:text-lg hover:text-white hover:bg-blue-500">
            <FaCompass />
          </button>
        </li>
        <li className="ml-4">
          <button className="bg-[#eff2f6] rounded-lg p-4 text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out text-xl sm:text-lg hover:text-white hover:bg-blue-500">
            <FaRegCommentDots />
          </button>
        </li>
        <li className="ml-4">
          <button className="bg-[#eff2f6] rounded-lg p-4 text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out text-xl sm:text-lg hover:text-white hover:bg-blue-500">
            <FaGlobe />
          </button>
        </li>
        <li className="ml-4">
          <button className="bg-[#eff2f6] rounded-lg p-4 text-gray-800 cursor-pointer transition-colors duration-300 ease-in-out text-xl sm:text-lg hover:text-white hover:bg-blue-500">
            <FaBell />
          </button>
        </li>
        <li className="ml-4">
          <img className="h-12 w-12 rounded-lg object-cover cursor-pointer" src={profile} alt="profile" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
