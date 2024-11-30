import React from 'react'

const Products = () => {
  return (
    <main className=' mt-[100px] lg:ml-[200px] min-w-[300px]'>
<div className='flex  gap-[2px] lg:gap-[10px]'>
<div className='text-cyan-700 text-2xl lg:text-3xl font-inter'> 15,000+ <span className='text-black'>products</span></div>
<div className='w-[4px] h-[40px] bg-black'></div>
<div className='text-cyan-700 text-2xl lg:text-3xl'> 26+ <span className='text-black'>markets</span></div>
<div className='w-[4px] h-[40px] bg-black'></div>
<div className='text-cyan-700 text-2xl lg:text-3xl'> One <span className='text-black'>choice</span></div>
</div>
<p className='font-inter text-xl text-gray-700 pt-[50px] min-w-[300px] pl-[30px] pr-[30px] leading-[30px] lg:text-2xl pl-[0px] pr-[0px] '>When it comes to online trading, there's only one choice. Access ultra-competitive spreads, advanced tools, leading platforms, expert trading education and more when you choose GM.</p>
<button className='bg-cyan-700 text-white w-[250px] h-[50px] rounded-sm text-2xl mt-[30px] lg: relative left-[20%]'>Start trading now</button>
    </main>
  )
}

export default Products