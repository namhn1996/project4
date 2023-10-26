import db from "../utils/db";
import { Request, Response } from "express";

export const GetCountAdmin = async (res: Response) => {
  try {
    const [choXacNhan]: any = await db.execute(
      `SELECT count(*) AS choXacNhan FROM orderr WHERE status = 'Chờ Xác nhận'`
    );
    const [dangShip]: any = await db.execute(
      `SELECT count(*) AS dangShip FROM orderr WHERE status = 'Đang vận chuyển'`
    );
    const [hoanThanh]: any = await db.execute(
      `SELECT  count(*) AS hoanThanh FROM orderr WHERE status = 'Hoàn thành'`
    );
    const [productQuanLy]: any = await db.execute(
      `SELECT count(*) AS productQuanLy FROM products`
    );
    const [productSapHet]: any = await db.execute(
      `SELECT  count(*) AS productSapHet FROM products WHERE count < 10`
    );
    const [khachHang]: any = await db.execute(
      `SELECT  count(*) AS khachHang FROM users`
    );
    return res.json({
      choXacNhan: choXacNhan[0].choXacNhan,
      dangShip: dangShip[0].dangShip,
      hoanThanh: hoanThanh[0].hoanThanh,
      productQuanLy: productQuanLy[0].productQuanLy,
      productSapHet: productSapHet[0].productSapHet,
      khachHang: khachHang[0].khachHang,
    });
  } catch (error) {
    console.log(error);
  }
};
