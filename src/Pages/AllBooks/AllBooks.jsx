import { useState } from "react";
import Book from "./Book";

const AllBooks = () => {
  const [books, setBooks] = useState();

  fetch('http://localhost:4000/books')
    .then(res => res.json())
    .then(data => {
      setBooks(data);
    })
    console.log(books);

  return (
    <div>
      <h3 className="text-3xl">Your All Books Here: {books?.length}</h3>
      <div className="grid grid-cols-3 gap-5 my-20">
      {
       books?.map(book => <Book key={book._id} book={book}></Book>) 
      }
      </div>
    </div>
  );
};

export default AllBooks;