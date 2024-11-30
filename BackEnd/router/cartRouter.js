import express from 'express'
import { addToCart,removeFromCart, getCart } from '../controllers/cartControllers.js'
import AuthMidleware from '../Middleware/OAuth.js'

const cartRouter = express.Router()

cartRouter.post('/add', AuthMidleware, addToCart)
cartRouter.post('/remove',AuthMidleware, removeFromCart)
cartRouter.post('/get', AuthMidleware, getCart)

export default cartRouter