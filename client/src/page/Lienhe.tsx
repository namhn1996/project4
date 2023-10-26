import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import "./css/Lienhe.css";

function Lienhe() {
  return (
    <div>
      <Header activeCart={false} />
      <div className="body-lienhe container">
        <div className="lienhe-header">Liên hệ</div>
        <div className="lienhe-info">
          <div className="info-left">
            <p></p>
            <h2 style={{ color: "gray" }}> CÔNG TY CỔ PHẦN KHÔNG CÓ TÊN </h2>
            <br />
            <b>Địa chỉ:</b> Toà Nhà Sông Đà, Phạm Hùng, Mỹ Đình, Từ Liêm, Hà
            Nội, Việt Nam
            <br />
            <br />
            <b>Telephone:</b> 0977.777.777
            <br />
            <br />
            <b>Hotline:</b> 0988.888.888 - CSKH: 028 8888 888
            <br />
            <br />
            <b>Website:</b> <a href="https://github.com/namhn1996">Github</a>{" "}
            <br />
            <br />
            <b>E-mail:</b> namhn1996@gmail.com
            <br />
            <br />
            <b>Mã số thuế:</b> 01 02 03 04 05
            <br />
            <br />
            <b>Tài khoản ngân hàng :</b>
            <br />
            <br />
            <b>Số TK:</b> 19034 2398 15017 <br />
            <br />
            <b>Tại Ngân hàng:</b> Techcombank
            <br />
            <br />
            <br />
            <br />
            <p />
          </div>
          <div className="info-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.36948846902!2d105.77883417503644!3d21.017896888152077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455c862f3aee1%3A0x53602e8d02ec1d24!2zVG_DoCBOaMOgIFPDtG5nIMSQw6A!5e0!3m2!1svi!2s!4v1692209887726!5m2!1svi!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <br />
          </div>
        </div>
        <div className="lienhe-info">
          <div className="guithongtin">
            <h6 className="text-center mb-7">
              {" "}
              <b>
                Quý khách có thể gửi liên hệ tới chúng tôi bằng cách hoàn tất
                biểu mẫu dưới đây. Chúng tôi sẽ trả lời thư của quý khách, xin
                vui lòng khai báo đầy đủ. Hân hạnh phục vụ và chân thành cảm ơn
                sự quan tâm, đóng góp ý kiến đến Smartphone Store.
              </b>
            </h6>
            <p style={{ fontSize: 22, color: "gray" }}>
              Gửi thông tin liên lạc cho chúng tôi:{" "}
            </p>
            <hr />
            <form>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example1"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form1Example1">
                  Họ và Tên
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input type="tel" id="form1Example2" className="form-control" />
                <label className="form-label" htmlFor="form1Example2">
                  Điện thoại liên hệ
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example2"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form1Example2">
                  Địa chỉ Email
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example2"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form1Example2">
                  Tiêu đề
                </label>
              </div>
              <div className="form-outline mb-4">
                <textarea id="form1Example2" className="form-control" />
                <label className="form-label" htmlFor="form1Example2">
                  Nội dung
                </label>
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block">
                Gửi thông tin liên hệ
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lienhe;
