import React from "react";
import Navbar from "./Components/Navbar";
import BookContextProvider from "./Context/BooksContext";
import Booklist from "./Components/Booklist";
import BookForm from "./Components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
