import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import instance from "../../../api/axios";
import { vnd } from "../../../help";
import ModalUpdate from "./ModalUpdate";

const Products = () => {
  const [products, setProducts]: any = useState([]);
  const [total, setTotal]: any = useState(0);
  const [category, setCategory]: any = useState([]);
  const [selectedProduct, setSelectedProduct]: any = useState(null);
  const [selectedCategory, setSelectedCategory]: any = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await instance.get(
        `products?category=&page_index=1&page_number=10`
      );
      setProducts(res.data.data);
      setTotal(res.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategory = async () => {
    try {
      const res = await instance.get("category");
      setCategory(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductsByCategory = async (filter: any) => {
    try {
      const res = await instance.get(
        `products?category=${filter}&page_index=1&page_number=10`
      );
      setProducts(res.data.data);
      setTotal(res.data.data.length);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangePage = async (pageIndex: React.SetStateAction<number>) => {
    try {
      let res = await instance.get(
        `products?category=${
          selectedCategory ? selectedCategory : ""
        }&page_index=${pageIndex}&page_number=10`
      );
      const data = res.data;
      setProducts(() => [...data.data]);
      setCurrentPage(pageIndex);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, []);
  useEffect(() => {
    setCurrentPage(1);
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory);
    } else {
      fetchProducts();
    }
  }, [selectedCategory]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const handleSubmit = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="col py-3">
        <div className="row">
          <h4 className="h2 text-success border-bottom border-success">
            Products
          </h4>
        </div>
        <div className="row">
          <div className="col-1">
            <button
              className="btn btn-hover"
              data-bs-toggle="modal1"
              data-bs-target="#exampleModal1"
              onClick={() => {
              }}
            >
              <i className="fa-solid fa-plus fa-2x text-danger"></i>
            </button>
          </div>
          <div className="col-3">
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option value="">Filter By Category</option>
              {category.length > 0 &&
                category.map((e: any, i: any) => (
                  <option key={i} value={e.description}>
                    {e.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control form-control"
              placeholder="Search product"
            />
          </div>
        </div>
        <div className="row mt-5 table-responsive">
          <table className="table-hover text-center">
            <thead className="bg-light">
              <tr className="table-active fs-4">
                <th>ID Sản Phẩm</th>
                <th>Tên Sản Phẩm</th>
                <th>Ảnh</th>
                <th>Tồn Kho</th>
                <th>Giá Gốc</th>
                <th>Sale</th>
                <th>Giá Bán</th>
                <th>Thông Số</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {products &&
                products.map((product: any) => (
                  <tr key={product.product_id} className="mt-3">
                    <td>{product.product_id}</td>
                    <td>{product.name}</td>
                    <td>
                      <img
                        style={{ width: "100px" }}
                        src={product.img}
                        alt=""
                      />
                    </td>
                    <td>{product.count}</td>
                    <td>{vnd(product.price)}</td>
                    <td>{product.sale * 100} %</td>
                    <td>{vnd(product.price * (1 - product.sale))}</td>
                    <td>
                      <button
                        className="btn btn-hover"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setSelectedProduct(product);
                        }}
                      >
                        <i className="fa-solid fa-eye fa-2x text-danger"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-hover"
                        onClick={() => {
                          setOpen(true), setSelectedProduct(product);
                        }}
                      >
                        {" "}
                        <i className="fa-solid fa-pencil fa-2x text-success"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3 fw-bold" id="exampleModalLabel">
                Chi Tiết Sản Phẩm
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {selectedProduct && (
                <>
                  {" "}
                  <p className="fw-bold fs-4 text-center">
                    {selectedProduct.name}
                  </p>
                  <img
                    style={{ width: "100%" }}
                    src={selectedProduct.img}
                    alt=""
                  />
                  <div className="mt-3">
                    {" "}
                    <ul className="info">
                      <li>
                        <b>Màn hình : </b> {selectedProduct.screen}
                      </li>
                      <li>
                        <b>Hệ điều hành : </b> {selectedProduct.os}
                      </li>
                      <li>
                        <b>Camara sau : </b> {selectedProduct.camara}
                      </li>
                      <li>
                        <b>Camara trước : </b> {selectedProduct.camaraFront}
                      </li>
                      <li>
                        <b>CPU : </b> {selectedProduct.cpu}
                      </li>
                      <li>
                        <b>RAM : </b> {selectedProduct.ram}
                      </li>
                      <li>
                        <b>Bộ nhớ trong :</b> {selectedProduct.rom}
                      </li>
                      <li>
                        <b>Sim :</b> {selectedProduct.sim}
                      </li>
                      <li>
                        <b>Dung lượng pin :</b> {selectedProduct.battery}
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <ModalUpdate
          open={open}
          setOpen={setOpen}
          handleSubmit={handleSubmit}
          fetchProducts={fetchProducts}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          category={category}
        />
      )}
      <Pagination
        total={total}
        pageNumber={10}
        handleChangePage={handleChangePage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Products;
