import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Post from "../components/post";
import useAppStore from "../stores/use-app-store";

const PostPgae = observer(() => {
  const [loading, setLoading] = useState(false);

  const store = useAppStore();

  const params = useParams<{ postId: string }>();

  const postId = Number(params.postId);

  const load = async () => {
    try {
      setLoading(true);

      await store.post.api.getById(postId);
      await store.comment.api.getByPostId(postId);
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

  const post = store.post.byId.get(Number(params.postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Post post={post} />

      <h2>Comments </h2>

      {post.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <strong>
              {comment.name} • {comment.email}
            </strong>
            <p>{comment.body}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
});

export default PostPgae;
