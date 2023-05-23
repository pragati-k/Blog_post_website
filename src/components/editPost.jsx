import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeftLong
} from "@fortawesome/free-solid-svg-icons";

const EditPost = () => {
  const [selectedBlog, setSelectedBlog] = useState({
    id: "",
    title: "",
    categories: "",
    content: ""
  });
  const { blogs, editBlog } = useContext(GlobalContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const blogId = id;
    const selectedBlog = blogs.find(blog => blog.id === blogId);
    setSelectedBlog(selectedBlog);
  }, [id, blogs]);

  const onSubmit = () => {
    editBlog(selectedBlog);
    navigate(`/blog/${id}`);
  };

  const onChange = (e) => {
    setSelectedBlog({
      ...selectedBlog,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
    <button className="back-btn" onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faArrowLeftLong} /></button>
    <div className="container addpost">

      <h1 className="header">EDIT POST</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={selectedBlog.title}
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
            value={selectedBlog.categories}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Content</label>
          <textarea
            name="content"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="9"
            value={selectedBlog.content}
            onChange={onChange}
          ></textarea>
        </div>
        <button className="btn btn-outline-secondary"> Edit </button>
      </form>
    </div>
    </>
  );
};

export default EditPost;
