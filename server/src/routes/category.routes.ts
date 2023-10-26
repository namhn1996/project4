import express from "express";
import { GetAllCategory } from "../controller/category.controller";

const router = express.Router();

router.get("/", GetAllCategory);

export default router;
