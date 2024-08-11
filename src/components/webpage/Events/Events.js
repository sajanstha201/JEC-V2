import React from 'react';
import academic from '../../images/academic.png';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <>
      <div className='container'>
        <div className='row'>
        <div className='col-md-6 col-2xl-12 col-sm-12 flex text-center h-[300px] align-items-center justify-content-center'>
         <h1 className='text-[45px]  mb-[110px]' style={{ fontFamily: "'Merriweather', serif" }}>Happening Now</h1>

    </div>

    <div className='col-md-6 col-2xl-12 col-sm-12 d-flex flex-column  h-[300px] align-items-start justify-content-center'>
    <p className='text-[18px]' style={{ fontFamily: "'Merriweather', serif" }}>At University’s beautiful campus, you’ll find a diverse and welcoming community that will teach you life skills along with having fun.</p>
    <Link to='/exploreEvents'>
 <button  style={{ fontFamily: "'Merriweather', serif" }} className='border-solid border-2 border-black text-center flex justify-content-center align-items-center p-[15px] my-4 px-4 rounded-[10px] text-[17px] '>EXPLORE EVENTS</button>
 </Link>
</div>
        </div>

        <div className='container-fluid '>
          <div className='row d-flex align-items-center justify-content-center'>
            {['01', '02', '03'].map((num, index) => (
              <div key={index} className='col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center mb-10 '>
                <div className='card custom-card pb-4' style={{ width: '23rem', fontFamily: "'Playfair Display', serif" }}>
                  <h5 className='card-title text-[20px] mt-3'>{num}</h5>
                  <h5 className='card-title my-2 text-[40px]'>Academics</h5>
                  <div className='card-img-container flex items-center justify-center'>
                    <img src={academic} className='card-img-top' alt='...' />
                  </div>
                  <div className='card-body'>
                    <p className='card-text'>
                      Students of University take part in scholarship exams organized by the local community.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-card {
          border: 2px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-img-container {
          overflow: hidden;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .card-img-top {
          width: 90%;
          height: auto;
          transition: transform 0.3s ease;
        }
        .card-img-top:hover {
          transform: scale(1.05);
        }
        .text-center {
          text-align: center;
        }
        .d-flex {
          display: flex;
        }
        .flex-column {
          flex-direction: column;
        }
        .justify-content-center {
          justify-content: center;
        }
        .align-items-center {
          align-items: center;
        }
        .h-[300px] {
          height: 300px;
        }
        .mb-4 {
          margin-bottom: 1.5rem;
        }
        .text-[45px] {
          font-size: 45px;
        }
        .text-[18px] {
          font-size: 18px;
        }
        .border-2 {
          border-width: 2px;
        }
        .rounded-[10px] {
          border-radius: 10px;
        }
        .text-[17px] {
          font-size: 17px;
        }
        .hover\\:bg-black:hover {
          background-color: #000;
        }
        .hover\\:text-white:hover {
          color: #fff;
        }
        .transition {
          transition: all 0.3s ease;
        }
        .duration-300 {
          transition-duration: 300ms;
        }
        .my-2 {
          margin: 0.5rem 0;
        }
        .mt-3 {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
}
