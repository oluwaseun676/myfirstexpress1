const express = require("express");
const router = express.Router();
router.get("/about",(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        error:false,
        message:"Html file has been successfully sent",
        status:200
    });
})
router.get("/",async(req,res)=>{
 try{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        error:false,
        message:"Welcome to the homepage",
        status:200,
        data:null
    });
 }catch(err){
    res.status(500).json({
        error:true,
        message:"Error",
        cause:err,
        data:null
    })
    console.log(err);
 }
})
router.get("/services",async(req,res)=>{
    try{
       res.setHeader('Content-Type', 'application/json');
       res.status(200).json({
           error:false,
           message:"Welcome to the menu page",
           status:200,
           data:null
       });
    }catch(err){
       res.status(500).json({
           error:true,
           message:"Error",
           cause:err,
           data:null
       })
       console.log(err);
    }
   })
module.exports = router;
