import { Option } from "antd/es/mentions";
import { Input, Modal, Select } from "antd";
import instance from "../../../api/axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { showMessage, vnd } from "../../../help";

interface ModalCreateProductProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  category: any;
  fetchProducts: () => void;
}
const ModalCreateProduct: React.FC<ModalCreateProductProps> = ({
  isModalOpen,
  setIsModalOpen,
  fetchProducts,
  category,
}) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    sale: "",
    count: "",
    category: "",
    img: "",
    screen: "",
    os: "",
    camara: "",
    camaraFront: "",
    cpu: "",
    ram: "",
    rom: "",
    sim: "",
    battery: "",
  }) as any;
  const handleOk = () => {
   try {
    instance.post("products", product).then((res) => {
      setProduct({
        name: "",
        price: "",
        sale: "",
        count: "",
        category: "",
        img: "",
        screen: "",
        os: "",
        camara: "",
        camaraFront: "",
        cpu: "",
        ram: "",
        rom: "",
        sim: "",
        battery: "",
      });
      setIsModalOpen(false);
      fetchProducts();
      showMessage("success",res.data.message);

    });
   } catch (error) {
    console.log(error);
    
   }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // thêm ảnh vào clouddinary
  const cloud_name = "dr9fccacv";
  const preset_key = "upload_img_project4";
  const folder = "imgProject4";
  const handleChange = (e: any) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", preset_key);
    formData.append("folder", folder);
    // Gọi API
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => setProduct({ ...product, img: res.data.url }))
      .catch((err) => console.log(err));
  };
  useEffect(() => {}, [product]);
  console.log(product);
  
  return (
    <>
      <Modal
        className="w-75"
        centered
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div className="d-flex justify-content-between gap-4">
          <div className="d-flex col-6" style={{ flexDirection: "column" }}>
            <h4>Thông tin sản phẩm</h4>
            <div className="">
              {" "}
              <img
                className="mb-4 img-fluid mx-auto d-block mt-4 "
                style={{ height: "420px", width: "65%" }}
                src={product.img}
                alt="Ảnh sản phẩm"
              />
              <input
                type="file"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <label>Tên sản phẩm</label>
            <Input
              className="py-1 my-1"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />{" "}
            <label>Giá sản phẩm</label>
            <Input
              className="py-1 my-1"
              value={product.price}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: e.target.value,
                })
              }
            />
            <label>Khuyến mãi</label>
            <Input
              className="py-1 my-1"
              value={product.sale}
              onChange={(e) =>
                setProduct({
                  ...product,
                  sale: e.target.value,
                })
              }
            />{" "}
            <label>Tồn kho</label>
            <Input
              className="py-1 my-1"
              value={product.count}
              onChange={(e) =>
                setProduct({
                  ...product,
                  count: e.target.value,
                })
              }
            />
            <label>Hãng sản xuất</label>
            <Select
              className=""
              value={product.category}
              onChange={(e) =>
                setProduct({
                  ...product,
                  category: e,
                })
              }>
              {category &&
                category.map((e: any, i: any) => (
                  <Option key={i} value={e.category_id}>
                    {e.name}
                  </Option>
                ))}
            </Select>
          </div>
          <div className="d-flex col-5" style={{ flexDirection: "column" }}>
            <h4>Thông số sản phẩm</h4>
            <label>Màn hình</label>
            <Input
              className="py-2 my-2"
              value={product.screen}
              onChange={(e) =>
                setProduct({
                  ...product,
                  screen: e.target.value,
                })
              }
            />{" "}
            <label>Hệ điều hành</label>
            <Input
              className="py-2 my-2"
              value={product.os}
              onChange={(e) => setProduct({ ...product, os: e.target.value })}
            />{" "}
            <label>Camera sau</label>
            <Input
              className="py-2 my-2"
              value={product.camara}
              onChange={(e) =>
                setProduct({
                  ...product,
                  camara: e.target.value,
                })
              }
            />{" "}
            <label>Camera trước</label>
            <Input
              className="py-2 my-2"
              value={product.camaraFront}
              onChange={(e) =>
                setProduct({
                  ...product,
                  camaraFront: e.target.value,
                })
              }
            />{" "}
            <label>CPU</label>
            <Input
              className="py-2 my-2"
              value={product.cpu}
              onChange={(e) => setProduct({ ...product, cpu: e.target.value })}
            />{" "}
            <label>RAM</label>
            <Input
              className="py-2 my-2"
              value={product.ram}
              onChange={(e) => setProduct({ ...product, ram: e.target.value })}
            />{" "}
            <label>Bộ nhớ trong</label>
            <Input
              className="py-2 my-2"
              value={product.rom}
              onChange={(e) => setProduct({ ...product, rom: e.target.value })}
            />{" "}
            <label>Sim</label>
            <Input
              className="py-2 my-2"
              value={product.sim}
              onChange={(e) => setProduct({ ...product, sim: e.target.value })}
            />{" "}
            <label>Dung lượng pin</label>
            <Input
              className="py-2 my-2"
              value={product.battery}
              onChange={(e) =>
                setProduct({
                  ...product,
                  battery: e.target.value,
                })
              }
            />{" "}
            <label>Giá bán ra</label>
            <Input
              className="py-2 my-2"
              value={vnd(+product.price * +(1 - product.sale))}
              readOnly
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCreateProduct;
