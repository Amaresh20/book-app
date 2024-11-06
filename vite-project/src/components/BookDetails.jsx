import { useParams } from "react-router-dom";

import BookAllDetails from "./BookAllDetails";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((store) => store.book.book);
  const book = books.filter((book) => book.id == id);
  console.log("books", books);
  return (
    <>
      {book.map((elem) => {
        return <BookAllDetails key={elem.id} bookItem={elem} />;
      })}
    </>
  );
}
export default BookDetails;
