const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    name:{type : String, required : true},
    description:{type : String},
    price:{type : Number, required : true},
    stock:{type : Number, required : true},
    category:{type : String, required : true},
    imageURL:{type : String}
}, {timestamps:true, versionKey:false})
const productModel = mongoose.model('e-commerce', dataSchema);
module.exports = productModel;