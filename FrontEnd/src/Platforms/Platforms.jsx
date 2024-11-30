import React from 'react'
import { image } from '../../public/image'

const Platforms = () => {
    return (
        <div className='bg-gray-100 mt-[50px] pb-[50px] pl-[50px] pt-[100px] lg:pl-[200px] '>
        <div className=' '>
        <p className='font-inter text-2xl text-black  text-center lg:text-5xl mb-[15px] '>Powerful platforms.</p>
        <p className='font-inter text-2xl text-black text-center lg:text-5xl' >Reliable Tradings</p>
        <p className='text-gray-700 text-[20px] mt-[30px] leading-[35px] '>Trade without compromise. Experience fast, flexible, and easy-to-use platforms that don’t fall short on reliability. Whatever your trading style, our advanced suite of platforms are designed to meet the needs of every trader.</p>
        </div>
    
    <main className='flex flex-wrap gap-[10px] mt-[50px]  font-inter'>
    
    <div className='flex flex gap-[20px] text-center rounded-md bg-white w-[300px] h-[100px] pt-[30px] text-[15px] pl-[20px] pr-[20px] border-[1px] border-black'>
    <h1 className='bg-red-700 w-[80px] h-[50px] font-inter text-white text-center text-2xl pt-[15px] rounded'>GM</h1>
    
    <p className='pt-[20px]' >CFI Trading App</p>
    </div>
    
    <div className='flex flex gap-[20px] text-center rounded-md bg-white w-[300px] h-[100px] pt-[30px] text-[15px] pl-[20px] pr-[20px] border-[1px] border-black'>
    <img src={image.meta5} alt='dollars' className='w-[50px] h-[50px]'/>
 
    <p className='pt-[20px]' >MetaTrader 5</p>
    </div>
    
    <div className='flex flex gap-[20px] text-center rounded-md bg-white w-[300px] h-[100px] pt-[30px] text-[15px] pl-[20px] pr-[20px] border-[1px] border-black'>
    <img src={image.meta4} alt='dollars' className='w-[50px] h-[50px]'/>
 
    <p className='pt-[20px]' >MetaTrader 4</p>
    </div>
    
    <div className='flex flex gap-[20px] text-center rounded-md bg-white w-[300px] h-[100px] pt-[30px] text-[15px] pl-[20px] pr-[20px] border-[1px] border-black lg:ml-[200px]'>
    <h1 className='bg-red-700 w-[80px] h-[50px] font-inter text-white text-center text-2xl pt-[15px] rounded'>GM</h1>
    
    <p className='pt-[20px]' >GM cTrading App</p>
    </div>
    
    <div className='flex flex gap-[20px] text-center rounded-md bg-white w-[300px] h-[100px] pt-[30px] text-[15px] pl-[20px] pr-[20px] border-[1px] border-black'>
    <h1 className='bg-red-700 w-[80px] h-[50px] font-inter text-white text-center text-2xl pt-[15px] rounded'>GM</h1>
    
    <p className='pt-[20px]' > GM Multi-Asset</p>
    </div>
   
    
    </main>
    <div className='hidden lg:block mt-[100px]'>
    <img src='https://campaigns.cfifinancial.com/_next/static/media/platform.ad641a7c.webp' alt='laptop'/>
    </div>
        </div>
      )
}

export default Platforms