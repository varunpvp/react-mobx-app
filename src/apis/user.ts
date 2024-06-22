import { RootStore } from "../stores/root";
import { RootApi } from "./root";

export class UserApi {
  constructor(private api: RootApi, private store: RootStore) {}

  async getAll() {
    const res = await this.api.client.get(`/users`);
    this.store.user.load(res.data);
  }

  async getById(id: number) {
    const res = await this.api.client.get(`/users/${id}`);
    this.store.user.load([res.data]);
  }
}
