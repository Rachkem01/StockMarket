import React from 'react'
import { image } from '../../public/image'
const Football = () => {

//     const[isIntersecting, setIsIntersecting] = useState(false)

//     const ref = useRef(null)

//     useEffect(()=>{
// const observer = new IntersectionObserver(
//     ([entry])=>{
//         setIsIntersecting(entry.isIntersecting)
//        observer.disconnect()
//     },
//     {threshold: 0.1}
    
    
// );
// if(ref.current){
// observer.observe(ref.current)
// }
// return ()=> observer.disconnect()
//     },[])


  return (
   <section className='font-inter mt-[50px] ml-[50px] lg:ml-[0px] mt-[200px]'>
    <h2 className='text-[30px] mb-[30px] lg:text-[50px]'>Official sponsors of</h2>
    <main className='flex flex-wrap gap-[30px]'>
    <div className='w-[280px] h-[120px] bg-[#ddd] rounded-md flex  text-center pt-[30px] gap-[10px] '>
<img src={image.ACMillan} alt='ac' className='w-[70px] h-[70px]'/>
<div className=''>
    <p className='text-[20px] text-gray-700'>AC Millan Football</p>
    <p className='text-[20px] text-gray-700'>Club</p>
</div>
    </div>

    <div className='w-[280px] h-[120px] bg-[#ddd] rounded-md flex  gap-[20px] text-center pt-[30px] pl-[20px]'>
<img src={image.FIBA} alt='ac' className='w-[70px] h-[70px]'/>
<div className=''>
    <p className='text-[20px] text-gray-700 pt-[20px]'>FIBA WASL</p>
    
</div>
    </div>

    <div className='w-[280px] h-[120px] bg-[#ddd] rounded-md flex  text-center pt-[30px] '>
<img src={image.JBF} alt='ac' className='w-[70px] h-[70px]'/>
<div className=''>
    <p className='text-[20px] text-gray-700'>Jordan Basketball</p>
    <p className='text-[20px] text-gray-700'>Federation</p>
</div>
    </div>

    <div className='w-[280px] h-[120px] bg-[#ddd] rounded-md flex  text-center pt-[30px] pl-[20px] '>
<img src={image.Abu} alt='ac' className='w-[70px] h-[100px] pt-[20px]'/>
<div className=''>
    <p className='text-[20px] text-gray-700'>Department of</p>
    <p className='text-[20px] text-gray-700'>Culture and Tourism</p>
    <p className='text-[20px] text-gray-700'>-Abu Dhabi</p>
</div>
    </div>

    <div className='w-[280px] h-[120px] bg-[#ddd] rounded-md flex  text-center pt-[30px] gap-[10px]'>
<img src={image.JFA} alt='ac' className='w-[70px] h-[100px] pl-[20px]'/>
<div className=''>
    <p className='text-[20px] text-gray-700'>Jordan Football</p>
    <p className='text-[20px] text-gray-700'>Association</p>
</div>
    </div>

    <div className='w-[280px] h-[120px] bg-[#ddd] rounded-md flex  text-center pt-[30px] gap-[10px] '>
<img src={image.LBF} alt='ac' className='w-[70px] h-[100px] pl-[10px]'/>
<div className=''>
    <p className='text-[20px] text-gray-700'>Lebanese National</p>
    <p className='text-[20px] text-gray-700'>Basketball Team</p>
</div>
    </div>
    </main>
   </section>
  )
}

export default Football