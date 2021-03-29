import AppStore from "../stores/app";
import AppApi from "./app";

export default class CommentApi {
  constructor(private api: AppApi, private store: AppStore) {}

  async getByPostId(postId: number) {
    const res = await this.api.client.get(`/posts/${postId}/comments`);
    this.store.comment.load(res.data);
  }
}
