import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slice/posts.slice";


let store = configureStore({
    reducer:{
      posts: postsSlice
    }
})

export default store