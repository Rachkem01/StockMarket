
import userModel from "../models/usermodel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import validator from "validator";
import  'dotenv/config'


//craete token for user
const createToken =(id) =>{
    jwt.sign({id}, process.env.JWT_SECRET)
}

const registerUser = async (request,response)=>{
const {name, email, password} = req.body

try{
    const userExist = await userModel.findOne({email})
if(userExist){
    response.status(500).json({
        sucess:false, message: 'User already exist'    
    })
}

//validating email 
if(!validator.isEmail(email)){
    response.status(500).json({
        sucess:false,
        'message':'Enter a valid email'
    })
}

if(password.length < 8){
    response.status(500).json({
        sucess:false,
        'message':'password must be at least 8 characters'
    })
}

//compare password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

//create new  user with hashedPassword
const newUser = new userModel({
    name: name,
    email: email,
    password: hashedPassword
})

const user = await newUser.save()
const token = createToken(user._id)
 return response.json({
    success:true,
    token
})
}

catch(error){
response.status(500).json({
    success:false, message: error
})
}
}

const loginUser = async (request, response) =>{
    const {email,password} = request.body
try{
    const user = await userModel.findOne({email})
    if (user){
     return   response.status(200).json({
            success:true,
            message:'welcome user'
        })
    }

const passwordMatch = await bcrypt.compare(password, user.password)
if(!passwordMatch){
    response.status(500).json({
        success:true,
        message:'Invalid Password'
    })

    const token = createToken(user._id)
   return response.json({
        success:true,
        message:'sucessfully loggedIn'
    })
}
}catch(error){
    response.status(500).json({
        message:'Error ocurred during sigining in'
    })
}
}

export{registerUser, loginUser}