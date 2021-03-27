import AppStore from "../stores/app-store";
import IComment from "../types/comment";

export default class Comment implements IComment {
  id: number;
  postId: number;
  name: string;
  title: string;
  body: string;

  constructor(private store: AppStore, comment: IComment) {
    this.id = comment.id;
    this.postId = comment.postId;
    this.name = comment.name;
    this.title = comment.title;
    this.body = comment.body;
  }

  get post() {
    return this.store.post.byId.get(this.postId);
  }
}
