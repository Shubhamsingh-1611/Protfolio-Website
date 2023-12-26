const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
    name:String,
    age:Number,
    image:String,

});

const Info = mongoose.model("Info",infoSchema);

module.exports= Info;