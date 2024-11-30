import jwt from 'jsonwebtoken'
import 'dotenv/config'
const AuthMidleware = async (request, response,next)=>{
    const {token} = request.headers
    if(!token){
        response.status(500).json({
            success:false,
            message:'Not authorized log in again'
        })
    }
    try{
        
const tokenVerified = jwt.verify(token, process.env.JWT_SECRET)

request.body.userId = tokenVerified.id;

next()
    }catch(error){
        console.log(error)
        response.status(500).json({
            message:'error'
        })
    }
    
    }

    export default AuthMidleware