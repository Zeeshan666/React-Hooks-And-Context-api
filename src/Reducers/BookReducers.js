/* eslint-disable default-case */
import uuid from "uuid/v1";
const BookReducers = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.Book.title,
          author: action.Book.author,
          id: uuid()
        }
      ];
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default BookReducers;
