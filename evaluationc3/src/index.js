const connect=require("./config/db");

const express=require("express");

const app=express();


app.use(express.json());


const bookController=require("./controller/books_Controller");

app.use("/books",bookController)

const commentController=require("./controller/comment_Controller");

app.use("/comments",commentController)

const publicationController=require("./controller/publication_Controller");

app.use("/comments",publicationController)

app.listen(3750,async()=>{
    try{
        await connect();
        console.log("Tou listening on port 3750")
    }catch(error){
        console.log(error.message)
    }

})