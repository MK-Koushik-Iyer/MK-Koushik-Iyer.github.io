const express = require("express");
const path = require("path");
const PORT = 1909

const app = express();

app.use(express.urlencoded(__dirname))

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "calc.html"));
})

app.get("/calc.css", (req, res) => {
    res.sendFile(__dirname + "/calc.css");
  });

app.listen(PORT, (req,res)=>{
    console.log("Server is listening");
})