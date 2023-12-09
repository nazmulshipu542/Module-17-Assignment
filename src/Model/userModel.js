const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    firstName:{type : String, required : true},
    lastName:{type : String, required : true},
    email:{type : String, required : true},
    password:{type : Number, required : true},
    address:{type : String, required : true},
    phoneNumber:{type: String}
}, {timestamps:true, versionKey:false})
const userModel = mongoose.model('e-commerce', dataSchema);
module.exports = userModel;