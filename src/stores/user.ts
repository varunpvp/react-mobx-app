import { action, computed, makeObservable, observable } from "mobx";
import { User } from "../models/user";
import { IUser } from "../types/user";
import { RootStore } from "./root";

export class UserStore {
  byId = observable.map<number, User>();

  constructor(private store: RootStore) {
    makeObservable(this);
  }

  @action load(users: IUser[]) {
    users.forEach((it) => this.byId.set(it.id, new User(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }
}
