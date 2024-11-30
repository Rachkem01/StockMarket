
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

 const Add = ({url}) => {
const [data, setData] = useState({
    company:'',
    price:''
})

const onChangeHandler =(e)=>{
    const name = e.target.name
    const value = e.target.value
    setData(data=>({...data,[name]:value}))
}

//handle Submissiom
const onSubmitHandler = async(event) =>{
    event.preventDefault()
    const form = new FormData()
    form.append('company' , data.company)
    form.append('price', Number(data.price))

    const response = await axios.post(`${url}/stock/add`, form)

    if (response.data){
setData({
    company:'',
    price:''
})
toast.success(response.data.message)
    }
else{
    toast.error('Not Added')
}
}
 
useEffect(()=>{
    console.log(data)
},[data])
  return (
  
    <form onSubmit={onSubmitHandler}> 

    <input type='text' name='company' id='comany' value={data.company} placeholder='e.g Amazon' onChange={onChangeHandler}/>
    
    <input name='price' id='price' type='text' placeholder='0.00' value={data.price} onChange={onChangeHandler}/>

    <button type='submit'>Post</button>
    </form>
  )
}

export default Add