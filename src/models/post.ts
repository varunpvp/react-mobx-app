import { computed, makeObservable } from "mobx";
import AppStore from "../stores/app";
import IPost from "../types/post";

export default class Post implements IPost {
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(private store: AppStore, post: IPost) {
    this.id = post.id;
    this.userId = post.userId;
    this.title = post.title;
    this.body = post.body;

    makeObservable(this);
  }

  @computed get user() {
    return this.store.user.byId.get(this.userId);
  }

  @computed get comments() {
    return this.store.comment.all.filter((it) => it.postId === this.id);
  }
}
