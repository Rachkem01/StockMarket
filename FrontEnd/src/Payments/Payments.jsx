import React from 'react'

import { image } from '../../public/image'
const Payments = () => {
  return (
  <section className='pt-[100px] pl-[50px] lg:pl-[200px] font-inter'>
    <h1 className='text-2xl pb-[30px]'>Accepted payment methods</h1>
    <main className='flex flex-col gap-[10px] lg:flex-row'>

<div className='flex gap-[10px] font-bold w-[200px] h-[100px] rounded-md bg-[#ddd]'>
<img src={image.pay} className='w-[100px] h-[50px] relative top-[25%] left-[15%]' />

</div>
<div className='flex gap-[10px] font-bold w-[200px] h-[100px] rounded-md bg-[#ddd]'>
<img src={image.master} className='w-[100px] h-[70px] relative top-[25%] left-[15%]' />
</div>
<div className='flex gap-[10px] font-bold w-[200px] h-[100px] rounded-md bg-[#ddd]'>
<img src={image.visa} className='w-[100px] h-[50px] relative top-[25%] left-[15%]' /></div>
<div className='flex gap-[10px] font-bold w-[200px] h-[100px] rounded-md bg-[#ddd]'>
<img src={image.wire} className='w-[100px] h-[50px] relative top-[25%] left-[15%]' /></div>
    </main>
  </section>
  )
}

export default Payments