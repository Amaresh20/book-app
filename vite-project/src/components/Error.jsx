import { Link, useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-red-500 mb-2">
        Error {err.status}
      </h1>
      <p className="text-gray-700 mb-4">
        {err.data || "Something went wrong."}
      </p>
      <Link to="/" className="text-blue-500 underline">
        Go Back to Home Page
      </Link>
    </div>
  );
}
export default Error;
