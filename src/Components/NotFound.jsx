import React from 'react';
import { Alert, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Alert variant="danger">
            <h1 className="display-8">Errore 404</h1>
            <p className="lead">Oops! La pagina che stai cercando non è stata trovata.</p>
          </Alert>
          <div className="my-4">
            <img
              src="https://img.freepik.com/premium-vector/little-panda-illustration-cute-hand-drawn-panda-character-hugging-pink-pillow_327805-152.jpg"
              alt="404 Not Found"
              className="img-fluid"
              style={{width:'300px'}}
            />
          </div>
          <Button as={Link} to="/" variant="dark">
            Torna alla Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
