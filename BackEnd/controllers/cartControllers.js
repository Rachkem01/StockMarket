
import userModel from "../models/usermodel.js";

//add stock to cart
const addToCart = async (req,res)=>{
    try{
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData
        if(!cartData[req.body.stockId]){
            cartData[req.body.stockId] =1
        }else{
            cartData[req.body.stockId]+=1
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData})
    return res.status(200).json({
        message:'stock added to cart'
    })
    }catch(error){
    console.log(error)
        res.status(500).json({
            message:'Stock not added to cart'
        })
    }
}

//removeFromCart
const removeFromCart = async(req, res)=>{
    try{
let userData = await userModel.findById(req.body.userId)
let  cartData = userData.cartData
if(cartData[req.body.stockId]>0){
    cartData[req.body.stockId] -=1

   
}
await userModel.findByIdAndUpdate(req.body.userId, {cartData})
return res.status(200).json({
    sucess:true,
    message:'Stock succesfully removed from cart'
})
    }catch(error){
        console.log(error)
        res.status(500).json({sucess:false,
            message:'Stock not removed from cart'
        })
    }
}

const getCart = async (req,res)=>{
    try{
    let userData = await userModel.findById(req.body.Id)
    let cartData = userData.cartData
    return res.status(200).json({
        success:true,
        cartData
    })
    }catch(error){
        console.log(error)
        res.status(500).json({
            sucess:false,
        message:'error'
        })
    }
}

export {addToCart, removeFromCart, getCart}