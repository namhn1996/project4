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

export const PostComment = async (req: Request, res: Response) => {
  try {
    const { product_id, user_id, comment,create_at } = req.body as any;
    const [product]: any = await db.execute(
      `call webdienthoai.PostComment(?,?,?,?)`,
      [comment,product_id, user_id, create_at]
    );
    return product;
  } catch (error) {
    console.log(error);
  }
}

export const PostProduct = async (req: Request, res: Response) => {
 try {
  const { name, price, sale, count, category, img, screen, os, camara, camaraFront, cpu, ram, rom, sim, battery } = req.body as any;
  const [product]: any = await db.execute(
    `call webdienthoai.Create_Product(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [name, price, sale, count, category, img, screen, os, camara, camaraFront, cpu, ram, rom, sim, battery]
  );
  return product;
 } catch (error) {
  console.log(error);
 }
}

export const UpdateProductByCount = async (product_id :number,count:number) => {
  try {
    const [product]: any = await db.execute(
      `call webdienthoai.UpdateProductByCount(?,?)`,[product_id, count]
    ).then((data: any) => {
      return data
    })
  } catch (error) {
    console.log(error);
    
  }
}

export const DeleteProduct = async (req: any, res: Response) => {
  try {
    const { id } = req.params;
    const [product]: any = await db.execute(
      `call webdienthoai.DeleteProduct(?)`,
      [id]
    );
    return product;
  } catch (error) {
    console.log(error);
  }
}