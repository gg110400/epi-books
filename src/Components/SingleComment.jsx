import React from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function SingleComment({ comment, setAdd, add }) {
  const removeComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + comment._id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDBlYzBiM2IyNTAwMTUxYjU0MTciLCJpYXQiOjE3MTc0MjMzMjYsImV4cCI6MTcxODYzMjkyNn0.W2fUYHWMAUWb5LQQE76ZSratOszl27XFAX1ee4M41Hs",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAdd(!add);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ListGroup.Item key={comment._id} className="custom-comment single-comment" data-testid='commento'>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-3 float-end custom-button2"
        onClick={removeComment}
      >
        x
      </Button>
    </ListGroup.Item>
  );
}
