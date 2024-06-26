import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

export default function CommentList({ comments, setAdd, add }) {
  return (
    <>
      <ListGroup data-testid='lista-commenti'>
        {comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} setAdd={setAdd} add={add}></SingleComment>
        ))}
      </ListGroup>
    </>
  );
}
