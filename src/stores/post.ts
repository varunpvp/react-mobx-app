import { action, computed, makeObservable, observable } from "mobx";
import { Post } from "../models/post";
import { IPost } from "../types/post";
import { RootStore } from "./root";

export class PostStore {
  byId = observable.map<number, Post>();

  constructor(private store: RootStore) {
    makeObservable(this);
  }

  @action load(posts: IPost[]) {
    posts.forEach((it) => this.byId.set(it.id, new Post(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }
}
