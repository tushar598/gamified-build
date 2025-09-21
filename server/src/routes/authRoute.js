import express from "express";
import { registerUser , loginUser , onboarding , logout } from "../controller/authController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/onboarding", onboarding);
router.post("/logout", logout);

export default router;