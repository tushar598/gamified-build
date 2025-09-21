import jwt from "jsonwebtoken";
import User from "../models/userModel.js"; // adjust path

export const authMiddleware = async (req, res, next) => {
  try {
    let token;

    // 1️⃣ Check Authorization header first
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }
    // 2️⃣ If not in header, check cookies
    else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    // 3️⃣ No token found
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    console.log("Token Received:", token);

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    // Find user by ID inside token
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach user to req
    req.user = user;

    next();
  } catch (error) {
    console.error("JWT Middleware Error:", error);
    return res.status(401).json({ message: "Invalid or expired token", error: error.message });
  }
};
