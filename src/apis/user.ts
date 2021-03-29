import AppStore from "../stores/app";
import AppApi from "./app";

export default class UserApi {
  constructor(private api: AppApi, private store: AppStore) {}

  async getAll() {
    const res = await this.api.client.get(`/users`);
    this.store.user.load(res.data);
  }

  async getById(id: number) {
    const res = await this.api.client.get(`/users/${id}`);
    this.store.user.load([res.data]);
  }
}
