import React, { useState } from "react";
import academic from "../../images/academic.png";

const images = [
  { src: academic, alt: "View from inside" },
  { src: academic, alt: "Entrance" },
  { src: academic, alt: "Public Library" },
  { src: academic, alt: "Library Inside" },
];

export default function AboutUniversity() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-2xl-12 col-sm-12 flex text-center h-[300px] align-items-center justify-content-center">
            <h1
              className="text-[45px] mb-[30px] "
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              About University
            </h1>
          </div>

          <div className="col-md-6 col-2xl-12 col-sm-12 d-flex flex-column  h-[300px] align-items-start justify-content-center">
            <p
              className="text-[18px] mt-[120px]"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              A place for learning, discovery, innovation, expression and
              discourse, the campus is full of life and is always active with
              events and get-togethers.
            </p>
            <button
              style={{ fontFamily: "'Merriweather', serif" }}
              className=" border-solid border-2 border-black text-center flex justify-content-center align-items-center p-[15px] my-4 px-4 rounded-[10px] text-[17px] "
            >
              ABOUT UNIVERSITY
            </button>
          </div>
        </div>
      </div>

      <div className="container flex justify-center items-center h-screen bg-blue-50">
        <div className="slider bg-white p-4 rounded-lg shadow-lg flex items-center">
          <button onClick={handlePrevClick} className="btn btn-primary mr-2">
            ←
          </button>
          <div className="slider-content text-center">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-80 h-60 object-cover rounded-md"
            />
            <p className="mt-2 text-lg font-semibold">
              {images[currentIndex].alt}
            </p>
          </div>
          <button onClick={handleNextClick} className="btn btn-primary ml-2">
            →
          </button>
        </div>
      </div>
    </>
  );
}
