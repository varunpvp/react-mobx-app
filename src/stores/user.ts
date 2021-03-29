import {
  action,
  computed,
  makeObservable,
  observable,
  ObservableMap,
} from "mobx";
import User from "../models/user";
import IUser from "../types/user";
import AppStore from "./app";

export default class UserStore {
  @observable byId = new ObservableMap<number, User>();

  constructor(private store: AppStore) {
    makeObservable(this);
  }

  @action load(users: IUser[]) {
    users.forEach((it) => this.byId.set(it.id, new User(this.store, it)));
  }

  @computed get all() {
    return Array.from(this.byId.values());
  }
}
