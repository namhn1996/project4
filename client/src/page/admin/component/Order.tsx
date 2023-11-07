import React, { useEffect, useState } from "react";
import instance from "../../../api/axios";
import { deleteCart, showMessage, vnd } from "../../../help";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]) as any;
  const [statusOrder, setStatusOrder] = useState("");

  const fetchOrders = async () => {
    try {
      const res = await instance.get("orders");
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, [order]);

  const handleView = async (id: any) => {
    try {
      const res = await instance.get(`orders/${id}`);
      setOrder(res.data.order);
    } catch (error) {
      console.log(error);
    }
  };
  const handleComfirm = async (id: any, value: any) => {
    console.log(value);
    console.log(id);

    try {
      await instance.put(`orders/${id}`, { status: value });
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (id: any, e: any) => {
    deleteCart().then(async (result: any) => {
      if (e.status === "Đang vận chuyển" || e.status === "Hoàn thành") {
        showMessage("error", "Không thể xóa đơn hàng đã xác nhận !! ");
      } else {
        try {
          await instance.delete(`orders/${id}`);
          fetchOrders();
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <div className="col py-3">
        <div className="row">
          {" "}
          <h4 className="h2 text-success border-bottom border-success">
            Quản Lý Đơn Hàng
          </h4>
        </div>
        <div className="container row mt-5 ">
          <table className="table-hover ">
            <thead className="bg-light text-center">
              <tr className="table-active">
                <th scope="col">Mã Đơn</th>
                <th scope="col">Chi Tiết Đơn Hàng</th>
                <th scope="col">Ngày Mua</th>
                <th scope="col">Tài khoản</th>
                <th scope="col">Thông Tin Người Nhận</th>
                <th scope="col">Trạng Thái</th>
                <th scope="col">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {orders &&
                orders.map((e: any) => (
                  <tr key={e.order_id}>
                    <td className="text-center">{e.order_id}</td>
                    <td className="text-center">
                      {" "}
                      <button
                        className="btn btn-hover"
                        data-mdb-toggle="modal"
                        data-mdb-target="#staticBackdrop"
                        onClick={() => {
                          handleView(e.order_id);
                        }}>
                        <i className="fa-solid fa-eye fa-2x text-danger"></i>
                      </button>
                    </td>
                    <td className="text-center">
                      <b>{e.create_at}</b>
                    </td>
                    <td></td>
                    <td>
                      {" "}
                      <div className="fs-6 mt-3 py-3 ps-5 ">
                        <p>
                          {" "}
                          <b className="text-danger text-capitalize text-left">
                            Họ tên :
                          </b>{" "}
                          {e.name}
                        </p>
                        <p>
                          {" "}
                          <b className="text-danger text-capitalize text-left">
                            Địa chỉ :
                          </b>
                          {e.address}, {e.ward},{e.district}, {e.province}
                        </p>
                        <p>
                          {" "}
                          <b className="text-danger text-capitalize text-left">
                            SDT :
                          </b>{" "}
                          {e.phone}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="text-center ms-5 me-5">
                        <select
                          className="form-select text-center mt-1 "
                          value={e.status}
                          onChange={(a: any) => {
                            if (
                              e.status === "Chờ xác nhận" &&
                              a.target.value === "Đang vận chuyển"
                            ) {
                              handleComfirm(e.order_id, a.target.value);
                            } else if (
                              e.status === "Đang vận chuyển" &&
                              a.target.value === "Hoàn thành"
                            ) {
                              handleComfirm(e.order_id, a.target.value);
                            } else {
                              showMessage(
                                "error",
                                `Đơn hàng ${e.status} không thể thay đổi`
                              );
                            }
                          }}>
                          <option value="Chờ xác nhận">Chờ xác nhận</option>
                          <option value="Đang vận chuyển">
                            Đang vận chuyển
                          </option>
                          <option value="Hoàn thành">Hoàn thành</option>
                        </select>
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(e.order_id, e)}>
                        Hùy đơn hàng
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-mdb-backdrop="static"
          data-mdb-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Thông tin đơn hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <h5 className="fw-bold mb-4">
                  Mã đơn hàng :{order && order[0] && order[0].order_id}
                </h5>
                {order &&
                  order.map((e: any, i: any) => (
                    <div className="row mb-3 mt-3" key={i}>
                      <div className="col-2">
                        <img style={{ width: "60px" }} src={e.img} alt="" />
                      </div>
                      <div className="col-4">{e.product_name}</div>
                      <div className="col-2">x {e.product_quantity}</div>
                      <div className="col-4">
                        {vnd(
                          e.product_price *
                            (1 - e.product_sale) *
                            e.product_quantity
                        )}
                      </div>
                    </div>
                  ))}
                <hr />
                <div className="row">
                  <div className="col-5"></div>
                  <div className="col-4">
                    <b>Tổng sản phẩm</b>
                  </div>
                  <div className="col-3">
                    <b>Thành tiền</b>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-5"></div>
                  <div className="col-3">
                    <b>
                      {order.reduce(
                        (total: any, e: any) => total + e.product_quantity,
                        0
                      )}
                    </b>
                  </div>
                  <div className="col-4">
                    <b>
                      {vnd(
                        order.reduce(
                          (total: any, e: any) =>
                            total +
                            e.product_price *
                              (1 - e.product_sale) *
                              e.product_quantity,
                          0
                        )
                      )}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Order;
