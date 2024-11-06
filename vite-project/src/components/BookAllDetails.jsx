import { Link } from "react-router-dom";
function BookAllDetails(props) {
  const { imageUrl, title, author, category, description, rating } =
    props.bookItem;
  return (
    <>
      <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center space-y-3 bg-white">
        <img
          className="w-40 h-40 rounded-md object-cover"
          src={imageUrl}
          alt=""
        />

        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800 mb-1">{title}</p>
          <p className="text-sm text-gray-600 italic">By {author}</p>
          <p className="text-xs text-gray-500">Category: {category}</p>
        </div>

        <p className="text-sm text-gray-700 leading-tight line-clamp-3">
          {description}
        </p>

        <div className="mt-2">
          <span className="text-yellow-500 font-bold">{rating} ★</span>
        </div>
        <Link
          to="/browsebook"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        >
          Back to Browse
        </Link>
      </div>
    </>
  );
}
export default BookAllDetails;
