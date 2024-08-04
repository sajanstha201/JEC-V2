import React from 'react';

import students from '../images/jec-students.jpg';
import about from '../images/jec-about.png';
import leader from '../images/student.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4 py-8" style={{ fontFamily: "'Merriweather', serif" }}>
        <div className="sm:mx-0 md:mx-6 lg:mx-16">
          <div className="my-3">
            <h1 className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-helvari">
              We are a research institution focused on providing massive <br />
              opportunities through value education. University is one of the<br />
              world’s preeminent public universities.
            </h1>
          </div>
          <br />
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <div className="md:w-7/12 w-full">
              <p className="text-base md:text-lg leading-relaxed font-helvari">
                Our impact on individuals, our region, and the world is profound
                — whether we are launching young people into a boundless future
                or confronting the grand challenges of our time through undaunted
                research and scholarship. We turn ideas into impact and transform
                lives and our world.
                <br /><br />
                In a sense, University’s greatest invention may be itself — an
                unusual concentration of unusual talent, forever reinventing
                itself on a mission to make a better world. That invention is
                powered by individuals: a global community of educators,
                researchers, and learners with different perspectives but a shared
                commitment to serving humanity. Come, join us on the journey.
              </p>
            </div>
            <div className="md:w-5/12 w-full">
              <img 
                src={students}
                className='rounded-lg border-solid border-2 border-white shadow shadow-blue-500/40 hover:shadow-indigo-500/40 h-auto w-full md:w-[400px] lg:w-[500px]'
                alt="Students"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-[30px] mt-[150px] ">
        <div
          className="w-[1100px] h-[380px] rounded-[10px] "
          style={{ backgroundImage: `url(${about})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* <div className='container d-flex  justify-content-end '>
            <div className='row'>
              <div className='col-md-12 h-[190px] bg-blue-500 h-[190px] w-[200px]'>
                <div className='h-[95px]'>
                  <a>
                    <h1 className='text-[20px] font-bold mt-3' style={{ fontFamily: "'Merriweather', serif" }}>Campus <br></br>Life.</h1>
                  </a>
                </div>
                <div className='flex d-flex align-items-end h-[95px]  '>
                  <FontAwesomeIcon icon={faArrowRightLong} className='text-[25px] mb-[45px]' />
                </div>
              </div>
            </div>
          </div>
          <div className='container d-flex  justify-content-end '>
            <div className='row'>
              <div className='col-md-12 h-[190px] bg-blue-500 h-[190px] w-[200px]'>
                <div className='h-[95px]'>
                  <a>
                    <h1 className='text-[20px] font-bold mt-3' style={{ fontFamily: "'Merriweather', serif" }}>Courses <br></br>Offered</h1>
                  </a>
                </div>
                <div className='flex d-flex align-items-end h-[95px]  '>
                  <FontAwesomeIcon icon={faArrowRightLong} className='text-[25px] mb-[45px]' />
                </div>
              </div>
              <div className='col-md-12 h-[190px] bg-red-500 h-[190px] w-[200px]'>
                <div className='h-[95px]'>
                  <a>
                    <h1 className='text-[20px] font-bold mt-3' style={{ fontFamily: "'Merriweather', serif" }}>Get an idea <br></br>about us</h1>
                  </a>
                </div>
                <div className='flex d-flex align-items-end h-[95px]  '>
                  <FontAwesomeIcon icon={faArrowRightLong} className='text-[25px] mb-[45px]' />
                </div>
              </div>
          //   </div> */}
          {/* // </div> */}
        </div>
      </div>
<div className='container  '>
  <div className='row flex items-center justify-center h-[200px]' style={{ fontFamily: "'Merriweather', serif" }}>
        <div className="  col-md-3   ">
          <span className="text-center text-black">
            <h1 className="text-[40px] md:text-[70px] font-bold ">10K+</h1>
            <h1 className="text-[16px] md:text-[18px] mt-2 me-2  text-center">STUDENTS</h1>
          </span>
          </div>
          <div className='col-md-3'>
          <span className="text-center text-black ">
            <h1 className="text-[40px] md:text-[70px] font-bold">300+</h1>
            <h1 className="text-[16px] md:text-[18px] mt-2 me-2  text-center">PROFESSORS</h1>
          </span>
          </div>
          <div className='col-md-3'>
          <span className="text-center text-black ">
            <h1 className="text-[40px] md:text-[70px] font-bold">50+</h1>
            <h1 className="text-[16px] text-center md:text-[18px] mt-2 me-2">STARTUPS</h1>
          </span>
        </div>
      </div>
</div>

      <div className='container mt-12'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='lg:w-1/2 p-4'>
            <h1 className='text-3xl mb-4'>Meet our President</h1>
            <p className='mb-6'>
              Emma J Coleman is the first President and founder of University. She is one of the most influential leaders in the field of education with experience spanning decades. She is now looking over the overall functioning of University and also acts as the head of the Department of Humanities.
            </p>
            <div className='grid grid-cols-2 gap-6'>
              <div className='text-center'>
                <h1 className="text-3xl md:text-4xl font-bold">37</h1>
                <h2 className="text-sm md:text-base mt-2">Research Papers<br />Published</h2>
              </div>
              <div className='text-center'>
                <h1 className="text-3xl md:text-4xl font-bold">7</h1>
                <h2 className="text-sm md:text-base mt-2">Research Grants<br />Received</h2>
              </div>
              <div className='text-center'>
                <h1 className="text-3xl md:text-4xl font-bold">3</h1>
                <h2 className="text-sm md:text-base mt-2">Textbooks<br />Published</h2>
              </div>
              <div className='text-center'>
                <h1 className="text-3xl md:text-4xl font-bold">23</h1>
                <h2 className="text-sm md:text-base mt-2">Awards &<br />Recognitions</h2>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 p-4'>
            <img src={leader} className='w-full h-auto' alt="President" />
          </div>
        </div>
      </div>

      <div className='mx-4 md:mx-8 lg:mx-16 mb-8'>
        <h1 className='text-3xl font-semibold mb-6'>Influential People</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className="card mx-auto">
            <img src="..." className="card-img-top h-64 object-cover" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-2xl" style={{ fontFamily: "'Merriweather', serif" }}>Card title</h5>
              <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="mt-4 border-2 border-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300">EMAIL</button>
            </div>
          </div>

          <div className="card mx-auto">
            <img src="..." className="card-img-top h-64 object-cover" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-2xl" style={{ fontFamily: "'Merriweather', serif" }}>Card title</h5>
              <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="mt-4 border-2 border-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300">EMAIL</button>
            </div>
          </div>

          <div className="card mx-auto">
            <img src="..." className="card-img-top h-64 object-cover" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-2xl" style={{ fontFamily: "'Merriweather', serif" }}>Card title</h5>
              <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="mt-4 border-2 border-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition duration-300">EMAIL</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}