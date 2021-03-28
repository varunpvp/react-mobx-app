import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Post from "../components/post";
import useAppStore from "../stores/use-app-store";

const UserPage = observer(() => {
  const [loading, setLoading] = useState(false);

  const params = useParams<{ userId: string }>();

  const userId = Number(params.userId);

  const store = useAppStore();

  const load = async () => {
    try {
      setLoading(true);
      await store.user.api.getById(userId);
      await store.post.api.getByUserId(userId);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  const user = store.user.byId.get(userId);

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

      {user.posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
});

export default UserPage;
