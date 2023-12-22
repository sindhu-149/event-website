const express = require("express")
const app = express();

const authRoute = require('./routes/auth')
const adminAuthRoutes = require('./routes/adminAuth')
const userRoute = require('./routes/users')
const productDataRoute = require('./routes/productsData')
const categoryRoute = require('./routes/categories')
const commentsRoute = require('./routes/comments')
const cartRoute = require('./routes/cart')
const multer = require('multer')

app.use(express.json())
const dotenv= require("dotenv")

dotenv.config()
const mongoose= require("mongoose")


 

mongoose.connect(process.env.MONGO_URL
)
.then(console.log("connected to database"))
.catch((err) =>console.log(err)) 


const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "images")
    },
    filename : (req, file, cb) =>{
        cb(null, req.body.name)
    }
})

const upload = multer({storage : storage});
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("file has been uploaded")
})


app.use("/home",(req,res)=>{
    console.log("hey thete")
})

app.use('/api/auth',authRoute)
app.use('/api/admin', adminAuthRoutes);
app.use('/api/users',userRoute)
app.use('/api/data',productDataRoute)
app.use('/api/categories',categoryRoute)
app.use('/api/comment',commentsRoute)
app.use('/api/cart',cartRoute)


dotenv.config()
app.listen("5000",()=>{
    console.log("backing end is aa running");
})