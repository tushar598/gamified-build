import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "teacher", "admin"],
        required: true,
        default: "student",
    },
    isOnBoarded:{
        type: Boolean,
        default: false,
    },
    grade:{
        type: String,
        enum: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"],
        default: "1st",
    },
    state:{
        type: String,
    },
    location:{
        type: String,
    },
    profileImage:{
        type: String,
    },
    language:{
        type:String
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    },
})
const User = mongoose.model("User", userSchema);

export default User;

