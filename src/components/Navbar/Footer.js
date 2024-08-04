import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/jec-logo.png';
import FooterTop from './FooterTop';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <FooterTop/>
      <div className='bg-[#2C3A3A] pb-4 pt-2'>
      <div className='container text-white py-4' style={{ fontFamily: "'Merriweather', serif" }}>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full md:w-1/4 px-4 mb-4'>
            <div className='flex justify-content-center align-items-center'>
              <img className="card-img-top rounded-2xl w-[250px]" src={logo} alt="logo" />
            </div>
            <div className='text-white d-flex gap-3 mt-3 items-center justify-center'>
              <a href='#'><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
              <a href='#'><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
              <a href='#'><FontAwesomeIcon icon={faTwitter} size='2x' /></a>
              <a href='#'><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
            </div>
          </div>

          <div className='w-full md:w-1/4 px-4 mb-4 mt-3'>
            <h1 className='text-[30px] text-center'>Useful Links</h1> 
            <div className='text-center flex flex-col gap-3 mt-3'>
               <a href='#'>home</a>
               <Link to='/admission'><a href='#'>Admission</a></Link>
                <Link to=''><a href='#'>Requirements</a></Link> 
                <Link to='/contact-us'><a href='#'>Contact Us</a></Link>
                <Link to='/privacypolicy'><a href='#'>Privacy Policy</a></Link>
            </div>
          </div>

          <div className='w-full md:w-1/4 px-4 mb-4  mt-3 flex-column justify-content-center align-items-center '>
            <h1 className='text-[30px] text-center'>Our University</h1>
            <div className='text-center flex flex-col gap-3 mt-3'>
              <Link to='/about'><a href='#'>About Us</a></Link>
              <Link to='/facilities'> <a href='#'>Facilities</a></Link>
              <Link to='/academics'><a href='#'>Academic</a></Link>
              <Link to='/news'>  <a href='#'>News</a></Link>
            
            </div>
          </div>

          <div className='w-full md:w-1/4 px-4 mb-4  mt-3'>
            <h1 className='text-[30px] text-center'>Contact Details</h1>
            <div className='text-center flex flex-col gap-3 mt-3'>
              <p>Kupondole, Lalitpur, Nepal</p>
              <p>Phone: 01-5555555</p>
              <p>Email: info@jec.edu.np</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
