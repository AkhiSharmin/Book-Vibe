import React from "react";

const Book = ({ book }) => {
  const { bookName, author, image, rating } = book;
  return (
    <div className="card bg-gray-700 w-96 shadow-sm p-6">
      <figure className="bg-gray-400 py-8 rounded-2xl">
        <img className="h-[200px] w-[200px]" src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By: {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
