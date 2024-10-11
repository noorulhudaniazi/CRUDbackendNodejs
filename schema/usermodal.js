import mongoose, { Schema } from "mongoose";

const userschema = new Schema({
    Name: {type: String, require: true},
    Email: {type: String, require: true},
    Contact: {type: Number, require: true},
    Address: {type: String, require: true},
    City: {type: String, require: true},
    Zipcode: {type: Number, require: true},
    Country: {type: String, require: true},
    password: {type: String, require: true},
})

const usermodel = mongoose.model("user_collection", userschema);
 export default usermodel;