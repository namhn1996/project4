import express from "express";
import * as cartController from "../controller/cart.controller";

const router = express.Router();

router.post("/", cartController.cartCreate);
router.get("/:id", cartController.GetOneCart);
router.put("/:id", cartController.cartUpdate);
router.put("/tang/:id", cartController.cartTang);
router.put("/giam/:id", cartController.cartGiam);
router.delete("/:id", cartController.cartDelete);
export default router;
