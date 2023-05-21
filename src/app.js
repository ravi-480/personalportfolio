const express = require("express")
const hbs = require("hbs")
const app = express();
const bodyp = require("body-parser")
const routes = require("./routes/main")
const mongoose = require("mongoose")


// accepting the static file


app.use(bodyp.urlencoded({extended:true}))
app.use('',routes)
app.use("/static",express.static("public"))
app.set("view engine","hbs")
app.set("views","views")
// using partials
hbs.registerPartials("views/partials")


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected to databse");


})








app.listen(3000 || process.env.PORT,()=>{console.log("server connected to 3000");})
