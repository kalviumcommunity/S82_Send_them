const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phoneNumber:{type:Number},
    password:{type:String,required:true,minLength:4},
    avatar:{
        id:{type:String},
        url:{type:String},


    },
    address:{
        
        country:{type:String,required:true},
        city:{type:String,required:true},
        address1:{type:String,required:true},
        address2:{type:String,required:true},
        pinCode:{type:Number,required:true},
    },
    role:{type:String,default:"user"},
    createdAt:{type:Date,default:Date.now()},

})


module.exports = mongoose.model("User",UserSchema)


