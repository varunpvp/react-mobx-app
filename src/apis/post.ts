import AppStore from "../stores/app";
import AppApi from "./app";

export default class PostApi {
  constructor(private api: AppApi, private store: AppStore) {}

  async getAll() {
    const res = await this.api.client.get(`/posts`);
    this.store.post.load(res.data);
  }

  async getById(id: number) {
    const res = await this.api.client.get(`/posts/${id}`);
    this.store.post.load([res.data]);
  }

  async getByUserId(userId: number) {
    const res = await this.api.client.get(`/posts?userId=${userId}`);
    this.store.post.load(res.data);
  }
}
