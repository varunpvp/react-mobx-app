import {
  action,
  computed,
  makeObservable,
  observable,
  ObservableMap,
} from "mobx";
import IComment from "../../types/comment";

import AppStore from "../app-store";

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

export class Comment implements IComment {
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
