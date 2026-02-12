const express = require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middleware/auth")
const router = express.Router();

router.get('/admin/url', restrictTo(["ADMIN"]),async(req,res)=>{
    const allURLs = await URL.find({}); 
    res.render("home",{
        urls: allURLs,
    })
})

router.get("/",restrictTo(["NORMAL","ADMIN"]),async(req,res)=>{
    const allURLs = await URL.find({createdBy: req.user._id}); 
    const baseUrl = `${req.protocol}://${req.get("host")}`;
    res.render("home",{
        urls: allURLs,
        baseUrl: `${req.protocol}://${req.get("host")}`,
        id: null
    })
})

router.get("/signup",(req,res)=>{
    res.render('signup')
})

router.get("/login",(req,res)=>{
    console.log("Hello in login")
    res.render("login", { error: null });
})

module.exports = router;