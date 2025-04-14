const express = require('express');
const app = express();
app.get("/hello/2",(req,res)=>{
  res.send("Hello 2je bhi Bhaiiiii");
});   
app.get("/hello",(req,res)=>{
  res.send("Hello Bhaiiiiii");
});
app.use("/test",(req,res)=>{
    res.send("You topped the test");
});
app.use("/",(req,res)=>{
  res.send("You are on right port ");
});

app.listen(7777,()=>{
  console.log('Hello......');
});