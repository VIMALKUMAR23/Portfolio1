import React from "react";
import image from "../assets/job.png";
import ButtonHire from "./ui/ButtonHire";
import ReactAutoType from "./ui/autoType/ReactAutoType";
import TimeLineProject from "./ui/TimeLineProject";

function Home() {
  return (
    <div className="flex flex-col sm:flex-row mt-10 p-5 min-h-screen ">
      <div className="flex-1 ">
        <h2 className=" font-bold font-Alegreya text-3xl">Hello</h2>
        <p className="text-3xl">
          I'm <span className=" font-semibold ">Vimal kumar</span>
        </p>
        <p className="text-3xl">A MERN Stack developer</p>
        <p className="pt-5 font-poppins">
          Enthusiastic junior web developer with a strong foundation in
          full-stack development, specializing in the MERN stack (MongoDB,
          Express, React, Node.js). Passionate about creating dynamic web
          applications and continuously improving coding skills. Eager to
          contribute to innovative projects and collaborate with a talented team
        </p>
        {/* used :- react typed  */}
        <ReactAutoType />

        <ButtonHire />
       {/* current project timeLine */}
       <TimeLineProject/>
      </div>
      <div className="flex-1 content-center flex justify-center items-center mt-0 ">
        <img
          className=" md:order-last order-first "
          src={image}
          alt="jobSearch image"
        />
      </div>
    </div>
  );
}

export default Home;
