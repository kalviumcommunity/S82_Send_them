const mongoose = require("mongoose")
const express  = require("express")
const router = express.Router()
const User = require("./schema")

router.post('/signup',async(req,res)=>{
    const {name,email,phoneNumber,password} = req.body;
    const newUser = new User({name,email,phoneNumber,password})
    newUser.save().then(()=>console.log(`Created a user entity : ${name}`))
    .catch((e)=>console.error("Could Not create user",e))
})


router.post('/login',async(req,res)=>{
    const {email,password} = req.body
    try{

        const user = await User.findOne({email:email})
        if(user.password == password){
            res.status(201).send({message:`Hello ,${user.name}`})
        }else{
            res.status(400).send({message:`login Failed`})
            
        }
    }catch(err){console.log(err)}

})


module.exports = router
