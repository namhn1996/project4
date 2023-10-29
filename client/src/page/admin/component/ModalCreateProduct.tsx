import React from 'react'

const ModalCreateProduct = () => {
  return (
    <>
    <Modal
      className="w-75"
      title={<h1 className="text-center mb-4">Chỉnh sửa sản phẩm</h1>}
      centered
      open={open}
      onOk={() => handleSubmit()}
      onCancel={() => setOpen(false)}
      width={1000}
      okText="Xác nhận"
      cancelText="Huỷ bỏ"
    >
      <div className="d-flex justify-content-between gap-4">
        <div className="d-flex col-6" style={{ flexDirection: "column" }}>
          <h4>Thông tin sản phẩm</h4>
          <img
            className="w-100 mb-4"
            style={{ height: "50%" }}
            src={selectedProduct.img}
            alt=""
          />
          <input
            type="file"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label>Tên sản phẩm</label>
          <Input
            className="py-1 my-1"
            value={selectedProduct.name}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, name: e.target.value })
            }
          />{" "}
          <label>Giá sản phẩm</label>
          <Input
            className="py-1 my-1"
            value={selectedProduct.price}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                price: e.target.value,
              })
            }
          />
          <label>Khuyến mãi</label>
          <Input
            className="py-1 my-1"
            value={selectedProduct.sale}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                sale: e.target.value,
              })
            }
          />{" "}
          <label>Tồn kho</label>
          <Input
            className="py-1 my-1"
            value={selectedProduct.count}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                count: e.target.value,
              })
            }
          />
          <label>Hãng sản xuất</label>
          <Select
            className=""
            value={selectedProduct.category}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                category: e,
              })
            }
          >
            {category &&
              category.map((e: any, i: any) => (
                <Option key={i} value={e.category_id}>
                  {e.name}
                </Option>
              ))}
          </Select>
        </div>
        <div className="d-flex col-5" style={{ flexDirection: "column" }}>
          <h4>Chi tiết sản phẩm</h4>
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={selectedProduct.screen}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                screen: e.target.value,
              })
            }
          />{" "}
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={selectedProduct.os}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, os: e.target.value })
            }
          />{" "}
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={selectedProduct.camara}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                camara: e.target.value,
              })
            }
          />{" "}
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={selectedProduct.camaraFront}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                camaraFront: e.target.value,
              })
            }
          />{" "}
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={selectedProduct.cpu}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, cpu: e.target.value })
            }
          />{" "}
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={selectedProduct.ram}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, ram: e.target.value })
            }
          />{" "}
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={selectedProduct.rom}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, rom: e.target.value })
            }
          />{" "}
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={selectedProduct.sim}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, sim: e.target.value })
            }
          />{" "}
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={selectedProduct.battery}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                battery: e.target.value,
              })
            }
          />{" "}
          <label>Tên sản phẩm</label>
          <Input
            className="py-2 my-2"
            value={vnd(+selectedProduct.price * +(1 - selectedProduct.sale))}
          />
        </div>
      </div>
    </Modal>
  </>
  )
}

export default ModalCreateProduct
