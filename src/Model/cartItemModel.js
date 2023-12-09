const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    user:{type : mongoose.Schema.Types.ObjectId, required : true},
    product:{type : mongoose.Schema.Types.ObjectId, required : true},
    quantity:{type : Number, required : true},
}, {timestamps:true, versionKey:false})
const cartItemModel = mongoose.model('e-commerce', dataSchema);
module.exports = cartItemModel;