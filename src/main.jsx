import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import BookDetail from "./components/BookDetail/BookDetail";
import ListedBooks from "./components/ListedBooks/ListedBooks";

import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        //do not load all the books for one book.
        loader: () => fetch("../public/booksData.json"),
      },
      {
        path: "listedBooks",
        element: <ListedBooks></ListedBooks>,
        //worst way to load some data
        loader: () => fetch("../public/booksData.json"), //do not load all data for some
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
