const express = require('express');
const app = express();
app.use("/",(req,res)=>{
  res.send("You are on right port ");
});
app.use("/test",(req,res)=>{
    res.send("You topped the test");
  });
app.get("/hello",(req,res)=>{
    res.send("Hello Bhaiiiiii");
  });  
app.listen(7777,()=>{
  console.log('Hello......');
});