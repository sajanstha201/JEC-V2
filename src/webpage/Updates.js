import React from "react";

const Updates = () => {
  return (
    <>
      <div className="relative flex flex-col items-center bg-green-500">
        <div className="absolute top-[calc(-8vh-15px)] bg-blue-500  sm:h-[180px]  md:h-[150px] w-full max-w-[1100px] flex flex-wrap items-center justify-center gap-8 md:gap-[80px] rounded-[20px] z-50 p-4 md:p-0">
          <span className="text-center text-white">
            <h1 className="text-[40px] md:text-[60px] font-bold ">10K+</h1>
            <h1 className="text-[16px] md:text-[20px] font-bold">STUDENTS</h1>
          </span>
          <span className="text-center text-white ">
            <h1 className="text-[40px] md:text-[50px] font-bold">300+</h1>
            <h1 className="text-[16px] md:text-[20px] font-bold">PROFESSORS</h1>
          </span>
          <span className="text-center text-white ">
            <h1 className="text-[40px] md:text-[50px] font-bold">50+</h1>
            <h1 className="text-[16px] md:text-[20px] font-bold">STARTUPS</h1>
          </span>
          <span className="text-center text-white ">
            <h1 className="text-[40px] md:text-[50px] font-bold">15</h1>
            <h1 className="text-[16px] md:text-[20px] font-bold">COURSES</h1>
          </span>
        </div>
      </div>

     <div className="container mt-[120px] w-[1150px] mb-[100px]">
      <div className="row">
        <div className="col-sm-12 col-md-4">
                    <h1 className="ms-[20px] text-[18px] text-center"  style={{ fontFamily: "'Merriweather', serif" }} >Latest Updates</h1>
        </div>

         <div className="col-sm-12 col-md-8">  
               <h1 className="ms-[30px] text-[15px]"  style={{ fontFamily: "'Merriweather', serif" }}>University is implementing a phased recovery of university operations. We are currently in Phase 2 of the restart process.</h1>
         </div>

      </div>

     </div>
    </>
  );
};

export default Updates;
