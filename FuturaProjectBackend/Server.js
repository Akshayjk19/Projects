const express=require('express')
const connection = require('./Config/MongodbConnection')
const router = require('./Router')
const cors=require('cors')
const dotenv=require('dotenv')


const app=express() //calling express

app.use(express.json()) //json

connection() // dbconnection

dotenv.config() //.env

app.use(cors()) //cors

app.use('/',router) //router



app.get('/',(req,res)=>{
    res.send("Running")
})

const port=process.env.port || 5000

app.listen(port,console.log(`Server is Running ${port}`))
