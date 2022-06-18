
import express, { Router } from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv'
import DefaultData from "./default.js";
// cors us cross origin resource sharing
import cors from 'cors';
// express cannot by default handle post api body and hence body parser is used
import bodyParser from 'body-parser';


const app=express()

dotenv.config();  // SETUP DOTENV LIB FOR SAFELY STORING PASSWARDS

const PORT=8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

// WRITING PASSWARD DIRECTLY IN CODE IS BAD PRACTICE HENCE WE USE ENV LIB TO CONTAIN TH DB CONNECTION PASS
// PASSWARD IS STORED IN .ENV FILE AND THIS FILEIS NEVER PUSHED DURING DEPLOYMENT
const USERNAME= process.env.DB_USERNAME;        // THIS IS HOW TO FETCH PASSWARD FORM ENV FILE.
const PASSWARD=process.env.DB_PASSWARD;

Connection(USERNAME,PASSWARD);


app.listen(PORT , ()=> console.log("Server is runnnig on port"));

DefaultData();

