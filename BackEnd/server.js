
//import all packages
import express from "express";
import cors from 'cors'
import { connectDB } from "./config/db.js";
import  'dotenv/config'
import userRouter from "./router/userRoute.js";
import stockRouter from "./router/stockRouter.js";



//initialize express
const app = express()

//apply middleware
app.use(express.json())
app.use(cors(
  
))

//databaseConnection
connectDB()


//port for testing api
const port = process.env.PORT ||  4000

app.get('/', (request,response)=>{
    response.send('API working')
  })

  //routers
  app.use('/user',userRouter)
  app.use('/stock', stockRouter)

app.listen(4000, ()=>{
    console.log(`app is listening at port ${port} `)
   
})


