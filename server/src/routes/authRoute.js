import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { registerUser , loginUser , onboarding , logout } from "../controller/authController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/onboarding",authMiddleware, onboarding);
router.post("/logout", logout);

export default router;