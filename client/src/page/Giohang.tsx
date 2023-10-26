import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { deleteCart, kaikee, showMessage, vnd } from "../help";
import { User } from "../entities/cart.entities";
import instance from "../api/axios";
import moment from "moment";

const Giohang = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [provinces, setProvinces] = useState([]); // Tỉnh/Thành Phố
  let [activeProvince, setActiveProvince] = useState("");
  let [districts, setDistricts] = useState([]); // Quận/Huyện
  let [activeDistrict, setActiveDistrict] = useState("");
  let [wards, setWards] = useState([]); // Phường/Xã
  let [activeWard, setActiveWard] = useState("");
  const [activeCart, setActiveCart] = useState(false);
  const [cart, setCart] = useState([]);
  const user: User = JSON.parse(localStorage.getItem("user")!);
  let VIETNAM_BASE_API = "https://provinces.open-api.vn/api/?depth=3";
  const fetchProvinces = async () => {
    try {
      let res = await fetch(VIETNAM_BASE_API);
      let data = await res.json();
      setProvinces((): any => [...data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProvinces();
  }, []);

  useEffect(() => {
    let clickProvince: any = provinces.find(
      (e: any) => e.name == activeProvince
    );
    if (clickProvince) {
      setDistricts((): any => [...clickProvince.districts]);
      setActiveWard("");
    }
  }, [activeProvince]);

  useEffect(() => {
    let clickDistrict: any = districts.find(
      (e: any) => e.name == activeDistrict
    );
    if (clickDistrict) {
      setWards((): any => [...clickDistrict.wards]);
    }
  }, [activeDistrict]);

  const handleActiveProvince = (e: any) => {
    if (!e.target.value) {
      resetAllProvinces();
    } else {
      setActiveProvince(e.target.value);
    }
  };

  const handleActiveDistrict = (e: any) => {
    if (!e.target.value) {
      resetAllProvinces();
    } else {
      setActiveDistrict(e.target.value);
    }
  };

  const handleActiveWard = (e: any) => {
    if (!e.target.value) {
      resetAllProvinces();
    } else {
      setActiveWard(e.target.value);
    }
  };

  function resetAllProvinces() {
    setActiveProvince("");
    setActiveDistrict("");
    setDistricts([]);
    setActiveWard("");
    setWards([]);
  }
  const fetchCart = async () => {
    try {
      let res = await instance.get(`carts/${user.user_id}`);
      setCart(res.data.cart);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCart();
  }, [activeCart]);
  console.log(cart);

  const handleGiam = (
    quantity: number,
    product_id: number,
    user_id: number
  ) => {
    try {
      if (quantity > 1) {
        instance
          .put(`carts/giam/${user_id}`, { quantity, user_id, product_id })
          .then((res) => {
            fetchCart();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        showMessage("error", "Số lượng phải có ít nhất 1 sản phẩm");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleTang = (
    quantity: number,
    product_id: number,
    user_id: number,
    count: number
  ) => {
    try {
      if (quantity < count) {
        instance
          .put(`carts/tang/${user_id}`, { quantity, user_id, product_id })
          .then((res) => {
            fetchCart();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        showMessage("error", "Số lượng sản phẩm trong kho không đủ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (cart_id: number, user_id: number) => {
    deleteCart()
      .then((result: any) => {
        if (result.isConfirmed) {
          try {
            instance
              .delete(`carts/${user_id}`, {
                data: { cart_id },
              })
              .then((res) => {
                fetchCart();
                setActiveCart(!activeCart);
              })
              .catch((error) => {
                console.log(error);
              });
          } catch (error) {
            console.log(error);
          }
        } else if (result.isDenied) {
          console.log("hủy");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [err, setErr] = useState({} as any);
  const handleKaike = (e: any) => {
    e.preventDefault();
    if (!name) {
      setErr({ ...err, name: "Bạn chưa nhập tên" });
    } else if (!email) {
      setErr({ ...err, email: "Bạn chưa nhập email" });
    } else if (!phone) {
      setErr({ ...err, phone: "Bạn chưa nhập số điện thoại" });
    } else if (!address) {
      setErr({ ...err, address: "Bạn chưa nhập địa chỉ" });
    } else if (!activeProvince || !activeDistrict || !activeWard) {
      setErr({ ...err, addressActive: "Bạn chưa chọn Tỉnh/Thành Phố" });
    } else {
      if (cart && cart.length > 0) {
        const data = cart.map((item: any) => ({
          user_id: user.user_id,
          status: "Chờ xác nhận",
          create_at: moment().format("HH:mm:ss DD/MM/YYYY"),
          name,
          email,
          phone,
          province: activeProvince,
          district: activeDistrict,
          ward: activeWard,
          address,
          product_id: item.product_id,
          product_name: item.name,
          product_img: item.img,
          product_quantity: item.quantity,
          product_price: item.price,
          product_sale: item.sale,
        }));
        kaikee().then((result: any) => {
          if (result && result.isConfirmed) {
            instance
              .post(`orders`, data)
              .then((res) => {
                fetchCart();
                setActiveCart(!activeCart);
                setName("");
                setEmail("");
                setPhone("");
                setAddress("");
                setActiveProvince("");
                setActiveDistrict("");
                setActiveWard("");
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      }
    }
  };
  return (
    <div>
      <Header activeCart={activeCart} />
      <table className="table container mt-5">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Thành tiền</th>
            <th scope="col">Acction</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {cart && cart.length > 0 ? (
            cart.map((item: any, index: number) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <Link to={`/detail/${item.product_id}`}>
                    <img
                      style={{ width: 100, height: 70 }}
                      src={item.img}
                      alt=""
                    />
                    {item.name}
                  </Link>
                </td>
                <td>
                  <b>{vnd(item.price * (1 - item.sale))}</b>
                </td>
                <td>
                  <div className="quantity-area d-flex mt-4">
                    <input
                      type="button"
                      value="-"
                      onClick={() => {
                        handleGiam(
                          item.quantity,
                          item.product_id,
                          item.user_id
                        );
                      }}
                    />
                    <input type="text" disabled value={item.quantity} />
                    <input
                      type="button"
                      value="+"
                      onClick={() => {
                        handleTang(
                          item.quantity,
                          item.product_id,
                          item.user_id,
                          item.count
                        );
                      }}
                    />
                  </div>
                </td>
                <td>
                  {(
                    item.price *
                    (1 - item.sale) *
                    item.quantity
                  ).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.cart_id, item.user_id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h3>Không có sản phẩm nào trong giỏ hàng</h3>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <b>Tổng tiền</b>
            </td>
            <td>
              {cart && cart.length > 0
                ? cart
                    .reduce(
                      (a: any, b: any) =>
                        a + b.price * (1 - b.sale) * b.quantity,
                      0
                    )
                    .toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })
                : ""}
            </td>
            <td>
              <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => setErr({})}
              >
                Thanh toán
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
      <Footer />
      <>
        {/* Modal */}
        <div
          className="modal fade left-side"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Thông tin khách hàng
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {" "}
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Họ và tên"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {err.name ? (
                      <div className="text-danger">{err.name}</div>
                    ) : (
                      " "
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {err.email ? (
                      <div className="text-danger">{err.email}</div>
                    ) : (
                      " "
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {err.phone ? (
                      <div className="text-danger">{err.phone}</div>
                    ) : (
                      " "
                    )}
                  </div>
                  <div className="address-container mb-3">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={handleActiveProvince}
                      value={activeProvince}
                    >
                      <option selected value="">
                        Tỉnh/Thành
                      </option>
                      {provinces.length > 0 &&
                        provinces.map((e: any, i) => (
                          <option value={e.name}>{e.name}</option>
                        ))}
                    </select>

                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={handleActiveDistrict}
                      value={activeDistrict}
                    >
                      <option selected value="">
                        Quận/Huyện
                      </option>
                      {districts.length > 0 &&
                        districts.map((e: any, i) => (
                          <option value={e.name}>{e.name}</option>
                        ))}
                    </select>

                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={handleActiveWard}
                      value={activeWard}
                    >
                      <option selected value="">
                        Phường/Xã
                      </option>
                      {wards.length > 0 &&
                        wards.map((e: any, i) => (
                          <option value={e.name}>{e.name}</option>
                        ))}
                    </select>
                    {err.addressActive ? (
                      <div className="text-danger">{err.addressActive}</div>
                    ) : (
                      " "
                    )}
                  </div>{" "}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Vui lòng nhập chi tiết số nhà, tên đường, VD: Số 69, Đường ..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    {err.address ? (
                      <div className="text-danger">{err.address}</div>
                    ) : (
                      " "
                    )}
                  </div>
                  <div className="form-footer mb-3 modal-footer">
                    <Link className="back btn btn-primary" to="/cart">
                      Giỏ hàng
                    </Link>
                    <button
                      className="step btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={handleKaike}
                    >
                      Xác nhận thanh toán
                    </button>
                    <button
                      className="canel btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Canel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Giohang;
