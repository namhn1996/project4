import { Button } from "antd";
import React from "react";
import { CloudUploadOutlined } from "@ant-design/icons";

const Form: React.FC<{}> = () => {
  return (
    <div>
      <form className="form text-center mt-5">
        <h3>UPLOAD FILE</h3>
        <label htmlFor="file">
          <CloudUploadOutlined />
        </label>

        <input id="file" type="file" hidden />
        <Button>UPLOAD</Button>
      </form>
    </div>
  );
};

export default Form;
