import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    company:{type:String, required:true},
   price:{type:String, required: true}
})

const stockModel = mongoose.models.stock || mongoose.model('stock', stockSchema)
export default stockModel