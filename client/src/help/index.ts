import Swal from "sweetalert2";

export const vnd = (price: number | string) => {
  price = price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  return price;
};

export const showMessage = (icon: any, message: any) => {
  return Swal.fire({
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
};

export const requestMessage = (title: any, text: any) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy bỏ",
  });
};

export const deleteCart = async () => {
  const result = await Swal.fire({
    title: "Bạn muốn xóa sản phẩm này?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Đồng ý !!",
  });
  /* Đọc thêm về isConfirmed, isDenied dưới đây */
  if (result.isConfirmed) {
    Swal.fire("Đã xóa khỏi giỏ hàng", "", "success");
    return { isConfirmed: true };
  } else if (result.isDismissed) {
    Swal.fire("Hủy xóa!", "", "info");
    return { isDenied: true };
  }
};


export const kaikee = async () => {
  const result = await Swal.fire({
    title: "Bạn muốn thanh toán đơn hàng?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Đúng, thanh toán cho tôi!!",
  });
  /* Đọc thêm về isConfirmed, isDenied dưới đây */
  if (result.isConfirmed) {
    Swal.fire(
      "Đặt hàng thành công !! ",
      "Chúng tôi sẽ liên hệ xác nhận đơn hàng với bạn sớm nhất !!",
      "success"
    );
    return { isConfirmed: true };
  } else if (result.isDismissed) {
    Swal.fire("Hủy thanh toán!", "", "info");
    return { isDenied: true };
  }
};
