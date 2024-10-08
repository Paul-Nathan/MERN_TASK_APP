const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute")

const app = express();

//Middleware
app.use(express.json())
app.use("/api/tasks", taskRoutes)


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            connectDB();
            app.listen(PORT, ()=>{
                console.log(`Server running on port ${PORT}`);
            });
        })
        .catch((error) => console.log(error));


