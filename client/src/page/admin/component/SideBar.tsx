import React from "react";
import Products from "./Products";
import Order from "./Order";
import UserProfile from "./UserProfile";
import DashBoard from "./DashBoard";
import { useNavigate } from "react-router-dom";
import { showMessage } from "../../../help";

const SideBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/admin/login");
    showMessage("success", "Đăng xuất thành công");
  };
  return (
    <div className="row w-100 ">
      <div className="col-2 bg-light">
        {/* Tab navs */}
        <div
          className="nav flex-column nav-tabs text-center container"
          id="v-tabs-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <h3>ADMIN PAGE</h3>
          <a
            className="nav-link active"
            id="v-tabs-home-tab"
            data-mdb-toggle="tab"
            href="#v-tabs-home"
            role="tab"
            aria-controls="v-tabs-home"
            aria-selected="true"
          >
            <i className="fas fa-home"></i> Home
          </a>
          <a
            className="nav-link mb"
            id="v-tabs-profile-tab"
            data-mdb-toggle="tab"
            href="#v-tabs-profile"
            role="tab"
            aria-controls="v-tabs-profile"
            aria-selected="false"
          >
            <i className="fas fa-user"></i> Profile
          </a>
          <a
            className="nav-link"
            id="v-tabs-messages-tab"
            data-mdb-toggle="tab"
            href="#v-tabs-messages"
            role="tab"
            aria-controls="v-tabs-messages"
            aria-selected="false"
          >
            <i className="fas fa-shopping-cart"></i> Order
          </a>
          <a
            className="nav-link mb-5"
            id="v-tabs-products-tab"
            data-mdb-toggle="tab"
            href="#v-tabs-products"
            role="tab"
            aria-controls="v-tabs-products"
            aria-selected="false"
          >
            <i className="fas fa-product-hunt"></i> products
          </a>
          <button
            className="nav-link mt-5"
            aria-selected="false"
            role="button"
            onClick={handleLogout}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
        {/* Tab navs */}
      </div>
      <div className="col-10">
        {/* Tab content */}
        <div className="tab-content" id="v-tabs-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-tabs-home"
            role="tabpanel"
            aria-labelledby="v-tabs-home-tab"
          >
            <DashBoard />
          </div>
          <div
            className="tab-pane fade"
            id="v-tabs-profile"
            role="tabpanel"
            aria-labelledby="v-tabs-profile-tab"
          >
            <UserProfile />
          </div>
          <div
            className="tab-pane fade"
            id="v-tabs-messages"
            role="tabpanel"
            aria-labelledby="v-tabs-messages-tab"
          >
            <Order />
          </div>
          <div
            className="tab-pane fade"
            id="v-tabs-products"
            role="tabpanel"
            aria-labelledby="v-tabs-products-tab"
          >
            <Products />
          </div>
        </div>

        {/* Tab content */}
      </div>
    </div>
  );
};

export default SideBar;
