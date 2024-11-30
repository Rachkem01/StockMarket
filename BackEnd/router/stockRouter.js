import express from "express";
import { addStock, removeFromStock, replaceStock, getStock } from "../controllers/stockController.js";

const stockRouter = express.Router()

stockRouter.post('/add', addStock)
stockRouter.delete('/:id', removeFromStock)
stockRouter.get('/allProducts', getStock)
stockRouter.get('/:id', getStock)
stockRouter.put('/:id', replaceStock)
export default stockRouter