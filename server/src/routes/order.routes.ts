import express from "express";
import * as orderController from "../controller/order.controller";

const router = express.Router();

router.post("/", orderController.orderCreate);
router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOneOrder);
router.put("/:id", orderController.updateStatus);
router.delete("/:id", orderController.orderDelete);

export default router;
