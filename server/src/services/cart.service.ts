import { Response } from "express";
import db from "../utils/db";
import { Cart } from "../entities/cart.entities";

export const createCart = async (req: Cart, res: Response) => {
  try {
    await db.execute(`call webdienthoai.Create_Cart(?,?,?)`, [
      req.user_id,
      req.product_id,
      req.quantity,
    ]);
    return res.json({
      status: 201,
      message: "Thêm vào giỏ hàng thành công",
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetOneCart = async (id: number, res: Response) => {
  try {
    const data: any = await db.execute(`call webdienthoai.GetOneCart(?)`, [id]);
    return res.json({
      status: 200,
      cart: data[0][0],
    });
  } catch (error) {
    console.log(error);
  }
};

export const cartUpdate = async (req: Cart, res: Response) => {
  try {
    await db.execute(`call webdienthoai.Update_Cart(?,?,?)`, [
      req.quantity,
      req.user_id,
      req.product_id,
    ]);
    return res.json({
      status: 200,
      message: "Cập nhật giỏ hàng thành công",
    });
  } catch (error) {
    console.log(error);
  }
};

export const cartTang = async (req: Cart, res: Response) => {
  try {
    await db.execute(`call webdienthoai.Update_Quantity_Tang(?,?,?)`, [
      req.quantity,
      req.user_id,
      req.product_id,
    ]);
    return res.json({
      status: 200,
      message: "Cập nhật giỏ hàng thành công",
    });
  } catch (error) {
    console.log(error);
  }
};

export const cartGiam = async (req: Cart, res: Response) => {
  try {
    await db.execute(`call webdienthoai.Update_Quantity_Giam(?,?,?)`, [
      req.quantity,
      req.user_id,
      req.product_id,
    ]);
    return res.json({
      status: 200,
      message: "Cập nhật giỏ hàng thành công",
    });
  } catch (error) {
    console.log(error);
  }
};

export const cartDelete = async (req: Cart, res: Response) => {
  try {
    console.log(req);

    await db.execute(`call webdienthoai.Delete_Cart(?)`, [req.cart_id]);
    return res.json({
      status: 200,
      message: "Xóa giỏ hàng thành công",
    });
  } catch (error) {
    console.log(error);
  }
};
