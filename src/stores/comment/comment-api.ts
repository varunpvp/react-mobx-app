import AppStore from "../app-store";

export default class CommentApi {
  constructor(private store: AppStore) {}

  async getByPostId(postId: number) {
    const res = await this.store.axios.get(`/posts/${postId}/comments`);
    this.store.comment.load(res.data);
  }
}
