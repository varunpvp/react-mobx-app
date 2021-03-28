import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import PostModel from "../models/post";

const Post: React.FC<{ post: PostModel }> = observer(({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        {post.body.substr(0, 100)}...
        <Link to={`/post/${post.id}`}>read more</Link>
      </p>
      <p>
        Written by <Link to={`/user/${post.userId}`}>{post.user?.name}</Link>
      </p>
    </div>
  );
});

export default Post;
