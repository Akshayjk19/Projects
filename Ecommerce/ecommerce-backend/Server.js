const express = require('express')
const router = require('./Router')
const cors = require('cors')
const dotenv = require('dotenv')
const connection = require('./Congi/MongoDbConnection')

const app = express()

app.use(express.json())

connection()

dotenv.config()

app.use(cors({
    origin:'',
    credentials:true
}))

app.use('/',router)

app.get('/',(req,res)=>{
    res.send('Running')
})

const port = process.env.port || 5050;

app.listen(port,console.log(`Server is running in ${port}`))