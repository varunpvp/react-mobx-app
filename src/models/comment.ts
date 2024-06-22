import { computed, makeObservable } from "mobx";
import { RootStore } from "../stores/root";
import { IComment } from "../entities/comment";

export class Comment implements IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;

  constructor(private store: RootStore, comment: IComment) {
    this.id = comment.id;
    this.postId = comment.postId;
    this.name = comment.name;
    this.email = comment.email;
    this.body = comment.body;

    makeObservable(this);
  }

  @computed get post() {
    return this.store.post.byId.get(this.postId);
  }
}
