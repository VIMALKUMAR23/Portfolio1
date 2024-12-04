import React from 'react'

function Frontend() {
  return (
    <>
    <div className='flex p-5'>
        <div className='flex gap-2 flex-wrap md:flex-nowrap'>
        <div className='mb-3' >
            <p className='bg-black text-white rounded-xl  inline-block rounded-sm  p-2 hover:bg-purple-500 '>HTML</p>
        </div>
        <div className='mb-3'>
            <p className='bg-black text-white rounded-xl inline-block rounded-sm p-2 hover:bg-purple-500 '>CSS</p>
        </div>
        <div className='mb-3'>
            <p className='bg-black text-white rounded-xl  inline-block rounded-sm p-2  hover:bg-purple-500'>Bootstrap</p>
        </div>
        <div className='mb-3'>
            <p className='bg-black text-white rounded-xl  inline-block rounded-sm p-2 hover:bg-purple-500'>Tailwind</p>
        </div>
        <div >
            <p className='bg-black text-white rounded-xl  inline-block rounded-sm p-2  hover:bg-purple-500'>ReduxToolKit</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Frontend
