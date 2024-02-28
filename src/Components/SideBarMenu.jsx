import React from 'react';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SideBarMenu = ({ setOpenSideBar }) => {
  return (
    <div className="h-screen top-0 bg-[#091C20] text-white z-50 w-screen lg:w-72">
      <div className="sidebar flex justify-center items-center pt-16 relative">
        <div onClick={() => { setOpenSideBar(false) }} className='absolute top-2 right-3 lg:scale-50 hover:scale-100 p-1 cursor-pointer rounded-full text-6xl transform hover:rotate-90 duration-200'>
          <IoClose />
        </div>
      </div>
      <div className="link px-9 lg:px-12">
        <ul className='text-4xl'>
          <Link to={'/about'}><li className='mb-3 cursor-pointer transform hover:rotate-12 duration-200'>About</li></Link>
          <Link to={'/work'}><li className='mb-3 cursor-pointer transform hover:rotate-12 duration-200'>Work</li></Link>
          <Link to={'/news'}><li className='mb-3 cursor-pointer transform hover:rotate-12 duration-200'>News</li></Link>
          <Link to={'/career'}><li className='mb-3 cursor-pointer transform hover:rotate-12 duration-200'>Careers</li></Link>
          <Link to={'/academy'}><li className='mb-3 cursor-pointer transform hover:rotate-12 duration-200'>Academy</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBarMenu;
