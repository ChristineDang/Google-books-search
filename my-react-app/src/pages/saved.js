import React from 'react';
// import API from '../API/api.js';
// import { query } from 'express';
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Book from './books';

function savedBooks(props) {

    return (
        <ul>
            {
                Book.items.map((book) => {
                    return (
                        <Container>
                            <Row className="grid">
                                  <Col md={6}>
                                      <Card style={{ width: '40rem', display: 'flex', flexDirection: 'row', flex: 1 }}>
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
                                                  {/* <Form onSubmit={submitHandler} center>
                                                      <Button variant="outline-success" type="save">Save</Button>
                                                      </Form> */}
                                          </Card.Body>
                                      </Card>
                                  </Col>
                            </Row>
                        </Container>
          
                    );
                })
            }
            </ul>
    )
}    

export default savedBooks;

// class saved extends Component {
//     state = {
//         booksSaved: []
//     };

//     render () {
//         return (
//             <div className="container">
//                 <Results savedBooks = {this.state.booksSaved} />
//             </div>
//         )
//     };
// };

// export default saved;

//google how to insert into mongodb using react