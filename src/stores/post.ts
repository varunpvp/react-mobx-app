import { action, computed, makeObservable, observable } from "mobx";
import { Post } from "../models/post";
import { IPost } from "../entities/post";
import { RootStore } from "./root";
import { RootApi } from "../apis/root";

export class PostStore {
  byId = observable.map<number, Post>();

  constructor(private store: RootStore, private api: RootApi) {
    makeObservable(this);
  }

  @action load(posts: IPost[]) {
    posts.forEach((it) => this.byId.set(it.id, new Post(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }

  async loadAll() {
    const posts = await this.api.post.getAll();
    this.load(posts);
  }

  async loadById(id: number) {
    const data = await this.api.post.getById(id);
    this.load([data]);
  }

  async loadByUserId(userId: number) {
    const data = await this.api.post.getByUserId(userId);
    this.load(data);
  }
}
