const express = require('express');
const app = express();
app.use("/use",(req,res,next)=>{
  next();
  // res.send("You are on the right port ");
},
(req,res,next)=>{
  next();
  res.send("This is the 2nd port ");
},
(req,res,next)=>{
  next();
  res.send("This is the 3rd port ");
},
(req,res,next)=>{
  next();
  res.send("This is the 4th port ");
},
(req,res,next)=>{
  res.send("This is the 5th port ");
}
);

app.listen(7777,()=>{
  console.log('Hello......');
});