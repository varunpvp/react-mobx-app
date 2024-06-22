import { action, computed, makeObservable, observable } from "mobx";
import { IComment } from "../types/comment";
import { Comment } from "../models/comment";
import { RootStore } from "./root";

export class CommentStore {
  byId = observable.map<number, Comment>();

  constructor(private store: RootStore) {
    makeObservable(this);
  }

  @action load(comments: IComment[]) {
    comments.forEach((it) => this.byId.set(it.id, new Comment(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }
}
