import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

function Posts({setCurrentId}) {
  let posts = useSelector((state) => state.posts);
  console.log(posts)
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className="post-container"
      container
      alignItems={"stretch"}
      spacing="3"
    >
      {posts.map((item) => (
        <Grid key={item._id} item xs={12} sm={6}>
          <Post posts={item} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
