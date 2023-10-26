import { NextFunction, Request, Response } from "express";
import db from "../utils/db";

export const GetProductByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page_index, page_number, category } = req.query;
  try {
    if (!category && !page_index && !page_number) {
      next();
    } else {
      const inserted = [
        Number(page_number),
        (Number(page_index) - 1) * Number(page_number),
        category,
      ];
      const [data]: any = await db.execute(
        `call webdienthoai.GetAllProductByPagination(?,?,?)`,
        inserted
      );
      const [data2]: any = await db.execute(
        `call webdienthoai.GetCountProduct()`
      );
      const [rows]: any = data;
      const [rows2]: any = data2;
      res.json({
        status: 200,
        data: rows,
        length: rows2[0].count,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
