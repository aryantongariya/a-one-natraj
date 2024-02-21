const mongoose = require("mongoose");

// const mongoURL = "mongodb://localhost:27017/aonenatraj?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongoURL = "mongodb://localhost:27017/createUser"

const connectToMongo=()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("Connected MongoDB-2");
    })
}

module.exports = connectToMongo;