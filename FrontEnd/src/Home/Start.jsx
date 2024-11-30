import React,{useState, useEffect, useRef} from 'react'

const Start = () => {
  
const [isVible, setIsVisible] = useState(false)
useEffect(()=>{
  const timer = setTimeout(()=>{
    setIsVisible(true)
  },700)

  return ()=>clearTimeout(timer)
},[])

  return (
    <div 

    className={`max-w-[500px] text-[#fff] font-inter flex flex-col gap-[50px] mt-[50px] `}>
    <button className=' bg-white h-[50px] w-[200px] text-cent text-[#000] rounded ml-[100px] hover:text-[red] lg:ml-[0px] '>Start trading now</button>
    <div className={`flex gap-[50px] transition-500 ease-in  ${isVible? "translate-x-":"-translate-x-64"} lg:justify-between`}>
      <div className='leading-[60px]'>
      <h1 className='lg:text-[50px] md:text-[35px]'>0%</h1>
      <p  className='lg:text-[25px] md:text-[18px]'>commission</p>
      </div>

      <div className='leading-[60px]'>
      <h1 className='lg:text-[50px] md:text-[35px]' >15,000+</h1>
      <p  className='lg:text-[25px] md:text-[18px]'>products</p>
      </div>

      <div className='leading-[60px]'>
      <h1  className='lg:text-[50px] md:text-[35px]'>0.4</h1>
      <p  className='lg:text-[25px] md:text-[18px]'>pip spreads</p>
      </div>
    </div>
    </div>
  )
}

export default Start