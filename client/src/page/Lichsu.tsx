import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
import instance from "../api/axios";
import { showMessage, vnd } from "../help";
import { Button, Modal } from "antd";
import axios from "axios";

const Lichsu = () => {
  const { id } = useParams();
  const [user, setUser] = useState({}) as any;
  const [avatarUser, setAvatarUser] = useState("");
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchUser = async () => {
    try {
      let res = await instance.get(`users/${id}`);
      setUser(res.data.user[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOrders = async () => {
    try {
      let res = await instance.get(`orders/history/${id}`);
      setOrders(res.data.data.orders);
      setProducts(res.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
    fetchOrders();
  }, []);

  // thêm ảnh vào clouddinary
  const cloud_name = "dr9fccacv";
  const preset_key = "upload_img_project4";
  const folder = "imgProject4";
  const handleChange = (e: any) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", preset_key);
    formData.append("folder", folder);
    // Gọi API
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        setUser({ ...user, avatar: res.data.url });
        setAvatarUser(res.data.url);
      })
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    if (avatarUser) {
      instance
        .put(`users/avatar/${id}`, {avatarUser})
        .then((res) => {
          showMessage("success", res.data.message);
        })
        .catch((err) => console.log(err));
    }
  }, [avatarUser]);

  return (
    <>
      <Header activeCart />
      {user && (
        <div className="container-fluid mt-5 mb-5">
          <div className="row">
            <div className="col-4 mb-5">
              <div
                className="card mb-5 container"
                style={{
                  borderTopRightRadius: "45%",
                  borderTopLeftRadius: "45%",
                }}>
                <img
                  style={{
                    borderTopRightRadius: "50%",
                    borderTopLeftRadius: "50%",
                    width: "600px",
                    height: "500px",
                  }}
                  className="card-img-top"
                  src={user && user?.avatar}
                  alt="Card image cap"
                />
                <label htmlFor="lol" className="btn btn-primary" > Thay ảnh đại diện</label>
                <input type="file" id="lol" hidden  onChange={(e) => handleChange(e)} />
                <div className="card-body">
                  <h5 className="">Chào {user && user?.username}</h5>
                  <h5 className="">Email: {user && user?.email}</h5>
                  <p className="">
                    <b>Đơn hàng đã mua : {orders.length} </b>
                    <br />
                    <b>
                      Tổng chi tiêu :{" "}
                      {vnd(
                        products.reduce(
                          (total: number, products: any) =>
                            total +
                            +products.product_price *
                              +(1 - +products.product_sale) *
                              +products.product_quantity,
                          0
                        )
                      )}{" "}
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-8 mb-5">
              <h1>Lịch sử mua hàng</h1>
              <table className="table table-hover ">
                <thead className="text-center">
                  <tr className="">
                    <th>Mã đơn hàng</th>
                    <th>Sản phẩm</th>
                    <th>Thông tin khách hàng</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="">
                  {orders.map((order: any) => (
                    <tr key={order.order_id}>
                      <td>{order.order_id}</td>
                      <td>
                        {products
                          .filter(
                            (product: any) =>
                              product.order_id === order.order_id
                          )
                          .map((product: any) => (
                            <tr className="">
                              <td
                                style={{ width: "200px" }}
                                key={product.order_product_id}>
                                {product.product_name}
                              </td>
                              <td style={{ paddingBottom: "10px" }}>
                                <img
                                  src={product.product_img}
                                  alt="Ảnh sản phẩm"
                                  style={{ width: "60px", height: "50px" }}
                                />{" "}
                                x {product.product_quantity}
                              </td>
                            </tr>
                          ))}
                      </td>
                      <td className="fs-7">
                        <b>Tên:</b> {order.name}
                        <br />
                        <b>Địa chỉ nhận:</b> {order.address}, {order.ward},{" "}
                        {order.district}, {order.province}
                        <br /> <b>SDT:</b> {order.phone}
                        <br />
                        <b>Email:</b> {order.email}
                      </td>
                      <td>{order.create_at}</td>
                      <td>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Lichsu;
