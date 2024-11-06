import { Link } from "react-router-dom";
function BookItem(props) {
  const { author, category, description, imageUrl, rating, title, id } =
    props.bookItem;

  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white w-full h-full flex flex-col items-center leading-relaxed ">
      <img
        className="w-36 h-36 rounded-md object-cover mb-3"
        src={imageUrl}
        alt={title}
      />

      <p className="text-lg font-semibold text-center truncate w-full">
        {title}
      </p>
      <p className="text-sm text-gray-500 text-center truncate w-full">
        {category}
      </p>
      <p className="text-sm text-gray-700 text-center truncate w-full">
        By {author}
      </p>
      <Link className="border-2 " to={`/book/${id}`}>
        View Details
      </Link>
    </div>
  );
}
export default BookItem;
