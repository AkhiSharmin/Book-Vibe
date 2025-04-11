import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../utility/addToDb";
import { Helmet } from "react-helmet-async";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  //   console.log(typeof bookId, typeof id, typeof data[0].bookId);

  const book = data.find((book) => book.bookId === id);
  console.log(book);

  const {
    bookName,
    author,
    category,
    image,
    review,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
    tags,
  } = book;

  /**
   * 1. understand what to store or save : => bookId
   * 2. Where to store: database
   * 3. Array, List , Collection
   * 4. check: if the book is already in the readList
   * 5. if not, then add the book to the list
   * 6. if yes, do not added the book
   */

  const handleMarkAsRead = (id) => {
    addToStoreReadList(id);
  };

  return (
    <div>
      <Helmet>
        <title>Book Detail | {bookId}</title>
      </Helmet>
      <h2>Book Number: {bookId}</h2>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title italic text-5">{bookName}</h2>
          <p>By: {author}</p>
          <hr />
          <p>{category}</p>
          <hr />
          <p>
            {" "}
            <span className="font-bold">Review: </span>
            <small>{review}</small>
          </p>
          <p>
            Tag: <span className="text-green-500 font-bold">#{tags}</span>
          </p>
          <hr />
          <p>
            <span>Number of Pages: {totalPages}</span>
          </p>
          <p>Publisher: {publisher}</p>
          <p>Year of Publishing: {yearOfPublishing}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline mr-2 btn-primary"
            >
              Mark as Read
            </button>
            <button className="btn btn-primary">Add to WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
