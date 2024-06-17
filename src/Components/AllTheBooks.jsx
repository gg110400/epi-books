import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'
import Welcome from './Welcome';
import CommentArea from './CommentArea';
import CommentList from './CommentList';

export default function AllTheBooks(props) {
  const  [selected, setSelected] = useState(false);

  return (
    <>
    <Row>
      <Col>
      <Welcome />
      </Col>
    </Row>
    <Row>
      <Col md={9}>
        <Row> {props.books
              .filter(book => book.title.toLowerCase().includes(props.searchQuery))
              .map(book => <SingleBook 
                                key={book.asin} 
                                book={book}
                                selected = {selected}
                                setSelected = {setSelected}
                                 />)} 
        </Row>
      </Col>
      <Col md={3}>
      <CommentArea asin={selected}></CommentArea>
      </Col>
    </Row>
    </>
  )
}
