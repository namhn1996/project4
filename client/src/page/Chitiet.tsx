import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Comment from "./layout/Comment";
import Header from "../component/Header";
import "./css/chitietsanpham.css";
import { requestMessage, showMessage, vnd } from "../help";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetOneProduct } from "../service/product.service";
import { AppDispatch } from "../redux/store";
import { GetOneCart, cartCreate, cartUpdate } from "../service/cart.serivice";
import Swal from "sweetalert2";

const Chitiet = () => {
  const { id } = useParams() as any;
  const userid: number = JSON.parse(localStorage.getItem("user")!).user_id;

  const productStore = useSelector(
    (state: any) => state.products.products.product
  );
  const cartStore = useSelector((state: any) => state.carts.carts);

  const [quantity, setQuantity] = useState(1);
  const [activeCart, setActiveCart] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const getProduct = () => dispatch(GetOneProduct(id) as any);
  const getCart = () => dispatch(GetOneCart(userid));

  useEffect(() => {
    getProduct();
    getCart();
  }, [userid, id, activeCart]);

  const handleCart = (id: number) => {
    if (!userid) {
      showMessage("error", "Bạn phải đăng nhập để mua hàng");
    } else {
      console.log("cartStore", cartStore);

      const productFindIndex: any = cartStore.findIndex(
        (item: any) => item.product_id === id
      );

      console.log("productFind", productFindIndex);

      if (productFindIndex !== -1) {
        requestMessage(
          "Sản phẩm đã có trong giỏ hàng",
          "Bạn có muốn mua thêm số lượng?"
        ).then((result) => {
          if (result.isConfirmed) {
            const newProduct: any = {
              quantity,
              product_id: id,
              user_id: userid,
            };
            console.log("newProduct", newProduct);
            // Sản phẩm có trong giỏ hàng, thêm số lượng
            dispatch(cartUpdate(newProduct))
              .unwrap()
              .then((res) => {
                setQuantity(1);
                console.log(cartStore);
                setActiveCart(!activeCart);
                showMessage("success", "Đã thêm vào giỏ hàng");
              })
              .catch((err) => console.log(err));
          } else {
            console.log("Hủy bỏ mua thêm số lượng");
          }
        });
      } else {
        requestMessage(
          "Thêm mới sản phẩm",
          "Bạn có muốn thêm sản phẩm vào giỏ hàng"
        ).then((result) => {
          if (result.isConfirmed) {
            const cart = {
              user_id: userid,
              product_id: id,
              quantity,
            };
            dispatch(cartCreate(cart))
              .unwrap()
              .then((res: any) => {
                if (res.status) {
                  setActiveCart(!activeCart);
                  setQuantity(1);
                  showMessage("success", res.message);
                }
              })
              .catch((error: any) => {
                console.log(error);
              });
          } else {
            console.log("Hủy bỏ mua thêm số lượng");
          }
        });
      }
    }
  };
  return (
    <div>
      <Header activeCart={activeCart} />
      {productStore && (
        <div className="chitietSanpham container mt-5">
          <h1>{productStore.length > 0 && productStore[0].name} </h1>
          <div className="rating">
            {" "}
            {Array.from({ length: productStore[0].star }, (_, index) => (
              <i key={index} className="fa fa-star"></i>
            ))}
          </div>

          <div className="rowdetail ">
            <div className="picture">
              <img src={productStore[0] && productStore[0].img} />
            </div>
            <div className="price_sale">
              <div className="sale-price ">
                <p className="h3 text-center  ">
                  {" "}
                  Giá gốc :{" "}
                  {productStore[0].price && vnd(productStore[0].price)}
                </p>
                <p className="h5 text-center text-danger ">
                  {" "}
                  Giảm giá : {productStore[0].sale * 100} %
                </p>
              </div>
              <div className="ship area_promo text-center">
                Giá ưu đãi chỉ còn :
                <b className="fs-2">
                  {productStore[0].price &&
                    productStore[0].sale &&
                    vnd(productStore[0].price * (1 - productStore[0].sale))}
                </b>
              </div>
              <div className="area_promo">
                <strong>khuyến mãi</strong>
                <div className="promo">
                  <img src="/img/chitietsanpham/icon-tick.png" />
                  <div id="detailPromo">
                    {" "}
                    Khách hàng sẽ được thử máy miễn phí tại cửa hàng. Có thể đổi
                    trả lỗi trong vòng 2 tháng.
                  </div>
                </div>
              </div>
              <div className="policy">
                <div>
                  <img src="/img/chitietsanpham/box.png" />
                  <p>
                    Trong hộp có: Sạc, Tai nghe, Sách hướng dẫn, Cây lấy sim, Ốp
                    lưng{" "}
                  </p>
                </div>
                <div>
                  <img src="/img/chitietsanpham/icon-baohanh.png" />
                  <p>Bảo hành chính hãng 12 tháng.</p>
                </div>
                <div className="last">
                  <img src="/img/chitietsanpham/1-1.jpg" />
                  <p>
                    1 đổi 1 trong 1 tháng nếu lỗi, đổi sản phẩm tại nhà trong 1
                    ngày.
                  </p>
                </div>
              </div>
              <div className="row quantity-area mt-4">
                <div className="text-center mb-3">
                  <h3 className="fs-2 ">
                    Số lượng : <b>{productStore[0].count}</b>
                  </h3>
                </div>
                <div className="mb-3">
                  {" "}
                  <input
                    type="button"
                    value="-"
                    onClick={() => {
                      if (quantity > 0) setQuantity(quantity - 1);
                    }}
                  />
                  <input type="text" value={quantity} />
                  <input
                    type="button"
                    value="+"
                    onClick={() => {
                      if (quantity < productStore[0].count)
                        setQuantity(quantity + 1);
                    }}
                  />
                </div>
              </div>
              <div className="area_order">
                <button
                  className="btn btn-success w-100 hover"
                  onClick={() => {
                    handleCart(productStore[0].product_id);
                  }}
                >
                  <div className=" mt-2">
                    <h5>
                      <i className="fa fa-cart-plus" /> Thêm vào giỏ hàng
                    </h5>
                    <p className="fs-7">
                      Giao trong 1 giờ hoặc nhận tại cửa hàng
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="info_product">
              <h2>Thông số kỹ thuật</h2>
              <ul className="info">
                <li>Màn hình: {productStore[0].screen}</li>
                <li>Hệ điều hành: {productStore[0].os}</li>
                <li>Camara sau: {productStore[0].camara}</li>
                <li>Camara trước: {productStore[0].camara}</li>
                <li>CPU: {productStore[0].cpu}</li>
                <li>RAM: {productStore[0].ram}</li>
                <li>Bộ nhớ trong: {productStore[0].rom}</li>
                <li>Sim: {productStore[0].sim}</li>
                <li>Dung lượng pin: {productStore[0].battery}</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div>
        <hr />
        <h1 className="text-center mb-5 mt-5">Bình Luận Của Khách Hàng </h1>
        <Comment />
        <Footer />
      </div>
    </div>
  );
};

export default Chitiet;
