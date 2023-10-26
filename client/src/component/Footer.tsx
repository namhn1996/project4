import React from "react";
import "./css/Footer.css"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <h5>Phương Nam Mobie</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-muted">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/tintuc" className="nav-link p-0 text-muted">
                  Tin tức
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/tuyendung" className="nav-link p-0 text-muted">
                  Tuyển dụng
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/gioithieu" className="nav-link p-0 text-muted">
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/lienhe" className="nav-link p-0 text-muted">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-4 col-md-3 mb-3">
            <h5>Tổng đài hỗ trợ (Miễn phí gọi)</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="tel://18002097" className="nav-link p-0 text-muted">
                  Gọi mua hàng 1800.2097 (7h30 - 22h00)
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="tel://18002063" className="nav-link p-0 text-muted">
                  Gọi khiếu nại 1800.2063 (8h00 - 21h30)
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="tel://18002064" className="nav-link p-0 text-muted">
                  Gọi bảo hành 1800.2064 (8h00 - 21h00)
                </a>
              </li>
            </ul>
            <h5>Phương thức thanh toán</h5>

            <ul className="list-link ">
              <li>
                <a href="https://cellphones.com.vn/huong-dan-mua-hang-online">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/alepay-logo.png"
                    alt="Alepay"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a href="https://cellphones.com.vn/sforum/huong-dan-toan-bang-zalopay-khi-mua-hang-tren-website-cellphones">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/zalopay-logo.png"
                    alt="Zalopay"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a href="https://cellphones.com.vn/sforum/huong-dan-su-dung-vnpay-qrcode-tren-website-cellphones">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/vnpay-logo.png"
                    alt="Vnpay"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a href="https://cellphones.com.vn/uu-dai-doi-tac/moca">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/moca-logo.png"
                    alt="Moca"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a href="https://cellphones.com.vn/huong-dan-mua-hang-va-thanh-toan-qua-cong-onepay">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/onepay-logo.png"
                    alt="Onepay"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a href="https://cellphones.com.vn/sforum/apple-pay-viet-nam">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/wysiwyg/apple-pay-og.png"
                    alt="Apple Pay"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a href="https://cellphones.com.vn/uu-dai-doi-tac/kredivo">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/kredivo-logo.png"
                    alt="Kredivo"
                    loading="lazy"
                  />
                </a>
              </li>
              <li>
                <a href="https://cellphones.com.vn/huong-dan-mua-hang-online">
                  <img
                    src="https://cdn2.cellphones.com.vn/x35,webp/media/logo/payment/mpos-logo.png"
                    alt="Mpos"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 offset-md-1 mb-3">
            <h5>Kết nối với chúng tôi</h5>
            <div className="social-footer">
              <div className="social-logo">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.youtube.com/"
                >
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-youtube.png"
                    alt="Youtube "
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="social-logo">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.facebook.com/"
                >
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-facebook.png"
                    alt="Fanpage"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="social-logo">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.instagram.com/"
                >
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-instagram.png"
                    alt="Instagram"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="social-logo">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.tiktok.com/"
                >
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-tiktok.png"
                    alt="Tiktok"
                    loading="lazy"
                  />
                </a>
              </div>
              <div className="social-logo">
                <a target="_blank" rel="nofollow" href="https://oa.zalo.me/">
                  <img
                    src="https://cdn2.cellphones.com.vn/44x,webp/media/logo/social/cellphones-zalo.png"
                    alt="Zalo"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>

            <form>
              <h5>Đăng ký nhận các ưu đãi</h5>
              <p>
                Chúng tôi sẽ gửi các thông báo các ưu đãi cho quý khách hàng
                tháng qua email.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Vui lòng nhập Email
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Gửi
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center p-2">
          <p>© 2023 Copyright by PhuongNam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
