import React,{useState} from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useEffect } from 'react'
const List = ({url}) => {
    const [list, setList] = useState([])
const fetchList = async ()=>{
    const response = await axios.get(`${url}/stock/allProducts`)

    if(response.data){
        setList(response.data.data)
    toast.success('stocks sucessfully fetched')    
    }
    else {
        toast.error('stocks not fetched')
    }
}
    //fetch data
 useEffect(()=>{
    fetchList()
 },[])

 const removeFood =async (stockId)=>{
const response = await axios.delete(`${url}stock/id`, {id:stockId})
await(fetchList())
if(response.data){
    toast.success(response.data.message)
}
else{
    toast.error(response.data.message)
}
 }

  return (
    <div>
        {list.map((stock,index)=>(
            <ul key={index}>
        <li>{stock.company}</li>
        <li>{stock.price}</li>
        <button onClick={removeFood(stock._id)}>Delete</button>
        <button>Update</button>
            </ul>
        ))}
    </div>
  )
}

export default List