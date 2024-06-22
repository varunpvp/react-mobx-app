import { RootStore } from "../stores/root";
import { RootApi } from "./root";

export class CommentApi {
  constructor(private api: RootApi, private store: RootStore) {}

  async getByPostId(postId: number) {
    const res = await this.api.client.get(`/posts/${postId}/comments`);
    this.store.comment.load(res.data);
  }
}
