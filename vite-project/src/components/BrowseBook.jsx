import { useEffect, useState } from "react";
import { books } from "../utils/mockData";
import BookItem from "./BookItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBook() {
  const [input, setInput] = useState("");
  const [book, setBook] = useState([]);
  const books = useSelector((store) => store.book.book);
  useEffect(() => {
    setBook(books);
  }, [books]);
  function handleBook(e) {
    const inputValue = e.target.value;
    setInput(inputValue);
    if (inputValue === "") {
      setBook(books);
    } else {
      const filteredBook = books.filter((book) => {
        return (
          book.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          book.author.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      setBook(filteredBook);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center my-3">
      <div>
        <input
          className="border-2 border-black w-60 px-3"
          type="text"
          placeholder="Enter The Book Name"
          onChange={(e) => handleBook(e)}
        />
      </div>
      <div className="grid grid-cols-4 gap-3 w-3/4 m-auto my-4">
        {book.map((book) => {
          return <BookItem key={book.id} bookItem={book} />;
        })}
      </div>
    </div>
  );
}
export default BrowseBook;
