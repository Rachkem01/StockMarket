import React from 'react'

const Potential = () => {
  return (
   <section className='bg-[#ddd] pl-[50px] pb-[50px] lg:pl-[300px] '>
<div className=' pt-[50px] pl-[50px]  font-inter leading-[40px] lg:pl-[200px] '>
<h1 className='text-xl lg:text-4xl'>Unlock Your Potential</h1>
<p className='text-xl lg:text-4xl'>in <span className='text-xl lg:text-4xl text-cyan-700'>3 simple steps</span></p>
</div>
<main className='flex flex-col gap-[20px] font-inter  pt-[50px] lg:flex-row w-[800px]'>
<div className='flex flex-col gap-[20px]'>
<button className='text-cyan-700 bg-white w-[50px] h-[50px] rounded-full text-xl lg:text-4xl'>1</button>
<h6 className='font-bold'>Register</h6>
<p className='text-[12px]'> create your account in matter of minutes</p>
</div>

<div className='hidden w-[150px] h-[4px] bg-gray-300 mt-[20px] lg:block'></div>

<div className='flex flex-col gap-[20px]'>
<button className='text-cyan-700 bg-white w-[50px] h-[50px] rounded-full text-xl lg:text-4xl'>2</button>
<h6 className='font-bold'>Fund</h6>
<p className='text-[12px]'> Fund your account using our flexible payment methods.</p>
</div>
<div className='hidden w-[150px] h-[4px] bg-gray-300 mt-[20px] lg:block'></div>

<div className='flex flex-col gap-[20px]'>
<button className='text-cyan-700 bg-white w-[50px] h-[50px] rounded-full text-xl lg:text-4xl'>3</button>
<h6 className='font-bold'>Trade</h6>
<p className='text-[12px]'>Start trading and explore a world of endless opportunities.</p>
</div>
</main>
   </section>
  )
}

export default Potential