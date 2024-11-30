 import React,{useState, useEffect} from 'react'

 import { image } from '../../public/image'
 const Vector = () => {
   

  return (
   <div className='flex flex-wrap gap-[10px] ml-[50px] pb-[50px] md:grid grid-cols-3 ] lg:flex '>
    <div className='border-[2px] border-[#8ecae6] rounded w-[150px] h-[150px] '>
      <div className=' h-[120px] w-[120px] bg-[#8ecae6] opacity-30 rounded  m-[10px]  '>
      <img src={image.globe} alt='globe' className='w-[70px] relative left-[15%] top-[20%] text-white'/>
      </div>
      </div>
      
      <div className='border-[2px] border-[#8ecae6] rounded w-[150px] h-[150px] '>
      <div className=' h-[120px] w-[120px] bg-[#8ecae6] opacity-30 rounded  m-[10px]  '>
      <img src={image.chart} alt='globe' className='w-[70px] relative left-[15%] top-[20%] text-white'/>
      </div>
      </div>

      <div className='border-[2px] border-[#8ecae6] rounded w-[150px] h-[150px] '>
      <div className=' h-[120px] w-[120px] bg-[#8ecae6] opacity-30 rounded  m-[10px]  '>
      <img src={image.coin} alt='globe' className='w-[70px] relative left-[15%] top-[20%] text-white'/>
      </div>
      </div>

      <div className='border-[2px] border-[#8ecae6] rounded w-[150px] h-[150px] '>
      <div className=' h-[120px] w-[120px] bg-[#8ecae6] opacity-30 rounded  m-[10px]  '>
      <img src={image.exchange} alt='globe' className='w-[70px] relative left-[15%] top-[20%] text-white'/>
      </div>
      </div>

      <div className='border-[2px] border-[#8ecae6] rounded w-[150px] h-[150px] '>
      <div className=' h-[120px] w-[120px] bg-[#8ecae6] opacity-30 rounded  m-[10px]  '>
      <img src={image.electric} alt='globe' className='w-[70px] relative left-[15%] top-[20%] text-white'/>
      </div>
      </div>
      

      <div className='border-[2px] border-[#8ecae6] rounded w-[150px] h-[150px] '>
      <div className=' h-[120px] w-[120px] bg-[#8ecae6] opacity-30 rounded  m-[10px]  '>
      <img src={image.stock} alt='globe' className='w-[70px] relative left-[15%] top-[20%] text-white'/>
      </div>
      </div>


     </div>
   )
}

 export default Vector