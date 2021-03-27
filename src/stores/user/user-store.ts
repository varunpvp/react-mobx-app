import {
  action,
  computed,
  makeObservable,
  observable,
  ObservableMap,
} from "mobx";
import IUser from "../../types/user";
import AppStore from "../app-store";

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

export class User implements IUser {
  id: number;
  name: string;
  username: string;
  email: string;

  constructor(private store: AppStore, user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
  }

  get posts() {
    return this.store.post.all.filter((it) => it.userId === this.id);
  }
}
