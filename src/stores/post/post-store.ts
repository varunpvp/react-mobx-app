import {
  action,
  computed,
  makeObservable,
  observable,
  ObservableMap,
} from "mobx";
import IPost from "../../types/post";
import AppStore from "../app-store";

export default class PostStore {
  @observable byId = new ObservableMap<number, Post>();

  constructor(private store: AppStore) {
    makeObservable(this);
  }

  @action load(posts: IPost[]) {
    posts.forEach((it) => this.byId.set(it.id, new Post(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }
}

export class Post implements IPost {
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(private store: AppStore, post: IPost) {
    this.id = post.id;
    this.userId = post.userId;
    this.title = post.title;
    this.body = post.body;
  }

  get user() {
    return this.store.user.byId.get(this.userId);
  }

  get comments() {
    return this.store.comment.all.filter((it) => it.postId === this.id);
  }
}
