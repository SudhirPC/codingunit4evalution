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


app.get("/",(req,res)=>{

    res.send(
        {
            route:"/books"
        }
    );
    res.end();
})

app.get("/",(req,res)=>{

    res.send(
        {
            route:"/books",permission:true
        }
    );
    res.end();
})

app.get("/",(req,res)=>{

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