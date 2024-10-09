const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");


const app = express();
app.use(express.json())

//Middleware
// const logger = (req, res, next) => {
//     console.log("Middleware ran");
//     console.log(req.method);
//     next();
// };

//Routes
app.get("/", (req, res) =>{
    res.send("HomePage");
});

//Create a Task
app.post("/api/tasks", async (req, res) => {
   try {
    const tasks = await Task.create(req.body)
    res.status(200).json(tasks)
   } catch (error) {
    res.status(500).json({error: error.message})
   }
})

//Read a Task
app.get("")

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            connectDB();
            app.listen(PORT, ()=>{
                console.log(`Server running on port ${PORT}`);
            });
        })
        .catch((error) => console.log(error));


