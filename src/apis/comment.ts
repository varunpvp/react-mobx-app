import { RootApi } from "./root";

export class CommentApi {
  constructor(private api: RootApi) {}

  async getByPostId(postId: number) {
    const res = await this.api.client.get(`/posts/${postId}/comments`);

    return res.data;
  }
}
