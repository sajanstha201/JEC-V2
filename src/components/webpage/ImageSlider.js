import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import uni1 from "../images/academic.png";
import uni2 from "../images/computer.jpg";
import uni3 from "../images/electronics.jpg";
import uni4 from "../images/intenship.png";
import uni5 from "../images/civil.jpg";

const ImageSlider = () => {
  const images = [
    { src: uni1, alt: "View from inside", title: "View from inside" },
    { src: uni2, alt: "Entrance", title: "Entrance" },
    { src: uni3, alt: "Public Library", title: "Public Library" },
    { src: uni4, alt: "Library Inside", title: "Library Inside" },
    { src: uni5, alt: "Class", title: "Class" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-11/12 mx-auto overflow-hidden max-w-[90%] my-8">
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-64 object-cover rounded-lg"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-white bg-opacity-70 text-center text-gray-700 text-sm">
              {image.title}
            </div>
          </div>
        ))}
      </div>
      <FaAngleLeft
        className="fa fa-4x absolute top-1/2 transform -translate-y-1/2 left-2 text-4xl text-gray-700 bg-white bg-opacity-70 rounded-full p-2 cursor-pointer"
        onClick={goToPrevious}
      />
      <FaAngleRight
        className="fa fa-4x absolute top-1/2 transform -translate-y-1/2 right-2 text-4xl text-gray-700 bg-white bg-opacity-70 rounded-full p-2 cursor-pointer"
        onClick={goToNext}
      />
    </div>
  );
};

export default ImageSlider;
