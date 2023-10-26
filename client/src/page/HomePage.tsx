import React from "react";
import Slider from "react-slick";
import "./css/HomePage.css";
import Product from "./layout/Product";
import Header from "../component/Header";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
  };
  return (
    <div>
      <Header activeCart={false} />
      <div>
        {/* Banner */}
        <div className="home-banner container">
          <Slider {...settings}>
            <div className="home-banner">
              <img src="/img/banners/banner0.gif" alt="" />
            </div>
            <div className="home-banner">
              <img src="/img/banners/banner1.png" alt="" />
            </div>
            <div className="home-banner">
              <img src="/img/banners/banner2.png" alt="" />
            </div>
            <div className="home-banner">
              <img src="/img/banners/banner3.png" alt="" />
            </div>
            <div className="home-banner">
              <img src="/img/banners/banner4.png" alt="" />
            </div>
            <div className="home-banner">
              <img src="/img/banners/banner5.png" alt="" />
            </div>
            <div className="home-banner">
              <img src="/img/banners/banner6.png" alt="" />
            </div>
            <div className="home-banner">
              <img src="/img/banners/banner7.png" alt="" />
            </div>
            <div className="home-banner">
              <img src="/img/banners/banner8.png" alt="" />
            </div>
            <div className="home-banner">
              <img src="/img/banners/banner9.png" alt="" />
            </div>
          </Slider>
          {/* Banner BackFriday */}
          <img
            className="banner-black"
            src="/img/banners/blackFriday.gif"
            alt=""
          />
        </div>
        {/* Logo Mobile */}
        <div className="flexContain">
          <a href="">
            <img src="/img/company/Apple.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Apple.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Coolpad.png" alt="" />
          </a>
          <a href="">
            <img src="/img/company/HTC.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Huawei.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Itel.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Mobell.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Mobiistar.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Motorola.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Nokia.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Oppo.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Philips.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Realme.png" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Samsung.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Vivo.jpg" alt="" />
          </a>
          <a href="">
            <img src="/img/company/Xiaomi.png" alt="" />
          </a>
        </div>

        <div className="container mt-2 text-center">
          <h2 className="product-list-title">Danh sách sản phẩm</h2>
          <div className="product-list">
            <Product />
          </div>
        </div>
      </div>
      <div className="last-product">
        <ul className="flexContain last-product">
          <li>Giao hàng hỏa tốc trong 1 giờ</li>
          <li>Thanh toán linh hoạt: tiền mặt, visa / master, trả góp</li>
          <li>Trải nghiệm sản phẩm tại nhà</li>
          <li>Lỗi đổi tại nhà trong 1 ngày</li>
          <li>Hỗ trợ suốt thời gian sử dụng.</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
