const express = require("express");
const app = express();
const routes = require("./routes");
app.use(routes);
app.use("/",(req,resp,next)=>{
       resp.send("Welcome to Node ")
       next();
})
app.listen("4000",()=>{
    console.log("http://localhost:4000");
})
