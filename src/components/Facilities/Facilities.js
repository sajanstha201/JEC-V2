import React from 'react'
import facilities from '../images/facilities.jpg'
import { Link } from 'react-router-dom';
import wifi from '../images/wifi.png';
import libary from '../images/libary.png';
import hostel from '../images/hostel.jpg';
import food from '../images/hfood.png';
import counselling from '../images/counselling.jpg';
import staff from '../images/staff.png';
import sport from '../images/sport.png';
import imtenship from '../images/intenship.png';
import bus from '../images/bus.jpg';
export default function Facilities() {
  return (
<>
<div className='sm:mx-[20px] md:mx-[120px]'>
<div>
    <h1 className='text-[38px] my-5 text-red-500 sm:text-center md:text-start'  style={{ fontFamily: "'Merriweather', serif" }}>Know the facilities<br/> provided by JEC.</h1>
</div>

<div className='container-fluid'>
    <div className="row">
        <div className="col-md-6">
            <p className='font-[12px]' >
            Janakpur Engineering College (JEC) offers excellent facilities for an optimal learning environment. The college has a comprehensive library, modern laboratories, and advanced classrooms with projectors and smart boards. A fully equipped computer center provides high-speed internet and the latest software. Additionally, comfortable and secure hostel accommodations ensure a conducive living environment for students.
            </p>
        </div>
        <div className="col-md-6  flex items-center justify-end ">
            <img src={facilities}
            alt="JEC Facilities" className='w-[400px]' />
        </div>
    </div>

</div>

<div>
    <h1 className='text-[45px] my-5 text-red-500 '  style={{ fontFamily: "'Merriweather', serif" }}>Facilities</h1>
</div>

<div className='container-fluid'>
    <div className='row'>
      <div className='col-12 col-md-6 col-lg-4 mb-4'>
        <div className="card mx-auto" style={{width: "100%"}}>
            <div className='flex items-center justify-center'>
            <img src={wifi} className="card-img-top h-[200px] w-[200px] " alt="..."/>
            </div>
          
          <div className="card-body flex flex-col items-center justify-center">
            <h5 className="card-title text-[30px] text-center text-blue-500" style={{ fontFamily: "'Merriweather', serif" }}>WIFI</h5>
            <p className="text-center">anakpur Engineering College (JEC) provides comprehensive Wi-Fi facilities designed to support its...</p>
           
            <Link to='/learnMore' >
            <button style={{ fontFamily: "'Merriweather', serif" }} href="" className=" mt-[20px] bg-blue-500 text-white py-[15px] px-[35px] rounded-[10px] text-[16px] hover:bg-red-500 hover:text-white transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='col-12 col-md-6 col-lg-4 mb-4'>
        <div className="card mx-auto" style={{width: "100%"}}>
            <div className='flex items-center justify-center'>
            <img src={libary} className="card-img-top h-[200px] w-[200px] " alt="..."/>
            </div>
          
          <div className="card-body flex flex-col items-center justify-center">
            <h5 className="card-title text-[30px] text-center text-blue-500" style={{ fontFamily: "'Merriweather', serif" }}>LIBRARY</h5>
            <p className="text-center">he library at Janakpur Engineering College (JEC) serves as a vital resource center for students and...</p>
            <Link to='/learnMore' >
            <button style={{ fontFamily: "'Merriweather', serif" }} href="" className=" mt-[20px] bg-blue-500 text-white py-[15px] px-[35px] rounded-[10px] text-[16px] hover:bg-red-500 hover:text-white transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4 mb-4  '>
        <div className="card mx-auto" style={{width: "100%"}}>
            <div className='flex items-center justify-center'>
            <img src={hostel} className="card-img-top h-[200px] w-[200px] " alt="..."/>
            </div>
          
          <div className="card-body flex flex-col items-center justify-center">
            <h5 className="card-title text-[30px] text-center text-blue-500" style={{ fontFamily: "'Merriweather', serif" }}>HOSEL</h5>
            <p className="text-center">The hostel facilities at Janakpur Engineering College (JEC) are designed to provide a comfortable and supportive living...</p>
            <Link to='/learnMore' >
            <button style={{ fontFamily: "'Merriweather', serif" }} href="" className=" mt-[20px] bg-blue-500 text-white py-[15px] px-[35px] rounded-[10px] text-[16px] hover:bg-red-500 hover:text-white transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='col-12 col-md-6 col-lg-4 mb-4  mt-5'>
        <div className="card mx-auto" style={{width: "100%"}}>
            <div className='flex items-center justify-center'>
            <img src={food} className="card-img-top h-[200px] w-[200px] " alt="..."/>
            </div>
          
          <div className="card-body flex flex-col items-center justify-center">
            <h5 className="card-title text-[30px] text-center text-blue-500" style={{ fontFamily: "'Merriweather', serif" }}>HYGENIC fOOD</h5>
            <p className="text-center">Janakpur Engineering College (JEC) prioritizes the health and well-being of its students by providing hygienic and...</p>
            <Link to='/learnMore' >
            <button style={{ fontFamily: "'Merriweather', serif" }} href="" className=" mt-[28px] bg-blue-500 text-white py-[15px] px-[35px] rounded-[10px] text-[16px] hover:bg-red-500 hover:text-white transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='col-12 col-md-6 col-lg-4 mb-4  mt-5'>
        <div className="card mx-auto" style={{width: "100%"}}>
            <div className='flex items-center justify-center'>
            <img src={counselling} className="card-img-top h-[200px] w-[200px] " alt="..."/>
            </div>
          
          <div className="card-body flex flex-col items-center justify-center">
            <h5 className="card-title text-[30px] text-center text-blue-500" style={{ fontFamily: "'Merriweather', serif" }}>COUNSELLING SECTION</h5>
            <p className="text-center">Janakpur Engineering College (JEC) offers a dedicated counseling section to support ...</p>
            <Link to='/learnMore' >
            <button style={{ fontFamily: "'Merriweather', serif" }} href="" className=" mt-[20px] bg-blue-500 text-white py-[15px] px-[35px] rounded-[10px] text-[16px] hover:bg-red-500 hover:text-white transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='col-12 col-md-6 col-lg-4 mb-4  mt-5'>
        <div className="card mx-auto" style={{width: "100%"}}>
            <div className='flex items-center justify-center'>
            <img src={staff} className="card-img-top h-[200px] w-[200px] " alt="..."/>
            </div>
          
          <div className="card-body flex flex-col items-center justify-center">
            <h5 className="card-title text-[30px] text-center text-blue-500" style={{ fontFamily: "'Merriweather', serif" }}>QUALIFIED STAFFS</h5>
            <p className="text-center">Janakpur Engineering College (JEC) is committed to providing quality education with a focus on employing well-qualified ...</p>
            <Link to='/learnMore' >
            <button style={{ fontFamily: "'Merriweather', serif" }} href="" className=" mt-[28px] bg-blue-500 text-white py-[15px] px-[35px] rounded-[10px] text-[16px] hover:bg-red-500 hover:text-white transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4 mb-4  mt-5'>
        <div className="card mx-auto" style={{width: "100%"}}>
            <div className='flex items-center justify-center'>
            <img src={sport} className="card-img-top h-[200px] w-[200px] " alt="..."/>
            </div>
          
          <div className="card-body flex flex-col items-center justify-center">
            <h5 className="card-title text-[30px] text-center text-blue-500" style={{ fontFamily: "'Merriweather', serif" }}>SPORT GROUND</h5>
            <p className="text-center">Janakpur Engineering College (JEC) boasts a well-maintained sports ground, offering students ample and many more thing.There are lots of sports and games to play...</p>
            <Link to='/learnMore' >
            <button style={{ fontFamily: "'Merriweather', serif" }} href="" className=" mt-[20px] bg-blue-500 text-white py-[15px] px-[35px] rounded-[10px] text-[16px] hover:bg-red-500 hover:text-white transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4 mb-4 mt-5'>
        <div className="card mx-auto" style={{width: "100%"}}>
            <div className='flex items-center justify-center'>
            <img src={imtenship} className="card-img-top h-[200px] w-[200px] " alt="..."/>
            </div>
          
          <div className="card-body flex flex-col items-center justify-center">
            <h5 className="card-title text-[30px] text-center text-blue-500" style={{ fontFamily: "'Merriweather', serif" }}>INTERNSHIP AND PLACEMENT</h5>
            <p className="text-center">Some quick example text to build on the card title and make up the bulk of the ..</p>
            <Link to='/learnMore' >
            <button style={{ fontFamily: "'Merriweather', serif" }} href="" className=" mt-[35px] bg-blue-500 text-white py-[15px] px-[35px] rounded-[10px] text-[16px] hover:bg-red-500 hover:text-white transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='col-12 col-md-6 col-lg-4 mb-4 mt-5'>
        <div className="card mx-auto" style={{width: "100%"}}>
            <div className='flex items-center justify-center '>
            <img src={bus} className="card-img-top h-[200px] w-[200px] " alt="..."/>
            </div>
          
          <div className="card-body flex flex-col items-center justify-center">
            <h5 className="card-title text-[30px] text-center text-blue-500" style={{ fontFamily: "'Merriweather', serif" }}>TRANSPORTATION</h5>
            <p className="text-center">JEC offers convenient transportation services for students and staff, ensuring easy and safe travel to and from the campus....</p>
            <Link to='/learnMore' >
            <button style={{ fontFamily: "'Merriweather', serif" }} href="" className=" mt-[20px] bg-blue-500 text-white py-[15px] px-[35px] rounded-[10px] text-[16px] hover:bg-red-500 hover:text-white transition duration-300">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      







    </div>
  </div>


</div>
</>
  )
}
