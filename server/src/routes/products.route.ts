import express from "express";
import {
  GetAllProduct,
  GetOneProduct,
  UpdateProduct,
} from "../controller/products.controller";
import { GetProductByCategory } from "../middlewares/products.middllerware";

const router = express.Router();

router.get("/", GetProductByCategory, GetAllProduct);
router.get("/:id", GetOneProduct);
router.put("/:id", UpdateProduct);

export default router;
