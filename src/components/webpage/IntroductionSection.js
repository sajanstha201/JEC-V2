import styled from "styled-components";
import { Link } from 'react-router-dom';
import jecimg from '../media/images/jec.png';
import video from '../media/images/jec.mp4';

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 92%;
  object-fit: cover;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const IntroductionSection = () => {
  return (
    <>
      <header>
        <VideoBackground autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </VideoBackground>
        <ContentWrapper>
          <div className="block justify-center w-full mx-auto md:w-[60%] p-4 text-center items-center">
            <div className="mt-40">
              <h1 className="text-3xl font-bona-nova font-semibold" style={{ fontFamily: "'Merriweather', serif" }}>
                JANAKPUR ENGINEERING COLLEGE
              </h1>
              <p className="text-lg">
                Janakpur Engineering is a leading research university pushing
                boundaries and frontiers to brighten the future of the students.
              </p>
                <Link to='/login'>
              <button className="px-3 py-2 font-semibold hover:bg-blue-500 hover:text-white mt-2 rounded-lg border border-black">
                Login
              </button>
              </Link>
            </div>
          </div>
        </ContentWrapper>
      </header>
    </>
  );
};
