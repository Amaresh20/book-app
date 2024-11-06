import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BrowseBook from "./components/BrowseBook.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import BookDetails from "./components/BookDetails.jsx";
import CategoryBooks from "./components/CategoryBooks.jsx";
import Error from "./components/Error.jsx";
import AddBook from "./components/AddBook.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browsebook",
        element: <BrowseBook />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/books/:category",
        element: <CategoryBooks />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
