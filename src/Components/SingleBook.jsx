import React, { useContext } from "react";
import { Button, Card, Col } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';
import { useNavigate } from "react-router-dom";

export default function SingleBook({ book, selected, setSelected }) {
  const [themeCtx] = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <Col className="d-flex align-items-stretch my-3">
      <Card 
        bg={themeCtx} 
        data-bs-theme={themeCtx} 
        className="flex-grow-1" 
        style={{ border: selected === book.asin ? '2px solid red' : 'none', minWidth: '18rem' }} 
        onClick={() => setSelected(book.asin)}
      >
        <Card.Img variant="top" src={book.img} style={{ height: "400px", objectFit: "cover" }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <Button 
            className="btn btn-dark w-100 mt-auto"
            onClick={() => navigate('/details/'+book.asin)}
          >
            Book Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
