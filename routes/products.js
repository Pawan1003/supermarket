const express = require("express");
const Router = express.Router();
Router.get("/GetProduct",(req,resp,next)=>{
    resp.send("Welcome To Products")
})
Router.get("/GetProducts/:id",(req,resp,next)=>{
    resp.send("Get Products Details");
})
Router.post("/add-products",(req,resp,next)=>{
    resp.send("Adding Products");
})
Router.put("/update-product/:id",(req,resp,next)=>{
        resp.send("update products ")
})
Router.delete("/delete-product",(req,resp,next)=>{
    resp.send("delete products ")
})
module.exports = Router;