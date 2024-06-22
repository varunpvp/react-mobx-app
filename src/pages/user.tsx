import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRootStore } from "../root-context";
import { Post } from "../components/post";

export const UserPage = observer(() => {
  const [loading, setLoading] = useState(false);

  const params = useParams<{ userId: string }>();

  const userId = Number(params.userId);

  const rootStore = useRootStore();

  const load = async () => {
    try {
      setLoading(true);
      await rootStore.user.loadById(userId);
      await rootStore.post.loadByUserId(userId);
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

  const user = rootStore.user.byId.get(userId);

  console.log(user);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h3>
        {user.name} • {user.username}
      </h3>
      <p>{user.email}</p>

      <h2>Posts</h2>

      {user.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
});
