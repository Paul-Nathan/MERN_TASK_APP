const server = require("server");

const app = server();

app.get("/", (req, res) =>{
    res.send("HomePage");
});

app.listen("5000", ()=>{
    console.log("Server running on port 5000");
});