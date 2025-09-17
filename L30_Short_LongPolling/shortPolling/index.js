const express=require("express")
const app=express();

let name="Palak(Initial Data)";


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/getname",(req,res)=>{
        res.send({name});
    });

app.get("/updatename",(req,res)=>{
    name="Palak Singla(Updated Data)";
    res.send({name});
    })

const PORT=process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
