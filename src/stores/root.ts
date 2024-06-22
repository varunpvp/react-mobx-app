import { CommentStore } from "./comment";
import { PostStore } from "./post";
import { UserStore } from "./user";

export class RootStore {
  user = new UserStore(this);
  post = new PostStore(this);
  comment = new CommentStore(this);
}
