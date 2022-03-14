const express=require("express");
const mongoose=require("mongoose");

const app=express();

app.use(express.json())

//connection 
const connect=()=>{

    return mongoose.connect("mongodb://127.0.0.1:27017/Bank")
}

//schema

const userSchema=new mongoose.Schema(
    {
        firstName:{type:String,required:true},
        middleName:{type:String,required:false},
        lastName:{type:String,required:true},
        age:{type:Number,required:true},
        email:{type:String,required:true},
        address:{type:String,required:true},
        gender:{type:String,required:true},
        type:{type:String,required:false},
    },
    {
        timestamps:true
    }
)


const User= mongoose.model("user",userSchema);




// const BranchDetail =new mongoose.Schema(

//    {
    //    name:{type:String,required:true},
    //     address:{type:String,required:true},
    //     IFSC:{type:String,required:true},
    //     MICR:{type:Number,required:true},
//     },
//     {
//         timestamps:true
//     }

// );
//  const BranchDetail= mongoose.model("BranchDetail",BranchDetail);

const BranchDetails =new mongoose.Schema(
    {
        name:{type:String,required:true},
        address:{type:String,required:true},
        IFSC:{type:String,required:true},
        MICR:{type:Number,required:true},
    },{
        timestamps:true
    }
)
const BranchDetail=mongoose.model("BranchDetail",BranchDetails)

const  MasterAccount=new mongoose.Schema(

        {
            balance:{type:Number,required:true},
            
         },{
             timestamps:true
         }
     
     );
   
const MasterAccounts=mongoose.model("MasterAccounts",MasterAccount)



const  SavingrAccount=new mongoose.Schema(

    {
        account_Number:{type:Number,required:true},
        balance:{type:Number,required:true},
        interestRate:{type:Number,required:true},
        
     },{
         timestamps:true
     }
 
 );

const SavingAccounts=mongoose.model("SavingAccounts",MasterAccount)




const FixedAccount=new mongoose.Schema(
    {
        account_Number:{type:Number,required:true},
        balance:{type:Number,required:true},
        interestRate:{type:Number,required:true},
        startDate:{type:Number,required:true},
        maturityDate:{type:String,required:true},
       
    },
    {
        timestamps:true
    }
)


const FixedAccounts= mongoose.model("FixedAccounts",FixedAccount);
// -----------------------schema complete---------------------------------------






//---------CRUD  start----------
app.get("/users",async(req,res)=>{
    try{

        const users=await User.find().lean().exec();
        return res.status(200).send({users:users})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
})

app.get("/master",async(req,res)=>{

    try{
        const users=await User.find().populate({
            path:"userId",
            select:["firstName","middleName","lastName","age","address","gender"]
        }).lean().exec();
        return res.status(200).send({users:users})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
})


app.get("/saving",async(req,res)=>{

    try{
        const users=await SavingAccounts.find().lean().exec();
        return res.status(200).send({users:users})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
})


app.get("/saving",async(req,res)=>{

    try{
        const users=await SavingAccounts.create(req.body);
        return res.status(200).send({users:users})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
})


app.patch("/saving/:id",async(req,res)=>{

    try{
        const users=await SavingAccounts.findByIdAndDelete(req.Params.id,req.body,{mew:true}).lean().exec();
        return res.status(200).send(users)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
})

app.post("/users",async(req,res)=>{

    try{

        const users=await User.create(req.body);
        return res.status(201).send({users})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
})

app.get("/fixed",async(req,res)=>{

    try{
        const users=await FixedAccounts.find().lean().exec();
        return res.status(200).send({users:users})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
})

app.post("/fixed",async(req,res)=>{

    try{
        const users=await FixedAccounts.create(req.body);
        return res.status(200).send(users)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
})
app.patch("/fixed/:id",async(req,res)=>{

    try{
        const users=await FixedAccounts.findByIdAndDelete(req.Params.id,req.body,{mew:true}).lean().exec();
        return res.status(200).send(users)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
})
app.listen(3700,async()=>{
    try{
        await connect();
    }catch(error){
        console.log("...there is an error and sominthing went wrong",error)
    }
    console.log("listening on port 3700")
})