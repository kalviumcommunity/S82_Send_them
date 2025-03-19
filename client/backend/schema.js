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
    role:{type:String,default:"user"},
    createdAt:{type:Date,default:Date.now()},

})


module.exports = mongoose.model("User",UserSchema)


