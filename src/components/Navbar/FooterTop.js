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
        <Link to='/contact-us' className=" w-[10%] mx-auto py-1 px-2 my-3 text-black text-center flex justify-center items-center border border-black hover:bg-blue-500 hover:text-white text-lg rounded-lg list-none">Contact</Link>
      </div>
    )
  }
}

export default FooterTop