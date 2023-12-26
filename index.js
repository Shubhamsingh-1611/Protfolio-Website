const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodoverride =  require("method-override");
const port = 3000;
const ejsMate = require("ejs-mate");
app.engine("ejs",ejsMate);
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/shubham");
}
main().then(()=>{console.log("connection sucessful")})
.catch((err)=>{console.log(err)});

app.listen(port,(req,res)=>{
    console.log("app is listining");
});
app.get("/",(req,res)=>{
    res.redirect("/shubham")
});
app.get("/shubham",(req,res)=>{
    res.render("show.ejs");
})