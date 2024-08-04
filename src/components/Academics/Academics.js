import React from 'react'
import { Link } from 'react-router-dom'

import computer from '../images/computer.jpg';
import civil from '../images/civil.jpg';
import electronics from '../images/electronics.jpg';
import learnmore from '../images/aLearnmore.png';

export default function Academics() {
  return (
    <>
      <div className='sm:mx-[20px] md:mx-[120px]'>
        <div className='mt-5' style={{ fontFamily: "'Merriweather', serif", color: '#003366' }}>
          <div>
            <h1 className='text-[40px]' style={{ color: '#D80027' }}>Become a part of <br />Janakpur Engineering College.</h1>
          </div>
          <div className='flex items-end justify-end text-end mt-3'>
            <p>Restless learners change<br /> the world.</p>
          </div>
        </div>

        <div className='container-fluid mt-[70px]'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <p style={{ fontFamily: "'Merriweather', serif" }}>
                Janakpur Engineering College offers 3 courses across various specializations that provoke intellectual and intuitive learning among students. We at Janakpur Engineering College believe that peer learning is essential along with communication, analytic, and problem-solving skills. Instructors from around the world teach thousands of students in our college. We provide the tools and skills to teach what you love.
              </p>
            </div>

            <div className='col-sm-12 col-md-6 flex items-end justify-end'>
              <img src={learnmore} className='h-[220px]' alt="Learn More" />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <div>
            <h1 className='text-[30px]' style={{ fontFamily: "'Merriweather', serif", color: '#003366' }}>"The whole purpose of education is to<br /> turn mirrors into windows"</h1>
          </div>
          <div className='flex items-end justify-end text-end mt-3 gap-4'>
            <div>
              <h1 className='text-[50px] text-center ms-3'>92%</h1>
              <h1 style={{ fontFamily: "'Merriweather', serif" }} className='font-bold'>GRADUATION RATE</h1>
            </div>
            <div>
              <h1 className='text-[50px] text-center'>85%</h1>
              <h1 style={{ fontFamily: "'Merriweather', serif" }} className='font-bold'>EMPLOYMENT RATE</h1>
            </div>
          </div>
        </div>

        <div className='my-[60px]'>
          <h1 style={{ fontFamily: "'Merriweather', serif", color: '#D80027' }} className='text-[45px]'>Courses Offered</h1>
        </div>
        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-4 mb-4'>
              <div className="card mx-auto" style={{ width: "100%", border: "1px solid #e0e0e0", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <img src={computer} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} alt="Computer Engineering" />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "'Merriweather', serif", fontSize: "20px", color: '#003366' }}>Bachelor of Computer Engineering (BCE)</h5>
                  <p style={{ fontSize: "14px", color: "#757575" }}>Starting in Fall 2022</p>
                  <h1 style={{ fontSize: "16px", fontWeight: "normal" }}>Duration: 4 Years</h1>
                  <Link to='/alearnmore'>
                    <button style={{
                      fontFamily: "'Merriweather', serif", backgroundColor: "#D80027", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", marginTop: "10px", cursor: "pointer", transition: "background-color 0.3s"
                    }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#A60020'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#D80027'}>
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4 mb-4'>
              <div className="card mx-auto" style={{ width: "100%", border: "1px solid #e0e0e0", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <img src={civil} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} alt="Civil Engineering" />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "'Merriweather', serif", fontSize: "20px", color: '#003366' }}>Bachelor of Civil Engineering (BCT)</h5>
                  <p style={{ fontSize: "14px", color: "#757575" }}>Starting in Fall 2022</p>
                  <h1 style={{ fontSize: "16px", fontWeight: "normal" }}>Duration: 4 Years</h1>
                  <Link to='/alearnmore'>
                    <button style={{
                      fontFamily: "'Merriweather', serif", backgroundColor: "#D80027", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", marginTop: "10px", cursor: "pointer", transition: "background-color 0.3s"
                    }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#A60020'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#D80027'}>
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4 mb-4'>
              <div className="card mx-auto" style={{ width: "100%", border: "1px solid #e0e0e0", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <img src={electronics} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} alt="Electronics and Information Engineering" />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "'Merriweather', serif", fontSize: "20px", color: '#003366' }}>Bachelor of Electronics and Information Engineering (BEI)</h5>
                  <p style={{ fontSize: "14px", color: "#757575" }}>Starting in Fall 2022</p>
                  <h1 style={{ fontSize: "16px", fontWeight: "normal" }}>Duration: 4 Years</h1>
                  <Link to='/alearnmore'>
                    <button style={{
                      fontFamily: "'Merriweather', serif", backgroundColor: "#D80027", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", marginTop: "10px", cursor: "pointer", transition: "background-color 0.3s"
                    }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#A60020'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#D80027'}>
                      Learn More
                    </button>
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
