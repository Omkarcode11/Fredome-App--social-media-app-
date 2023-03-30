import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../redux/slice/posts.slice";

function Form({ currentId, setCurrentId }) {
  let post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  let dispatch = useDispatch();
  const [postData, setPostsData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });

  function clear() {
    setCurrentId(null)
    setPostsData({
      creator: "",
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId){ 
      dispatch(updatePost({ currentId, postData }))
      window.location.reload()
    }
    else dispatch(createPost(postData));
    // console.log(postData)
    clear()
  };
  useEffect(() => {
    if (post) setPostsData(post);
  }, [post]);
  return (
    <Paper className="paper">
      <form
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <Typography className="form-heading" variant="h6">
          {`${currentId ? "Editing" : "Creating"} a Memory`}
        </Typography>

        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostsData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostsData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostsData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostsData({ ...postData, tags: e.target.value.split(",") })
          }
        />

        <div className="fileInput">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostsData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className="submit-Button"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className="btn"
          variant="contained"
          color="secondary"
          onClick={clear}
          fullWidth
          size="large"
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
