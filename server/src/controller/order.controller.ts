import { Request, Response } from "express";
import * as orderService from "../services/order.service";

export const orderCreate = async (req: Request, res: Response) => {
  try {
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
