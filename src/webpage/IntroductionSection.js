import styled from "styled-components";
import jecimg from "../../src/media/images/jec.png";

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
        <BackDivImg
          className="bg-cover bg-center h-[80vh] w-full relative"
        >
          <div className="block justify-center w-full mx-auto md:w-[60%] p-4 text-center items-center text-white">
            <div className="mt-40">
              <h1 className="text-3xl font-bona-nova font-semibold" style={{ fontFamily: "'Merriweather', serif" }}>
                JANAKPUR ENGINEERING COLLEGE
              </h1>
              <p className="text-lg">
                Janakpur engineering is a leading research university pushing
                boundaries and frontiers to brighten the future of the students.
              </p>
              <button className="px-3 py-2 font-semibold hover:bg-white hover:text-black mt-2 rounded-lg border border-white">
                CONTACT US
              </button>
            </div>
          </div>
        </BackDivImg>
      </header>
    </>
  );
};
