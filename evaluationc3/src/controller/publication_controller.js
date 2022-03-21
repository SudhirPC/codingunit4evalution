const express=require("express");

const {body,validationResult}=require("express-validator");

const router=express.route();

const publication=require("../model/publication")
router.post(
"/",
async(req,res)=>{
    try{
        const publications=await Publication.find.populate({
    
            path:"userId",
            select:{firstName:1,email:1}
        }).lean().exec()
        return res.stuats(202).send(publications)

    }catch(error){

        return res.status(500).send({mssage:error.message})
    }

}
)
module.exports=router