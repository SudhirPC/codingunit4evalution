const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

    firstName:{type:String,require:true},
    lastName :{type:String,require:false},
    email:{type:String,require:true},
    password:{type:String,require:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("user",userSchema)