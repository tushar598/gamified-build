import { loginUserSchema, registerUserSchema, onboardingSchema } from "../types/authTypes.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req, res) => {
    const userData = registerUserSchema.parse(req.body);

    const existingUser = await User.findOne({email: userData.email});

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  try {
    const newUser = await User.create({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id.toString() }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });

    return res
      .status(201)
      .json({
        message: "User created successfully",
        user: newUser,
        token: token,
      });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// login user controller
export const loginUser = async (req, res) => {
  const { email, password } = loginUserSchema.parse(req.body);

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id.toString() }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });

    return res
      .status(200)
      .json({
        message: "User logged in successfully",
        username: user.name,
        token: token,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// onboarding controller
export const onboarding = async (req, res) => {
  try {
    const { grade, state, location, profileImage, language } =
      onboardingSchema.parse(req.body);

    const updatedUser = await User.findOneAndUpdate(
      { email: req.user.email }, // use email from token
      {
        grade,
        state,
        location,
        profileImage,
        language,
        isOnBoarded: true,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User onboarded successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};


// logout controller
export const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "User logged out successfully" });
};
