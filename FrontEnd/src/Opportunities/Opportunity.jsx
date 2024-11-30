
import React from 'react'

import { image } from '../../public/image'
const Opportunity = () => {
  return (
    <div className='bg-gray-100 mt-[50px] pl-[50px] pt-[100px] pb-[100px] lg:pl-[200px] '>
    <div>
    <p className='font-inter text-2xl text-black lg:text-5xl'>15,000+ opportunities</p>
    <p className='text-gray-700 text-xl mt-[30px] '>Discover your potential with thousands of opportunities at your fingertips.</p>
    </div>

<main className='flex flex-wrap gap-[10px] mt-[50px]  font-inter'>

<div className='flex flex-col gap-[20px] text-center rounded-sm bg-white w-[300px] h-[220px] pt-[30px] text-[15px] pl-[20px] pr-[20px]'>
<img src={image.coin2} alt='dollars' className='w-[50px] h-[50px] relative left-[40%]' />
<h1 className='text-cyan-700'>Forex</h1>
<p >Dive into the worlds largest financial market and access major, minor and exotic pairs</p>
</div>

<div className='flex flex-col gap-[20px] text-center rounded-sm bg-white w-[300px] h-[220px] pt-[30px] text-[15px] pl-[20px] pr-[20px]'>
<img src={image.chart} alt='dollars' className='w-[50px] h-[50px] relative left-[40%]' />
<h1  className='text-cyan-700'>ETFs</h1>
<p >Track the performance of specific sectors, such as energy or technology, with ETF trading.</p>
</div>

<div className='flex flex-col gap-[20px] text-center rounded-sm bg-white w-[300px] h-[220px] pt-[30px] text-[15px] pl-[20px] pr-[20px]'>
<img src={image.globe} alt='dollars' className='w-[50px] h-[50px] relative left-[40%]' />
<h1  className='text-cyan-700'>Indices</h1>
<p >Gain exposure to entire economies in a single trade with global indices spanning the US, Europe and Asia</p>
</div>

<div className='flex flex-col gap-[20px] text-center rounded-sm bg-white w-[300px] h-[220px] pt-[30px] text-[15px] pl-[20px] pr-[20px]'>
<img src={image.metal} alt='dollars' className='w-[50px] h-[50px] relative left-[40%]' />
<h1  className='text-cyan-700'>Metals</h1>
<p>Make your portfolio shine with gold, silver, and other precious metals.</p>
</div>

<div className='flex flex-col gap-[20px] text-center rounded-sm bg-white w-[300px] h-[220px] pt-[30px] text-[15px] pl-[20px] pr-[20px]'>
<img src={image.stock} alt='dollars' className='w-[50px] h-[50px] relative left-[40%]' />
<h1  className='text-cyan-700'>Stocks</h1>
<p >Trade stocks the right way. Choose from thousands of leading stocks across major global exchanges.</p>
</div>
<div className='flex flex-col gap-[20px] text-center rounded-sm bg-white w-[300px] h-[220px] pt-[30px] text-[15px] pl-[20px] pr-[20px]'>
<img src={image.electric} alt='dollars' className='w-[50px] h-[50px] relative left-[40%]' />
<h1  className='text-cyan-700'>Energy</h1>
<p >Fuel your trades with popular energies like oil and natural gas at ultra-competitive pricing</p>
</div>


</main>
    </div>
  )
}

export default Opportunity