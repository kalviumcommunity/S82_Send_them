const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const port = process.env.PORT
app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{

    res.status(400).send("Hello World");
})
app.get("/ping",(req,res)=>{
    res.status(200).send("Hello World !Ping..")
})


app.listen(port,()=>{
    console.log(`Server Connected Sucessfully =) http://localhost:${port}`)
});





