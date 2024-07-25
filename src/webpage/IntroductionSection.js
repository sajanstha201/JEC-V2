import styled from "styled-components";
import jecimg from '../media/images/jec.png'
const BackDivImg = styled.div`
  background-image: url(${jecimg});
  background-size: cover;
  background-position: center;
  height: 80vh;
  width: 100%;
  opacity: 1;
`;
export const IntroductionSection = () => {
  return (
    <>
      <header>
        {/* <video
            className="w-full h-[95vh] object-cover -z-10 bgcolor relative"
            autoPlay
            muted
          >
            <source src={jecvideo} type="video/mp4" />
          </video> */}
        <BackDivImg className="sm:h-[70vh] w-full relative">
          <div className="block justify-center w-full mx-auto md:w-[60%] p-4 text-center items-center text-white">
            <div className="mt-40">
              <h1 className="text-2xl font-bona-nova font-semibold ">JANAKPUR ENGINEERING COLLEGE</h1>
              <p className="text-lg ">
                Janakpur engineering is a leading research university pushing
                boundaries and frontiers to brighten the future of the students.
              </p>
              <button className="px-4 py-3 font-semibold hover:bg-white hover:text-black mt-2 rounded-lg border border-white">
                CONTACT US
              </button>
            </div>
          </div>
        </BackDivImg>
      </header>
    </>
  );
};