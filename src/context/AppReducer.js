export default (state, action) => {
  switch (action.type) {
    case "DELETE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
      };
    case "EDIT_BLOG":
      const updatedBlog = action.payload;

      const updatedBlogs = state.blogs.map((blog) => {
        if (blog.id === updatedBlog.id) {
          return updatedBlog;
        }
        return blog;
      });
      return {
        blogs: updatedBlogs,
      };

    case "ADD_BLOG":
      return {
        blogs: [...state.blogs, action.payload],
      };

    case "TOGGLE_LIKE":
      return { 
        blogs: state.blogs.map(
            (blog) => blog.id === action.payload ? {...blog, like: blog.like !== "false"? "false":"true"}
                                    : blog
        )
     }

    default:
      return state;
  }
};
