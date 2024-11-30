import React,{useContext} from 'react'

import { StockContext } from '../Context/Context'
import { image } from '../../public/image'
const Data = () => {
const {stockList} = useContext(StockContext)
  return (
    <section className=' bg-[] border-[5px] rounded-md border-[#03045e] mt-[300px] font-inter '>
    <div className='  pt-[50px] lg:pl-[50px] grid grid-cols-4'>
    <div>Name of Company</div>
    <div>Stock</div>
    <div>Price</div>
   
    </div>
    
    <div className=' flex flex-col gap-[50px] pt-[50px]'>
{stockList.map((stock,index)=>(
            <div key={index} className='grid grid-cols-4  gap-[20px] font-inter lg:pl-[50px] border-b-2 pb-[5px]'>
<p className=''>{stock.company}</p>
<img src={image.stock1} className='w-[25px] h-[25px]'/>
<p>${stock.price}</p>
<button className='sm:text-red lg:text-white bg-red-700 rounded-md w-[100px]  '>Add To Cart</button>
        

            </div>
            

        ))}
        
    </div>
    
    </section>
  )
}

export default Data