import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetOneProduct } from "../../service/product.service";
import { showMessage } from "../../help";
import moment from "moment";
import instance from "../../api/axios";

interface CommentProps {
  userid: any;
  getProduct: () => void;
}
const Comment: React.FC<CommentProps> = ({ userid, getProduct }) => {
  const { id } = useParams() as any;
  const commentStore = useSelector(
    (state: any) => state.products.products.comment
  );
  const comments = commentStore;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneProduct(id) as any);
  }, []);

  const [newComment, setNewComment] = useState("") as any;
  const handleComment = async (e: any) => {
    e.preventDefault();
    if (userid.length == 0) {
      showMessage("error", "Bạn phải đăng nhập để đánh giá sản phẩm");
    } else {
      const comment: any = {
        comment: newComment,
        user_id: userid,
        product_id: id,
        create_at: moment().format("HH:mm:ss DD/MM/YYYY"),
      };
      await instance
        .post(`/products/comment/${id}`, comment)
        .then((res) => {
          getProduct();
          setNewComment("");
          showMessage("success", "Đánh giá thành công");
        })
        .catch((error) => {
          showMessage("error", "Đánh giá thất bại");
        });
    }
  };
  console.log("comments", comments);

  return (
    <div className="container">
      <div className="mb-3">
        <form className="form-floating">
          <input
            className="form-control"
            placeholder="Vui lòng nhập comment"
            id="floatingTextarea2"
            style={{ height: 100 }}
            onChange={(e: any) => {
              setNewComment(e.target.value);
            }}
            value={newComment}
          />
          <label htmlFor="floatingTextarea2">Comments</label>
          <button
            type="submit"
            className="btn btn-primary mt-3 float-end"
            onClick={handleComment}>
            Gửi
          </button>
        </form>
      </div>
      {comments && comments.length > 0 ? (
        <div className="row">
          <div className="mb-3 row">
            <h4 className="mt-5">Bình Luận</h4>
            <div className="col-12">
              {comments.map((e: any) => (
                <div className="form-floating mb-2">
                  <input
                    className="form-control"
                    style={{ height: 80 }}
                    readOnly
                    value={`     ${e.comment}`}
                  />
                  <label style={{ color: "black" }}>
                    <b>
                      <img
                        src={e.avatar}
                        alt=""
                        style={{ width: 30, height: 30, borderRadius: "50%" }}
                      />{" "}
                      {e.username}
                    </b>{" "}
                    - {e.create_at}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h3>Chưa có bình luận nào</h3>
        </div>
      )}
    </div>
  );
};

export default Comment;
