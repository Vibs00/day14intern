const express = require("express");

const server = express();

server.get("/login/:name/:subject/:c", (req,res)=>{
    // res.send("Hello");
    res.json(req.params);
})

server.listen(8081,()=>{
    console.log("server started");
})