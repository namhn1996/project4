import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRoutes from "./routes/products.route";
import userRoutes from "./routes/users.route";
import cartRoutes from "./routes/cart.route";
import orderRoutes from "./routes/order.routes";
import adminRoutes from "./routes/admin.routes";
import categoryRoutes from "./routes/category.routes";
import dotenv from "dotenv";

const app = express();
const port = 5555;
dotenv.config();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/products", productRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/carts", cartRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Đang phát tại http://localhost:${port}`);
});
