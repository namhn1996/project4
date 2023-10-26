import React from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { useState } from "react";
import { Button, message, Upload } from "antd";
import { store } from "../firebase/firebase.cofig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { RcFile } from "antd/es/upload";
const Upload_Comp = () => {
  const [url, setUrl] = useState();
  // Tạo ra thư mục chứa các hình ảnh
  const imgsRef = ref(store, "/img");

  const props: UploadProps = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(` Tải hình ảnh thành công`);
        // Trả về đường dẫn cho mình
        const downloadUrl = info.file.response.url;
        setUrl(downloadUrl);
        console.log("downloadUrl", downloadUrl);
      } else if (info.file.status === "error") {
        message.error(` Tải lên thất bại.`);
      }
    },
    customRequest: async ({ file, onSuccess, onError }) => {
      try {
        const rfFile: any = file as RcFile;
        // Tạo ra 1 tham chiếu đến Store
        const imgRef: any = ref(imgsRef, rfFile.name);

        // Tải hình ảnh lên firebase
        await uploadBytes(imgRef, rfFile);

        // Lấy url từ filebase về

        const getUrl: any = await getDownloadURL(imgRef);
          
        // Trả về đường dẫn cho mình
        onSuccess?.({ url: getUrl });
      } catch (error: any) {
        onError?.(error);
      }
    },
  };
  return (
    <div>
      <img src={url} style={{ width: 100, height: 100 }} alt="" />
      <Upload {...props}>
        <Button icon={<CloudUploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
};

export default Upload_Comp;
