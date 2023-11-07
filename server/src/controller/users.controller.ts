import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
  console.log("req.body", req.body);
  
 return await userService.userCreate(res, req.body);
};
export const login = async (req: Request, res: Response) => {
  const result = await userService.login(res, req.body);
  return result;
};

export const getAllUsers = async (req: Request, res: Response) => {
  const result = await userService.getAllUsers(res);
  return result;
};

export const getOneUser = async (req: Request, res: Response) => {
  const result = await userService.getOneUser(+req.params.id, res);
  return result;
};

export const updateStatus = async (req: Request, res: Response) => {
  const result = await userService.updateStatus(
    +req.params.id,
    req.body.status,
    res
  );
  return result;
};

export const updateAvatar = async (req: Request, res: Response) => {
  const result = await userService.updateAvatar(req, res);
  return result;
}