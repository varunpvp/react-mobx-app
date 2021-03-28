import {
  action,
  computed,
  makeObservable,
  observable,
  ObservableMap,
} from "mobx";
import IComment from "../../types/comment";
import Comment from "../../models/comment";

import AppStore from "../app-store";
import CommentApi from "./comment-api";

export default class CommentStore {
  api: CommentApi;

  @observable byId = new ObservableMap<number, Comment>();

  constructor(private store: AppStore) {
    this.api = new CommentApi(store);

    makeObservable(this);
  }

  @action load(comments: IComment[]) {
    comments.forEach((it) => this.byId.set(it.id, new Comment(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }
}
