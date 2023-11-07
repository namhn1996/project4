import mysql2, { Pool, PoolOptions } from "mysql2";

// Tạo các config để kết nối
const databaseConfig: PoolOptions = {
  database: "webdienthoai",
  port: 3306,
  user: "root",
  password: "123qwe",
  host: "localhost",
};

// Khởi tạo kết nối
const db: Pool = mysql2.createPool(databaseConfig);

// Đẩy database ra bên ngoài để sử dụng
export default db.promise();
