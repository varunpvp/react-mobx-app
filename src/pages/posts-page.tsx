import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import Post from "../components/post";
import useAppStore from "../stores/use-app-store";

const PostsPage = observer(() => {
  const store = useAppStore();
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      await store.post.api.getAll();
      await store.user.api.getAll();
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

  return (
    <div>
      <h1>Posts</h1>

      {store.post.all.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
});

export default PostsPage;
