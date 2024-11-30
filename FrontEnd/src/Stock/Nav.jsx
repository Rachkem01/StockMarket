import React, {useState} from 'react'
import { image } from '../../public/image'
import {FaBars, FaTimes} from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import { MdPayment } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Nav = () => {
 const [menu, setMenu] = useState("menu") 
 const [isOpen, setIsOpen] = useState(false)
 const [open, setOpen] = useState(false)

 const toggleMenu = ()=>setIsOpen(!isOpen)
  return (
    <div className=' bg-gradient-to-r from-[#1b1b32] 0% to-[#0a1852] flex justify-between  pr-[50px] min-w[400px] cursor-pointer pt-[50px]'>
    <Link to='/'>
    <h1 className='bg-red-700 w-[120px] h-[80px] font-inter text-white text-center text-5xl pt-[25px] rounded'>GM</h1>
    </Link>
    <ul className='flex flex-col  text-[#f2f2f2] text-[20px] pt-[30px] text-bold '>
    <div onClick={toggleMenu} className='lg:hidden '>{isOpen? <FaBars className='text-white text-3xl hover:text-red-600'/> : <FaTimes className='text-white text-3xl hover:text-red-600'/>  } </div>
    {!isOpen &&
    <div className='flex flex-col gap-[50px] text-[25px] md:flex-row lg:flex-row font-inter text-[30px]'>
   <Link to='/cart' onClick={()=>setMenu("market")} className={[menu === 'market'?" border-b-2 border-white pb-[4px] text-red-500":'', ]}><MdShoppingCart/></Link>
      <li onClick={()=>setMenu("sign")} className={menu === 'sign'?"border-b-2 border-white pb-[4px] text-red-500":''}><MdPayment/></li>
      </div>
}
    </ul>

    </div>
  )
}

export default Nav