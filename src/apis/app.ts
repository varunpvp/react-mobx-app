import axios from "axios";
import AppStore from "../stores/app";
import CommentApi from "./comment";
import PostApi from "./post";
import UserApi from "./user";

export default class AppApi {
  client = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

  user: UserApi;
  post: PostApi;
  comment: CommentApi;

  constructor(store: AppStore) {
    this.user = new UserApi(this, store);
    this.post = new PostApi(this, store);
    this.comment = new CommentApi(this, store);
  }
}
