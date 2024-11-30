import React, {useState} from 'react'
import Main from "./Main/Main"
import {Routes, Route} from 'react-router-dom'
import Stock from "./Stock/Stock"
import Login from "./Login/Login"
import Cart from './Cart/Cart'
function App (){
const [showLogin, setShowLogin] = useState(false)
return(
  <div>

 <Routes>
  <Route path="/" element={<Main  />}></Route>
  <Route path="/stock" element={<Stock />}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
  </Routes>   

  </div>
)
}
export default App