const mongoose=require("mongoose");

const publicationSchema=new mongoose.Schema({
    Name:{type:"String",require:false}
},{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("publication",publicationSchema)