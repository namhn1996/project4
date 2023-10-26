import { Response } from "express";
import db from "../utils/db";

export const GetAllProduct: any = async (req: Request, res: Response) => {
  try {
    const [products]: any = await db.execute(
      `call webdienthoai.Product_Get_All()`
    );
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const GetOneProduct = async (id: number) => {
  try {
    const [product]: any = await db.execute(
      `call webdienthoai.GetOneProduct(?)`,
      [id]
    );
    return product;
  } catch (error) {
    console.log(error);
  }
};
