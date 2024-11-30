

import React,{useState, useEffect, createContext} from "react";

import axios from 'axios'

export const StockContext = createContext(null)

const StockContextProvider = ({children})=>{

    const url = "https://stockmarket-1tmo.onrender.com"
    
    const [stockList, setStockList] = useState([])
    const [token, setToken] = useState('')
    const [cartItems, setCartItems] = useState({})
    const FetchStockList = async ()=>{
      
        const response = await  axios.get(`${url}/stock/allProducts`)
        setStockList(response.data.data)
        
        
    }


    const addToCart  = async(stockId)=>{
        if(!cartItems[stockId]){
            setCartItems((cart)=>(
                {...cart,[stockId]:1}
            ))
        }
        else{
        setCartItems((cart)=>(
            {...cart,[stockId]: cart[stockId]+1}
        ))
        }
if(token){
    axios.post(url +`/cart/add`, {stockId},{headers:token})
}
    }
 
    const removeFromCart = async (stockId)=>{
setCartItems((cart)=>(
    {...cart,[stockId]: cart[stockId]-1}
))
await axios.post(url + '/cart/remove', {stockId}, {headers:token})
    }


const getTotalCart= ()=>{
    let totalAmount = 0
    for (const item in cartItems){
        if(cartItems[item]>0){
    let item_info = cartItems.find((stock)=>stock._id === item)
    totalAmount += item_info.price * cartItems[item]
        }
    }
    return totalAmount
}

//loadcartData
const loadCartData = async (token)=>{
    const response = axios.post(url+'/cart/get',{},{headers:{token}})
    setCartItems((await response).data.cartData)
}


    useEffect(()=>{


    FetchStockList()
     
    },[])

    const contextValue ={
        stockList,
        cartItems,
        setCartItems,
        url,
        token,
        addToCart,
        removeFromCart,
        getTotalCart, 
        setToken
    }
    return(
 <StockContext.Provider value={contextValue}>
    {children}
 </StockContext.Provider>
    )
}
export default StockContextProvider
