import React from 'react'
import { ReactTyped } from 'react-typed'

function ReactAutoType() {
  return (
    <div className='w-[300px] p-4 rounded-lg bg-blue-400 text-center text-xl font-mono mt-5 '>
      <p>
      MERN  {""}
        <ReactTyped strings={['Developer']} typeSpeed={200} loop showCursor={true} playSpeed={20}/>
      </p>
    </div>
  )
}

export default ReactAutoType
