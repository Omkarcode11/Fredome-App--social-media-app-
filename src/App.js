import React, { useEffect, useState } from "react";
import { AppBar, Typography, Grow, Grid, Container } from "@mui/material";
import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import "./App.css";
import { fetchAllPosts } from "./redux/slice/posts.slice";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  async function fetchAllPost() {
    let url = "http://localhost:5000/posts";
    let data = await axios.get(url);
    dispatch(fetchAllPosts(data.data.message));
  }
  useEffect(() => {
    fetchAllPost();
  });

  return (
    <Container maxWidth="lg">
      <AppBar position="static" className="appBar" color="inherit">
        <img
          className="image"
          src="./assets/logo.png"
          alt="memories"
          height="40"
        />
        <Typography color="crimson" className="heading"  align="center">
          Memories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
