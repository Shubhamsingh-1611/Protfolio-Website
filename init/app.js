const mongoose = require("mongoose");
const Info = require("../models/schema.js");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/shubham");
} 
main()
      .then(()=>{console.log("connection secure");})
      .catch((err)=>{console.log(err);});

      const initDB = async ()=>{
        let shubham = new Info({
            name:"Shubham Singh",
            age:19,
            img:"logo.jpg"
        });
       await  shubham.save();
      }
      initDB();