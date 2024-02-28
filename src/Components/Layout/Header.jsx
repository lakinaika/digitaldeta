import React, { useEffect, useState } from 'react';
import { FaGripLines } from "react-icons/fa";
import SideBarMenu from '../SideBarMenu';
import logo from '../../images/logo_white.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            setShowContent(scrollY > 310);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`sidebar-menu fixed z-[999] h-full ${!openSideBar ? "-translate-x-full" : "translate-x-0"} duration-500`}>
                <SideBarMenu setOpenSideBar={setOpenSideBar} />
            </div>

            <div className="fixed top-0 left-0 z-[998] w-full h-20">
                <div className="relative top-0 left-0">
                    <div className="absolute top-0 left-0 px-4 lg:px-14 pt-5">
                        <div onClick={() => { setOpenSideBar(true) }} className="menu text-white translate-x-0 hover:-translate-x-3 duration-500 cursor-pointer text-4xl lg:text-6xl"><FaGripLines /></div>
                    </div>
                </div>
                {/* <Link to={'/'} className="flex w-screen h-full justify-center">
                    <img src={logo} alt="Digital-deta" className='w-44 h-24' />
                </Link> */}
            </div>
        </>
    );
};

export default Header;
