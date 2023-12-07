import express from "express";
import userController from "../app/controllers/userController.js";
const router = express.Router();

router.get("/all", userController.getAllUSers);
router.get("/filter", userController.filterUsers);
router.post("/edit/:email", userController.updateInfoUser);

export default router;
