import { observer } from "mobx-react";
import CommentModel from "../models/comment";

const Comment: React.FC<{ comment: CommentModel }> = observer(({ comment }) => {
  return (
    <div key={comment.id}>
      <strong>
        {comment.name} • {comment.email}
      </strong>
      <p>{comment.body}</p>
      <br />
    </div>
  );
});

export default Comment;
