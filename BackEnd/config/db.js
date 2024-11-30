import mongoose from "mongoose";

const url = 'mongodb+srv://agunlokokemi01:stock@cluster1.18zm8.mongodb.net/stock'

export const connectDB = async() =>{
    await mongoose.connect(url)
    .then((console.log('Database is connected')))
    .catch((error)=>console.log(error.message))
}

// mongodb+srv://agunlokokemi01:<db_password>@cluster1.18zm8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1