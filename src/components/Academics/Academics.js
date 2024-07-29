import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../top/Image'
import computer from '../../media/images/computer.jpg';
import civil from '../../media/images/civil.jpg';
import electronics from '../../media/images/electronics.jpg';

export default function Academics() {
  return (
    <>
    <Image/>
    <div>
        <h1 className='text-center  mt-[50px] font-bold text-[50px] text-blue-500'>ACADEMICS</h1>
    </div>
    <div className="container mt-[50px]">
    <div className="row d-flex align-items-center">
        <div className="col-md-6 d-flex justify-content-center">
            <img
                className="card-img-top rounded-2xl"
                src={computer}
                alt="Computer Science"
                style={{
                    height: '350px',
                    objectFit: 'cover'
                }}
            />
        </div>
        <div className="col-md-6  flex flex-col items-center justify-center">
            <h1 className="font-bold text-5xl text-blue-500">BCE</h1>
            <p className="text-xl mt-3">
            A Bachelor of Computer Engineering (BCE) in Joint Entrance Committee (JEC) is an undergraduate program focused on computer science, software engineering, and hardware engineering. It combines theoretical knowledge with practical skills in areas like programming, algorithms, data structures, computer networks, and software development. Students learn to design and maintain computer systems and applications, preparing for tech industry careers. The curriculum often includes hands-on projects, internships, and industry collaborations to equip graduates for the evolving technology sector.
            </p>
            <Link to={'/learn-more'}>
            <button className="hover:bg-green-600 hover:text-white mt-3 h-12 w-40 text-white font-bold rounded-2xl bg-sky-700 text-xl">
              Learn More
            </button>
            </Link>
        </div>
    </div>
</div>

<div className="container mt-[90px]   items-center justify-center">
    <div className="row d-flex align-items-center flex flex-col-reverse md:flex-row ">
        
        <div className="col-md-6 flex flex-col items-center justify-center">
            <h1 className="font-bold text-5xl text-blue-500">BCT</h1>
            <p className="text-xl mt-3">
            A Bachelor of Civil Engineering (BCT) program focuses on designing, constructing, and maintaining infrastructure such as buildings, roads, bridges, and water systems. This degree combines theoretical and practical learning in areas like structural, environmental, and transportation engineering. Students gain skills in problem-solving, project management, and the use of engineering software, often through hands-on projects and internships. Graduates are prepared to tackle modern engineering challenges and contribute to sustainable infrastructure development.</p>
            <Link to={'/learn-more'}>
            <button className="hover:bg-green-600 hover:text-white mt-3 h-12 w-40 text-white font-bold rounded-2xl bg-sky-700 text-xl">
              Learn More
            </button>
            </Link>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
            <img
                className="card-img-top rounded-2xl"
                src={civil}
                alt="Computer Science"
                style={{
                    height: '350px',
                    objectFit: 'cover'
                }}
            />
        </div>
    </div>
</div>




<div className="container mt-[90px]  flex flex-col items-center justify-center">
    <div className="row d-flex align-items-center">
        

    <div className="col-md-6 d-flex justify-content-center">
            <img
                className="card-img-top rounded-2xl"
                src={electronics}
                alt="Computer Science"
                style={{
                    height: '350px',
                    objectFit: 'cover'
                }}
            />
        </div>

        <div className="col-md-6 flex flex-col items-center justify-center">
            <h1 className="font-bold text-5xl text-blue-500">BCE</h1>
            <p className="text-xl mt-3">
            A Bachelor of Electronics and Information Engineering (BEI) program focuses on the study of electronics, communication systems, and information technology. This degree combines theoretical knowledge with practical skills in areas such as circuit design, signal processing, telecommunications, embedded systems, and software development. Students are trained to design, develop, and manage electronic and information systems, preparing them for careers in various tech and engineering industries. The curriculum often includes hands-on projects, internships, and industry collaborations, ensuring that graduates are well-equipped to meet the demands of the rapidly evolving technology sector.</p>
            <Link to={'/learn-more'}>
            <button className="hover:bg-green-600 hover:text-white mt-3 h-12 w-40 text-white font-bold rounded-2xl bg-sky-700 text-xl">
              Learn More
            </button>
            </Link>
        </div>

      
    </div>
</div>

    </>
      
    
  )
}
