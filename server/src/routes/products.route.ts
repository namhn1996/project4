import express from "express";
import {
  GetAllProduct,
  GetOneProduct,
} from "../controller/products.controller";
import {
  GetProductByCategory,
} from "../middlewares/products.middllerware";

const router = express.Router();

router.get("/", GetProductByCategory, GetAllProduct);
router.get("/:id", GetOneProduct);

export default router;
