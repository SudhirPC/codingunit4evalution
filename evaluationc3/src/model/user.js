const { Timestamp } = require("bson");
const { timeStamp } = require("console");
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    firstName:{type:"String",require:true},
    lastName:{type:"String",require:false},
    age:{type:"Number",require:true},
    email:{type:"String",require:true},
    gender:{type:"String",require:true}

},
{
    versionKey:false,
    timeStamp:true,
})

module.exports=mongoose.model("user",userSchema);