import { registerUserSchema } from "../types/authTypes.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req, res) => {
    const userData = registerUserSchema.parse(req.body);

    const existingUser = await User.findOne({email: userData.email});

    if(existingUser){
        return res.status(400).json({message: "User already exists"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    try {
        const newUser =  await User.create({
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
        })

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET);

        res.cookie("token", token, {
            httpOnly: true, 
            secure: true,
        });

        return res.status(201).json({message: "User created successfully", user: newUser, token: token});

    } catch (error) {
        return res.status(500).json({message: "Internal server error"});
    }
}