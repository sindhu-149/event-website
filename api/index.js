const express = require("express")
const app = express();

const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const productDataRoute = require('./routes/productsData')
const categoryRoute = require('./routes/categories')
const commentsRoute = require('./routes/comments')
const cartRoute = require('./routes/cart')

app.use(express.json())
const dotenv= require("dotenv")

dotenv.config()
const mongoose= require("mongoose")


 

mongoose.connect(process.env.MONGO_URL
)
.then(console.log("connected to database"))
.catch((err) =>console.log(err)) 



app.use("/home",(req,res)=>{
    console.log("hey thete")
})

app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/data',productDataRoute)
app.use('/api/categories',categoryRoute)
app.use('/api/comment',commentsRoute)
app.use('/api/cart',cartRoute)


dotenv.config()
app.listen("5000",()=>{
    console.log("backing end is aa running");
})