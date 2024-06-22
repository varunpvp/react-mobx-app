import { RootApi } from "./root";

export class UserApi {
  constructor(private api: RootApi) {}

  async getAll() {
    const res = await this.api.client.get(`/users`);

    return res.data;
  }

  async getById(id: number) {
    const res = await this.api.client.get(`/users/${id}`);

    return res.data;
  }
}
