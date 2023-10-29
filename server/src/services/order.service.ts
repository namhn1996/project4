import db from "../utils/db";
import { Response } from "express";

export const orderCreate = async (req: any, res: any) => {
  try {
    const data: any = await db.execute(
      `call webdienthoai.Create_Order(?,?,?,?,?,?,?,?,?,?)`,
      [
        req[0].user_id,
        req[0].status,
        req[0].create_at,
        req[0].name,
        req[0].email,
        req[0].phone,
        req[0].province,
        req[0].district,
        req[0].ward,
        req[0].address,
      ]
    );
    const order_id = data[0][0][0].last_order_id;
    for (let i = 0; i < req.length; i++) {
      await db.execute(
        `call webdienthoai.Create_Order_Product(?,?,?,?,?,?,?)`,
        [
          order_id,
          req[i].product_id,
          req[i].product_name,
          req[i].product_img,
          req[i].product_quantity,
          req[i].product_price,
          req[i].product_sale,
        ]
      );
    }
    await db.execute(`call webdienthoai.Delete_Cart_ByUser(?)`, [
      req[0].user_id,
    ]);
    return res.json({
      status: 201,
      message: "Thêm vào giỏ hàng thành công",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrders = async (res: Response) => {
  try {
    const data = await db.execute(`call webdienthoai.GetAllOrders()`);
    const [orders]: any = data[0];
    return res.json({
      status: 200,
      orders,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneOrder = async (id: number, res: any) => {
  try {
    const data = await db.execute(`call webdienthoai.GetOneOrder(?)`, [id]);
    const [order]: any = data[0];
    console.log(order);

    return res.json({
      status: 200,
      order,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const status = req.body.status;
    // const [order]: any = await db.execute(`call webdienthoai.GetOneOrder(?)`, [
    //   id,
    // ]);
    // const [row]: any = order;
    // // console.log("row", row)
    // const [product]: any =
    //   await db.execute(`call webdienthoai.Product_Get_All();
    // `);
    

    await db.execute(`call webdienthoai.UpdateOrderStatus(?,?)`, [status, id]);
    return res.json({
      status: 200,
      message: "Cập nhật thành công",
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderDelete = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await db.execute(`call webdienthoai.DeleteOrder(?)`, [id]);
    return res.json({
      status: 200,
      message: "Xóa thành công",
    });
  } catch (error) {
    console.log(error);
  }
};
