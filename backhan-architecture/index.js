const express=require('express')
const app=express()

const mongoose = require('mongoose');
require('dotenv').config();

const requirecors=require('cors')
const path=require('path')
const bodyParser = require('body-parser');





app.use(express.static('./public/upload'));

// mongoose.connect('mongodb://127.0.0.1:27017/architecture').then(()=>{
//     console.log("successsfully connected to the database");
// }).catch((error)=>{
//     console.log(`error in the datbase connection${error}`);

// })

const DB_URI = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(DB_URI, {
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => console.error("Failed to connect to MongoDB:", err));


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(requirecors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const routerapi=require('./router/routes')
app.use(routerapi)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




const PORT =  5000;

app.listen(PORT,()=>{
    console.log(`THIS SERVER RUN ON PORT${PORT}`);
})