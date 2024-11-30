
import React from 'react'

import { image } from '../../public/image'
const Lewis = () => {
  return (

<section className='flex gap-[100px]'>

    <div className='lg:ml-[100px]'>
       
<img src={image.Lewis} alt='Lewis' className='w-[400px] h-[450px] pt-[50px] lg:h-[600px] w-[400px] pt-[200px]'/>

<div className='w-[300px] h-[100px] font-inter text-white  relative left-[20%] mt-[-150px] bg-black  rounded-md pt-[20px] pl-[10px] opacity-60 border-2 border-white'>
<h4 className='text-2xl'>Lewis Hamilton</h4>
<p className='text-2xl'>Global Ambassador</p>
</div>
    </div>
    <div className=' hidden w-[5px] bg-cyan-700 mt-[150px] h-[450px] lg:block'></div>
    </section>
  )
}

export default Lewis