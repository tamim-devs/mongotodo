const express = require("express")
const app = express();
const mongoose = require("mongoose")
const {Schema} = mongoose;
const cors = require('cors')

// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
  origin: true,
}));
// middleware


mongoose.connect(
  "mongodb+srv://tamimaffiliatepatnerhome:4DhUoFjvexpdi7sZ@cluster0.wqoh6y2.mongodb.net/blog"
).then(()=>{
  console.log(`Database Connection sucessfull`); 
}).catch((err)=>{
  console.log(`Database Connection failed ${err}`); 
})

// todo connect

// make a blog schema
const blogSchema = new Schema({
  username : {
    type : String,
    min: 5,
    max: 20,
    required: true,
    trim: true,
  },
  email:{
    type: String,
    required: true,
    trim: true,
  },
  blog: {
    type: String,
    require: true,
    trim: true,
  },
});

const blogModel = mongoose.model("user", blogSchema)

// route
app.post("/createblog",async (req,res)=>{
 const {username, email ,blog} = req.body;

 if (!username) {
  return res.status(400).json({
    message: "username is missing !!"
  }) 
 }

 if(!email){
  return res.status(400).json({
     message: "email is missing !!"
  })
 }
 if(!blog){
  return res.status(400).json({
     message: "blog is missing !!"
  })
 }
 // now save database
  const users = await blogModel.create({
  username : username,
  email: email,
  blog: blog,
 })

 users.save();
 res.status(200).json({
  sucess: true,
  data: users,
  message: "blog post sucessful"
 })
})

// get all users
app.get("/getallblog", async(req, res)=>{
 const alluser = await blogModel.find({})
 console.log(alluser);

 if (!alluser) {
  return res.status(400).json({
    message: "no blog avaiable !!"
  }) 
 }

 res.status(200).json({
  sucess: true,
  data: alluser,
  message: "get all user database"
 })
 
})
// starting server

app.listen(3000,()=>{
  console.log(`server running on ${3000}`);
  
})