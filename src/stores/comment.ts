import {
  action,
  computed,
  makeObservable,
  observable,
  ObservableMap,
} from "mobx";
import IComment from "../types/comment";
import Comment from "../models/comment";

import AppStore from "./app";

export default class CommentStore {
  @observable byId = new ObservableMap<number, Comment>();

  constructor(private store: AppStore) {
    makeObservable(this);
  }

  @action load(comments: IComment[]) {
    comments.forEach((it) => this.byId.set(it.id, new Comment(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }
}
