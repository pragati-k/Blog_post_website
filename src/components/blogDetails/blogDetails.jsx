import React, { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faEdit,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import {faArrowLeftLong
} from "@fortawesome/free-solid-svg-icons";

const BlogDetails = () => {

  const [selectedBlog, setSelectedBlog] = useState({
    id: "",
    title: "",
    categories: "",
    content: "",
    like: "false"
  });

  const { blogs, removeBlog, toggleLike } = useContext(GlobalContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const blogId = id;
    const selectedBlog = blogs.find(blog => blog.id === blogId);
    setSelectedBlog(selectedBlog);
  }, []);

  const onClick = () => {
    const liked = selectedBlog.like !== "false"? "false":"true";
    setSelectedBlog({
      ...selectedBlog,
      like: liked,
    });
    toggleLike(id);
    };

  const onRemoveBlog = (id) => {
    removeBlog(id);
    navigate("/");
  };


  return (
    <>
    <button className="back-btn" onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faArrowLeftLong} /></button>
    <div className="blogdetails container">
      <div className="card">
        <div className="card-body">
          <div className="allbuttons">
            <button className={`btn btn-${selectedBlog.like !== "false" ? "primary" : "outline-primary"}`} onClick={onClick}>
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <Link to={`/editPost/${selectedBlog.id}`}>
              <button className="btn btn-outline-warning" type="submit">
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </Link>
            <button
              onClick={() => onRemoveBlog(selectedBlog.id)}
              className="btn btn-outline-danger"
              type="submit"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
          <h1 className="card-title">{selectedBlog.title}</h1>

          <h6 className="card-subtitle mb-2 text-muted">{selectedBlog.categories}</h6>
          <p className="card-text">{selectedBlog.content}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogDetails;
