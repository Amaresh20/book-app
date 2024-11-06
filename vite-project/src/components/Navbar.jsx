import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" flex justify-between px-8  bg-blue-800 items-center">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/008/147/482/small/modern-bookstore-logo-design-illustration-vector.jpg"
          alt=""
          className="w-20 h-20 hover:scale-110 rounded-full"
        />
      </div>
      <ul className=" flex justify-center space-x-32 text-xl font-boldpy-4">
        <li className="hover:scale-110 hover:transition-all text-orange-400 hover:text-orange-600">
          <Link to="/"> Home</Link>
        </li>
        <li className="hover:scale-110 hover:transition-all text-orange-400  hover:text-orange-600 ">
          <Link to="/browsebook"> Browse Books</Link>
        </li>
        <li className="hover:scale-110 hover:transition-all text-orange-400  hover:text-orange-600">
          <Link to="/addbook">Add Book</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
