const express=require("express");

const app=express();

const logger=(req,res,next)=>{
    next()
}
app.use(logger)


const Permissioncheck=(req,res,next)=>{
    next()
}
app.use(Permissioncheck)


app.get("/books",(req,res)=>{

    res.send(
        {
            route:"/books"
        }
    );
    res.end();
})

app.get("/libraries",(req,res)=>{

    res.send(
        {
            route:"/libraries",permission:true
        }
    );
    res.end();
})

app.get("/authors",(req,res)=>{

    res.send(
        {
            route:"/authors",permission:true
        }
    );
    res.end();
})

// app.listen(3750,()=>{

//     console.log("listenon3750")
// })
app.listen(3750)