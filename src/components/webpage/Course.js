import React from "react";
import { Link } from 'react-router-dom';
import computer from '../images/computer.jpg';
import civil from '../images/civil.jpg';
import electronics from '../images/electronics.jpg';

const CourseCard = ({ img, title, link }) => (
  <div className='col-12 col-md-6 col-lg-4 mb-4'>
    <div className="card h-100 shadow-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
      <img src={img} className="card-img-top h-40 object-cover transition-transform transform hover:scale-110" alt={title} />
      <div className="card-body p-3 flex flex-col">
        <h5 className="card-title text-lg font-serif text-blue-900 mb-2">
          {title}
        </h5>
        <p className="card-text text-gray-500 mb-2">Starting in Fall 2022</p>
        <p className="card-text mb-4">Duration: 4 Years</p>
        <Link to={link}>
          <button className="btn bg-red-600 text-white py-2 px-4 rounded-md border-none transition-all transform hover:scale-105 hover:bg-red-700 hover:shadow-lg">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default function Course() {
  return (
    <div className="container mx-auto my-12">
       <div>
    <div className="container">
        <div className="row">
          <div className="col-md-6 col-2xl-12 col-sm-12 flex text-center h-[300px] align-items-center justify-content-center">
            <h1
              className="text-[45px] mb-[10px] "
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Courses Offered
            </h1>
          </div>

          <div className="col-md-6 col-2xl-12 col-sm-12 d-flex flex-column  h-[300px] align-items-start justify-content-center">
            <p
              className="text-[18px] mt-[120px]"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
             Explore University's 10+ courses across various specialisations that provoke intellectual and intuitive learning among students.
            </p>
            <Link to=''>
           
            <button
              style={{ fontFamily: "'Merriweather', serif" }}
              className=" border-solid border-2 border-black text-center flex justify-content-center align-items-center p-[15px] my-4 px-4 rounded-[10px] text-[17px] "
            >
             EXPLORE COURCES
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
      <div className='row mb-[100px]'>
        <CourseCard img={computer} title='Bachelor of Computer Engineering (BCE)' link='/alearnmore' />
        <CourseCard img={civil} title='Bachelor of Civil Engineering (BCT)' link='/alearnmore' />
        <CourseCard img={electronics} title='Bachelor of Electronics and Information Engineering (BEI)' link='/alearnmore' />
      </div>
    </div>
  );
}
