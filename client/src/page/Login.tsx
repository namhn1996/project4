import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/login.css";
import { showMessage } from "../help";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { loginUser } from "../service/user.service";

const Login = () => {
  const [type, setType] = useState(false);
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState("");
  let navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      const user = {
        email,
        passwords,
      };
      try {
        dispatch(loginUser(user))
          .unwrap()
          .then((res) => {
            if (res.status) {
              if (res.status == 200) {
                // console.log(res.data);
                showMessage("success", res.message);
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("token", res.token);
                navigate("/");
              } else if (res.status == 400) {
                showMessage("error", res.message);
              } else if (res.status == 401) {
                showMessage("error", res.message);
              } else if (res.status == 402) {
                showMessage("error", res.message);
              }
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateForm = () => {
    if (!email) {
      showMessage("error", "Vui lòng nhập địa chỉ email");
      return false;
    }
    if (!passwords) {
      showMessage("error", "Vui lòng nhập mật khẩu");
      return false;
    }
    return true;
  };
  return (
    <div>
      <video
        className="video-bg"
        src="/img/bgvideo/login-bg-video.mp4"
        autoPlay
        loop
        muted
      ></video>
      <form
        className="container text-center p-5 mb-5 border shadow form-signin"
        onSubmit={handleLogin}
      >
        {/* Email input */}
        <h1>Đăng Nhập</h1>
        <div className="form-outline mb-4 bg-light border ">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Địa chỉ Email
          </label>
        </div>
        {/* Password input */}
        <div className="form-outline mb-4 bg-light border ">
          <input
            type={type ? "text" : "password"}
            id="form2Example2"
            className="form-control"
            value={passwords}
            onChange={(e) => setPasswords(e.target.value)}
          />
          <i
            className="fa-solid fa-eye-low-vision"
            onClick={() => setType(!type)}
          ></i>
          <label className="form-label" htmlFor="form2Example2">
            Mật khẩu
          </label>
        </div>
        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form2Example34"
              />

              <label className="form-check-label" htmlFor="form2Example34">
                {" "}
                Ghi nhớ{" "}
              </label>
            </div>
          </div>
          <div className="col">
            {/* Simple link */}
            <a href="#!">Quên mật khẩu?</a>
          </div>
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Đăng nhập
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </p>
          <p>hoặc đăng nhập với:</p>
          <button type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-twitter" />
          </button>
          <button type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-github" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
