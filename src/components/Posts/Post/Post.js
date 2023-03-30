import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import "./Post.css";

function Post({ posts, setCurrentId }) {
  // console.log(posts.selectedFile)
  return (
    <Card className="card">
      <div className="posts-image">
        <img src={posts.selectedFile} alt={posts.title} />
      </div>
      {/* <h2>{posts.title}</h2> */}
      <div className="overlay">
        <Typography variant="h6">{posts.creator}</Typography>
        <Typography variant="body2">
          {moment(posts.createdAt).fromNow()}
        </Typography>
      </div>
      <div className="details-tag">
        <Typography variant="h6" color="textSecondary">
          {posts.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <div className="overlay2">
        <Button
          style={{ color: "white" }}
          size="large"
          onClick={() => setCurrentId(posts._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <CardContent>
        <Typography className="title-post" variant="h5" gutterBottom>
          {posts.title}
        </Typography>
      </CardContent>
      <CardActions className="postCardActions">
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {posts.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
