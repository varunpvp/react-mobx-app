import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useRootContext } from "../root-context";
import { Post } from "../components/post";

export const HomePage = observer(() => {
  const { api, store } = useRootContext();
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      await api.post.getAll();
      await api.user.getAll();
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
