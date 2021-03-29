import {
  action,
  computed,
  makeObservable,
  observable,
  ObservableMap,
} from "mobx";
import Post from "../models/post";
import IPost from "../types/post";
import AppStore from "./app";

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
