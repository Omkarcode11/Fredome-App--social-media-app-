import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../../api/fetchPosts";

let postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    createPost(state, action) {
      console.log("working");
    },
    fetchAllPosts(state, action) {
            const  {data} = fetchPosts()
            return state = data
    
    },
  },
});

export default postsSlice.reducer;
export const { createPost, fetchAllPosts } = postsSlice.actions;
