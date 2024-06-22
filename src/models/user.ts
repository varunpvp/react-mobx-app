import { computed, makeObservable } from "mobx";
import { RootStore } from "../stores/root";
import { IUser } from "../entities/user";

export class User implements IUser {
  id: number;
  name: string;
  username: string;
  email: string;

  constructor(private store: RootStore, user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;

    makeObservable(this);
  }

  @computed get posts() {
    return this.store.post.all.filter((it) => it.userId === this.id);
  }
}
