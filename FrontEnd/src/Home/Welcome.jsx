import React, { useEffect, useState, useRef } from 'react'
import Start from './Start'
import { MdStar } from 'react-icons/md'


const Welcome = () => {
const [visible,setVisible] = useState(false)

useEffect(()=>{
  const timer = setTimeout(()=>{
    setVisible(true)
  },500)

  return ()=>clearTimeout(timer)
},[])



  return (
  <section className='font-inter pl-[30px] '>
    <div className={`max-w-[500px]  text-white font-inter flex flex-col gap-[50px] ${visible?"translate-x":"-translate-x-64"}`}>
      <h1 className= {` text-[30px] leading-[50px] lg:text-[60px] md:text-[40px] `}>Conquer the global markets</h1>
    <p className='text-[15px] leading-[50px] lg:text-[30px] md:text-[20px]'>Access millions of trading opportunities across the financial markets with GM'S expert guidance.</p>
    </div>
  <Start />

    <div className='ml-[100px]'>
      <div className='flex gap-[5px]  lg:ml-[0px]'>
        {<MdStar className='text-green-500 text-3xl mr-[0px] lg:text-5xl md:text-4xl'/>}
        <span className='text-white text-2xl pt-[15px] pb-[20px] '>TrustPilot</span>
      </div>
      <div className='flex gap-[10px]'>
      {<MdStar className='text-white text-3xl  lg:text-5xl md:text-4xl bg-green-600'/>}
      {<MdStar className='text-white text-3xl  lg:text-5xl md:text-4xl bg-green-600' />}
      {<MdStar className='text-white text-3xl  lg:text-5xl md:text-4xl bg-green-600'/>}
      {<MdStar className='text-white text-3xl  lg:text-5xl md:text-4xl bg-green-600'/>}
      {<MdStar className='text-white text-3xl  lg:text-5xl md:text-4xl bg-green-600'/>}
      </div>
      <div className='mt-[20px]'>
        <p className='text-white'>TrustScore <strong>4.8  |  391 </strong>reviews</p>
      </div>
    </div>
  </section>
  )
}

export default Welcome