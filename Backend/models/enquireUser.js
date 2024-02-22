// const mongoose = require("mongoose");


// const playlistSchema = new mongoose.Schema({

//     studentName: {
//         type: String,
//         required: [true, 'Name is required'],
//         minlength: [2, 'Name can\'t be smaller then 2 characters'],
//         maxLength: [64, 'Name can\'t be greater then 64 characters']

//     },

//     parentName: {
//         type: String,
//         required: [true, 'Parent Name is required'],
//         minlength: [2, 'Name can\'t be smaller then 2 characters'],
//         maxLength: [64, 'Name can\'t be greater then 64 characters']
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     gender: {
//         type: String,
//         required: true,
//     },

//     activities: {
//         type: String,
//         required: true,
//     },


//     mobile: {
//         type: Number,
//         required: [true, 'Mobile number is required'],
//         minlength: 10
//     },


//     isActive: {
//         type: Boolean,
//         default: true
//     },
//     isDelete: {
//         type: Boolean,
//         default: false
//     }
// }, {
//     timestamps: true

// });


// // now we need to create a collections

// const Enquiry = mongoose.model("enquiry", playlistSchema);

// module.exports = Enquiry;