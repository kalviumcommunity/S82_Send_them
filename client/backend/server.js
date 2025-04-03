const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const User = require("./schema")
const userAuth = require("./userRoute")

require("dotenv").config()
const app = express()
app.use(cors())

const port = process.env.PORT

const connectionString = process.env.DB_URL

mongoose.connect(connectionString)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log('Error connecting to database: ', err));
app.use(express.json())
app.get('/get-data',async(req,res)=>{
    const users = await User.find();
    res.json(users);
})

app.use("/userauth",userAuth)

app.get('/',async (req,res)=>{
    const isConnected = mongoose.connection.readyState;
    if(isConnected === 1){

        return res.status(200).send("Connected to Database");
    }

    return res.status(500).send("Could not connect to database")

})

app.get("/ping",(req,res)=>{
    res.status(200).send("Hello World !Ping..")
})

app.get('/get-data',(req,res)=>{

})

app.listen(port,()=>{
    console.log(`Server Connected Sucessfully =) http://localhost:${port}`)
});





