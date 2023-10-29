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

export const UpdateProduct = async (req: Request, res: Response) => {
  try {
    const {
      product_id,
      name,
      price,
      sale,
      count,
      category,
      img,
      screen,
      os,
      camara,
      camaraFront,
      cpu,
      ram,
      rom,
      sim,
      battery,
    } = req.body as any;

    const [product]: any = await db.execute(
      `call webdienthoai.UpdateProduct(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        product_id,
        name,
        price,
        sale,
        count,
        category,
        img,
        screen,
        os,
        camara,
        camaraFront,
        cpu,
        ram,
        rom,
        sim,
        battery,
      ]
    );
    return product;
  } catch (error) {
    console.log(error);
  }
};
