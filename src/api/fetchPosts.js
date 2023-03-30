import axios from "axios";
const url = "http://localhost:5000/posts";

export const fetchPosts = async () => {
  let data = await axios.get(url);
  console.log(data.data.message);
  return data.data.message;
};

export const createPostBack = (newPost) => axios.post(url, newPost);
export const updatePostApi = async (id, newPost) =>
  await axios.patch(`${url}/${id}`, newPost.postData);
