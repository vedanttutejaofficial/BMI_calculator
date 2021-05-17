const express=require("express");//we are just importing express module
const app=express();
app.use(express.urlencoded({
    extended:true
}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/Index.html");

});
    app.post("/submit",(req,res)=>{
const value1=Number(req.body.firstvalue)
console.log(value1);
const value2=Number(req.body.secondvalue);
const result=value1/(value2*value2);
res.send(`the result is ${result} `);
    })

app.listen(7000,()=>{
    console.log("app is listening at 7000");
});
