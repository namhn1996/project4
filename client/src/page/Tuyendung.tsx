import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

const Tuyendung = () => {
  return (
    <div>
      <Header activeCart={false} />
      <div className="body-tuyendung container">
        <div className="tuyendung-header">Tuyển dụng</div>
        <div className="tuyendung-info">
          <h1 className="tieude">NHÂN VIÊN BÁN HÀNG</h1>
          <br />
          <b>1.MÔ TẢ</b>
          <ul className="tuyendung-noidung">
            <li>Vui vẻ, lịch sự chào đón khi khách vào cửa hàng.</li>
            <li>
              Tìm hiểu nhu cầu, tư vấn các thông tin về: Sản phẩm, dịch vụ,
              chương trình khuyến mãi, hậu mãi cho khách hàng.
            </li>
            <li>
              Sắp xếp sản phẩm gọn gàng, hợp lý, vệ sinh cửa hàng khi hết ca làm
              việc.
            </li>
            <li>
              Nắm bắt, cập nhật thông tin, tính năng của sản phẩm mới: form sản
              phẩm, chất liệu, màu sắc, kiểu dáng...
            </li>
          </ul>
          <b>2.THỜI GIAN LÀM VIỆC</b>
          <ul className="tuyendung-noidung">
            <li>
              <span>Từ 18h – 21h30 các ngày trong tuần</span>
            </li>
            <li>Nghỉ 3 ngày/ tháng</li>
          </ul>
          <b>3.ĐỊA ĐIỂM LÀM VIỆC</b>
          <ul className="tuyendung-noidung">
            <span>Tòa nhà Sông Đà, Phạm Hùng, Hà Nội</span>
          </ul>
          <b>4.YÊU CẦU</b>
          <ul className="tuyendung-noidung">
            <li>Nam/Nữ, tuổi từ 18 - 25.</li>
            <li>Ngoại hình khá, thân thiện, niềm nở.</li>
            <li>
              Có kỹ năng giao tiếp, thuyết phục, đàm phán tốt với khách hàng.
            </li>
            <li>Kiên trì, năng động, trung thực, nhiệt tình.</li>
            <li>
              Yêu thích công nghệ, giao tiếp, chăm sóc khách hàng. Ưu tiên các
              ứng viên đã làm việc tại các shop bán điện thoại, điện máy.
            </li>
            <li>
              <span>Số lượng cần tuyển: 02</span>
            </li>
          </ul>
          <b>5.QUYỀN LỢI</b>
          <ul className="tuyendung-noidung">
            <li>
              Thu nhập: <span>50.000.000 - 150.000.000 VNĐ/tháng.</span>
            </li>
            <li>Hoa hồng hưởng theo doanh thu bán hàng của cửa hàng.</li>
            <li>Thưởng thêm theo tăng trưởng cửa hàng.</li>
            <li>
              Phụ cấp, thưởng thêm theo chế độ công ty (Làm thêm, gửi xe, sinh
              nhật, Lễ tết….)
            </li>
            <li>Hưởng đầy đủ các chính sách theo luật lao động.</li>
            <li>
              Được đào tạo về chuyên môn &amp; kỹ năng trước khi làm việc.
            </li>
            <li>
              Được tiếp xúc với những sản phẩm công nghệ mới nhất hiện nay.
            </li>
          </ul>
          <b>6.LIÊN HỆ</b>
          <ul className="tuyendung-noidung">
            <li>
              Ứng viên điền thông tin theo link:
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdNjF8wP7v7ocBDVRUFGqRCHrV0lNPky33Sn3GXVgSVYe7dMA/viewform"
                target="_blank"
              >
                <span>Tuyển dụng</span>
              </a>
            </li>
            <li>
              Hoặc nộp hồ sơ trực tiếp tại{" "}
              <b>
                Phòng Hành chính nhân sự - Tòa nhà Sông Đà, Phạm Hùng, Hà Nội.
              </b>
            </li>
            <li>
              Hoặc gửi CV qua email:<b> namhn1996@gmail.com</b>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tuyendung;
