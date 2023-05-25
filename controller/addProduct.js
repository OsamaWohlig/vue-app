const express = require('express')
const app = express()

const productModel = require('../model/products')

const addProduct = async(req,res) => {
    try {
        const productData = new productModel(req.body)
        const result = await productData.save()
        if(result){
            res.status(200).send('product added successfully')
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = addProduct