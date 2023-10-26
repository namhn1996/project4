import { Request, Response } from "express";
import * as categoryService from "../services/category.service";

export const GetAllCategory = async (req: Request, res: Response) => {
    const result: any = await categoryService.GetAllCategory(res);
    return result;
}