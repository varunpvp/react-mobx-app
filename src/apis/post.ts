import { RootApi } from "./root";

export class PostApi {
  constructor(private api: RootApi) {}

  async getAll() {
    const res = await this.api.client.get(`/posts`);

    return res.data;
  }

  async getById(id: number) {
    const res = await this.api.client.get(`/posts/${id}`);

    return res.data;
  }

  async getByUserId(userId: number) {
    const res = await this.api.client.get(`/posts?userId=${userId}`);

    return res.data;
  }
}
