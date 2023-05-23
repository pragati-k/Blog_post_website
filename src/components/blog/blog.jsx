import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./blog.css"

class Blog extends Component {
  state = {};
  render() {
      var blogItems = this.props.blogItems;
      const MAX_LENGTH = 200;
    return (
        <div className="card m-4">
        <div className="card-body">
          <Link to={`/blog/${blogItems.id}`}>
            <h5 className="card-title">{blogItems.title}</h5>
          </Link>
          <p className="card-text">{`${blogItems.content.substring(0, MAX_LENGTH)}...`}<Link to={`/blog/${blogItems.id}`}>Read more</Link></p>
        </div>
      </div>
    );
  }
} 

export default Blog;
