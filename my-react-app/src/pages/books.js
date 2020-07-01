import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import '../App.css';

function Book (props) {
  return (
    <Card>
      <Card.Img variant="bottom" src={props.image}/>
      <Card.Body>
        <Card.Text>
          <h2 className="book-title">{props.title}</h2>
          <h3 className="book-author">{props.author}</h3>
          <p className="book-description">{props.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Book;