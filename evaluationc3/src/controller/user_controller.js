const express=require("express");

const {body,validationResult}=require("expert-validator");

const User=require("../model/user")
const router=express.route();

router.post(
"/",
body("firstName").isLength({min:3,max:30}).withMessage("First Name is Required"),
body("lastName").isLength({min:3,max:30}).withMessage("Last Name is Required"),
body("age").isInt({min:1,max:150}).withMessage("Age should be between 1 to 150 years"),
body("email").isEmail().withMessage("Valid Email Id is Required"),
// body("gender").console.

async(req,res)=>{

    const errors=validationResult(req,res)

    if(!errors.inEmpty()){

        return res.status(500).send({errors:errors.array()})
    }
    const user=User.create(req.body);

    return res.status(201).send({data:user})
}
)


module.exports=router