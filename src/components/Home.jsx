import React from "react";
import image from "../assets/job.png";
import ButtonHire from "./ui/ButtonHire";
import ReactAutoType from "./ui/autoType/ReactAutoType";
import TimeLineProject from "./ui/TimeLineProject";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 p-5 min-h-screen gap-5">
      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h2 className="font-bold font-Alegreya text-3xl">Hello</h2>
        <p className="text-3xl">
          I'm <span className="font-semibold">Vimal Kumar</span>
        </p>
        <p className="text-3xl">A MERN Stack Developer</p>
        <p className="pt-5 font-poppins">
          Enthusiastic junior web developer with a strong foundation in
          full-stack development, specializing in the MERN stack (MongoDB,
          Express, React, Node.js). Passionate about creating dynamic web
          applications and continuously improving coding skills. Eager to
          contribute to innovative projects and collaborate with a talented
          team.
        </p>
        {/* Used React Typed */}
        <ReactAutoType />

        <ButtonHire />
        {/* Current Project Timeline */}
        <TimeLineProject />
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img
          className="w-[350px] sm:w-[450px] lg:w-[670px]"
          src={image}
          alt="jobSearch image"
        />
      </div>
    </div>
  );
}

export default Home;
