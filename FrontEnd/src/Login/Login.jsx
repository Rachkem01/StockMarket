

import React, {useState, useEffect, useContext} from 'react'
import { StockContext } from '../Context/Context'
import { image } from '../../public/image'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = ({setShowLogin}) => {
const{url, token, setToken} = useContext(StockContext)

const [currentState, setCurrentState] = useState('Log in')
const navigate = useNavigate()
const [data, setData] = useState({
    name:'',
    email:"",
    password:''
})

const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
}

const onLogin = async (event)=>{
    event.preventDefault()
    let newurl = url

    if(currentState === 'Log in'){
        newurl += '/user/login'
    }
    else{
        newurl += '/user/register'
    }
const response = await axios.post(newurl, data)
if(response.data.success){
    setToken(response.data.token)
    localStorage.setItem("token", response.data.token)
  
}else{
    alert(response.data.message)
}
navigate('/stock')
}
  return (
 <section className='border-[3px] p-[50px] border-black ml-[-50px] rounded-md w-[400px] lg:m-[100px] absolute left-[20%] '>
    <form onSubmit={onLogin}>
 <div className='flex gap-[100px]'>      
  <h1 className='pl-[100px] pb-[30px]'>{currentState}</h1>

  </div>  

  <div className='flex flex-col gap-[20px]'>
    {currentState === 'Log in'? <></>:<input type='text' name='name' value={data.name} required onChange={onChangeHandler} className='h-[50px] w-[90%] outline-0 border-2 border-gray-500 pl-[20px] pt-[10px] rounded-md'/>}
    <input type='email' name='email' value={data.email} required onChange={onChangeHandler} className='h-[50px] w-[90%] outline-0 border-2 border-gray-500 pl-[20px] pt-[10px] rounded-md'/>
    <input type='password' name='password' value={data.password} required onChange={onChangeHandler} className='h-[50px] w-[90%] outline-0 border-2 border-gray-500 pl-[20px] pt-[10px] rounded-md'/>
  </div>
  <button type='submit'>{currentState ==='Sign Up'?"Create Account":"Log in"}</button>
<div>
  <input type='checkbox' required/>
  <p>By continuing, I agree to the terms of use of private policy</p>
  </div >
  <div >
  {
            currentState ==="Log in"?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")} className=' bg-red-500 text-white w-[100px] p-[10px] rounded-md  cursor-pointer hover:text-black'>Click here</span></p> : <p>Already have an account? <span onClick={()=>setCurrentState("Log in")}  className=' bg-red-500 text-white w-[100px] p-[10px] rounded-md  cursor-pointer hover:text-black' >Login here</span></p>
        }
        </div>
    </form>
 </section>
  )
}

export default Login