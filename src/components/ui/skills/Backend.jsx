import React from 'react'

function Backend() {
  return (
    <div>
       <div className='flex p-5'>
        <div className='flex gap-2 flex-wrap '>
        <div className='mb-3' >
            <p className='bg-black text-white rounded-xl  inline-block rounded-sm  p-2 hover:bg-purple-500'>Node</p>
        </div>
        <div className='mb-3'>
            <p className='bg-black text-white rounded-xl  inline-block rounded-sm  p-2 hover:bg-purple-500'>Express</p>
        </div>
        <div className='mb-3'>
            <p className='bg-black text-white rounded-xl  inline-block rounded-sm  p-2 hover:bg-purple-500'>Axios</p>
        </div>
        <div className='mb-3'>
            <p className='bg-black text-white rounded-xl  inline-block rounded-sm  p-2 hover:bg-purple-500'>MongoDB</p>
        </div>
        <div >
            <p className='bg-black text-white rounded-xl inline-block rounded-sm  p-2 hover:bg-purple-500'>Mongoose</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Backend
