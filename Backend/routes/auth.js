// const { default: userEvent } = require("@testing-library/user-event");
// const express = require("express");
// const User = require("../models/User");
// const Enquiry =require('../models/enquireUser')
// const { body, validationResult } = require("express-validator");
// const router = express();
// const bcrypt = require("bcryptjs");
// var jwt = require('jsonwebtoken');
// // const fetchUser = require('../middleware/fetchuser')
// // const { success } = require("concurrently/src/defaults");
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

//     // ------------Create a new user----------

// router.post("/createuser",
// [
//   body("name", "Enter the valid name").isLength({ min: 2 }),
//   body("email", "Enter the valid email").isEmail(),
//   body("password", "password must be atleast 5 characte").isLength({
//     min: 5,
//   }),
// ], 
// async (req, res) => {
//   let success = false
//   // console.log(req.body);
//   // const user = User(req.body);
//   // user.save()
//   // res.send(req.body)

//   // if there are errors, return Bad request and the errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({success, errors: errors.array() });
//   }
//   // Check whether the user with this email exists already
//   try {
//     let user = await User.findOne({ email: req.body.email });
//     // let userNum = await User.findOne({  mobile: req.body.mobile });
//     if (user) { 
//       return res
//         .status(400)
//         .json({success, error: "Sorry a user with this email already exists" });
//     }
//     // if (userNum) {   
//     //   return res
//     //     .status(400)
//     //     .json({success, error: "Sorry a user with this number alrady exists" });
//     // }
//     const salt = await bcrypt.genSalt(10);
//     const secPass = await bcrypt.hash(req.body.password, salt);

//     // Create a new user
//     user = await User.create({
//       name: req.body.name,
//       password: secPass,
//       email: req.body.email,
//       age: req.body.age,
//       gender: req.body.gender,
//       activities: req.body.activities,
//       mobile: req.body.mobile
//     });
//     const data = {
//       user: {
//         id: user.id,
//       },
//     };
//     const authtoken = await jwt.sign(data, JWT_SECRET);
//     // res.json(user)
//     success = true  
//     res.json({success, authtoken });
//   }
  
  
//   catch (error) {
//     console.error(error.message);
//     res.status(500).send("internal server Error");
//   }

//   //   .then(user => res.json(user))
//   //   .catch(err=>{console.log(err)
//   // res.json({error: 'Please enter a unique value for email'})})
// }
//   // resp.send(user)
// )                     

//     // ------------Create a new user-----------------------------

// // Route:2 Authenticate a user using: POST "/api/auth/login". no login required

// // router.post(
// //   "/login",
// //   [
// //     body("email", "Enter the valid email").isEmail(),
// //     body("password", "password can not be blank").exists(),
// //   ],
// //   async (req, res) => {
// //     let success = false

// //     // if there are errors, return Bad request and the errors
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       return res.status(400).json({ errors: errors.array() });
// //     }
// //     const { email, password } = req.body;
// //     try {
// //       let user = await User.findOne({ email });
// //       if (!user) {
// //         success = false
// //         return res
// //           .status(400)
// //           .json({ error: "Please try login with correct credentials" });
// //       }
// //       const passwordCompare = await bcrypt.compare(password, user.password);
// //       if (!passwordCompare) {
// //         success = false
// //         return res
// //           .status(400)
// //           .json({ success, error: "Please try login with correct credentials" });
// //       }
// //       const data = {
// //         user: {
// //           id: user.id,
// //         },
// //       }; 
// //       const authtoken = jwt.sign(data, JWT_SECRET);
// //       success = true
// //       res.json({success, authtoken });
// //     } catch (error) {
// //       console.error(error.message);
// //       res.status(500).send("internal server Error");
// //     }
// //   }
// // );


// // --------------------------Login Api--------------

// // router.post("/login", async(req, resp)=>{
// //   console.log(req.body)
// //   if(req.body.email && req.body.password){
// //   let user = await User.findOne(req.body).select('-password')
// //   if(user){
// //           // --------------------JWT Token-----------------------
// //         jwt.sign({user},JWT_SECRET,{expiresIn:'2h'},(err, token)=>{
// //           if(err){

// //               resp.send({result:"something went wrong"})
// //           }
// //           resp.send({user, auth: token})
// //       })
// //       jwt.sign({user},JWT_SECRET,{expiresIn:'2h'},(err, token)=>{
// //           if(err){

// //               resp.send({result:"something went wrong"})
// //           }
// //           resp.send({user, auth: token})
// //       })
// //   }else{
// //       resp.send({result:'no user found'})
// //   }
// // }else{
// //   resp.send({result:'no user found'})
// // }
// // })

//     // -----x-------Create Login user------x-----------------------
// router.post(
//   "/login",
//   [
//     body("email", "Enter the valid email").isEmail(),
//     body("password", "password can not be blank").exists(),
//   ],
//   async (req, res) => {
//     let success = false
//     // if there are errors, return Bad request and the errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const { email, password } = req.body;
//     try {
//       let user = await User.findOne({ email });
//       if (!user) {
//         success = false
//         return res
//           .status(400)
//           .json({ error: "Please try login with correct credentials" });
//       }
//       const passwordCompare = await bcrypt.compare(password, user.password);
//       if (!passwordCompare) {
//         success = false
//         return res
//           .status(400)
//           .json({ success, error: "Please try login with correct credentials" });
//       }
//       const data = {
//         user: {
//           id: user.id,
//         },
//       }; 
//       const authtoken = jwt.sign(data, JWT_SECRET);
//       success = true
//       res.json({success, authtoken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("internal server Error");
//     }
//   }
// );

//  // -----x-------Create Login user------x-----------------------

// // Route:3 (fetchUser) Get loggedIn user Details using: POST "/api/auth/getuser". login required
// // router.post(
// //   "/getuser", fetchUser,
// //   async (req, res) => {
// //     try {
// //       userId = req.user.id;
// //       const user = await User.findById(userId).select("-password");
// //       res.send(user)
// //     } catch (error) {
// //       console.error(error.message);
// //       res.status(500).send("internal server Error");
// //     }
// //   }
// // );

// module.exports = router;
