import CommentStore from "./comment/comment-store";
import PostStore from "./post/post-store";
import UserStore from "./user/user-store";
import axios from "axios";

export default class AppStore {
  axios = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

  user = new UserStore(this);
  post = new PostStore(this);
  comment = new CommentStore(this);
}
