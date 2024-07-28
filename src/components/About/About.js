import React from "react";
import students from "../../images/jec-students.jpg";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="sm:mx-[0px] md:mx-[90px]">
        <div className="my-3">
          <h1 className="text-xl md:text-3xl leading-relaxed font-helvari">
            We are a research institution focused on providing massive <br />
            opportunities through value education. University is one of the
            <br />
            world’s preeminent public universities.
          </h1>
        </div>
        <br />
        <div className="flex flex-col gap-[120px] md:flex-row">
          <div className="md:w-7/12 w-full">
            <p className="text-base md:text-lg leading-relaxed font-helvari">
              Our impact on individuals, our region, and the world is profound —
              whether we are launching young people into a boundless future or
              confronting the grand challenges of our time through undaunted
              research and scholarship. We turn ideas into impact and transform
              lives and our world.
              <br />
              <br />
              In a sense, University’s greatest invention may be itself — an
              unusual concentration of unusual talent, forever reinventing
              itself on a mission to make a better world. That invention is
              powered by individuals: a global community of educators,
              researchers, and learners with different perspectives but a shared
              commitment to serving humanity. Come, join us on the journey.
            </p>
          </div>
          <div className="md:w-5/12 w-full">
            <img
              src={students}
              className="rounded-lg border-solid border-2 border-white shadow shadow-blue-500/40 hover:shadow-indigo-500/40 h-auto w-full sm:w-[300px] md:w-[400px] md:h-[40px] lg:w-[500px] max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
