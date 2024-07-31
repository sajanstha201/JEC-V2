import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class FooterTop extends Component {
  render() {
    return (
      <div className='w-full bg-blue-50 py-3' style={{ fontFamily: "'Merriweather', serif" }}>
        <div className='flex justify-center items-center text-center' style={{ fontFamily: "'Merriweather', serif" }}>
            <h1 className='text-[30px] text-black'>
                We're here to help you to shape the future. <br/>
            </h1>
      </div>
      <Link 
      to='/contact-us' 
      className="
         w-[20%] md:w-[13%] mx-auto py-2 px-4 my-3 text-black text-center flex justify-center items-center border border-white hover:bg-blue-500 hover:text-white text-lg rounded-lg transition-colors duration-300">Contact </Link>
      </div>
    )
  }
}

export default FooterTop