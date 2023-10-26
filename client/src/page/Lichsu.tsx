import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { useParams } from "react-router-dom";
import instance from "../api/axios";
import { vnd } from "../help";
import Upload_Comp from "../component/Upload_Comp";

const Lichsu = () => {
  const { id } = useParams();
  const [user, setUser] = useState({}) as any;
  const [orders, setOrders] = useState([]);

  const fetchUser = async () => {
    try {
      let res = await instance.get(`users/${id}`);
      setUser(res.data.user[0]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Header activeCart />
      <div className="container-fluid mt-5 mb-5">
        <div className="row ">
          <div className="col-2 ">
            <div className="card " style={{ width: "17rem" }}>
              <img
                className="card-img-top"
                src={user.avatar}
                alt="Card image cap"
              />
              <Upload_Comp />
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <p className="card-text"></p>
                <p className="card-text">
                  <b>
                    {" "}
                    Tổng chi tiêu :{" "}
                    {/* {vnd(
                      orders.reduce(
                        (total, order) =>
                          total +
                          order.price * (1 - order.sale) * order.quantity,
                        0
                      )
                    )}{" "} */}
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-10 bg-light mb-5">
            <h1>Lịch sử mua hàng</h1>
            <table className="table-hover mb-5">
              <thead className="bg-light text-center">
                <tr className="table-active">
                  <th>STT</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {/* {orders.map((order, index) => (
                  <tr key={order.order_id}>
                    <td className="text-center">{index + 1}</td>
                    <td>
                      <img
                        style={{ width: "50px", height: "50px" }}
                        src={order.img}
                        alt="AVT"
                      />{" "}
                      {order.product_name}
                    </td>
                    <td className="text-center">x {order.quantity}</td>
                    <td className="text-center">
                      {vnd(order.price * (1 - order.sale))}
                    </td>
                    <td className="text-center">
                      {vnd(order.price * (1 - order.sale) * order.quantity)}
                    </td>
                    <td className="text-center">{order.create_at}</td>
                    <td>{order.status}</td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lichsu;
