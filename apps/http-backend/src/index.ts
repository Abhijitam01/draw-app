import express, { urlencoded } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';
import { CreateUserSchema , SigninSchema , CreateRoomSchema } from '@repo/common/types'
import { prismaClient } from '@repo/db/client';
const app = express();

app.post("/signup" ,async (req,res) =>{

  const parsedData = CreateUserSchema.safeParse(req.body);
  if(!parsedData.success){
      res.json({
      message : " Incorrect"
    })
    return
  }
  try {
    await prismaClient.user.create({
           data:{
               email:parsedData.data?.username,
               password: parsedData.data?.password,
               name : parsedData.data?.username
    }
    })
    res.json({
        userId : "123"
    })
  
  }
  catch(e){
    res.status(411).json({
      message:"User already exist with this username"
    })
  }

})

app.post("/signin" ,async (req , res) => {


  const parsedData = SigninSchema.safeParse(req.body);
  if(!parsedData.success){
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