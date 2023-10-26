import * as adminService from "../services/admin.service";
import { Request, Response } from "express";

export const GetCountAdmin = async (req: Request, res: Response) => {
  const result: any = await adminService.GetCountAdmin(res);
  return result;
};
