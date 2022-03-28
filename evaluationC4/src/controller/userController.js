const express=require("express");
const User=require("../models/user");

const router=express.router();

router.post("/register",async(req,res)=>{

     try{
         const user=await User.create(req.body);
         return res.status(200).send(users)
     }catch(error){
        return res.status(500).send(error.message)
     }
})

router.post("/login",async(req,res)=>{

    try{
        const user=await User.create(req.body);
        return res.status(200).send(users)
    }catch(error){
       return res.status(500).send(error.message)
    }
})


module.exports=router;