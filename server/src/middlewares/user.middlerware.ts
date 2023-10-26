import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user.service";

// Kiểm tra trùng email
export const checkDuplicateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const isEmail: any = await userService.findUserByEmail(res, email);

  console.log("isEmail", isEmail);

  if (!Array.isArray(isEmail)) {
    throw new Error("Lỗi hệ thông.");
  }

  if (isEmail[0]) {
    return res.status(400).json({ status: 400, message: "Email đã tồn tại." });
  }

  next();
};
