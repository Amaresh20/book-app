import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Comedy"];
  const navigate = useNavigate();
  function handleCategory(category) {
    navigate(`/books/${category}`);
  }

  return (
    <div className=" my-9">
      <h1 className="text-center text-2xl font-bold">
        Welcome To Online Library System
      </h1>

      <div className="flex justify-center items-center my-5 space-x-4">
        {categories.map((category) => {
          return (
            <div
              key={category}
              onClick={() => handleCategory(category)}
              className="border-2 w-28 h-28 flex justify-center items-center text-xl bg-lime-500 hover:cursor-pointer"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
