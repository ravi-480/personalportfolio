const express = require("express")
const routes =  express.Router()
// const jaba = require("../models/contactform")
const mongoose = require('mongoose');
const Jaba = mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    msg:String
})

const jaba = mongoose.model("review",Jaba)

routes.get("/",(req,res)=>{
   res.render("index")
})

routes.post("/contactform",async (req,res)=>{

   try {
   
       const data = await jaba.create(req.body)
       console.log("Form submitted");
       console.log(data);
       res.redirect("/")
       
   } catch (error) {
       console.log(error);
   }
})


module.exports = routes;