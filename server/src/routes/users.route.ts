import express from "express";
import * as userController from "../controller/users.controller";
import { checkDuplicateEmail } from "../middlewares/user.middlerware";

const router = express.Router();

router.post("/register", checkDuplicateEmail, userController.createUser);
router.post("/login", userController.login);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getOneUser);
router.put("/:id", userController.updateStatus);
export default router;
