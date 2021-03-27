import AppStore from "../app-store";

export default class UserApi {
  constructor(private store: AppStore) {}

  async getAll() {
    const res = await this.store.axios.get("/users");
    this.store.user.load(res.data);
  }
}
