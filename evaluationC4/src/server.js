const app=require("d:/evaluationC4/src/index")

const connect=require("./config/db")

app.listen(3750,async()=>{

    try{
        await connect();
        console.log("Listening on port 3750")

    }catch(error){
        console.log(error.message)
    }
})