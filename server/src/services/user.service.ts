import { User } from "./../entities/user.entities";
import { Response } from "express";
import * as bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import * as jwt from "jsonwebtoken";
import db from "../utils/db";

export const userCreate = async (res: Response, request: User) => {
  try {
    // Mã hóa mật khẩu
    const salt = bcrypt.genSaltSync(10);

    // Mã hóa mật khẩu lấy từ client
    const hashPassword = bcrypt.hashSync(request.passwords, salt);

    await db.execute(
      `call webdienthoai.Create_User(?,?,?, 0);
    `,
      [request.username, request.email, hashPassword]
    );
    return res.status(201).json({
      status: 201,
      message: "Đăng ký thành công",
    });
  } catch (error) {
    res.status(500).json({
      message: "Đăng ký thất bại",
    });
  }
};

export const login = async (res: Response, request: User) => {
  try {
    let findUser: any = await db.execute(
      `SELECT * FROM users WHERE email = ?`,
      [request.email]
    );
    let [rows] = findUser;
    // Kiểm tra kiểu dữ liệu trả về có phải mẩng?
    if (!Array.isArray(rows)) {
      throw new Error("Dữ liệu trả về không phải là mảng");
    }

    if (rows.length === 0) {
      return res.json({
        status: 400,
        message: "Tài khoản không tồn tại",
      });
    } else {
      let checkPassword = bcrypt.compareSync(
        request.passwords,
        rows[0].passwords
      );

      if (!checkPassword) {
        return res.json({
          status: 402,
          message: "Mật khẩu sai",
        });
      } else {
        let token = jwt.sign(
          { data: { id: rows[0].user_id, email: rows[0].email } },
          process.env.TOKEN_SECET as jwt.Secret,
          { expiresIn: 10000000 }
        );
        return res.status(200).json({
          status: 200,
          message: "Đăng nhập thành công",
          data: rows[0],
          token: token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Đăng nhập thất bại",
    });
  }
};

export const findUserByEmail = async (res: Response, email: string) => {
  try {
    const [user] = await db.execute(`SELECT * FROM users WHERE email = ?`, [
      email,
    ]);
    return user;
  } catch (error) {
    res.json({
      status: 500,
      message: "Không thấy email",
    });
  }
};

export const getAllUsers = async (res: Response) => {
  try {
    const data = await db.execute(`call GetAllUsers()`);
    const [users]: any = data[0];
    return res.json({
      status: 200,
      users,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Không thấy users",
    });
  }
};

export const getOneUser = async (id: number, res: Response) => {
  try {
    const data = await db.execute(`call GetOneUser(?)`, [id]);
    const [user]: any = data[0];
    return res.json({
      status: 200,
      user,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Không thấy user",
    });
  }
};

export const updateStatus = async (
  id: number,
  status: number,
  res: Response
) => {
  try {
    await db.execute(`call UpdateStatus(?,?)`, [status, id]);
    return res.json({
      status: 200,
      message: "Thay đổi trạng thái thành công",
    });
  } catch (error) {
    res.json({
      status: 500,
      message: "Không thể update",
    });
  }
};
