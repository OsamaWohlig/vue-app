const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/products')
    .then(()=>console.log('connected'))
    .catch((err)=>console.log(err.message))

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    brand:String,
    imageData:Object
})

const productModel = mongoose.model('product',productSchema)

module.exports = productModel