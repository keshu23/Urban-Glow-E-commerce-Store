import { useState } from "react";
import "../styles/Postreq.css";
const PostReq = () => {
  const [user, setUser] = useState("");
  const [mail, setMail] = useState("");

  function getFormData(e) {
    e.preventDefault();
  }

  return (
    <>
      <h1 className="post-tit">User Form</h1>

      <form onClick={getFormData} className="my-form">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="fl1">
            Username :
          </label>

          <input
            type="text"
            className="form-control"
            name="username"
            value={user}
            onClick={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="fl1">
            {" "}
            Email
          </label>

          <input
            type="email"
            className="form-control"
            name="email"
            value={mail}
            onClick={(e) => setMail(e.target.value)}
          />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="sub-btn">
          Submit
        </button>
        <button type="button" className="upd-btn">
          Update
        </button>
        <button type="button" className="del-btn">
          Delete
        </button>
      </form>
    </>
  );
};

export default PostReq;
