import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState ={
    blogs: [
        {
          id: "1",
          title: "Sky",
          categories: "Nature",
          content: "The sky is an unobstructed view upward from the surface of the Earth. It includes the atmosphere and outer space. It may also be considered a place between the ground and outer space, thus distinct from outer space",
          like: "true",
        },
        {
          id: "2",
          title: "Book",
          categories: "Things",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper a lacus. Tellus orci ac auctor augue mauris augue neque gravida. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Ante in nibh mauris cursus mattis molestie a iaculis. Lacus luctus accumsan tortor posuere ac ut consequat. Eget mi proin sed libero enim sed faucibus. Turpis egestas sed tempus urna et pharetra. Vel quam elementum pulvinar etiam non. In arcu cursus euismod quis viverra nibh cras. Integer enim neque volutpat ac tincidunt. Lacus viverra vitae congue eu consequat. Quis varius quam quisque id. Elit pellentesque habitant morbi tristique senectus et netus et. Non arcu risus quis varius quam quisque id diam.",
          like: "false",
        },
      ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addBlog = (blog) =>{
        dispatch({
            type: 'ADD_BLOG',
            payload: blog
        })
        
        console.log(state)
    }

    const editBlog = (blog) =>{
        dispatch({
            type: 'EDIT_BLOG',
            payload: blog
        })
        
        console.log(state)
    }

    const removeBlog = (id) =>{
        dispatch({
            type: 'DELETE_BLOG',
            payload: id
        })
    }

    const toggleLike = (id) =>{
        dispatch({
            type: 'TOGGLE_LIKE',
            payload: id
        })
    }

    return(
        <GlobalContext.Provider value={{
            blogs: state.blogs,
            removeBlog,
            addBlog,
            editBlog,
            toggleLike
        }}>
            {children}
        </GlobalContext.Provider>
    )
}