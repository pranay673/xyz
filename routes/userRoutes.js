import express from "express";
import { create, deleteBook,  getAll, getOne, update } from "../controller/userController.js";

const rout = express.Router();

rout.post("/create", create);
rout.get("/getall", getAll);
rout.get("/getone/:id", getOne);
rout.put("/update/:id", update);
rout.delete("/deleteBook/:id", deleteBook);

export default rout;