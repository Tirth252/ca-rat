import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { Schema, model, connect } from 'mongoose';
import User from './models/users'

import Logger from "./lib/logger";
import morganMiddleware from './config/morganMiddleware'

dotenv.config({path:__dirname + '/dev.env'})

const app = express();
const port = process.env.PORT || 3000;
app.use(morganMiddleware)

 
 app.use(express.json());
 const allowedOrigins = ['http://localhost:3000'];
 const options: cors.CorsOptions = {
     origin: allowedOrigins
   };
 app.use(cors(options));


const dbUser = process.env.DB_USER;
const dbPassWord = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${dbUser}:${dbPassWord}@caart.z5r0otj.mongodb.net/?retryWrites=true&w=majority&appName=caart`;

run().catch(err => console.log(err));
async function run() {
  // 4. Connect to MongoDB
  await connect(uri);
  console.log("Mongodb connected!")

  const user = new User({
    username: 'Bill',
    password: 'bill@initech.com',
  });
  await user.save();
  console.log("User saved")
}



app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


  app.get("/logger", (_, res) => {
    Logger.error("This is an error log");
    Logger.warn("This is a warn log");
    Logger.info("This is a info log");
    Logger.http("This is a http log");
    Logger.debug("This is a debug log");
  
    res.send("Hello world");
  });