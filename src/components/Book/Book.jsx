import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-gray-700 w-96 shadow-sm p-6">
        <figure className="bg-gray-400 py-8 rounded-2xl">
          <img className="h-[200px] w-[200px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-200 text-green-500 fw-bold px-6 py-4"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed my-4"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              {rating}
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
