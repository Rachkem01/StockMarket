
import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <ul className='flex justify-between'>
    <NavLink to='/add' className='text-black'>Add</NavLink>
    <NavLink to='/list' className='text-black'>List</NavLink>
    <NavLink to='order' className='text-black'>Order</NavLink>
    </ul>
  )
}

export default Nav