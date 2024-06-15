import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';


export default function CommentArea({ asin }) {
  const URLComments = "https://striveschool-api.herokuapp.com/api/comments/";
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [add, setAdd] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(URLComments + asin, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDBlYzBiM2IyNTAwMTUxYjU0MTciLCJpYXQiOjE3MTc0MjMzMjYsImV4cCI6MTcxODYzMjkyNn0.W2fUYHWMAUWb5LQQE76ZSratOszl27XFAX1ee4M41Hs", // Replace YOUR_TOKEN_HERE with your actual token
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComments(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setHasError(true);
        setErrorMessage(error.message || "An error occurred");
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [add, asin]); // 'add' is included to detect changes after a new comment

  return (
    <Card className="comment-area shadow-sm border-0 p-4">
      {isLoading && (
        <Spinner animation="border" role="status" className="d-block mx-auto my-3 custom-spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {hasError && (
        <Alert variant="danger" className="mt-3 custom-alert">
          <Alert.Heading>Errore di caricamento...</Alert.Heading>
          <p>{errorMessage}</p>
        </Alert>
      )}
      {comments && comments.length > 0 && <h5 className="mt-3 custom-font">Tutte le recensioni:</h5>}
      <CommentList comments={comments} setAdd={setAdd} add={add}></CommentList>
      <AddComment elementId={asin} setAdd={setAdd} add={add}></AddComment>
    </Card>
  );
}




























