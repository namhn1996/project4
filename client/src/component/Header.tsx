import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./css/Header.css";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { showMessage } from "../help";
import instance from "../api/axios";

interface IActiveCart {
  activeCart: boolean;
}
const Header: React.FC<IActiveCart> = ({ activeCart }) => {
  const user: any = JSON.parse(localStorage.getItem("user")!);
  const [cart, setCart] = useState([]);
  const isLogin: any = localStorage.getItem("token");
  const navigate = useNavigate();
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  const handleClickCart = () => {
    if (!isLogin) {
      showMessage("error", "Bạn phải đăng nhập để vào giỏ hàng");
    }
  };
  return (
    <div className="a-navbar ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid n-navbar">
          <div className="navbar-brand ">
            <Link className="navbar-brand hover-overlay" to="/">
              <i className="fa-solid fa-house"></i> Trang chủ
            </Link>
          </div>
          <div className="navbar-brand ">
            <Link className="navbar-brand hover-overlay" to="/tintuc">
              <i className="fa-solid fa-newspaper"></i> Tin tức
            </Link>
          </div>
          <div className="navbar-brand ">
            <Link className="navbar-brand hover-overlay" to="/tuyendung">
              <i className="fa-solid fa-users"></i> Tuyển dụng
            </Link>
          </div>
          <div className="navbar-brand">
            <Link className="navbar-brand hover-overlay" to="/gioithieu">
              <i className="fa-solid fa-book"></i> Giới thiệu
            </Link>
          </div>
          <div className="navbar-brand">
            <Link className="navbar-brand hover-overlay" to="/baohanh">
              <i className="fa fa-wrench"></i> Bảo hành
            </Link>
          </div>
          <div className="navbar-brand">
            <Link className="navbar-brand hover-overlay" to="/lienhe">
              <i className="fa-solid fa-phone"></i> Liên hệ
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="navbar-collapse d-flex justify-content-around container"
        id="navbarSupportedContent"
      >
        <div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="logo d-flex justify-content-center">
          <img className="logo" src="/img/logo.jpg" alt="" />
        </div>

        <div className=" d-flex justify-content-end">
          <div className="navbar-brand ">
            {!isLogin ? (
              <Link className="btn" to="/login">
                <i className="fa-solid fa-user"></i> Tài khoản
              </Link>
            ) : (
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user"></i> Chào {user.username}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      <NavLink
                        className="nav-link"
                        to={`/profile/${user.user_id}`}
                      >
                        <i className="fa-solid fa-user"></i> Thông tin tài khoản
                      </NavLink>
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      <NavLink
                        className="nav-link"
                        to={`/history/${user.user_id}`}
                      >
                        <i className="fa-solid fa-book-medical"></i> Lịch sử đơn
                        hàng
                      </NavLink>
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={handleLogout}
                    >
                      <i className="fa-solid fa-right-from-bracket" /> Đăng xuất
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="navbar-brand ">
            {!isLogin ? (
              <Link
                className="btn position-relative "
                to={"/"}
                onClick={handleClickCart}
              >
                <i className="fa-solid fa-cart-shopping "></i> Giỏ hàng{" "}
                {!isLogin ? (
                  ""
                ) : (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart?.length}{" "}
                  </span>
                )}
              </Link>
            ) : (
              <Link className="btn position-relative " to="/cart">
                <i className="fa-solid fa-cart-shopping "></i> Giỏ hàng{" "}
                {!isLogin ? (
                  ""
                ) : (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart?.length}{" "}
                  </span>
                )}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
