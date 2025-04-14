const express = require('express')
const app = express();
const port = 9000
const cookieparser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();


const connection = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log('database is connected...')
    } catch (error) {
        console.log(error);
    }
}
connection();
app.listen(port,()=>{
    console.log(`server is running on port ${port}...`)
})