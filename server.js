const  express=require('express')
const cors=require('cors');
const morgan=require('morgan');
const colors=require('colors');
const dotenv=require('dotenv');
dotenv.config()
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://jyoti:test123@cluster0.soksdp4.mongodb.net/test').then(()=>{
     console.log("Database connection established");
     app.listen(PORT,()=>{
          console.log(`Server runnning on port ${PORT}`);
     });
     
})
//rest object
const app= express()

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//routes
app.get("/",(req,res)=>{
     res.send('<h1> hello from server </h1>');
});

//port initialize
// app.listen(8080); RUNNING SUCCESSFULLY
const PORT=8080 || process.env.PORT;
