import { action, computed, makeObservable, observable } from "mobx";
import { User } from "../models/user";
import { IUser } from "../entities/user";
import { RootStore } from "./root";
import { RootApi } from "../apis/root";

export class UserStore {
  byId = observable.map<number, User>();

  constructor(private store: RootStore, private api: RootApi) {
    makeObservable(this);
  }

  @action load(users: IUser[]) {
    users.forEach((it) => this.byId.set(it.id, new User(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }

  async loadAll() {
    const data = await this.api.user.getAll();

    this.load(data);
  }

  async loadById(id: number) {
    const data = await this.api.user.getById(id);
    this.load([data]);
  }
}
