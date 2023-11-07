import { Request, Response } from "express";
import * as productService from "../services/product.service";

export const GetAllProduct = async (req: Request, res: Response) => {
  const [data]: any = await productService.GetAllProduct();
  const products = data;
  res.status(200).json({ data: products });
};

export const GetOneProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data: any = await productService.GetOneProduct(+id);
  const productData = {
    product: data[0],
    comment: data[1],
  };
  const product = productData;
  res.status(200).json({ data: product });
};

export const UpdateProduct = async (req: any, res: Response) => {
  await productService.UpdateProduct(req, res);
  res.json({
    status: 200,
    message: "Cập nhật sản phẩm thành công",
  });
};

export const PostComment = async (req: any, res: Response) => {
  await productService.PostComment(req, res);
  res.json({
    status: 200,
    message: "Thêm bình luận thành công",
  });
}

export const PostProduct = async (req: any, res: Response) => {
  await productService.PostProduct(req, res);
  res.json({
    status: 200,
    message: "Thêm sản phẩm thành công",
  });
}

export const DeleteProduct = async (req: any, res: Response) => {
  await productService.DeleteProduct(req, res);
  res.json({
    status: 200,
    message: "Xóa sản phẩm thành công",
  });
}