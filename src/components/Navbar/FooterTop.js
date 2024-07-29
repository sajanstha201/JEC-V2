import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class FooterTop extends Component {
  render() {
    return (
      <div className='w-full bg-[#2C3A3A] mb-2 py-3' style={{ fontFamily: "'Merriweather', serif" }}>
        <div className='flex justify-center items-center text-center' style={{ fontFamily: "'Merriweather', serif" }}>
            <h1 className='text-2xl text-white'>
                We're here to help you to shape the future. <br/>
            </h1>
      </div>
        <li><Link to='/contact-us' className=" w-[10%] mx-auto py-1 px-2 my-3 text-white text-center flex justify-center items-center border border-white text-lg rounded-lg">Contact</Link></li>
      </div>
    )
  }
}

export default FooterTop