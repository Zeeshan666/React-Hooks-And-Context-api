import React, { createContext, useReducer } from "react";
import BookReducers from "../Reducers/BookReducers";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  // const [books, dispatch] = useReducer([
  //   { title: "name of the wind", author: "patrick rothfuss", id: 1 },
  //   { title: "the final empire", author: "brandon sanderson", id: 2 }
  // ]);
  //const [books, dispatch] = useReducer([BookReducers, []]);
  const [books, dispatch] = useReducer(BookReducers, [
    { title: "name of the wind", author: "patrick rothfuss", id: 1 },
    { title: "the final empire", author: "brandon sanderson", id: 2 }
  ]);
  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };
  // const removeBook = id => {
  //   setBooks(books.filter(book => book.id !== id));
  // };

  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
