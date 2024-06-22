import { observer } from "mobx-react";
import { Comment as CommentModel } from "../models/comment";

export const Comment: React.FC<{ comment: CommentModel }> = observer(
  ({ comment }) => {
    return (
      <div>
        <strong>
          {comment.name} • {comment.email}
        </strong>
        <p>{comment.body}</p>
        <br />
      </div>
    );
  }
);
