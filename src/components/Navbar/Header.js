import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../media/images/jec-logo.png';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='z-50 w-full bg-blue-900' style={{ fontFamily: "'Merriweather', serif" }}>
            <div className='lg:w-[85%] w-full flex justify-between items-center mx-auto p-2'>
                {/* Logo section */}
                <div>
                    <Link to="/"><img src={logo} className='h-20' alt="Logo" /></Link>
                </div>
                {/* Menu icon which is visible on small screens */}
                <div className='md:hidden' onClick={toggleMenu} aria-label="Toggle menu">
                    <FaBars className="text-white text-3xl transition-transform duration-300 hover:text-gray-300" />
                </div>
                {/* Lists section (visible on large screens) */}
                <div className='hidden md:flex items-center'>
                    <ul className='flex flex-row gap-5 p-2'>
                        <li><Link to='/about' className="text-xl text-white hover:text-gray-300 transition duration-300">About</Link></li>
                        <li><Link to='/academics' className="text-xl text-white hover:text-gray-300 transition duration-300">Academic</Link></li>
                        <li><Link to='/admission' className="text-xl text-white hover:text-gray-300 transition duration-300">Requirements</Link></li>
                        <li><Link to='/facilities' className="text-xl text-white hover:text-gray-300 transition duration-300">Facilities</Link></li>
                        <li><Link to='/news' className="text-xl text-white hover:text-gray-300 transition duration-300">News</Link></li>
                        <li><Link to='/contact-us' className="text-xl text-white hover:text-gray-300 transition duration-300">Contact</Link></li>
                    </ul>
                    <Link to='/onlineApply'>
                        <button
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm md:text-base shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 focus:outline-none ml-4"
                        >
                            Apply Online
                        </button>
                    </Link>
                </div>
            </div>
            {/* Sliding menu (visible on small screens) */}
            <div
                className={`fixed top-0 right-0 h-full bg-white transition-transform transform ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden w-3/4 lg:w-1/2 p-4 z-40 shadow-lg`}
            >
                {/* Close button which closes the sliding menu bar */}
                <div className='flex justify-end'>
                    <FaTimes
                        className='text-blue-900 text-3xl cursor-pointer transition-transform duration-300 hover:text-gray-700'
                        onClick={toggleMenu}
                        aria-label="Close menu"
                    />
                </div>
                {/* Menu items */}
                <ul className="flex flex-col gap-5 p-2 mt-10">
                    <li><Link to='/about' className="text-xl text-blue-900 hover:text-blue-600 transition duration-300">About</Link></li>
                    <li><Link to='/academics' className="text-xl text-blue-900 hover:text-blue-600 transition duration-300">Academic</Link></li>
                    <li><Link to='/admission' className="text-xl text-blue-900 hover:text-blue-600 transition duration-300">Requirements</Link></li>
                    <li><Link to='/facilities' className="text-xl text-blue-900 hover:text-blue-600 transition duration-300">Facilities</Link></li>
                    <li><Link to='/news' className="text-xl text-blue-900 hover:text-blue-600 transition duration-300">News</Link></li>
                    <li><Link to='/contact-us' className="text-xl text-blue-900 hover:text-blue-600 transition duration-300">Contact</Link></li>
                    <li>
                        <Link to='/onlineApply'>
                            <button
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 focus:outline-none"
                            >
                                Apply Online
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
