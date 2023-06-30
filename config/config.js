require('dotenv').config();
const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/foodMenu"
mongoose.connect(url).then(()=>{
    console.log('Connected to database')
}).catch(()=>{
    console.log('Could not connect to database')
})