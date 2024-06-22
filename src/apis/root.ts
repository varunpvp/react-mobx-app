import axios from "axios";
import { CommentApi } from "./comment";
import { PostApi } from "./post";
import { UserApi } from "./user";

export class RootApi {
  client = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

  user: UserApi;
  post: PostApi;
  comment: CommentApi;

  constructor() {
    this.user = new UserApi(this);
    this.post = new PostApi(this);
    this.comment = new CommentApi(this);
  }
}
