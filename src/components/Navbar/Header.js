import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../media/images/jec-logo.png';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOutsideClick = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isDropdownOpen]);

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
                <div className='hidden md:flex items-center w-full md:w-auto'>
                    <ul className='flex flex-col md:flex-row gap-5 p-2'>
                        {/* AboutUs with Dropdown */}
                        <li className="relative" ref={dropdownRef}>
                            <button 
                                onClick={toggleDropdown} 
                                className="text-xl text-white hover:text-gray-300 transition duration-300 border-none"
                            >
                                AboutUs
                            </button>
                            {isDropdownOpen && (
                                <ul className="md:absolute left-0 my-2 w-60 bg-white text-black rounded-lg shadow-lg z-20">
                                    <li><Link to="/about/introduction" className="block px-4 py-2 hover:bg-slate-200 hover:text-gray-800 text-lg rounded-t-lg">Introduction</Link></li>
                                    <li><Link to="/about/courses-offered" className="block px-4 py-2 hover:bg-slate-200 hover:text-gray-800 text-lg">Courses Offered</Link></li>
                                    <li><Link to="/about/jec-advisory-board" className="block px-4 py-2 hover:bg-slate-200 hover:text-gray-800 text-lg rounded-b-lg">JEC Advisory Board</Link></li>
                                    <li><Link to="teachers" className="block px-4 py-2 hover:bg-slate-200 hover:text-gray-800 text-lg rounded-b-lg">JEC Teachers</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to='/admission' className="text-xl text-white hover:text-gray-300 transition duration-300">Admission</Link></li>
                        <li><Link to='/facilities' className="text-xl text-white hover:text-gray-300 transition duration-300">Facilities</Link></li>
                        <li><Link to='/news' className="text-xl text-white hover:text-gray-300 transition duration-300">News & Updates</Link></li>
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
            {/* Sliding Menu for small screens */}
            <div className={`fixed top-0 right-0 h-full bg-blue-900 z-50 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} w-64 md:hidden`}>
                <div className="flex justify-end p-4">
                    <FaTimes 
                        className="text-white text-3xl cursor-pointer hover:text-gray-300" 
                        onClick={toggleMenu} 
                        aria-label="Close menu" 
                    />
                </div>
                <ul className='flex flex-col gap-5 p-5 mt-10'>
                    <li>
                        <button 
                            onClick={toggleDropdown} 
                            className="text-xl text-white hover:text-gray-300 transition duration-300 border-none"
                        >
                            AboutUs
                        </button>
                        {isDropdownOpen && (
                            <ul className="mt-2 bg-white text-black rounded-lg shadow-lg z-20">
                                <li><Link to="/about/introduction" className="block px-4 py-2 hover:bg-slate-200 hover:text-gray-800 rounded-t-lg">Introduction</Link></li>
                                <li><Link to="/about/courses-offered" className="block px-4 py-2 hover:bg-slate-200 hover:text-gray-800">Courses Offered</Link></li>
                                <li><Link to="/about/jec-advisory-board" className="block px-4 py-2 hover:bg-slate-200 hover:text-gray-800 rounded-b-lg">JEC Advisory Board</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to='/admission' className="text-xl text-white hover:text-gray-300 transition duration-300">Admission</Link></li>
                    <li><Link to='/news' className="text-xl text-white hover:text-gray-300 transition duration-300">News & Updates</Link></li>
                    <li><Link to='/contact-us' className="text-xl text-white hover:text-gray-300 transition duration-300">Contact</Link></li>
                    <li>
                        <Link to='/onlineApply'>
                            <button
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm md:text-base shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 focus:outline-none"
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
