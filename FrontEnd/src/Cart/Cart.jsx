import React,{useContext} from 'react'
import { StockContext } from '../Context/Context'
const Cart = () => {
const{cartItems, removeFromCart,stockList} = useContext(StockContext)
  return (
<section>
    {stockList.map((stock,index)=>{
    if(cartItems[stock._id]>0){
    return(
        <div key={stock._id}>
    <p>{stock.company}</p>
    <p>{stock.price}</p>
    <button className='text-red' onClick={removeFromCart(stock._id)}>X</button>
        </div>
    )
    }
    })}
</section>
  )
}

export default Cart