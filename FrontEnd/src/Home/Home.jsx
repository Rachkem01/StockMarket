
import React from 'react'
import Nav from './Nav'
import Welcome from './Welcome'

import Vector from './Vector'


const Home = () => {
  return (
    <div className=' bg-gradient-to-r from-[#1b1b32] 0% to-[#0a1852] lg:pl-[100px]  '>
<Nav className=''/>
<div>
<div className='flex flex-col gap-[200px] mt-[100px] lg:flex-row'>
<Welcome/>
 <Vector/>
</div>
</div>
    </div>
  )
}

export default Home