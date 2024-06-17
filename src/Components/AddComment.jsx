import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export default function AddComment({ elementId, setAdd, add }) {
  const [commentData, setCommentData] = useState({
    comment: '',
    rate: 0,
    elementId: elementId,
  });

  const setCommentHandler = (e) => {
    setCommentData({
      ...commentData,
      comment: e.target.value,
    });
  };

  const setRateHandler = (e) => {
    setCommentData({
      ...commentData,
      rate: parseInt(e.target.value, 10),
    });
  };

  const sendComment = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + elementId , {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDBlYzBiM2IyNTAwMTUxYjU0MTciLCJpYXQiOjE3MTc0MjMzMjYsImV4cCI6MTcxODYzMjkyNn0.W2fUYHWMAUWb5LQQE76ZSratOszl27XFAX1ee4M41Hs", // Replace YOUR_TOKEN_HERE with your actual token
        },
        body: JSON.stringify(commentData),
      });

      const data = await response.json();
      if (response.ok) {
        setAdd(!add); // Toggle to trigger re-fetching comments
        setCommentData({ // Reset form data
          comment: '',
          rate: 0,
          elementId: elementId,
        });
        console.log(commentData);
      } else {
        throw new Error(data.message || "Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <>
      <Form.Group className="mb-3 mt-2" controlId="formBasicEmail" data-testid='recensione'>
        <h5 className="mb-2 custom-font">La tua recensione</h5>
        <Form.Control
          as="textarea"
          placeholder="Inserisci qui il tuo commento"
          value={commentData.comment}
          onChange={setCommentHandler}
          className="custom-textarea"
        />
        <Form.Text className="text-muted">
          Dicci subito che cosa ne pensi!
        </Form.Text>
      </Form.Group>
      <Form.Group className="mt-4" data-testid='valutazione'>
        <h5 className="mb-2 custom-font">Valuta questo libro</h5>
        <Form.Select aria-label="Default select example" value={commentData.rate} onChange={setRateHandler} className="custom-select">
          <option value="0">Inserisci il numero di stelle</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mt-3 mb-3 text-center" data-testid='bottone-aggiungi'>
        <Button variant="warning" onClick={sendComment} className="custom-button">
          Aggiungi commento
        </Button>
      </Form.Group>
    </>
  );
}
