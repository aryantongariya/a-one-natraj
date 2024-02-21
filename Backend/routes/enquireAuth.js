// const { default: userEvent } = require("@testing-library/user-event");
// const express = require("express");
// const Enquiry =require('../models/enquireUser')
// // const { body, validationResult } = require("express-validator");
// const router = express();
// var jwt = require('jsonwebtoken');
// // const fetchUser = require('../middleware/fetchuser')
// router.use(express.json())
// const JWT_SECRET = "aaliyareaaliya";

// // ------------Create Enquire Form--------------m----------
// router.post("/enquire", async(req, resp)=>{
//   let enquireUser = new Enquiry(req.body)
   
 
//     // enquireUser = await Enquiry.create({
//     //   studentName: req.body.studentName,
//     //   parentName: req.body.parentName,
//     //   age: req.body.age,
//     //   gender: req.body.gender,
//     //   activities: req.body.activities,
//     //   mobile: req.body.mobile,
    
//     // });
    
//     let result = await enquireUser.save()
//     result= enquireUser.toObject()
    
//     // --------------------JWT Token-----------------------
//     jwt.sign({result},JWT_SECRET,{expiresIn:'2h'},(err, token)=>{
//       if(err){
        
//         resp.send({result:"something went wrong"})
//       }
//       resp.send({result, auth: token})
//     })
//     // resp.send(user)
    
//   })
//   //         // ----X--------Create Enquire Form------X----