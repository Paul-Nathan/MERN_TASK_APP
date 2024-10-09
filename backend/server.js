const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");

const app = express();

//Routes
app.get("/", (req, res) =>{
    res.send("HomePage");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            connectDB();
            app.listen(PORT, ()=>{
                console.log(`Server running on port ${PORT}`);
            });
        })
        .catch((error) => console.log(error));


