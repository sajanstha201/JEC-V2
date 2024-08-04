import React from "react";

const Updates = () => {
  return (
    <>
      <div className=" flex flex-col items-center bg-green-500 ">
        <div className=" z-[-1] absolute top-[calc(85vh-15px)] bg-blue-500 sm:h-[180px] md:h-[150px] w-full max-w-[1100px] flex flex-wrap items-center justify-center gap-8 md:gap-[80px] rounded-[20px] z-50 p-4 md:p-0">
          <span className="text-center text-white">
            <h1 className="text-[40px] md:text-[50px] font-bold">10K+</h1>
            <h1 className="text-[16px] md:text-[20px] font-bold">STUDENTS</h1>
          </span>
          <span className="text-center text-white">
            <h1 className="text-[40px] md:text-[50px] font-bold">300+</h1>
            <h1 className="text-[16px] md:text-[20px] font-bold">PROFESSORS</h1>
          </span>
          <span className="text-center text-white">
            <h1 className="text-[40px] md:text-[50px] font-bold">50+</h1>
            <h1 className="text-[16px] md:text-[20px] font-bold">STARTUPS</h1>
          </span>
          <span className="text-center text-white">
            <h1 className="text-[40px] md:text-[50px] font-bold">15</h1>
            <h1 className="text-[16px] md:text-[20px] font-bold">COURSES</h1>
          </span>
        </div>
      </div>

      <div className="container mx-auto mt-[120px] w-full max-w-[1150px] mb-[100px] px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <h1 className="text-[15px] text-center md:text-left" style={{ fontFamily: "'Merriweather', serif" }}>
              Latest Updates
            </h1>
          </div>
          <div className="md:w-2/3">
            <h1 className="text-[15px] mt-4 md:mt-0 text-center" style={{ fontFamily: "'Merriweather', serif" }}>
              University is implementing a phased recovery of university operations. We are currently in Phase 2 of the restart process.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Updates;
