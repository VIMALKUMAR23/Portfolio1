import { Button } from 'flowbite-react'
import React from 'react'

function ButtonHire() {
  return (
    <div>
       <div className='flex gap-2 p-5'>
        <a href="https://mern-blog-gray-omega.vercel.app/">
      <Button outline gradientDuoTone="purpleToPink">
        Current Project
      </Button>
      </a>
      <a 
          href="https://drive.google.com/file/d/1imHgxY1rxtAbe_CFRDUlSxQoWcvAluaQ/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button gradientDuoTone="purpleToPink">
            Resume
          </Button>
        </a>
    </div>
    </div>
  )
}

export default ButtonHire
