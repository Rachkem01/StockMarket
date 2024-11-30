

import React from 'react'

import Lewis from './Lewis'
import Football from './Football'
import Products from './Products'
const Sponsor = () => {

    
  return (
    <>
    <div className='flex flex-col min-w-[400px] lg:flex-row gap-[50px]'>
        <Lewis/>
   <Football/>
    </div>
    <Products/>
    </>
  )
}

export default Sponsor