import express from "express";
import { GetCountAdmin } from "../controller/admin.controller";

const router = express.Router();

router.get("/", GetCountAdmin)

export default router;