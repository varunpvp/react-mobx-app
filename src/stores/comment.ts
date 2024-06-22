import { action, computed, makeObservable, observable } from "mobx";
import { IComment } from "../entities/comment";
import { Comment } from "../models/comment";
import { RootStore } from "./root";
import { RootApi } from "../apis/root";

export class CommentStore {
  byId = observable.map<number, Comment>();

  constructor(private store: RootStore, private api: RootApi) {
    makeObservable(this);
  }

  @action load(comments: IComment[]) {
    comments.forEach((it) => this.byId.set(it.id, new Comment(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }

  async loadByPostId(postId: number) {
    const comments = await this.api.comment.getByPostId(postId);

    this.load(comments);
  }
}
