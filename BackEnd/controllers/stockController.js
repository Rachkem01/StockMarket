 import stockModel from "../models/stocKModel.js";

 const addStock = async (req,res)=>{

    const {company,price } = req.body
  

    try{
        const newStock =  new stockModel({
            company:company,
            price:price
        })
        const stock = await newStock.save()
   return  res.status(200).json({
            sucess:'true',
            message:'Your stock is sucessfully uploaded',
            stock
        })
      
const companyExist = await stockModel.findOne({company})

if(companyExist){
res.status(500).json({
    sucess:'false',
    message:'Companies can only upload a stock per time',
   
})
}


    }catch(error){
res.status(500).json({
    sucess:'false',
    message:'Stock not uploaded'
})
    }
 }

 const removeFromStock = async (request,response)=>{
    try{
        const { id} = request.params   
   const result = await stockModel.findByIdAndDelete(id)
   
   if(!result){
       return response.status(400).json({message:'Book not found'})
   }
   
   return response.status(200).json({message: 'Book Deleted sucessfully'})
       }catch (error){
           console.log(error.message)
           response.status(500).send({message:error.message})
       }
 }

 const replaceStock = async (request,response)=>{
   
  
    
        try{
            if(
                !request.body.company || !request.body.price ){
                return response.status(400).send({
                    message:'Send all required fields: company and price'
                })
            }
            const {id} = request.params
            const result = await stockModel.findByIdAndUpdate(id, request.body)
            
            if(!result){
                return response.status(404).json({message:'stock not found'})
            }
            return response.status(200).send({message:'stock updated succesfully'})
                }catch(error){
                    console.log(error.message)
                    response.status(500).send({message:error.message})
                }
 }
 
 const getStock = async (req, res) =>{
    try{
        const stocks = await stockModel.find({})
        return res.status(200).json({
            count:stocks.length,
            data: stocks
        })
    }catch(error){
        res.status(500).json({
            sucess:'false',
            message: 'stocks not found'
        })
    }
 }
 export {addStock, removeFromStock, replaceStock, getStock}