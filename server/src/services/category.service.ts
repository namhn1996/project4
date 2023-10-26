import db from "../utils/db";
import { Request, Response } from "express";

export const GetAllCategory = async (res: Response) => {
  try {
    const result: any = await db.execute(`call webdienthoai.GetAllCategory()`);
    const [rows]: any = result[0];
    return res.json({
      status: 200,
      data: rows,
    });
  } catch (error) {
    console.log(error);
  }
};
