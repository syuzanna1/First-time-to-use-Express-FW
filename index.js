import express from "express";
// const path = require('node:path');
import path from "path";
const app = express();

app.use(express.static("public"));
app.get("/", (req, res)=>{
   res.send("hy")
});
app.get("/user", (req, res)=>{
    res.send({
        name:'Eva'
    })
});
app.get("/file", (req, res)=>{
    res.sendFile(path.resolve("public/index.html"));
 });

app.listen(3001);