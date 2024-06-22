import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRootStore } from "../root-context";
import { Comment } from "../components/comment";
import { Post } from "../components/post";

export const PostPage = observer(() => {
  const rootStore = useRootStore();
  const [loading, setLoading] = useState(false);

  const params = useParams<{ postId: string }>();

  const postId = Number(params.postId);

  const load = async () => {
    try {
      setLoading(true);
      await rootStore.post.loadById(postId);
      await rootStore.comment.loadByPostId(postId);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  const post = rootStore.post.byId.get(Number(params.postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Post ellipsisBody={false} post={post} />

      <h2>Comments </h2>

      {post.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
});
