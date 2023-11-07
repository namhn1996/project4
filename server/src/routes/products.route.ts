import express from "express";
import {
  GetAllProduct,
  GetOneProduct,
  UpdateProduct,
  PostComment,
  PostProduct,
  DeleteProduct,
} from "../controller/products.controller";
import { GetProductByCategory } from "../middlewares/products.middllerware";

const router = express.Router();

router.get("/", GetProductByCategory, GetAllProduct);
router.get("/:id", GetOneProduct);
router.put("/:id", UpdateProduct);
router.post("/comment/:id", PostComment);
router.post("/", PostProduct);
router.delete("/:id", DeleteProduct);
export default router;
