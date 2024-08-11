import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../media/images/jec-logo.png';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='z-50 w-full bg-blue-900' style={{ fontFamily: "'Merriweather', serif" }}>
            <div className='lg:w-[85%] w-full flex justify-between items-center mx-auto p-2'>
                {/* Logo section */}
                <div>
                    <Link to="/"><img src={logo} className='h-20' alt="Logo" /></Link>
                </div>
                {/* Menu icon visible on small screens */}
                <div className='md:hidden' onClick={toggleMenu} aria-label="Toggle menu">
                    {menuOpen ? (
                        <FaTimes className="text-white text-3xl transition-transform duration-300 hover:text-gray-300" />
                    ) : (
                        <FaBars className="text-white text-3xl transition-transform duration-300 hover:text-gray-300" />
                    )}
                </div>
                {/* Lists section */}
                <div className={`${menuOpen ? 'block' : 'hidden'} md:flex items-center w-full md:w-auto`}>
                    <ul className='flex flex-col md:flex-row gap-5 p-2'>
                        {/* AboutUs with Dropdown */}
                        <li className="relative">
                            <button 
                                onClick={toggleDropdown} 
                                className="text-xl text-white hover:text-gray-300 transition duration-300"
                            >
                                AboutUs
                            </button>
                            {isDropdownOpen && (
                                <ul className="md:absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg">
                                    <li><Link to="/about/introduction" className="block px-4 py-2 hover:bg-gray-700">Introduction</Link></li>
                                    <li><Link to="/about/facilities" className="block px-4 py-2 hover:bg-gray-700">Facilities</Link></li>
                                    <li><Link to="/about/courses-offered" className="block px-4 py-2 hover:bg-gray-700">Courses Offered</Link></li>
                                    <li><Link to="/about/jec-advisory-board" className="block px-4 py-2 hover:bg-gray-700">JEC Advisory Board</Link></li>
                                </ul>
                            )}
                        </li>
                        {/* <li><Link to='/academics' className="text-xl text-white hover:text-gray-300 transition duration-300">Academic</Link></li> */}
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
            {/* Hidden Menu for small screens */}
            <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden w-full bg-blue-900 p-2`}>
                <ul className='flex flex-col gap-5'>
                    <li><Link to='/about' className="text-xl text-white hover:text-gray-300 transition duration-300">AboutUs</Link></li>
                    <li><Link to='/academics' className="text-xl text-white hover:text-gray-300 transition duration-300">Academic</Link></li>
                    <li><Link to='/admission' className="text-xl text-white hover:text-gray-300 transition duration-300">Requirements</Link></li>
                    <li><Link to='/facilities' className="text-xl text-white hover:text-gray-300 transition duration-300">Facilities</Link></li>
                    <li><Link to='/news' className="text-xl text-white hover:text-gray-300 transition duration-300">News</Link></li>
                    <li><Link to='/contact-us' className="text-xl text-white hover:text-gray-300 transition duration-300">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};
