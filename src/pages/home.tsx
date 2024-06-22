import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useRootStore } from "../root-context";
import { Post } from "../components/post";

export const HomePage = observer(() => {
  const rootStore = useRootStore();

  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      setLoading(true);
      await rootStore.post.loadAll();
      await rootStore.user.loadAll();
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

      {rootStore.post.all.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
});
