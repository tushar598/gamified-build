import User from "../models/userModel.js";
import dotenv from "dotenv";
import { editUserProfileSchema } from "../types/userTypes.js";

dotenv.config();

export const editUserProfile = async (req, res) => {
  const userId = req.userId;

  const editUserData = editUserProfileSchema.parse(req.body);

  if(!editUserData){
    return res.status(400).json({ message: "Invalid data" });
  }
  
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        name: editUserData.name,
        grade: editUserData.grade,
        state: editUserData.state,
        location: editUserData.location,
        profileImage: editUserData.profileImage,
        language: editUserData.language,
        updatedAt: Date.now(),
      }
    );
    console.log(user);
    
    return res
      .status(200)
      .json({ message: "User profile updated successfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
