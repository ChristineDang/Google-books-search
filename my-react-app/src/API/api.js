// import React, { useState } from 'react';
// import axios from 'axios';
// import { render } from 'react-dom';

//post and save to database moved to server.js
//may try to move it back to this page

                //2nd attempt to post the saved books to the database

                // class posting extends React.Component {
                //   state = {
                //     title: '',
                //     author: '',
                //     description: '',
                //     image: '',
                //     link: ''
                //   };

                //   componentDidMount = () => {
                //     this.getbookInfo();
                //   };

                //   getbookInfo = () => {
                //     Axios.get('/api')
                //       .then((response) => {
                //         const data = response.data;
                //         this.setState({ posts: data });
                //         console.log('data has been received');
                //       })
                //       .catch(() => {
                //         alert('Error retrieving data');
                //       });
                //   }

                //   handleChange = ({ target }) => {
                //     const { name, value } = target;
                //     this.setState({ [name]: value });
                //   };

                //   submit = (event) => {
                //     event.preventDefault();

                //     const booksSaved = {
                //       title: this.state.title,
                //       author: this.state.author,
                //       description: this.state.description,
                //       image: this.state.image,
                //       link: this.state.link
                //     };

                //     Axios({
                //       url: 'pages/saved',
                //       method: 'POST',
                //       data: booksSaved
                //     })
                //     .then(() => {
                //       console.log('data has been sent to the server');
                //       this.resetUserInputs();
                //     })
                //     .catch(() => {
                //       console.log('server error');
                //     });
                //   };
                // }


//saves book to database

//retrieves saved books from database

//deletes book from database