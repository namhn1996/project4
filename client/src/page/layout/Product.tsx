import React from "react";
import { vnd } from "../../help";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProduct } from "../../service/product.service";
const { Meta } = Card;

const Product = () => {
  const products = useSelector((state: any) => state.products.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GetAllProduct() as any);
  }, []);


  return (
    <>
      {products.length > 0 &&
        products.map((item: any) => (
          <div className="products" key={item.product_id}>
            <Card
              style={{
                width: 300,
                height: 500,
              }}
              cover={
                <Link to={`/detail/${item.product_id}`}>
                  <img
                    style={{ width: 300, height: 300 }}
                    alt="example"
                    src={item.img}
                  />
                </Link>
              }
            >
              <Meta
                title="Điện thoại"
                description={vnd(item.price * (1 - item.sale))}
                className="customModal"
              />
              <div className="line-through"> Gia Gốc : {vnd(item.price)}</div>
              <div className="star-home">
                <div>
                  {Array.from({ length: item.star }, (_, index) => (
                    <i key={index} className="fa fa-star"></i>
                  ))}
                </div>
                <div>
                  <span>{item.count_comment} đánh giá</span>
                </div>
              </div>
              <div className="addCart-home">
                <Link
                  to={`/detail/${item.product_id}`}
                  className="btn btn-danger addCart-btn"
                >
                  Chi tiết sản phẩm
                </Link>
              </div>
              <label className="labelCart-home">
                <i className="fa fa-bolt"></i>
                {"   "}
                <span>Giảm giá {item.sale * 100} %</span>
              </label>
            </Card>
          </div>
        ))}
    </>
  );
};

export default Product;
