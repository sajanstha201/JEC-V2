import React from 'react';
import { Link } from 'react-router-dom';
import news from'../images/news.jfif';

export default function News() {
  return (
    <>
    <div className='sm:mx-[20px] md:mx-[120px]'>
       <div className='mt-5' style={{ fontFamily: "'Merriweather', serif", color: '#003366' }}>
          <div>
            <h1 className='text-[40px]' style={{ color: '#D80027' }}>News & Updates</h1>
          </div>
         
        </div>

        <div className='container-fluid mt-[70px]'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <p style={{ fontFamily: "'Merriweather', serif" }}>
              Welcome to the JEC News & Updates page, your go-to source for the latest happenings and important announcements.

Stay tuned for updates on upcoming events, recent achievements, and important changes within our community. We’re excited to share news that highlights our progress and celebrates our collective efforts.
              </p>
            </div>

            <div className='col-sm-12 col-md-6 flex items-end justify-end'>
              <img src={news} className='h-[200px] rounded-[10px]' alt="Learn More" />
            </div>
          </div>
        </div>
      <div className='container mt-16'>
        <div className='row'>
          {Array(8).fill().map((_, index) => (
            <div className='col-12 col-md-6 col-lg-4 mb-[30px]' key={index}>
              <div className="card mx-auto" style={{ width: "100%", border: "1px solid #e0e0e0", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <img src="https://via.placeholder.com/150" className="card-img-top w-[350px]" style={{ height: "200px", objectFit: "cover" }} alt="Computer Engineering" />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "'Merriweather', serif", fontSize: "20px", color: '#003366' }}>NEWS TITLE</h5>
                  <p style={{ fontSize: "14px", color: "#757575" }}>DATE:</p>
                  <h1 style={{ fontSize: "16px", fontWeight: "normal" }}>BY:NAME</h1>
                  <Link to=''>
                    <button style={{
                      fontFamily: "'Merriweather', serif", backgroundColor: "#D80027", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "5px", marginTop: "10px", cursor: "pointer", transition: "background-color 0.3s"
                    }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#A60020'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#D80027'}>
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
