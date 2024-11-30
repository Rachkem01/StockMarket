import React from 'react'

import { image } from '../../public/image'
const Apps = () => {
const date = new Date()
let year = date.getFullYear()
  return (
    <>
<main className='pl-[50px] mt-[50px] bg-[#ddd] pt-[50px] lg:pl-[300px]'>
<h1 className='font-inter text-2xl pb-[30px]'>Download App</h1>
   <section className='flex flex-wrap gap-[20px] min-w-[400px] pb-[30px]'>
    <img src={image.app} alt='app'/>
    <img src={image.play} alt='store'/>
   </section>

   
   </main>
   <div className=' pl-[50px] h-[30px] text-white font-inter font-bold bg-gradient-to-r from-[#1b1b32] 0% to-[#0a1852]'>Clonned CFI {year}</div>
   </>
  )
}

export default Apps