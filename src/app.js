const express = require('express');
require("./Db/conn");
const Student=require("./models/students")
const app=express();
const port = 8000|| process.env.PORT;


app.use(express.json());
app.get('/',(req,res)=>{
    
    res.send("hello from home side");

})

app.post("/students",(req,res)=>{
    console.log(req.body);
    
    const user = new Student(req.body);
    
    user.save()
    .then(()=>{ res.status(201).send(user);})
    .catch((e) => {res.status(400).send(e);})

     
})

app.listen(port,()=>{
    console.log('connection setup');
})