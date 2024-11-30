

import React from 'react'
import Add from './components/Add/Add'
import List from './components/List/List'
import Order from './components/Order/Order'
import {Route, Routes} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import {ToastContainer} from 'react-toastify'
const App = () => {
    const url = 'http://localhost:4000'
  return (
    <div>
      <ToastContainer/>
  <Nav/>
  <Routes>
 <Route path='/add' element={<Add url={url}/>}>   </Route>
 <Route path='/list' element={<List url={url}/>}>   </Route>
 <Route path='/order' element={<Order url={url}/>}>   </Route>
    </Routes> 
      </div>
  )
}

export default App