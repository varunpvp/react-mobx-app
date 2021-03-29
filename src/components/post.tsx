import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import PostModel from "../models/post";

const Post: React.FC<{ post: PostModel; ellipsisBody?: boolean }> = observer(
  ({ post, ellipsisBody = true }) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <p>
          {ellipsisBody ? post.body.substr(0, 100) : post.body}
          {ellipsisBody && (
            <span>
              ...<Link to={`/post/${post.id}`}>read more</Link>
            </span>
          )}
        </p>
        <p>
          Written by <Link to={`/user/${post.userId}`}>{post.user?.name}</Link>
        </p>
      </div>
    );
  }
);

export default Post;
