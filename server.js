import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import rout from "./routes/userRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = 8000;
const url = process.env.MONGOURL;

mongoose.connect(url).then(()=>{

    console.log("Miracle Miracle!!!");

    app.listen(PORT, ()=>{
        console.log(`Chal gaya server on port: ${PORT}`);
    })

}).catch(error => console.log(error));


app.use("/api", rout);