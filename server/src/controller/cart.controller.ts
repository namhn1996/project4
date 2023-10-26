import { Request, Response } from "express";
import * as cartService from "../services/cart.service";

export const cartCreate = async (req: Request, res: Response) => {
  try {
    const data: any = await cartService.createCart(req.body, res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GetOneCart = async (req: Request, res: Response) => {
  try {
    const { id }  = req.params;
    const data: any = await cartService.GetOneCart(+id, res);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const cartUpdate = async (req: Request, res: Response) => {
  try {
    const data: any = await cartService.cartUpdate(req.body, res);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const cartTang = async (req: Request, res: Response) => {
  try {
    const data: any = await cartService.cartTang(req.body, res);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const cartGiam = async (req: Request, res: Response) => {
  try {
    const data: any = await cartService.cartGiam(req.body, res);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const cartDelete = async (req: Request, res: Response) => {
  try {
    const data: any = await cartService.cartDelete(req.body, res);
    return data;
  } catch (error) {
    console.log(error);
  }
}