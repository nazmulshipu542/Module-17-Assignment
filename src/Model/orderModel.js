const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    user:{type : mongoose.Schema.Types.ObjectId, required : true},
    item:{type : mongoose.Schema.Types.ObjectId, required : true},
    quantity:{type : Number, required : true},
    totalAmount:{type : Number, required : true},
    status:{type : String, required : true},
}, {timestamps:true, versionKey:false})
const orderModel = mongoose.model('e-commerce', dataSchema);
module.exports = orderModel;