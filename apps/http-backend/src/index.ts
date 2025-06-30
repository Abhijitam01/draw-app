import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';
import { CreateUserSchema , SigninSchema , CreateRoomSchema } from '@repo/common/types'
import { prismaClient } from '@repo/db/client';
const app = express();

app.post("/signup" , (req,res) =>{

  const data = CreateUserSchema.safeParse(req.body);
  if(!data.success){
      res.json({
      message : " Incorrect"
    })
    return
  }
  

})

app.post("/signin" , (req , res) => {


  const data = SigninSchema.safeParse(req.body);
  if(!data.success){
      res.json({
      message : " Incorrect"
    })
    return
  }


  const userId = 1;
  const token = jwt.sign({
    userId
  },JWT_SECRET)
  res.json(token)
})

app.get("/room" , (req , res ) => {

  const data = CreateRoomSchema.safeParse(req.body);
  if(!data.success){
      res.json({
      message : " Incorrect"
    })
    return
  }

  res.json({
    roomId : 133
  })
  
})
app.listen(3000, () => {
  console.log('HTTP server is running on port 3000');
});