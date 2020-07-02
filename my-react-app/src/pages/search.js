import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, FormControl, Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';
import Book from './books';
import '../App.css';
import axios from 'axios';

function Search(props) {

  const [searchBook, setSearchBook] = useState('');

  const onInputChange = (e) => {
    setSearchBook(e.target.value);
  }

  let API_URL = 'https://www.googleapis.com/books/v1/volumes';

  const [books, setBooks] = useState({ items: [] });

  const getBooks = async () => {
    // call to Google Books API with axios
    const result = await axios.get(`${API_URL}?q=${searchBook}`);
    setBooks(result.data);
    console.log(result.data);
  }

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    getBooks();
  }

  return (
    <Container>
    <Card id="search">

      <Card.Header> <h4> Book Search </h4> </Card.Header>
      <Card.Body>
        {/* <Card.Title>
          Book
        </Card.Title> */}
        <Card.Text>
        <Form onSubmit={submitHandler} center>
          <FormControl type="search" placeholder="Search" value={searchBook} onChange={onInputChange} className="mr-sm-2" />
          <br></br>
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>
    <ul>
      {
        books.items.map((book) => {
          return (
              <Container>
                  <Row className="grid">
                        <Col md={6}>
                            <Card style={{ width: 'auto', display: 'flex', flexDirection: 'row', flex: 1 }}>
                                    <Card.Body>
                                        <Card.Title>
                                            <Book
                                                title={book.volumeInfo.title}
                                                image={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                                                />
                                        </Card.Title>

                                        <Card.Text>
                                            <Book
                                                author={book.volumeInfo.authors}
                                                description={book.volumeInfo.description}
                                                // selfLink={book.selfLink}
                                            />
                                        </Card.Text>
                                        <Card.Text>
                                            <Book
                                                link={book.volumeInfo.infoLink}
                                            />    
                                        </Card.Text>
                                        <Form onSubmit={submitHandler} center>
                                            <Button variant="outline-success" type="save">Save</Button>
                                            </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                  </Row>
              </Container>

          );
        })
      }
    </ul>
    </Container>
  );
}

export default Search;