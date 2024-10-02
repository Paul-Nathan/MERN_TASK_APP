const express = require("express");

const app = express();


//Routes
app.get("/", (req, res) =>{
    res.send("HomePage");
});

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});