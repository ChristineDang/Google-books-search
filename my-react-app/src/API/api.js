import React, { useState } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

// export default {
//     retrieve: function (query){
//         const [books]
//         return axios.get('https://www.googleapis.com/books/v1/volumes?q');
//     }

// }

function SearchBook(props) {
    const[searchBook, setSearchBook] = useState('');

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
      };

}

export default SearchBook;

// class searchBooks extends Component {
//     state = {
//         value: "",
//         books: []
//     };
    
//     componentDidMount () {
//         API.booksSaved()
//         .then(booksSaved => this.setState({ booksSaved: booksSaved }))
//         .catch(err => console.error(err));
//     };

//     book = bookInfo => {
//         return {
//             _id: bookInfo.id,
//             title: bookInfo.volumeInfo.title,
//             author: bookInfo.volumeInfo.author,
//             description: bookInfo.volumeInfo.description,
//             image: bookInfo.volumeInfo.image,
//             link: bookInfo.volumeInfo.link
//         };
//     };

//     searchBook = query => {
//         API.getBook(query)
//             .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
//             .catch(err => console.error(err));
//     };
// };


//saves book to database

//retrieves saved books from database

//deletes book from database