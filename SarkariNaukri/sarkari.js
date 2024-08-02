const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;



app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./sarkari.html"));
  // res.sendFile(path.join(__dirname,"./sarkari.css"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.use(express.static(__dirname));

app.get("/latestjobs", (req, res) => {
  res.sendFile(path.join(__dirname, "./latestjobs.html"));
  // res.sendFile(path.join(__dirname,"./sarkari.css"));
});

app.get("/results", (req, res) => {
  res.sendFile(path.join(__dirname, "./results.html"));
  // res.sendFile(path.join(__dirname,"./sarkari.css"));
});

app.get("/admitcard", (req, res) => {
  res.sendFile(path.join(__dirname, "./admitcard.html"));
  // res.sendFile(path.join(__dirname,"./sarkari.css"));
});

app.get("/answerkey", (req, res) => {
  res.sendFile(path.join(__dirname, "./answerkey.html"));
  // res.sendFile(path.join(__dirname,"./sarkari.css"));
});

app.get("/syllabus", (req, res) => {
  res.sendFile(path.join(__dirname, "./syllabus.html"));
  // res.sendFile(path.join(__dirname,"./sarkari.css"));
});

app.get("/search", (req, res) => {
//   res.sendFile(path.join(__dirname, "./search.html"));
res.status(200);
    res.json({name:"MKKI", age: 19});
  // res.sendFile(path.join(__dirname,"./sarkari.css"));
});

app.get('/mobile+apps',(req,res)=>{
    res.redirect("https://localhost:8080/");
})

// app.get("/contactus",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./contactus.html"));
//     // res.send("no post request poss");
//     // res.sendFile(path.join(__dirname,"./sarkari.css"));
// })

app.get("/contactus", (req, res) => {
//   await fetch("https://cat-fact.herokuapp.com/")
    res.redirect("https://cat-fact.herokuapp.com/")
  // res.sendFile(path.join(__dirname,"./sarkari.css"));
});
// app.get('/latestjobs',(req,res)=>{
//     res.redirect('./latestjobs');
// })

app.listen(PORT, (err) => {
if(err)
{
    console.log(err);
}
  console.log(`Server is listening at ${PORT}`);
  console.log(__dirname);
  console.log(__filename);
});
