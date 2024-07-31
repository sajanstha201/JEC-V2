import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../media/images/jec-logo.png';
export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className=' z-50 w-full bg-black'>
            <div className='lg:w-[85%] w-full flex justify-between items-center mx-auto p-2'>
                {/* logo section */}
                <div>
                    <Link to="/"><img src={logo} className='h-20' alt="Logo" /></Link>
                </div>
                {/* menu icon which is visible on small screen */}
                <div className='md:hidden' onClick={toggleMenu}>
                     <FaBars className="text-white text-2xl" />
                </div>
                {/* Lists section (visible on large screens) */}
                <div className='hidden md:flex md:w-auto items-center justify-center md:justify-end md:mr-4'>
                    <ul className='flex flex-row gap-5 p-2'>
                        <li><Link to='/admission' className="text-xl text-white">Admission</Link></li>
                        <li><Link to='/about' className="text-xl text-white">About</Link></li>
                        <li><Link to='/academic' className="text-xl text-white">Academic</Link></li>
                        <li><Link to='/facilities' className="text-xl text-white">Facilities</Link></li>
                        <li><Link to='/news' className="text-xl text-white">News</Link></li>
                        <li><Link to='/contact-us' className="text-xl text-white">Contact</Link></li>
                    </ul>
                </div>
            </div>
            {/* Sliding menu (visible on small screens) */}
            <div
                className={`fixed top-0 right-0 h-full bg-white transition-transform transform ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden w-2/5 p-4 z-40`}
            >
                {/* Close button which closes the sliding menu bar */}
                <div className=' top-4 right-4'>
                    <FaTimes
                        className='text-black text-3xl cursor-pointer'
                        onClick={toggleMenu}
                    />
                </div>
                {/* Menu items */}
                <ul className="flex flex-col gap-5 p-2 mt-10">
                    <li><Link to='/admission' className="text-xl text-black">Admission</Link></li>
                    <li><Link to='/about' className="text-xl text-black">About</Link></li>
                    <li><Link to='/academic' className="text-xl text-black">Academic</Link></li>
                    <li><Link to='/facilities' className="text-xl text-black">Facilities</Link></li>
                    <li><Link to='/news' className="text-xl text-black">News</Link></li>
                    <li><Link to='/contact-us' className="text-xl text-black">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};