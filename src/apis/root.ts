import axios from "axios";
import { RootStore } from "../stores/root";
import { CommentApi } from "./comment";
import { PostApi } from "./post";
import { UserApi } from "./user";

export class RootApi {
  client = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

  user: UserApi;
  post: PostApi;
  comment: CommentApi;

  constructor(store: RootStore) {
    this.user = new UserApi(this, store);
    this.post = new PostApi(this, store);
    this.comment = new CommentApi(this, store);
  }
}
