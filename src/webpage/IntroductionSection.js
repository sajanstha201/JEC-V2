import React from "react";
import jecimg from "../../src/media/images/jec.png";

const IntroductionSection = () => {
  return (
    <>
      <header>
        <div
          className="bg-cover bg-center h-[80vh] w-full relative"
          style={{ backgroundImage: `url(${jecimg})` }}
        >
          <div className="block justify-center w-full mx-auto md:w-[60%] p-4 text-center items-center text-white">
            <div className="mt-40">
              <h1 className="text-2xl font-bona-nova font-semibold">
                JANAKPUR ENGINEERING COLLEGE
              </h1>
              <p className="text-lg">
                Janakpur engineering is a leading research university pushing
                boundaries and frontiers to brighten the future of the students.
              </p>
              <button className="px-4 py-3 font-semibold hover:bg-white hover:text-black mt-2 rounded-lg border border-white">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default IntroductionSection;
