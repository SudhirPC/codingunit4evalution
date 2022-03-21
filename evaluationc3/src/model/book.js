const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({

    likes:{type:"string",require:true},
    coverImage:{type:"string",require:false},
    content:{type:"Number",require:true},

},
{
    versionKey:false,
    timeStamp:true,
}
)

module.exports=mongoose.model("book",bookSchema);