const express=require("express");
const Todos=require("../models/todo");

const router=express.router();

router.post("/todos",async(req,res)=>{

     try{
         const todo=await Todos.create(req.body);
         return res.status(200).send(todo)
     }catch(error){
        return res.status(500).send(error.message)
     }
})
 
module.exports=router;

router.get("/todos",async(req,res)=>{

    try{
        const todo=await Todos.create(req.body);
        return res.status(200).send(todo)
    }catch(error){
       return res.status(500).send(error.message)
    }
})

router.get("/todos:id",async(req,res)=>{

    try{
        const todo=await Todos.create(req.body);
        return res.status(200).send(todo)
    }catch(error){
       return res.status(401).send(error.message)
    }
})

router.patch("/todos:id",async(req,res)=>{

    try{
        const todo=await Todos.create(req.body);
        return res.status(200).send(todo)
    }catch(error){
       return res.status(401).send(error.message)
    }
})

router.delete("/todos:id",async(req,res)=>{

    try{
        const todo=await Todos.create(req.body);
        return res.status(200).send(todo)
    }catch(error){
       return res.status(401).send(error.message)
    }
})
module.exports=router;