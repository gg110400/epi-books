import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

export default function AllTheBooks(props) {
  return (

    <>    
      <Container>
        <Row>
          {props.books.map((book) => {
            return (
            <Col>
              <Card style={{ width: "17rem", height: "530px" }} className="mb-5">
                <Card.Img variant="top" src={book.img} style={{height:"400px"}} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>);
          })}
        </Row>
      </Container>
    </>
  );
}
