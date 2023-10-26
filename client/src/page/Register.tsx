import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showMessage } from "../help";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { createUser } from "../service/user.service";

const Register = () => {
  const [type, setType] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const validateForm = () => {
    // Kiểm tra các điều kiện validation ở đây
    if (username === "") {
      showMessage("error", "Vui lòng nhập Họ và Tên");
      return false;
    }
    if (email === "") {
      showMessage("error", "Vui lòng nhập Email");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      showMessage("error", "Vui lòng nhập địa chỉ email hợp lệ");
      return false;
    }
    if (passwords === "") {
      showMessage("error", "Vui lòng nhập Mật khẩu");
      return false;
    }
    if (confirmPassword === "") {
      showMessage("error", "Vui lòng nhập Xác nhận mật khẩu");
      return false;
    }
    if (passwords !== confirmPassword) {
      showMessage("error", "Mật khẩu và Xác nhận mật khẩu không khớp");
      return false;
    }
    return true;
  };
  const handleRegester = async (e: any) => {
    e.preventDefault();
    const user = {
      username,
      email,
      passwords,
    };
    try {
      dispatch(createUser(user))
        .unwrap()
        .then((res) => {
          if (res.status) {
            if (res.status == 201) {
              showMessage("success", res.message);
            }
            navigate("/login");
          }

          if (res.response.data.status === 400) {
            showMessage("error", res.response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error: any) {
      showMessage("error", error.message);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      handleRegester(e);
    }
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
        onSubmit={handleSubmit}
      >
        {/* Email input */}
        <h1>Đăng Ký</h1>
        <div className="form-outline mb-4 bg-light border ">
          <input
            type="text"
            id="form2Example2"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Họ và Tên
          </label>
        </div>
        <div className="form-outline mb-4 bg-light border ">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email
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
        <div className="form-outline mb-4 bg-light border ">
          <input
            type={type ? "text" : "password"}
            id="form2Example2"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <i
            className="fa-solid fa-eye-low-vision"
            onClick={() => setType(!type)}
          ></i>
          <label className="form-label" htmlFor="form2Example2">
            Xác nhận mật khẩu
          </label>
        </div>
        {/* 2 column grid layout for inline styling */}

        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Đăng ký
        </button>
        {/* Register buttons */}
        <div className="text-center">
          <p>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
