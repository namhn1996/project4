import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetOneProduct } from "../../service/product.service";

const Comment = () => {
  const { id } = useParams() as any;
  const commentStore = useSelector(
    (state: any) => state.products.products.comment
  );
  const comment = commentStore;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneProduct(id) as any);
  }, []);

  return (
    <div className="container">
      <div className="mb-3">
        <form className="form-floating">
          <input
            className="form-control"
            placeholder="Vui lòng nhập comment"
            id="floatingTextarea2"
            style={{ height: 100 }}
            // onChange={(e: any) => {
            //   setComment(e.target.value);
            // }}
            // value={comment}
          />
          <label htmlFor="floatingTextarea2">Comments</label>
          <button type="submit" className="btn btn-primary mt-3 float-end">
            Gửi
          </button>
        </form>
      </div>
      {comment && (
        <div className="row">
          <div className="mb-3 row">
            <h4 className="mt-5">Bình Luận</h4>
            <div className="col-12">
              {comment.map((e: any) => (
                <div className="form-floating mb-2">
                  <input
                    className="form-control"
                    style={{ height: 80 }}
                    disabled
                    defaultValue={`     ${e.comment}`}
                  />
                  <label style={{ color: "black" }}>
                    <b>{e.username}</b> - {e.create_at}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
