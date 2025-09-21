import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { editUserProfile } from "../controller/userController.js";
const router = express.Router();

router.use(authMiddleware);

router.post("/edit-profile", editUserProfile);

export default router;