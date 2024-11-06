import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../utils/bookSlice";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !title ||
      !author ||
      !category ||
      !description ||
      rating <= 0 ||
      !imageUrl
    ) {
      alert(
        "All fields, including the image URL, are required and rating should be greater than 0."
      );
      return;
    }
    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
      description,
      rating,
      imageUrl,
    };
    dispatch(addBook(newBook));
    navigate("/browsebook");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md mx-auto p-6 space-y-4 bg-gray-100 shadow-lg rounded-lg my-5"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Add a New Book
      </h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-24"
      />

      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min="1"
        max="5"
        required
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {imageUrl && (
        <div className="flex justify-center my-4">
          <img
            src={imageUrl}
            alt="Book Cover Preview"
            className="w-32 h-32 object-cover rounded-md"
          />
        </div>
      )}

      <button
        type="submit"
        className="py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Add Book
      </button>
    </form>
  );
}

export default AddBook;
