import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';
const app = express();

app.post("/signup" , (req,res) =>{

})

app.post("/signin" , (req , res) => {
  



  const userId = 1;
  jwt.sign({
    userId
  },JWT_SECRET)

})

app.get("/room" , (req , res ) => {
  
})
app.listen(3000, () => {
  console.log('HTTP server is running on port 3000');
});