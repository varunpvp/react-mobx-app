import AppStore from "../app-store";

export default class PostApi {
  constructor(private store: AppStore) {}

  async getAll() {
    const res = await this.store.axios.get(`/posts`);
    this.store.post.load(res.data);
  }

  async getById(id: number) {
    const res = await this.store.axios.get(`/posts/${id}`);
    this.store.post.load([res.data]);
  }

  async getByUserId(userId: number) {
    const res = await this.store.axios.get(`/posts?userId=${userId}`);
    this.store.post.load(res.data);
  }
}
