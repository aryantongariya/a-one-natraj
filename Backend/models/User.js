const mongoose = require('mongoose')
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },

    activities: {
        type: String,
        required: true,
    },


    mobile: {
        type: Number,
        required: [true, 'Mobile number is required'],
        minlength: 10
    },


    isActive: {
        type: Boolean,
        default: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, {
    date:{
        type:Date,
        default: Date.now
    },
})

const User = mongoose.model('a1user',UserSchema);
// User.createIndexes();
module.exports = User;