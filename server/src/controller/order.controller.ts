import { Request, Response } from "express";
import * as orderService from "../services/order.service";
import * as productService from "../services/product.service";
import { log } from "console";

export const orderCreate = async (req: Request, res: Response) => {
  try {

    const product = req.body;
    for (const p of product) {
      const [pro] = await productService.GetOneProduct(p.product_id);
      const item = pro.find((item: any) => item.product_id == p.product_id);
      if (item) {
        item.count = item.count - p.product_quantity;
        await productService.UpdateProductByCount(item.count,item.product_id );
      }
    }
    const data: any = await orderService.orderCreate(req.body, res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const data: any = await orderService.getAllOrders(res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: any = await orderService.getOneOrder(+id, res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const data: any = await orderService.updateStatus(req, res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const orderDelete = async (req: Request, res: Response) => {
  try {
    const data: any = await orderService.orderDelete(req, res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHistory = async (req: Request, res: Response) => {
  try {
    const data: any = await orderService.getHistory(req, res);
    return data;
  } catch (error) {
    console.log(error);
  }
};
