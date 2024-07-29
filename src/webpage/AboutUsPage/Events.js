import React from 'react'
import academic from '../../images/academic.png';
export default function Events() {
  return (
   <>
   <div className='container '>
  <div className='row md:mb-3 mb-5'>
    <div className='col-md-6 col-2xl-12 col-sm-12 flex text-center md:h-[130px] h-[50px] align-items-center justify-content-center'>
         <h1 className='text-[45px]  mb-[20px]' style={{ fontFamily: "'Merriweather', serif" }}>Happening Now</h1>

    </div>

    <div className='col-md-6 col-2xl-12 col-sm-12 d-flex flex-column  md:h-[130px] h-[170px] align-items-start justify-content-center'>
    <p className='text-[18px]' style={{ fontFamily: "'Merriweather', serif" }}>At University’s beautiful campus, you’ll find a diverse and welcoming community that will teach you life skills along with having fun.</p>
    <button  style={{ fontFamily: "'Merriweather', serif" }} className='border-solid border-2 border-black text-center flex justify-content-center align-items-center p-[15px] my-4 px-4 rounded-[10px] text-[17px] '>EXPLORE EVENTS</button>
</div>
<div className='container-fluid'>
  <div className='row d-flex align-items-center justify-content-center'>
    <div className='col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center mb-1'>
      <div className="card" style={{ width: '23rem', fontFamily: "'Playfair Display', serif" }}>
        <h5 className="card-title text-[20px]">01</h5>
        <h5 className="card-title my-2 text-[40px]">Academics</h5>
        <img src={academic} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Students of University take part in scholarship exams organized by the local community.</p>
        </div>
      </div>
    </div>

    <div className='col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center mb-4'>
      <div className="card" style={{ width: '23rem', fontFamily: "'Playfair Display', serif" }}>
        <h5 className="card-title text-[20px]">01</h5>
        <h5 className="card-title my-2 text-[40px]">Academics</h5>
        <img src={academic} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Students of University take part in scholarship exams organized by the local community.</p>
        </div>
      </div>
    </div>

    <div className='col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center mb-4'>
      <div className="card" style={{ width: '23rem', fontFamily: "'Playfair Display', serif" }}>
        <h5 className="card-title text-[20px]">01</h5>
        <h5 className="card-title my-2 text-[40px]">Academics</h5>
        <img src={academic} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Students of University take part in scholarship exams organized by the local community.</p>
        </div>
      </div>
    </div>
  </div>
</div>



  </div>

   </div>
   
   
   
   </>
  )
}
