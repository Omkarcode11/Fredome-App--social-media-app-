import { createSlice } from "@reduxjs/toolkit";
import { createPostBack, updatePostApi } from "../../api/fetchPosts";

let postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    createPost(state, action) {
      createPostBack(action.payload);
      return (state = [...state, action.payload]);
    },
    fetchAllPosts(state, action) {
      return (state = action.payload);
    },
    updatePost(state, action) {
      let id = action.payload.currentId
      let post = action.payload
      updatePostApi(id,post);
      return state;
    },
  },
});

export default postsSlice.reducer;
export const { createPost, fetchAllPosts, updatePost } = postsSlice.actions;
