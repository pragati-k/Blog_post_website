import React, { useContext } from "react";
import Blog from "./blog/blog";
import { GlobalContext } from "../context/GlobalState";

const BlogList = () => {
    const { blogs } = useContext(GlobalContext);
    
    return (
      <div className="bloglist">
        <h1 className="header">BLOGS</h1>
        {blogs.map((blog) => (
          <Blog key={blog.id} blogItems={blog} />
        ))}
      </div>
    );
};


export default BlogList;
