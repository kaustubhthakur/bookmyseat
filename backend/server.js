const express = require('express')
const app = express();
const port = 9000
const cookieparser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();
const cloudinary = require('cloudinary')
const authrouter = require('./routes/auth')
app.use(express.json())
app.use(cookieparser())
app.use(cors());

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});
const connection = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log('database is connected...')
    } catch (error) {
        console.log(error);
    }
}
connection();
app.use('/auth',authrouter);
app.listen(port,()=>{
    console.log(`server is running on port ${port}...`)
})