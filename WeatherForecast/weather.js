const express = require("express");
const path = require("path");
const fs = require('fs')
const PORT = 1909;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "weather.html"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/weather.css");
});



app.use(express.static(__dirname));

app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.send(path(join(__dirname,'./weather.html')))
})



app.listen(PORT, () => {
  console.log("server is listening");
});
