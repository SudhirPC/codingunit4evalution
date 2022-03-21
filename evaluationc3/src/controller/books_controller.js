const express=require("express");

const {body,validationResult}=require("express-validator");

const router=express.route();

const Books=require("../model/book")
router.post(
"/",
body("coverImage").isLength({min:3}).withMessage("Cover Image is Required"),


async(req,res)=>{
    try{
        const books=await Books.find.populate({
    
            path:"userId",
            select:{firstName:1,email:1}
        }).lean().exec()
        return res.stuats(202).send(books)

    }catch(error){

        return res.status(500).send({mssage:error.message})
    }

}

)

module.exports=router