import React from 'react'
import { Card } from "flowbite-react";
import Blog_S from "../assets/projects/MyBlog.png"
import Random_Quote from "../assets/projects/MyQuotesGenerator.png"
import todo from "../assets/projects/MyTodo.png"
import Ekart from "../assets/projects/MyEkart.png"


function Projects() {
  const projectData=[
    {name:"Blog Site",pic:Blog_S,description:" MERN based web application ,we can post blog with crud operation and state managed with ReduxToolkit with tailwind css",tools:"React, Express, Node, MongoDB, ReduxToolKit"},
    // {name:"Fair",pic:blogpic,description:" MERN application with context api and styled using bootstrap ,toastify",tools:" React, Express, Node,MongoDB, Context Api"},
    {name:"Random Quote Generator",pic:Random_Quote,description:" MERN based web application ,we can post blog with crud operation and state managed with ReduxToolkit with tailwind css",tools:"React, Express, Node, MongoDB, ReduxToolKit"},
    {name:"To-Do List App",pic:todo,description:" MERN based web application ,we can post blog with crud operation and state managed with ReduxToolkit with tailwind css",tools:"React, Express, Node, MongoDB, ReduxToolKit"},
    {name:"EKart",pic:Ekart,description:" MERN based web application ,we can post blog with crud operation and state managed with ReduxToolkit with tailwind css",tools:"React, Express, Node, MongoDB, ReduxToolKit"},
  ]
  return (
    <div id='project' >
      <p className='p-5 text-3xl underline'>Projects</p>
      
      <div className=' m-5 flex gap-5 max-auto sm:flex-col justify-center items-center md:flex-row'>

      {projectData.map((project,index)=>(
        <Card key={index} className="max-w-sm" >
        <img src={project.pic} width="300px" alt="" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {project.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {project.description}
       
      </p>
      <p className="font-normal text-black bg-blue-400  ">
        {project.tools}
      </p>
    </Card>
      ))}
    
      </div>
      
    </div>
  )
}

export default Projects
