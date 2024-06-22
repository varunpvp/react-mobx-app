import { RootApi } from "../apis/root";
import { CommentStore } from "./comment";
import { PostStore } from "./post";
import { UserStore } from "./user";

export class RootStore {
  constructor(private api: RootApi) {}

  user = new UserStore(this, this.api);
  post = new PostStore(this, this.api);
  comment = new CommentStore(this, this.api);
}
