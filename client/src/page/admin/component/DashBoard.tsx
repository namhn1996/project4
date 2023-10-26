import React, { useState, useEffect } from "react";
import instance from "../../../api/axios";

const DashBoard = () => {
  const [count, setCount]: any = useState({});
  const fetchCount = async () => {
    try {
      const res = await instance.get("admin");
      setCount(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCount();
  }, []);
  return (
    <div className="py-3 ">
      <h4 className="text-left h2 mb-4 text-success border-bottom border-success">
        Trang Chủ
      </h4>
      <div className="row container-fluid">
        <div className="col-4">
          <ul className="list-unstyled d-flex gap-5 flex-wrap justify-content-evenly">
            <li className="border border-secondary  px-3 py-2 mb-3 mr-3 text-center bg-light rounded-4 ">
              <div className="row">
                {" "}
                <div className="col-3 text-center mt-5">
                  <i className="fas fa-truck fa-7x"></i>
                </div>
                <div className="col-9 mt-3">
                  {" "}
                  <span className="h4 text-danger font-weight-bold mb-0 mr-2 text-center fs-1 ">
                    Chưa Xác Nhận
                  </span>
                  <h4 className="mt-2 fs-1">{count.choXacNhan}</h4>
                  <h5 className="fs-5">Đơn Hàng</h5>
                  <p className="lead">Số Đơn Hàng Chưa Xác Nhận</p>
                </div>
              </div>
            </li>{" "}
            <li className="border border-secondary px-3 py-2 mb-3 mr-3 text-center bg-light rounded-4 ">
              <div className="row">
                {" "}
                <div className="col-4 text-center mt-5">
                  <i className="fas fa-box fa-9x"></i>
                </div>
                <div className="col-8 mt-3">
                  {" "}
                  <span className="h4 text-danger font-weight-bold mb-0 mr-2 text-center fs-1 ">
                    Đang Quản Lý
                  </span>
                  <h4 className="mt-2 fs-1">{count.productQuanLy}</h4>
                  <h5 className="fs-5">Sản Phẩm</h5>
                  <p className="lead">Số Sản Phẩm Đang Quản Lý</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          {" "}
          <ul className="list-unstyled d-flex gap-5 flex-wrap justify-content-evenly container-fluid">
            <li className="border border-secondary  px-3 py-2 mb-3 mr-3 text-center bg-light rounded-4 ">
              <div className="row">
                {" "}
                <div className="col-3 text-center mt-5">
                  <i className="fas fa-shipping-fast fa-7x"></i>
                </div>
                <div className="col-9 mt-3">
                  {" "}
                  <span className="h4 text-danger font-weight-bold mb-0 mr-2 text-center fs-1 ">
                    Shipping
                  </span>
                  <h4 className="mt-2 fs-1">{count.dangShip}</h4>
                  <h5 className="fs-5">Đơn Hàng</h5>
                  <p className="lead">Số Đơn Hàng Đang Vận Chuyển</p>
                </div>
              </div>
            </li>{" "}
            <li className="border border-secondary px-3 py-2 mb-3 mr-3 text-center bg-light rounded-4 ">
              <div className="row">
                {" "}
                <div className="col-4 text-center mt-5">
                  <i className="fas fa-box-open fa-9x"></i>
                </div>
                <div className="col-8 mt-3">
                  {" "}
                  <span className="h4 text-danger font-weight-bold mb-0 mr-2 text-center fs-1 ">
                    Sắp Hết
                  </span>
                  <h4 className="mt-2 fs-1">{count.productSapHet}</h4>
                  <h5 className="fs-5">Sản Phẩm</h5>
                  <p className="lead">Còn Dưới 10 Sản Phẩm</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4">
          {" "}
          <ul className="list-unstyled d-flex gap-5 flex-wrap justify-content-evenly container-fluid">
            <li className="border border-secondary  px-3 py-2 mb-3 mr-3 text-center bg-light rounded-4 ">
              <div className="row">
                {" "}
                <div className="col-3 text-center mt-5">
                  <i className="fas fa-receipt fa-7x"></i>
                </div>
                <div className="col-9 mt-3">
                  {" "}
                  <span className="h4 text-danger font-weight-bold mb-0 mr-2 text-center fs-1 ">
                    Đã Hoàn Thành
                  </span>
                  <h4 className="mt-2 fs-1">{count.hoanThanh}</h4>
                  <h5 className="fs-5">Đơn Hàng</h5>
                  <p className="lead">Số Đơn Hàng Đã Hoàn Thành</p>
                </div>
              </div>
            </li>{" "}
            <li className="border border-secondary px-3 py-2 mb-3 mr-3 text-center bg-light rounded-4 ">
              <div className="row">
                {" "}
                <div className="col-4 text-center mt-5">
                  <i className="fas fa-user-circle fa-9x"></i>
                </div>
                <div className="col-8 mt-3">
                  {" "}
                  <span className="h4 text-danger font-weight-bold mb-0 mr-2 text-center fs-1 ">
                    Khách Hàng
                  </span>
                  <h4 className="mt-2 fs-1">{count.khachHang}</h4>
                  <h5 className="fs-5">Khách Hàng</h5>
                  <p className="lead">Số Khách Hàng Đang Quản Lý</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
