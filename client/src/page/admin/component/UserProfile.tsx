import React, { useEffect, useState } from "react";
import instance from "../../../api/axios";

const UserProfile = () => {
  const [users, setUsers]: any = useState([]);
  const user = JSON.parse(localStorage.getItem("user") as any) || {};
  const fectchUsers = async () => {
    try {
      const res = await instance.get("users");
      setUsers(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fectchUsers();
  }, []);
  const handleLocked = async (id: any) => {
    try {
      console.log(id);
      await instance
        .put(`users/${id}`, { status: 1 })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      fectchUsers();
      if (Object.keys(user).length > 0) {
        const updateUser = {
          ...user,
          status: 1,
        };

        localStorage.setItem("user", JSON.stringify(updateUser));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpen = async (id: any) => {
    try {
      console.log(id);
      await instance.put(`users/${id}`, { status: 0 });
      fectchUsers();
      if (user) {
        const updateUser = {
          ...user,
          status: 0,
        };
        localStorage.setItem("user", JSON.stringify(updateUser));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="py-3">
      <div className="row">
        {" "}
        <h4 className="h2 text-success border-bottom border-success">
          Tài Khoản Khách Hàng
        </h4>
      </div>
      <div className="container-fluid row mt-5 table-responsive">
        <table className="table-hover text-center">
          <thead className="bg-light">
            <tr className="table-active">
              <th scope="col">ID Khách Hàng</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Số Điện Thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Mật Khẩu</th>
              <th scope="col">Địa Chỉ</th>
              <th scope="col">Trạng Thái</th>
              <th scope="col">Thao Tác</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {users &&
              users.length > 0 &&
              users.map((user: any, index: any) => (
                <tr key={index}>
                  <td>{user.user_id}</td>
                  <td> {user.username}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>Bí Mật</td>
                  <td>
                    {user.address}, {user.ward},{user.district}, {user.province}
                  </td>
                  <td>
                    <b>{user.status === 0 ? "hoạt động" : "đang khóa"}</b>
                  </td>
                  <td>
                    <button
                      className={user.status == 0 ? "btn" : "btn btn-danger"}
                      onClick={() => handleLocked(user.user_id)}>
                      Khóa
                    </button>
                    <button
                      className={user.status == 1 ? "btn" : "btn btn-success"}
                      onClick={() => handleOpen(user.user_id)}>
                      Mở
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
