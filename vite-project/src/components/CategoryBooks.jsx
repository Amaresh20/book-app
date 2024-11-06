import { useParams } from "react-router-dom";
import BookItem from "./BookItem";
import { useState } from "react";
import { useSelector } from "react-redux";
function CategoryBooks() {
  const params = useParams();
  const books = useSelector((store) => store.book.book);
  const book = books.filter((book) => {
    return book.category.toLowerCase() === params.category.toLowerCase();
  });
  const [filteredBook, setFilteredBook] = useState(book);

  function handleBook(e) {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setFilteredBook(book);
    } else {
      const resultBooks = book.filter((item) => {
        return (
          item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.author.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      setFilteredBook(resultBooks);
    }
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold  my-3">Category:{params.category}</h1>
        <input
          className="border-2 border-black w-60 px-3 "
          type="text"
          placeholder="Enter The Book Name"
          onChange={(e) => handleBook(e)}
        />
      </div>
      <div className="flex justify-center items-center gap-3 my-5">
        {filteredBook.map((elem) => {
          return <BookItem key={elem.id} bookItem={elem} />;
        })}
      </div>
    </>
  );
}
export default CategoryBooks;
