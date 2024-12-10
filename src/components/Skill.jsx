import React from "react";
import { Card } from "flowbite-react";
import htmlpic from "../assets/skills/html.png";
import Frontend from "./ui/skills/Frontend";
import Backend from "./ui/skills/Backend";
function Skill() {
  const skills = [
    { name: "HTML", icon: htmlpic },
    { name: "CSS", icon: htmlpic },
    { name: "Bootstrap", icon: htmlpic },
    { name: "JavaScript", icon: htmlpic },
    { name: "React", icon: htmlpic },
    { name: "Tailwind CSS", icon: htmlpic },
    { name: "Redux Toolkit", icon: htmlpic },
  ];
  return (
    <div className="p-5 mt-3 ">
      <p className=" text-3xl font-bold mb-5">Skills</p>

      {/* Grid Container */}
      {/* <Card>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {skills.map((skill, index) => (
        <Card key={index} className="flex items-center gap-3 p-4 max-w-xs mx-auto">
          <img width="30px" src={skill.icon} alt={skill.name} />
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </p>
        </Card>

      ))}
    </div>
    </Card> */}
      {/* front */}
      <div className=" flex gap-2 sm:flex flex-col md:flex-row">
        <div className="flex-1  border border-cyan-300 p-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% "  >
          <div>
            <p className=" font-mono text-2xl font-semibold text-center">
              Front-end 
            </p>
            {/* adding data */}
            <div className="flex-1">
              <Frontend />
            </div>
          </div>
        </div>
        {/* backend */}
        <div className="flex-1 border border-blue-500 p-2 rounded-lg bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <div>
            <p className=" font-mono text-2xl font-semibold text-center">
              back-end 
            </p>
            {/* adding data */}
            <div className="flex-1">
              <Backend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
