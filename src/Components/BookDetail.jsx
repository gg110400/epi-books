import React from 'react';
import { useParams } from 'react-router-dom';
import fantasy from '../books/fantasy.json';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import CommentArea from './CommentArea';

export default function BookDetail() {
  const { asin } = useParams();
  const book = fantasy.find(b => b.asin === asin); // {} || undefined

  if (!book) {
    return <h1>Book not found</h1>;
  }

  return (
    <Row className="mt-4">
      <Col md={8}>
        <Row className="gy-4">
          <Col md={5}>
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src={book.img} style={{ objectFit: 'cover', height: '100%' }} />
            </Card>
          </Col>
          <Col md={7}>
            <h1 className="mb-4">Book Details</h1>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>Title:</strong> {book.title}</ListGroup.Item>
              <ListGroup.Item><strong>Category:</strong> {book.category}</ListGroup.Item>
              <ListGroup.Item><strong>Price:</strong> €{book.price}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Col>
      <Col md={4}>
        <CommentArea asin={asin} />
      </Col>
    </Row>
  );
}
