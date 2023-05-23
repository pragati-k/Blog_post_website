import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeftLong
} from "@fortawesome/free-solid-svg-icons"; 

const AddPost = () => {
  const { addBlog } = useContext(GlobalContext);
  const [blog, setBlog] = useState({
    id: uuid(),
    title: "",
    categories: "",
    content: "",
    like: "false",
  });
  const navigate = useNavigate();

  const onSubmit = () => {
    addBlog(blog);
    navigate("/");
  };

  const onChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
    console.log(blog);
  };

  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeftLong} />
      </button>
      <div className="container addpost">
        <h1 className="header">NEW POST</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput2">Category</label>
            <input
              name="categories"
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Content</label>
            <textarea
              name="content"
              className="form-control"
              id="exampleFormControlTextarea1"
              onChange={onChange}
              rows="9"
            ></textarea>
          </div>
          <button className="btn btn-outline-secondary"> Add </button>
        </form>
      </div>
    </>
  );
};

export default AddPost;
